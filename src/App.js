import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeMin: 25,
      timeSec: 0,
      isPlaying: false,
      isBreak: false
    }
    this.onSIClick = this.onSIClick.bind(this);
    this.onSDClick = this.onSDClick.bind(this);
    this.onBIClick = this.onBIClick.bind(this);
    this.onBDClick = this.onBDClick.bind(this);
    this.onPPClick = this.onPPClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }

  onSIClick(){
    if(this.state.sessionLength + 1 <= 60){
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timeMin: this.state.sessionLength + 1
      });
    }
  }
  onSDClick(){
    if(this.state.sessionLength - 1 > 0){
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timeMin: this.state.sessionLength - 1
      });
    }
  }
  onBIClick(){
    if(this.state.breakLength + 1 <= 60){
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  onBDClick(){
    if(this.state.breakLength - 1 > 0){
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  onPPClick(){
    this.setState({isPlaying: !this.state.isPlaying}, () =>{
      if(this.state.isPlaying){
        this.interval = setInterval(() => {
          if (this.state.timeSec >= 0) {
            this.setState((state) => ({
              timeSec: state.timeSec - 1
            }))
          }
          if (this.state.timeSec === -1) {
            if (this.state.timeMin === 0) {
              if(!this.state.isBreak){
                document.getElementById("beep").play();
                this.setState({
                  timeMin: this.state.breakLength,
                  timeSec: 0,
                  isBreak: true
                });
              }else{
                document.getElementById("beep").play();
                this.setState({
                  timeMin: this.state.sessionLength,
                  timeSec: 0,
                  isBreak: false
                });
              }
            } else {
              this.setState((state) => ({
                timeMin: state.timeMin - 1,
                timeSec: 59
              }))
            }
          }
        }, 1000)
      }else{
        clearInterval(this.interval);
      }
    });
  }

  onResetClick(){
    document.getElementById("beep").pause();
    document.getElementById("beep").load();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timeMin: 25,
      timeSec: 0,
      isPlaying: false,
      isBreak: false
    });
    clearInterval(this.interval);
  }

  render(){
    return(
      <div>
        <h1 className="display-3 text-center">25+5 Clock</h1>
        <div id="main">
          <div id="timeset">
            <div id="session-timeset">
              <h4 id="session-label">Session Length</h4>
              <div id="session-increment" className="arrow-btn" onClick={this.onSIClick}><i className="fas fa-arrow-circle-up"></i></div>
              <h2 id="session-length" className="length-display">{this.state.sessionLength}</h2>
              <div id="session-decrement" className="arrow-btn" onClick={this.onSDClick}><i className="fas fa-arrow-circle-down"></i></div>
            </div>
            <div id="break-timeset">
              <h4 id="break-label">Break Length</h4>
              <div id="break-increment" className="arrow-btn" onClick={this.onBIClick}><i className="fas fa-arrow-circle-up"></i></div>
              <h2 id="break-length" className="length-display">{this.state.breakLength}</h2>
              <div id="break-decrement" className="arrow-btn" onClick={this.onBDClick}><i className="fas fa-arrow-circle-down"></i></div>
            </div>
          </div>

          <div id="timer">
            <h2 id="timer-label">{!this.state.isBreak ? "Session" : "Break"}:</h2>
            <h1 id="time-left">{this.state.timeMin<10 ? '0' + this.state.timeMin : this.state.timeMin}:{this.state.timeSec<10 ? '0' + this.state.timeSec : this.state.timeSec}</h1>
            <button id="start_stop" className="btn btn-primary" onClick={this.onPPClick}>{this.state.isPlaying? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
            <button id="reset" className="btn btn-primary" onClick={this.onResetClick}><i className="fas fa-undo-alt"></i></button>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
