(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),i=(a(20),a(3)),o=a(4),s=a(6),u=a(5),m=a(7),d=(a(21),a(10));var p=function(e){return c.a.createElement("div",{class:"loader "+(e.isLoading?"":"hide")},c.a.createElement("div",{class:"spinner"}))},h=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),alert("Hii")}},{key:"render",value:function(){return c.a.createElement("div",{class:"popup "+(this.props.isOpen?"popup--open":"")},c.a.createElement("div",{class:"popup__header"},c.a.createElement("div",{title:"Close",class:"close layout--center",onClick:this.props.onclick},"X")),c.a.createElement("div",{class:"popup__body layout--center"},c.a.createElement("div",{class:"popup__body-inner"},c.a.createElement("div",{class:"form"},c.a.createElement("div",{class:"form__title"},"JOIN ",c.a.createElement("span",{class:"highlight"},"#"),"DEVRANT"),c.a.createElement("div",{class:"form__description"},"Vote and comment on others' rants. Post your own."),c.a.createElement("form",{name:"login",onSubmit:this.handleSubmit},c.a.createElement("div",{class:"login"},c.a.createElement("input",{type:"text",placeholder:"USERNAME",ref:function(e){return e&&e.focus()}}),c.a.createElement("input",{type:"password",placeholder:"PASSWORD"}),c.a.createElement(p,{isLoading:!1}),c.a.createElement("div",{class:"form__error"},"Some fields are missing !"),c.a.createElement("input",{type:"submit",value:"LET ME IN"})))))))}}]),t}(c.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isToggleOn:!1},a.handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})}},{key:"render",value:function(){return c.a.createElement("section",{class:"header layout--center"},c.a.createElement("div",{class:"header__content layout--wrapped"},c.a.createElement("div",{class:"brand"},c.a.createElement("a",{href:"/"},c.a.createElement("div",{class:"brand__name"},c.a.createElement("span",null,"#"),"DEVRANT"))),c.a.createElement("div",{class:"profile layout--center hide"},c.a.createElement("div",{class:"profile__picture"},c.a.createElement("svg",{height:"36",width:"36"},c.a.createElement("circle",{cx:"18",cy:"18",r:"18",fill:"#5c5f6f"}))),c.a.createElement("div",{class:"profile__name"},"Elon")),c.a.createElement("div",{class:"join"},c.a.createElement("span",{onClick:this.handleClick},"Join"),c.a.createElement("span",null,"Sign Out")),c.a.createElement(h,{isOpen:!!this.state.isToggleOn,onclick:this.handleClick})))}}]),t}(c.a.Component),v=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{class:"main layout--center"},c.a.createElement("div",{class:"main__content layout--wrapped"},c.a.createElement(p,{isLoading:!1}),this.props.children))}}]),t}(c.a.Component),b=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"post-list"},this.props.children,c.a.createElement("div",{class:"rant__add",title:"Add Rant"},"+"))}}]),t}(c.a.Component),f=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("article",{class:"post"},c.a.createElement("div",{class:"post__inner"},c.a.createElement("div",{class:"score"},c.a.createElement("div",{class:"score__up layout--center"},"++"),c.a.createElement("div",{class:"score__board layout--center"},"100"),c.a.createElement("div",{class:"score__down layout--center"},"--")),c.a.createElement("div",{class:"post__body"},"Hello World... ")),c.a.createElement("div",{class:"post__footer"},c.a.createElement("div",{class:"post__time"},"2m ago"),c.a.createElement("div",{class:"post__comments"},c.a.createElement("svg",{class:"icon",viewBox:"0 0 31 32"},c.a.createElement("path",{d:"M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781  0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657  8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0  3.922-2.61 7.23-6.186 8.294z"})),"23")))}}]),t}(c.a.Component),O=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(v,{isLoading:!1},c.a.createElement(b,null,c.a.createElement(f,null),c.a.createElement(f,null)))}}]),t}(c.a.Component),j=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.params;return c.a.createElement(v,{isLoading:!1},c.a.createElement(b,null,c.a.createElement("h1",null,e.rant_id)))}}]),t}(c.a.Component),_=a(28),y=a(29),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(_.a,null,c.a.createElement("div",{className:"page"},c.a.createElement(E,null),c.a.createElement("div",null,c.a.createElement(y.a,{exact:!0,path:"/",component:O}),c.a.createElement(y.a,{exact:!0,path:"/rant/:rant_id",component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.60c08ab0.chunk.js.map