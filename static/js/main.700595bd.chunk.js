(this["webpackJsonp25-5-clock"]=this["webpackJsonp25-5-clock"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),a=i(4),c=i.n(a),l=(i(13),i(5)),r=i(6),o=i(1),h=i(8),b=i(7),d=(i(14),i(0)),j=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(e){var s;return Object(l.a)(this,i),(s=t.call(this,e)).state={breakLength:5,sessionLength:25,timeMin:25,timeSec:0,isPlaying:!1,isBreak:!1},s.onSIClick=s.onSIClick.bind(Object(o.a)(s)),s.onSDClick=s.onSDClick.bind(Object(o.a)(s)),s.onBIClick=s.onBIClick.bind(Object(o.a)(s)),s.onBDClick=s.onBDClick.bind(Object(o.a)(s)),s.onPPClick=s.onPPClick.bind(Object(o.a)(s)),s.onResetClick=s.onResetClick.bind(Object(o.a)(s)),s}return Object(r.a)(i,[{key:"onSIClick",value:function(){this.state.sessionLength+1<=60&&this.setState({sessionLength:this.state.sessionLength+1,timeMin:this.state.sessionLength+1})}},{key:"onSDClick",value:function(){this.state.sessionLength-1>0&&this.setState({sessionLength:this.state.sessionLength-1,timeMin:this.state.sessionLength-1})}},{key:"onBIClick",value:function(){this.state.breakLength+1<=60&&this.setState({breakLength:this.state.breakLength+1})}},{key:"onBDClick",value:function(){this.state.breakLength-1>0&&this.setState({breakLength:this.state.breakLength-1})}},{key:"onPPClick",value:function(){var e=this;this.setState({isPlaying:!this.state.isPlaying},(function(){e.state.isPlaying?e.interval=setInterval((function(){e.state.timeSec>=0&&e.setState((function(e){return{timeSec:e.timeSec-1}})),-1===e.state.timeSec&&(0===e.state.timeMin?e.state.isBreak?(document.getElementById("beep").play(),e.setState({timeMin:e.state.sessionLength,timeSec:0,isBreak:!1})):(document.getElementById("beep").play(),e.setState({timeMin:e.state.breakLength,timeSec:0,isBreak:!0})):e.setState((function(e){return{timeMin:e.timeMin-1,timeSec:59}})))}),1e3):clearInterval(e.interval)}))}},{key:"onResetClick",value:function(){document.getElementById("beep").pause(),document.getElementById("beep").load(),this.setState({breakLength:5,sessionLength:25,timeMin:25,timeSec:0,isPlaying:!1,isBreak:!1}),clearInterval(this.interval)}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"display-3 text-center",children:"25+5 Clock"}),Object(d.jsxs)("div",{id:"main",children:[Object(d.jsxs)("div",{id:"timeset",children:[Object(d.jsxs)("div",{id:"session-timeset",children:[Object(d.jsx)("h4",{id:"session-label",children:"Session Length"}),Object(d.jsx)("div",{id:"session-increment",className:"arrow-btn",onClick:this.onSIClick,children:Object(d.jsx)("i",{className:"fas fa-arrow-circle-up"})}),Object(d.jsx)("h2",{id:"session-length",className:"length-display",children:this.state.sessionLength}),Object(d.jsx)("div",{id:"session-decrement",className:"arrow-btn",onClick:this.onSDClick,children:Object(d.jsx)("i",{className:"fas fa-arrow-circle-down"})})]}),Object(d.jsxs)("div",{id:"break-timeset",children:[Object(d.jsx)("h4",{id:"break-label",children:"Break Length"}),Object(d.jsx)("div",{id:"break-increment",className:"arrow-btn",onClick:this.onBIClick,children:Object(d.jsx)("i",{className:"fas fa-arrow-circle-up"})}),Object(d.jsx)("h2",{id:"break-length",className:"length-display",children:this.state.breakLength}),Object(d.jsx)("div",{id:"break-decrement",className:"arrow-btn",onClick:this.onBDClick,children:Object(d.jsx)("i",{className:"fas fa-arrow-circle-down"})})]})]}),Object(d.jsxs)("div",{id:"timer",children:[Object(d.jsxs)("h2",{id:"timer-label",children:[this.state.isBreak?"Break":"Session",":"]}),Object(d.jsxs)("h1",{id:"time-left",children:[this.state.timeMin<10?"0"+this.state.timeMin:this.state.timeMin,":",this.state.timeSec<10?"0"+this.state.timeSec:this.state.timeSec]}),Object(d.jsx)("button",{id:"start_stop",className:"btn btn-primary",onClick:this.onPPClick,children:this.state.isPlaying?Object(d.jsx)("i",{className:"fas fa-pause"}):Object(d.jsx)("i",{className:"fas fa-play"})}),Object(d.jsx)("button",{id:"reset",className:"btn btn-primary",onClick:this.onResetClick,children:Object(d.jsx)("i",{className:"fas fa-undo-alt"})}),Object(d.jsx)("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})]})]})}}]),i}(s.Component),m=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.700595bd.chunk.js.map