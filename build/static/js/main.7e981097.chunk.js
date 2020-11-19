(this["webpackJsonptic-tac-toe-react"]=this["webpackJsonptic-tac-toe-react"]||[]).push([[0],{24:function(e,t,n){e.exports=n(43)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),s=n.n(c),i=(n(29),n(3)),o=n(4),u=n(6),l=n(5),m=(n(30),n(16)),p=n(1),d=n(11),h=n.n(d),b=n(14),f=n(9),v=(n(32),n(33),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("input",{onClick:this.props.onClick,type:"button",className:"btnRst",value:this.props.value})}}]),n}(a.Component)),k={save:function(e){return Object(b.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,JSON.stringify(e);case 3:return e=t.sent,t.next=6,localStorage.setItem("game_data",e);case 6:return t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},generateData:function(e,t,n){return{maxRounds:e,roundNumber:1,gameover:!1,p1:{nickname:t,score:0},p2:{nickname:n,score:0}}},nextRound:function(e){var t=this.load(),n={p1:{nickname:t.p1.nickname,score:1===e.winner.player?++t.p1.score:t.p1.score},p2:{nickname:t.p2.nickname,score:2===e.winner.player?++t.p2.score:t.p2.score}};return Math.trunc(t.maxRounds/2)<n.p1.score||Math.trunc(t.maxRounds/2)<n.p2.score?{winner:n.p1.score>n.p2.score?1:2,p1:n.p1,p2:n.p2,gameover:!0}:{maxRounds:t.maxRounds,roundNumber:++e.roundNumber,gameover:!1,p1:n.p1,p2:n.p2}},load:function(){return JSON.parse(localStorage.getItem("game_data"))}},g={themes_data:{dark:{title:"COVID19 Orange Theme Game",bgc:"#ff7f50",hover:"#374757",border:"#25323f",textColor:"#fff"},blue:{title:"COVID19 Pink Theme Game",bgc:"#ff69b4",hover:"#4981b9",border:"#0c59a7",textColor:"#fff"}},getStyle:function(e,t){return window.getComputedStyle(e).getPropertyValue("--"+t)},loadThemes:function(){var e=localStorage.getItem("theme"),t=e?JSON.parse(e):this.themes_data.dark;this.setTheme(t)},setTheme:function(e){var t=document.querySelector("html");t.style.setProperty("--bgc",e.bgc),t.style.setProperty("--hover",e.hover),t.style.setProperty("--border",e.border),t.style.setProperty("--text-color",e.textColor),this.save(e)},save:function(e){localStorage.setItem("theme",JSON.stringify(e))}},y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={maxRounds:1,redirect:!1,nicknameP1:"Player 1",nicknameP2:"Player 2",inputP1:"",inputP2:""},a.setRounds=a.setRounds.bind(Object(f.a)(a)),a.changeTheme=a.changeTheme.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"setRounds",value:function(e){this.setState({maxRounds:e})}},{key:"start",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.maxRounds,n=this.state.nicknameP1,a=this.state.nicknameP2,e.next=5,k.generateData(t,n,a);case 5:return r=e.sent,e.next=8,k.save(r);case 8:this.setState({redirect:!0});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=localStorage.getItem("game_data")?k.load():{p1:{},p2:{}},t={};e.p1.nickname&&"Player 1"!==e.p1.nickname&&(t.nicknameP1=e.p1.nickname,t.inputP1=e.p1.nickname),e.p2.nickname&&"Player 2"!==e.p2.nickname&&(t.nicknameP2=e.p2.nickname,t.inputP2=e.p2.nickname),e.maxRounds&&(t.maxRounds=e.maxRounds),this.setState(t),localStorage.removeItem("game_data"),g.loadThemes()}},{key:"changeTheme",value:function(e){switch(e){case 0:g.setTheme(g.themes_data.dark);break;case 1:g.setTheme(g.themes_data.blue);break;default:g.setTheme(g.themes_data.dark)}}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(p.a,{to:"/ticTacToe"}):r.a.createElement("div",{className:"GameSettings"},r.a.createElement("div",{className:"themesSets"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return e.changeTheme(0)},value:g.themes_data.dark.title})),r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return e.changeTheme(1)},value:g.themes_data.blue.title})))),r.a.createElement("div",{className:"rounds"},r.a.createElement("h1",null,"Rounds: "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return e.setRounds(1)},value:"1"})),r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return e.setRounds(3)},value:"3"})),r.a.createElement("li",null,r.a.createElement(v,{onClick:function(){return e.setRounds(5)},value:"5"})))),r.a.createElement("div",{className:"players"},r.a.createElement("div",null,r.a.createElement("h1",null,"Player 1: "),r.a.createElement("input",{type:"text",placeholder:"Name...",className:"inputNickname",onChange:function(t){return e.setState({inputP1:t.target.value,nicknameP1:t.target.value})},value:this.state.inputP1})),r.a.createElement("div",null,r.a.createElement("h1",null,"Player 2: "),r.a.createElement("input",{type:"text",placeholder:"Name...",className:"inputNickname",onChange:function(t){return e.setState({inputP2:t.target.value,nicknameP2:t.target.value})},value:this.state.inputP2}))),r.a.createElement("div",null,r.a.createElement(v,{onClick:function(){return e.start()},value:"Start!"})))}}]),n}(a.Component),x=n(12),E=n.n(x),O=(n(39),n(40),n(41),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"board"},this.props.children)}}]),n}(a.Component)),j=(n(42),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"field",onClick:this.props.click},this.props.children)}}]),n}(a.Component)),_=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={game:{p1:{nickname:""},p2:{nickname:""}},board:["","","","","","","","",""],symbols:{options:[r.a.createElement("img",{src:"https://i.ibb.co/XpmLL35/COVIDTEMP.jpg",alt:"COVIDTEMP",border:"0",img:!0}),r.a.createElement("img",{src:"https://i.ibb.co/vx56BDr/covidimag.jpg",alt:"covidimag",border:"0",img:!0})],turn_index:Math.round(Math.random(0,1)),change:function(){this.turn_index=0===this.turn_index?1:0}},winning_sequences:[[1,0,2],[4,3,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],gameover:!1,redirect:!1},a.make_play=a.make_play.bind(Object(f.a)(a)),a.check_winning_sequences=a.check_winning_sequences.bind(Object(f.a)(a)),a.check_tied=a.check_tied.bind(Object(f.a)(a)),a.alert=a.alert.bind(Object(f.a)(a)),a.scoreBoard=a.scoreBoard.bind(Object(f.a)(a)),a.start=a.start.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=k.load();this.setState({game:e}),g.loadThemes()}},{key:"make_play",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var n,a,c,s,i,o,u,l=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.gameover){e.next=2;break}return e.abrupt("return",!1);case 2:if(""!==this.state.board[t]){e.next=27;break}if((n=this.state.board)[t]=this.state.symbols.options[this.state.symbols.turn_index],this.setState({board:n}),!(this.check_winning_sequences(this.state.symbols.options[this.state.symbols.turn_index])>=0)){e.next=22;break}if(this.setState({gameover:!0}),a=this.state,c={roundNumber:a.game.roundNumber,winner:{player:a.symbols.options[a.symbols.turn_index]===r.a.createElement("img",{src:"https://i.ibb.co/XpmLL35/COVIDTEMP.jpg",alt:"COVIDTEMP",border:"0",img:!0})?1:2}},!0!==(s=k.nextRound(c)).gameover){e.next=17;break}i={title:"Winner: ".concat(1===s.winner?s.p1.nickname:s.p2.nickname),text:"\n                        <strong>".concat(this.state.game.p1.nickname,"</strong>: ").concat(s.p1.score,"<br>\n                        <strong>").concat(this.state.game.p2.nickname,"</strong>: ").concat(s.p2.score,"<br><br>\n\n                        Settings?\n                        \n                        "),icon:"success",confirmText:"Yes!",confirmValue:function(){return l.setState({redirect:!0})},canceledValue:function(){}},setTimeout((function(){return l.alert(i)}),150),e.next=20;break;case 17:return e.next=19,k.save(s);case 19:E.a.fire({title:"Next round",html:"Next round in <b></b> milliseconds.",timer:700,timerProgressBar:!0,onBeforeOpen:function(){E.a.showLoading(),o=setInterval((function(){var e=E.a.getContent();if(e){var t=e.querySelector("b");t&&(t.textContent=E.a.getTimerLeft())}}),100)},onClose:function(){clearInterval(o),l.start()}}).then((function(e){e.dismiss,E.a.DismissReason.timer}));case 20:e.next=24;break;case 22:this.state.symbols.change(),this.check_tied()&&(this.setState({gameover:!0}),u={title:"We Tied",text:"Restart?",icon:"info",confirmText:"Yes!",cancelText:"No!",confirmValue:function(){},canceledValue:function(){}},setTimeout((function(){return l.alert(u)}),150));case 24:return e.abrupt("return",!0);case 27:return e.abrupt("return",!1);case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"check_winning_sequences",value:function(e){var t=this,n=-1;return this.state.winning_sequences.map((function(a,r){t.state.board[t.state.winning_sequences[r][0]]===e&&t.state.board[t.state.winning_sequences[r][1]]===e&&t.state.board[t.state.winning_sequences[r][2]]===e&&(n=r)})),n}},{key:"check_tied",value:function(){var e=this,t=!0;return this.state.board.map((function(n,a){""===e.state.board[a]&&(t=!1)})),t}},{key:"alert",value:function(e){var t=this;E.a.mixin({customClass:{confirmButton:"btn btn-success confirmBtn",cancelButton:"btn btn-secondary cancelBtn"},buttonsStyling:!1}).fire({title:e.title,html:e.text,icon:e.icon,showCancelButton:!!e.cancelText,confirmButtonText:e.confirmText,cancelButtonText:e.cancelText,reverseButtons:!0}).then((function(n){n.value?(t.start(),e.confirmValue()):n.dismiss===E.a.DismissReason.cancel&&e.canceledValue()}))}},{key:"scoreBoard",value:function(){var e=k.load();alert("\n            ".concat(e.p1.nickname,": ").concat(e.p1.score,"\n            ").concat(e.p2.nickname,": ").concat(e.p2.score,"\n        "))}},{key:"start",value:function(){var e=this.state.symbols,t=this.state.board;e.turn_index=Math.round(Math.random(0,1)),t.fill(""),this.setState({symbols:e,board:t,gameover:!1})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"Game"},r.a.createElement("h1",{className:"player"},"Turn: ",this.state.symbols.options[this.state.symbols.turn_index]===r.a.createElement("img",{src:"https://i.ibb.co/XpmLL35/COVIDTEMP.jpg",alt:"COVIDTEMP",border:"0",img:!0})?this.state.game.p2.nickname:this.state.game.p1.nickname," (",this.state.symbols.options[this.state.symbols.turn_index],")"),r.a.createElement(O,null,this.state.board.map((function(t,n){return r.a.createElement(j,{key:n,click:function(){return e.make_play(n)}},t)}))),r.a.createElement("div",{className:"buttons"},r.a.createElement(m.b,{to:"/"},r.a.createElement(v,{value:"Settings"})),r.a.createElement(v,{onClick:function(){return e.scoreBoard()},value:"Score Board"}),r.a.createElement(v,{onClick:function(){return e.start()},value:"Restart"})))}}]),n}(a.Component),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:y}),r.a.createElement(p.b,{path:"/ticTacToe",component:_})))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(T,null)}}]),n}(a.Component);s.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.7e981097.chunk.js.map