(this["webpackJsonpgeisterfurz007.github.io"]=this["webpackJsonpgeisterfurz007.github.io"]||[]).push([[0],{16:function(t,e,n){t.exports=n(24)},21:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var o,i,r,a,c,u,s,l,p,h,d,f,m,b=n(0),y=n.n(b),g=n(13),v=n.n(g),O=(n(21),n(5)),k=n(4),w=n(6),j=n(9),P=n(8),E=(n(22),n(1)),x=n(14),D=n(7),L=n(3),I=(n(12),function(){function t(e,n,o){Object(O.a)(this,t),this.content=void 0,this.hasPrompt=void 0,this.acceptsInput=void 0,this.content=e,this.hasPrompt=n,this.acceptsInput=o}return Object(k.a)(t,null,[{key:"out",value:function(e){return new t(e,!1,!1)}}]),Object(k.a)(t,[{key:"toString",value:function(){return this.content}}]),t}()),C=(o=E.f.bound,i=E.f.bound,r=E.f.bound,a=E.f.bound,c=function(){function t(){Object(O.a)(this,t),Object(D.a)(this,"lines",u,this)}return Object(k.a)(t,[{key:"addLine",value:function(t){this.lines.push(t)}},{key:"updatePrompt",value:function(t){this.lines[this.lines.length-1]=new I(t,!0,!1)}},{key:"markOutputDone",value:function(){this.addLine(I.out("")),this.addLine(new I("",!0,!0))}},{key:"clear",value:function(){this.lines.length=0}}]),t}(),u=Object(L.a)(c.prototype,"lines",[E.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[new I("Welcome to geisterfurz007.github.io!",!1,!1),new I("Feel free to have a look around, there isn't a lot here yet but you might find a thing or two.",!1,!1),new I("",!0,!0)]}}),Object(L.a)(c.prototype,"addLine",[o],Object.getOwnPropertyDescriptor(c.prototype,"addLine"),c.prototype),Object(L.a)(c.prototype,"updatePrompt",[i],Object.getOwnPropertyDescriptor(c.prototype,"updatePrompt"),c.prototype),Object(L.a)(c.prototype,"markOutputDone",[r],Object.getOwnPropertyDescriptor(c.prototype,"markOutputDone"),c.prototype),Object(L.a)(c.prototype,"clear",[a],Object.getOwnPropertyDescriptor(c.prototype,"clear"),c.prototype),c),A=(s=E.f.bound,l=E.f.bound,p=E.f.bound,h=function(){function t(){Object(O.a)(this,t),Object(D.a)(this,"history",d,this),Object(D.a)(this,"currentIndex",f,this)}return Object(k.a)(t,[{key:"addEntry",value:function(t){this.history.push(t)}},{key:"goBackAndGetPrevious",value:function(){return 0===this.history.length?"":(this.currentIndex=this.currentIndex<1?0:this.currentIndex-1,this.history[this.currentIndex])}},{key:"goForwardAndGetNext",value:function(){return 0===this.history.length?"":(this.currentIndex=(this.currentIndex+1)%this.history.length,this.history[this.currentIndex])}}]),t}(),d=Object(L.a)(h.prototype,"history",[E.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=Object(L.a)(h.prototype,"currentIndex",[E.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(L.a)(h.prototype,"addEntry",[s],Object.getOwnPropertyDescriptor(h.prototype,"addEntry"),h.prototype),Object(L.a)(h.prototype,"goBackAndGetPrevious",[l],Object.getOwnPropertyDescriptor(h.prototype,"goBackAndGetPrevious"),h.prototype),Object(L.a)(h.prototype,"goForwardAndGetNext",[p],Object.getOwnPropertyDescriptor(h.prototype,"goForwardAndGetNext"),h.prototype),h),S=new C,G=new A,W={action:function(){S.clear()},description:"Clears the console",name:"clear"},z={action:function(){["This is my personal github page! Because I am not really good at designing things, a friend of mine suggested to put together a commandline","and the result is exactly what you are seeing here! This website is still a work in progress and there will be more commands in the future.","Thanks for passing by and playing around with this!"].map(I.out).forEach(S.addLine)},description:"Shows information about this page",name:"about"},B=n(15),N={about:z,clear:W,email:{action:function(){["The first part of this domain at google's mail server","(if you are not a bot, you should be able to piece that one together)"].map(I.out).forEach(S.addLine)},description:"Shows my mail address (please don't spam...)",name:"email"},help:{action:function(){var t=Object.values(N).map((function(t){return"".concat(t.name,": ").concat(t.description)}));["Available commands:"].concat(Object(B.a)(t)).map(I.out).forEach(S.addLine)},description:"Shows this help",name:"help"},github:{action:function(){S.addLine(I.out("https://github.com/geisterfurz007"))},description:"Shows a link to my github profile",name:"github"},stackoverflow:{action:function(){S.addLine(I.out("https://stackoverflow.com/users/6707985"))},description:"Shows a link to my Stack Overflow profile",name:"stackoverflow"}},T=function(t){Object(j.a)(n,t);var e=Object(P.a)(n);function n(t){var o;return Object(O.a)(this,n),(o=e.call(this,t)).input=void 0,o.keyHandler=o.keyHandler.bind(Object(w.a)(o)),o.handleCommand=o.handleCommand.bind(Object(w.a)(o)),o}return Object(k.a)(n,[{key:"render",value:function(){var t=this;return y.a.createElement("input",{ref:function(e){t.input=e},autoFocus:!0,className:"prompt",onKeyDown:this.keyHandler})}},{key:"keyHandler",value:function(t){if("Enter"===t.key){var e=t.target.value;S.updatePrompt(e),t.preventDefault(),this.handleCommand(e),S.markOutputDone(),G.addEntry(e),t.target.value=""}else if("Tab"===t.key){t.preventDefault();var n=t.target.value;if(n.length<2)return;var o=Object.keys(N).filter((function(t){return t.startsWith(n)}))[0];if(void 0===o)return;t.target.value=o}else"ArrowUp"===t.key?t.target.value=G.goBackAndGetPrevious():"ArrowDown"===t.key&&(t.target.value=G.goForwardAndGetNext())}},{key:"handleCommand",value:function(t){var e=t.split(" "),n=e.shift();if(void 0!==n){var o=e.join(" "),i=N[n];if(void 0!==i&&null!==i)(0,i.action)(o);else S.addLine(new I('Could not find command "'.concat(n,'".'),!1,!1))}}},{key:"focus",value:function(){this.input&&this.input.focus()}}]),n}(y.a.Component);Object(E.g)({enforceActions:"observed"});var F=Object(x.a)(m=function(t){Object(j.a)(n,t);var e=Object(P.a)(n);function n(t){var o,i=this;return Object(O.a)(this,n),(o=e.call(this,t)).inputRef=void 0,o.lineToHtml=function(t,e){return t.hasPrompt?y.a.createElement(i.LineWithPrompt,{key:e.toString(),line:t}):y.a.createElement(i.LineWithoutPrompt,{key:e.toString(),line:t})},o.LineWithoutPrompt=function(t){var e=t.line;return y.a.createElement("p",null,e.toString())},o.LineWithPrompt=function(t){var e=t.line;return y.a.createElement("div",{className:"prompt-container"},y.a.createElement("p",null,window.location.toString()+">"+e),e.acceptsInput?y.a.createElement(T,{ref:function(t){o.inputRef=t}}):null)},o.consoleClick=o.consoleClick.bind(Object(w.a)(o)),o}return Object(k.a)(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"console",onClick:this.consoleClick},S.lines.map(this.lineToHtml))}},{key:"consoleClick",value:function(){this.inputRef&&this.inputRef.focus()}}]),n}(y.a.Component))||m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.render(y.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.c2fa0ed2.chunk.js.map