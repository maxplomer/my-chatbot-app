(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports=a(20)},16:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(5),s=a.n(r),i=(a(16),a(2)),c=a(3),l=a(8),u=a(6),h=a(9),m=a(1),p=a(7),d=a.n(p),b=(a(18),function(){function t(){Object(i.a)(this,t)}return Object(c.a)(t,[{key:"talk",value:function(){return{botMessage:"this is the bot message 5678 \ud83e\udd16",action:null}}}]),t}()),f=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={date:new Date,messages:[{author:"bot",text:"helloworld1234 \ud83e\udd16"},{author:"user",text:"helloworld5678"},{author:"bot",text:"helloworld9012 \ud83e\udd16"}]},a.textInput=o.a.createRef(),a.submitChatForm=a.submitChatForm.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.Chatbot=new b}},{key:"submitChatForm",value:function(t){t.preventDefault();var e=this.state.messages,a=this.textInput.current.value;this.textInput.current.value="",e.push({author:"user",text:a}),this.setState({messages:e});var n=this.Chatbot.talk(a);switch(n.action){case"showContactForm":case"showCreateProjectForm":case"showPortfolioSlideshow":break;default:e.push({author:"bot",text:n.botMessage}),this.setState({messages:e})}}},{key:"render",value:function(){var t={padding:"5px 10px"};return o.a.createElement("div",{className:"App"},this.state.date.toString(),this.state.messages.map(function(e,a){return o.a.createElement("div",{key:a,className:e.author,style:t},o.a.createElement("span",null,e.text))}),o.a.createElement("form",{onSubmit:this.submitChatForm},o.a.createElement("input",{type:"text",ref:this.textInput,required:!0,style:{width:"50%",padding:"5px",margin:"20px 0"}}),o.a.createElement("button",{type:"submit",style:{padding:"5px 10px",marginLeft:"10px",cursor:"pointer"}},"Send")),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Max Plomer Chatbot App"),o.a.createElement("a",{className:"App-link",href:"https://maxplomer.github.io",target:"_blank",rel:"noopener noreferrer"},"Portfolio")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.a133a815.chunk.js.map