(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{149:function(e,t){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),o=(a(95),a(9)),s=a(11),m=a(88),i=localStorage.getItem("token"),u=function(e){var t=e.component,a=Object(m.a)(e,["component"]);return i?c.a.createElement(s.b,Object.assign({},a,{render:function(e){return c.a.createElement(t,e)}})):c.a.createElement(s.a,{to:"/login"})},p=a(14),d=a(5),E=a.n(d),f=a(10),g=a(3),v=a(154),h=a(155),b=a(83),w=a(158),j=a(8),O=a.n(j),x=localStorage.getItem("URL"),k=localStorage.getItem("token");function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{headers:{}},l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6?arguments[6]:void 0,s=Object(n.useState)(t),m=Object(g.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(!0),d=Object(g.a)(p,2),v=d[0],h=d[1],b=Object(n.useState)(""),w=Object(g.a)(b,2),j=w[0],y=w[1],N=Object(n.useState)(!1),S=Object(g.a)(N,2),_=S[0],C=S[1];a&&(r.headers["x-access-token"]=k);var I=function(){var t=Object(f.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=x+e,t.prev=1,t.next=4,O.a.get(a,r);case 4:n=t.sent,u(l?function(e){return n.data.concat(e)}:n.data),h((function(e){return!1})),"[object Array]"===Object.prototype.toString.call(n.data)&&(n.data.length>0?(o(),C(!0)):0===n.data.length&&C(!1)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),y(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){h(!0),I()}),c);var L=function(){u(t)};return[i,v,j,L,u,_]}var N=a(156),S=a(30),_=a(21),C=a.n(_),I=localStorage.getItem("token"),L=localStorage.getItem("URL"),R=function(e){var t=e.comment,a=e.deleteC,r=e.post_id,l=Object(n.useState)(!1),o=Object(g.a)(l,2),s=o[0],m=o[1],i=function(){return m(!1)},u=function(){return m(!0)},p=function(){var e=Object(f.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("".concat(L,"posts/").concat(r,"/comments/").concat(t._id),{headers:{"x-access-token":I}});case 3:a(t._id),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"comment"},c.a.createElement("span",null,c.a.createElement("strong",null,t.author.userName)," ",t.content),function(){if(I&&C()(I)._id===t.author._id)return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"options__button",onClick:u,style:{width:"20px"}},c.a.createElement("img",{src:"/images/more.png",alt:""})),c.a.createElement(N.a,{size:"sm",show:s,onHide:i,animation:!1},c.a.createElement(N.a.Body,null,c.a.createElement(v.a,{style:{padding:"0"}},c.a.createElement(b.a,{style:{padding:"0"}},c.a.createElement(h.a,{className:"post-modal-row",onClick:p},"Delete comment"),c.a.createElement(h.a,{className:"post-modal-row",onClick:i},"Close"))))))}())},z=localStorage.getItem("token"),D=localStorage.getItem("URL");function M(e){var t=e.post_id,a=e.addComment,r=e.from,l=Object(n.useState)(""),o=Object(g.a)(l,2),s=o[0],m=o[1],i=function(){var e=Object(f.a)(E.a.mark((function e(n){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,O.a.post("".concat(D,"posts/").concat(t,"/comments/"),{content:s},{headers:{"x-access-token":z}});case 4:c=e.sent,m(""),a(c.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"commentForm".concat("post"===r?"-from-post":"")},c.a.createElement("input",{value:s,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?i(e):null},placeholder:"Leave a comment",className:"input",type:"text"}),c.a.createElement("button",{onClick:i},"Publicar"))}var B=function(e){var t=e.from,a=e.post_id,r=Object(n.useState)([]),l=Object(g.a)(r,2),o=l[0],s=l[1],m=function(e){return s((function(t){return t.filter((function(t){return t._id!==e}))}))},i=function(){var n=Object(f.a)(E.a.mark((function n(){var c;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("home"!==t){n.next=4;break}s(e.comments),n.next=14;break;case 4:return n.prev=4,n.next=7,O.a.get("".concat(localStorage.getItem("URL"),"posts/").concat(a,"/comments/"));case 7:c=n.sent,s(c.data.comments),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),alert(n.t0);case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(){return n.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),c.a.createElement("div",{className:"comments-container"},c.a.createElement(v.a,null,o.map((function(e){return c.a.createElement(R,{deleteC:m,post_id:a,comment:e,key:e._id})}))),c.a.createElement(M,{from:t,addComment:function(e){return s((function(t){return[].concat(Object(S.a)(t),[e])}))},post_id:a}))},U=localStorage.getItem("Clip"),T=localStorage.getItem("URL"),P=localStorage.getItem("token");function H(e){var t=e.loading,a=e.post,r=e.from,l=Object(s.g)(),m=Object(n.useState)(!1),i=Object(g.a)(m,2),u=i[0],p=i[1],d=function(){return p(!1)},E=function(){return p(!0)},f=Object(n.useState)((function(){var e=C()(P)._id;return console.log(a.likes.find((function(t){return t===e}))),a.likes.find((function(t){return t===e}))})),w=Object(g.a)(f,2),j=w[0],x=w[1],k=Object(n.useState)(a.likes.length),y=Object(g.a)(k,2),S=y[0],_=y[1],I=function(){var e="".concat(U,"/posts/").concat(a._id),t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),d()},L=function(){d(),l.push("/posts/".concat(a._id))};Object(n.useEffect)((function(){}),[j]);var R=function(){O.a.get("".concat(T,"posts/likes/").concat(a._id),{headers:{"x-access-token":P}}).then((function(e){"like"===e.data?(x(!0),_((function(e){return e+1}))):(x(!1),_((function(e){return e-1})))})).catch((function(e){return console.error(e)}))},z=function(){return c.a.createElement("header",null,c.a.createElement(o.b,{to:"/profiles/".concat(a.author._id),className:"post__author-info"},c.a.createElement("img",{className:"author__image",src:"/images/".concat(a.author.avatar),alt:""}),c.a.createElement("label",null,a.author.name)),c.a.createElement("button",{onClick:function(){return console.log(a)}},"asd"),c.a.createElement("div",{className:"options"},c.a.createElement("button",{className:"options__button",onClick:E},c.a.createElement("img",{src:"/images/more.png",alt:""})),c.a.createElement(N.a,{size:"sm",show:u,onHide:d,animation:!1},c.a.createElement(N.a.Body,null,c.a.createElement(v.a,{style:{padding:"0"}},c.a.createElement(b.a,{style:{padding:"0"}},c.a.createElement(h.a,{className:"post-modal-row",onClick:I},"Copy Link"),c.a.createElement(h.a,{className:"post-modal-row",onClick:L},"Go to post"),c.a.createElement(h.a,{className:"post-modal-row",onClick:d},"Close")))))))},D=function(){return c.a.createElement("div",{className:"post__media"},c.a.createElement("img",{className:"post-image",src:"/images/".concat(a.media),alt:""}))},M=function(){return c.a.createElement("div",{className:"post__footer"},c.a.createElement("div",{className:"post__footer-info"},c.a.createElement("div",{className:"actions"},c.a.createElement("button",{className:"action ".concat(j?"liked":""),onClick:R},c.a.createElement("svg",{"aria-label":"Me gusta",fill:"#262626",height:"24",viewBox:"0 0 48 48",width:"24"},c.a.createElement("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"}))),c.a.createElement(o.b,{className:"action",to:"/posts/".concat(a._id)},c.a.createElement("svg",{"aria-label":"Comentar",fill:"#262626",height:"24",viewBox:"0 0 48 48",width:"24"},c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"})))),c.a.createElement("button",{className:"likes"},S," Likes")),c.a.createElement("p",{className:"description"},a.description))};return t?c.a.createElement("article",{className:"post blank",style:{height:"400px"}}):"post"===r?c.a.createElement(v.a,{className:"post"},c.a.createElement(h.a,null,c.a.createElement(b.a,{md:8,id:"post",style:{margin:0,padding:0}},D()),c.a.createElement(b.a,null,c.a.createElement(h.a,null,z()),c.a.createElement(h.a,null,M()),c.a.createElement(h.a,{className:"comments-row"},c.a.createElement(B,{from:r,post_id:a._id,comments:a.comments}))))):c.a.createElement("article",{className:"post"},z(),D(),M(),c.a.createElement(B,{from:r,post_id:a._id,comments:a.comments}))}var F=localStorage.getItem("token");function G(){var e=y("users/",{},!0),t=Object(g.a)(e,4),a=t[0];t[1],t[2],t[3];return c.a.createElement("div",{className:"navbar"},c.a.createElement(v.a,null,c.a.createElement("div",{className:"navbar__logo"},c.a.createElement(o.b,{to:"/"},"Social Media")),c.a.createElement("div",{className:"navbar__list"},F?c.a.createElement(c.a.Fragment,null,V.map((function(e,t){return c.a.createElement(o.c,{key:t,exact:"/"===e.path,to:e.path,className:"nav__link",activeClassName:"link__active"},e.svg)})),c.a.createElement(o.b,{className:"icon",to:"/profiles/".concat(a._id)},c.a.createElement("img",{src:"/images/".concat(a.avatar),alt:""}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:{pathname:"/login",action:{actionName:"login"}}},"Log In"),c.a.createElement(o.b,{to:{pathname:"/login/register",action:{actionName:"register"}}},"Sign Up")))))}var V=[{path:"/",svg:c.a.createElement("svg",{"aria-label":"Direct",width:"22",height:"22",viewBox:"0 0 48 48"},c.a.createElement("path",{d:"M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"}))},{path:"/messages",svg:c.a.createElement("svg",{"aria-label":"Direct",width:"22",height:"22",viewBox:"0 0 48 48"},c.a.createElement("path",{d:"M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"}))},{path:"/explore",svg:c.a.createElement("svg",{"aria-label":"Direct",width:"22",height:"22",viewBox:"0 0 48 48"},c.a.createElement("path",{clipRule:"evenodd",d:"M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z",fillRule:"evenodd"}))}],Y=a(39),A=localStorage.getItem("URL");function J(){var e,t=y("users/",{},!0),a=Object(g.a)(t,4),r=a[0],l=(a[1],a[2],a[3]),o=Object(n.useState)(0),s=Object(g.a)(o,2),m=s[0],i=s[1],u=Object(n.useState)([]),d=Object(g.a)(u,2),j=d[0],x=d[1],k=Object(n.useState)(!0),N=Object(g.a)(k,2),S=N[0],_=N[1];Object(n.useEffect)((function(){return C(),function(){l(),x([])}}),[]);var C=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(A,"posts/"),{headers:{page:m}});case 3:t=e.sent,x((function(e){return e.concat(t.data)})),i((function(e){return e+1})),0===t.data.length&&_(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error();case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"page home"},c.a.createElement(G,null),c.a.createElement(v.a,{style:{marginTop:"20px"}},c.a.createElement(h.a,null,c.a.createElement(b.a,{sm:12,lg:8},c.a.createElement(Y.a,(e={dataLength:j.length,next:C,hasMore:S,loader:c.a.createElement("h4",null,"Loading..."),endMessage:c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("b",null,"Yay! You have seen it all")),pullDownToRefresh:!0},Object(p.a)(e,"pullDownToRefresh",!0),Object(p.a)(e,"refreshFunction",C),Object(p.a)(e,"pullDownToRefreshContent",c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("b",null,"Yay! You have seen it all"))),e),j.map((function(e){return c.a.createElement(H,{from:"home",key:e._id,post:e})})))),c.a.createElement(b.a,{className:"d-none d-lg-block"},c.a.createElement(w.a,{style:{padding:"5px"}},c.a.createElement("div",{className:"flex"},c.a.createElement("img",{src:"/images/".concat(r.avatar),className:"icon icon-home",alt:""}),c.a.createElement("span",null,r.name)))))))}var K=a(157),q=a(84),Q=a(86),W=a(85),X=a(159);function Z(e){var t=Object(n.useState)(e),a=Object(g.a)(t,2),c=a[0],r=a[1];return[c,{onChange:function(e){var t=c;t[e.target.name]=e.target.value,r(t)}},function(){return r({})}]}var $=localStorage.getItem("URL"),ee=localStorage.getItem("token");function te(){var e=Object(s.g)();return ee&&e.push("/"),c.a.createElement("div",{className:"page login"},c.a.createElement(v.a,{style:{marginTop:"20px"}},c.a.createElement(h.a,null,c.a.createElement(b.a,{className:"d-none d-lg-block"},c.a.createElement("img",{className:"contained",src:"/images/woman.jpg",alt:""})),c.a.createElement(b.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/login",component:ae}),c.a.createElement(s.b,{path:"/login/register",component:ne}))))))}var ae=function(){var e=Z({name:"",email:"",password:"",userName:""}),t=Object(g.a)(e,3),a=t[0],n=t[1],r=(t[2],function(){var e=Object(f.a)(E.a.mark((function e(t){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("".concat($,"signIn"),a);case 4:return n=e.sent,e.next=7,n.data;case 7:c=e.sent,localStorage.setItem("token",c),window.location.reload(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}());return c.a.createElement(h.a,null,c.a.createElement(v.a,null,c.a.createElement("h1",null,"Social Media"),c.a.createElement(K.a,{autoComplete:"off"},c.a.createElement(q.a,null,c.a.createElement(Q.a,null,"Email"),c.a.createElement(W.a,Object.assign({name:"email",type:"email"},n))),c.a.createElement(q.a,null,c.a.createElement(Q.a,null,"Password"),c.a.createElement(W.a,Object.assign({name:"password",type:"password"},n))),c.a.createElement(X.a,{variant:"primary",onClick:r},"Login")),c.a.createElement(o.b,{style:{fontSize:"14px",marginTop:"10px",opacity:".7"},to:"/login/register"},"Dont have an account? REGISTER")))},ne=function(){var e,t=Z({name:"",email:"",password:"",userName:""}),a=Object(g.a)(t,3),n=a[0],r=a[1],l=(a[2],function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.post("".concat($,"signUp"),n);case 4:a=e.sent,localStorage.setItem("token",a.data),window.location.reload(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}());return c.a.createElement(h.a,null,c.a.createElement(v.a,null,c.a.createElement("h1",null,"Social Media"),c.a.createElement(K.a,{autoComplete:"off"},c.a.createElement(q.a,null,c.a.createElement(Q.a,null,"Email"),c.a.createElement(W.a,Object.assign({type:"email",name:"email"},r))),c.a.createElement(q.a,null,c.a.createElement(Q.a,null,"Name"),c.a.createElement(W.a,Object.assign({name:"name",type:"text"},r))),c.a.createElement(q.a,null,c.a.createElement(Q.a,null,"User name"),c.a.createElement(W.a,Object.assign((e={name:"name"},Object(p.a)(e,"name","userName"),Object(p.a)(e,"type","text"),e),r))),c.a.createElement(q.a,null,c.a.createElement(Q.a,null,"Password"),c.a.createElement(W.a,Object.assign({type:"password",name:"password"},r))),c.a.createElement(X.a,{variant:"primary",onClick:l},"Register")),c.a.createElement(o.b,{style:{fontSize:"14px",marginTop:"10px",opacity:".7"},to:"/login"},"Have an account? LOGIN")))},ce=function(e){var t=e.loading,a=e.post;return t?c.a.createElement("div",{className:"profile-posts-container"}):c.a.createElement("div",{className:"profile-posts-container"},a.map((function(e){return c.a.createElement(o.b,{to:"/posts/".concat(e._id),key:e._id,className:"post-profile"},c.a.createElement("img",{className:"image",src:"/images/".concat(e.media),alt:""}),c.a.createElement("div",{className:"data"},c.a.createElement("div",{className:"stat"},c.a.createElement("svg",{"aria-label":"Me gusta",fill:"#ffffff",height:"24",viewBox:"0 0 48 48",width:"24"},c.a.createElement("path",{d:"M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"})),e.likes.length),c.a.createElement("div",{className:"stat"},c.a.createElement("svg",{"aria-label":"Comentar",fill:"#ffffff",height:"24",viewBox:"0 0 48 48",width:"24"},c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"})),e.comments.length)))})))};function re(){return c.a.createElement("div",null)}var le=localStorage.getItem("token");function oe(e){var t,a=Object(n.useState)(e.user),r=Object(g.a)(a,2),l=r[0],o=r[1];le&&(t=C()(le)._id);var s=function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.get("".concat(localStorage.getItem("URL"),"/follow/").concat(l._id),{headers:{"x-access-token":le}});case 4:a=e.sent,o(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.a.get("".concat(localStorage.getItem("URL"),"/unfollow/").concat(l._id),{headers:{"x-access-token":le}});case 4:a=e.sent,o(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return function(){o({})}}),[]);return c.a.createElement("div",{className:"user-info__info"},c.a.createElement("h4",null,l.userName),t!==l._id?c.a.createElement(me,{unFollow:m,follow:s,user_id:l._id,my_id:t,follows:l.followers}):c.a.createElement(se,null))}var se=function(){return c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement(o.b,{to:"/create"},c.a.createElement("svg",{fill:"#262626",height:"50px",width:"50px"},c.a.createElement("path",{clipRule:"evenodd",d:"M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z",fillRule:"evenodd"})))),c.a.createElement(b.a,null,c.a.createElement(o.b,{to:"/edit/profile"},"Edit Profile")),c.a.createElement(b.a,null,c.a.createElement("button",{style:{color:"#ff1a1a"},onClick:Object(f.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})))},"Log Out"))))},me=function(e){var t=e.follows,a=e.my_id,n=e.user_id,r=e.follow,l=e.unFollow;return t.findIndex((function(e){return e===a}))>=0?c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement(o.b,{to:{pathname:"/messages",aboutProps:{for:n}}},"Send message")),c.a.createElement(b.a,null,c.a.createElement("button",{onClick:l},"Unfollow")))):c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement("button",{onClick:r},"Follow"))))};function ie(e){var t=y("users/".concat(e.match.params.id),{},!0,[e.match.params.id]),a=Object(g.a)(t,4),r=a[0],l=a[1],o=(a[2],a[3]);return Object(n.useEffect)((function(){return function(){o()}}),[e.match.params.id]),l?c.a.createElement(re,null):c.a.createElement("div",{className:"page profile"},c.a.createElement(G,null),c.a.createElement(v.a,{style:{marginTop:"20px"},className:"minor-container"},c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,{md:3,className:"profile-image",sm:4},c.a.createElement("div",{className:"user-image"},c.a.createElement("img",{src:"/images/".concat(r.avatar),alt:""}))),c.a.createElement(b.a,{md:8},c.a.createElement(oe,{user:{_id:r._id,userName:r.userName,followers:r.followers}}),c.a.createElement(v.a,{className:"user-stats"},c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement("button",{className:"stat"},"".concat(r.post.length," posts"))),c.a.createElement(b.a,null,c.a.createElement("button",{className:"stat"},"".concat(r.followers.length," followers"))),c.a.createElement(b.a,null,c.a.createElement("button",{className:"stat"},"".concat(r.follows.length," follows"))))),c.a.createElement("h4",null,r.name),c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement("p",{className:"d-none d-lg-block"},r.description)))))),c.a.createElement(ce,{post:r.post})))}function ue(e){var t=y("posts/".concat(e.match.params.id),!1,{}),a=Object(g.a)(t,3),n=a[0],r=a[1],l=a[2],o=Object(s.g)();return l&&o.push("/notfound"),r?c.a.createElement(re,null):c.a.createElement("div",{className:"page"},c.a.createElement(G,null),c.a.createElement(v.a,{style:{marginTop:"20px"},className:"minor-container"},c.a.createElement(H,{from:"post",loading:r,post:n.post})),c.a.createElement(v.a,null,c.a.createElement(ce,{loading:r,post:n.relatedPost})))}var pe=localStorage.getItem("URL");function de(){var e,t=Object(n.useState)(0),a=Object(g.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1],u=Object(n.useState)(!0),d=Object(g.a)(u,2),w=d[0],j=d[1],x=Object(n.useState)(!0),k=Object(g.a)(x,2),y=k[0],N=k[1];Object(n.useEffect)((function(){S(),N(!1)}),[]);var S=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(pe,"posts/explore"),{headers:{page:r}});case 3:t=e.sent,i((function(e){return e.concat(t.data)})),l((function(e){return e+1})),0===t.data.length&&j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error();case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"page"},c.a.createElement(G,null),c.a.createElement(v.a,{style:{marginTop:"20px"}},c.a.createElement(h.a,null,c.a.createElement(b.a,null,c.a.createElement(Y.a,(e={dataLength:m.length,next:S,hasMore:w,loader:c.a.createElement("h4",null,"Loading..."),endMessage:c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("b",null,"Yay! You have seen it all")),pullDownToRefresh:!0},Object(p.a)(e,"pullDownToRefresh",!0),Object(p.a)(e,"refreshFunction",S),Object(p.a)(e,"pullDownToRefreshContent",c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("b",null,"pullDownToRefreshContent"))),e),c.a.createElement(ce,{post:m,loading:y}))))))}var Ee,fe=localStorage.getItem("token"),ge=function(e){var t,a=e.rooms,n=e.url;fe&&(t=C()(fe)._id);return c.a.createElement("div",{className:"contact-list"},a.map((function(e){return c.a.createElement(o.b,{to:"".concat(n,"/").concat(e._id),key:e._id,className:"room"},function(e,a){var n=e.filter((function(e){return e._id!==t}))[0];return c.a.createElement(v.a,{className:"contact"},c.a.createElement(h.a,{className:"contact-row"},c.a.createElement(b.a,{md:2,styles:{padding:0}},c.a.createElement("img",{className:"icon",src:"/images/".concat(n.avatar),alt:""})),c.a.createElement(b.a,{styles:{padding:0}},c.a.createElement("div",null,c.a.createElement("strong",null,n.userName," ")),c.a.createElement("div",null,a.map((function(e){return e.content}))))))}(e.users,e.messages))})))},ve=a(87),he=a.n(ve),be=localStorage.getItem("URL");function we(){var e=document.querySelector(".message-container__iner");e.scrollTop=e.scrollHeight}var je=function(e,t,a){var c={page:e},r=y("messages/".concat(t,"/message"),[],!0,[e,t],{headers:c},!0,we),l=Object(g.a)(r,6),o=l[0],s=l[1],m=l[2],i=(l[3],l[4]),u=l[5],p=Object(n.useState)(""),d=Object(g.a)(p,2),E=d[0],f=d[1];Object(n.useEffect)((function(){(Ee=he()("http://localhost:5000/")).emit("join",{room:t},(function(){}))}),[t,"http://localhost:5000/"]),Object(n.useEffect)((function(){Ee.on("message",(function(e){var t=e.content,a=e.author;i((function(e){return[].concat(Object(S.a)(e),[{content:t,author:a}])})),we()}))}),[]);return[s,m,u,o,{value:E,onChange:function(e){return f(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?function(e){e.preventDefault(),""!==E.trim()&&(O.a.post("".concat(be,"messages/").concat(t,"/message"),{content:E},{headers:c}),Ee.emit("sendMessage",{content:E,author:{_id:a}},(function(){return f("")})))}(e):null}}]},Oe=localStorage.getItem("token"),xe=function(e){var t=e.match.params.room,a=C()(Oe)._id,r=Object(n.useState)(0),l=Object(g.a)(r,2),o=l[0],s=l[1],m=je(o,t,a),i=Object(g.a)(m,5),u=i[0],p=(i[1],i[2]),d=i[3],E=i[4],f=Object(n.useRef)(),w=Object(n.useRef)(),j=Object(n.useCallback)((function(e){u||(w.current&&w.current.disconnect(),p&&(w.current=new IntersectionObserver((function(e){e[0].isIntersecting&&(console.log(d,u),s((function(e){return e+1})))})),e&&w.current.observe(e)))}),[u,p]);if(u)return c.a.createElement("div",null);return c.a.createElement("div",{className:"message-area"},c.a.createElement("header",{className:"inbox-header"},c.a.createElement("div",{className:"icon"})),c.a.createElement(v.a,{className:"message-container",onClick:function(){return f.current.focus()}},c.a.createElement(b.a,{className:"message-container__iner"},d.map((function(e,t){var n={};return 0===t&&(n.ref=j),c.a.createElement(h.a,Object.assign({key:t},n),c.a.createElement("div",{className:"message-from-".concat(e.author._id===a?"me":"other")},e.content))})))),c.a.createElement(v.a,null,c.a.createElement("input",Object.assign({type:"text",ref:f,name:"content"},E))))},ke=function(e){var t=e.printFollows,a=Object(n.useState)(!1),r=Object(g.a)(a,2),l=r[0],o=r[1];return c.a.createElement("div",{className:"message-area inbox"},c.a.createElement("h2",null,"You can send messages to people that you follow"),c.a.createElement(X.a,{onClick:function(){return o(!0)},variant:"primary"},"Send a message"),c.a.createElement(N.a,{size:"md",show:l,onHide:function(){return o(!1)},animation:!1},c.a.createElement(N.a.Header,{closeButton:!0},c.a.createElement("h3",null,"Start a new Chat")),c.a.createElement(N.a.Body,null,c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,{style:{padding:"10px"}},t()))))))},ye=localStorage.getItem("token"),Ne=localStorage.getItem("URL");function Se(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),m=Object(g.a)(o,2),i=m[0],u=m[1],p=Object(n.useState)([]),d=Object(g.a)(p,2),w=d[0],j=d[1],x=function(){return l(!1)};Object(n.useEffect)((function(){k(),y()}),[]);var k=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(Ne,"users/getParam/follows"),{headers:{"x-access-token":ye}});case 3:t=e.sent,u(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(Ne,"messages/"),{headers:{"x-access-token":ye}});case 3:t=e.sent,j(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("".concat(Ne,"messages/"),{member:t},{headers:{"x-access-token":ye}});case 3:a=e.sent,j((function(e){return[].concat(Object(S.a)(e),[a.data])})),window.location.reload(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){return i.map((function(e){return c.a.createElement(v.a,{style:{marginBottom:"10px"},key:e._id},c.a.createElement(h.a,null,c.a.createElement(b.a,{md:8,style:{padding:"0 5px"}},c.a.createElement("div",{className:"flex"},c.a.createElement("span",{className:"icon"},c.a.createElement("img",{src:"/images/".concat(e.avatar),alt:""})),c.a.createElement("span",{style:{marginLeft:"5px"}},e.userName))),c.a.createElement(b.a,{style:{padding:"0 5px"}},c.a.createElement(X.a,{onClick:function(t){x(),_(e._id)},variant:"primary"},"Start new Chat"))))}))};return c.a.createElement("div",{className:"page"},c.a.createElement(G,null),c.a.createElement(v.a,{className:"messages-container"},c.a.createElement(h.a,{style:{height:"100%"}},c.a.createElement(b.a,{md:4,style:{padding:"0"}},c.a.createElement("header",{className:"inbox-header"},c.a.createElement("div",null),c.a.createElement("div",{className:"strong"},"Direct"),c.a.createElement("button",{className:"new-message",onClick:function(){return l(!0)}},c.a.createElement("svg",{"aria-label":"Nuevo mensaje",className:"_8-yf5 ",fill:"#262626",height:"24",viewBox:"0 0 44 44",width:"24"},c.a.createElement("path",{d:"M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"}),c.a.createElement("path",{d:"M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"}))),c.a.createElement(N.a,{size:"md",show:r,onHide:x,animation:!1},c.a.createElement(N.a.Header,{closeButton:!0},c.a.createElement("h3",null,"Start a new Chat")),c.a.createElement(N.a.Body,null,c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(b.a,{style:{padding:"10px"}},C())))))),c.a.createElement(ge,{url:e.match.url,rooms:w})),c.a.createElement(b.a,{md:8,style:{padding:"0"}},c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"".concat(e.match.url),render:function(){return c.a.createElement(ke,{printFollows:C,follows:i})}}),c.a.createElement(s.b,{path:"".concat(e.match.url,"/:room"),component:xe}))))))}var _e=a(25),Ce=function(){var e=Object(n.useState)({image:"",description:""}),t=Object(g.a)(e,2),a=t[0],r=t[1],l=Object(s.g)(),o=function(){var e=Object(f.a)(E.a.mark((function e(t){var n,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(n=new FormData).append("image",a.image),n.append("description",a.description),e.next=7,O.a.post("".concat(localStorage.getItem("URL"),"posts/"),n,{headers:{"x-access-token":localStorage.getItem("token")}});case 7:c=e.sent,l.push("/posts/".concat(c.data._id)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("input",{type:"file",name:"image",id:"",onChange:function(e){return r(Object(_e.a)(Object(_e.a)({},a),{},Object(p.a)({},e.target.name,e.target.files[0])))}}),c.a.createElement("textarea",{name:"description",onChange:function(e){return r(Object(_e.a)(Object(_e.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}}),c.a.createElement("button",{onClick:o},"Upload")))},Ie=function(){return c.a.createElement("div",{className:"page error404"},c.a.createElement(G,null),c.a.createElement(v.a,{style:{marginTop:"20px"}},c.a.createElement("div",{className:"flex",style:{flexDirection:"column"}},c.a.createElement("h1",null,"This page is not available."),c.a.createElement("p",null,"The link you selected may be broken or the page may have been removed."," ",c.a.createElement(o.b,{to:"/",style:{color:"#0095f6"}}," ","Back to Home")))))},Le=localStorage.getItem("token"),Re=localStorage.getItem("URL"),ze={headers:{"x-access-token":Le}},De=function(){var e=Object(n.useState)({}),t=Object(g.a)(e,2),a=t[0],r=t[1],l=Object(s.g)();Object(n.useEffect)((function(){o()}),[]);var o=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(Re,"users/edit"),ze);case 3:(t=e.sent).data.newPassword="",t.imgae=t.avatar,r(t.data),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(e){var t=a;t[e.target.name]=e.target.value,r(t)},i=function(){var e=Object(f.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(n=new FormData).append("image",a.image),n.append("newPassword",a.newPassword),n.append("email",a.email),n.append("password",a.password),n.append("name",a.name),e.next=10,O.a.put("".concat(Re,"users/"),n,ze);case 10:l.push("/profiles/".concat(a._id)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"page edit-profile"},c.a.createElement(G,null),c.a.createElement(v.a,{className:"edit-container"},c.a.createElement(b.a,null,c.a.createElement("div",null,c.a.createElement(K.a.Group,null,c.a.createElement("input",{type:"file",name:"image",id:"",onChange:function(e){return r(Object(_e.a)(Object(_e.a)({},a),{},Object(p.a)({},e.target.name,e.target.files[0])))}})),c.a.createElement(K.a.Group,{controlId:"formBasicEmail"},c.a.createElement(K.a.Label,null,"Email address"),c.a.createElement(K.a.Control,{onChange:m,name:"email",type:"email",placeholder:"Enter email"})),c.a.createElement(K.a.Group,{controlId:"formBasicEmail"},c.a.createElement(K.a.Label,null,"Name"),c.a.createElement(K.a.Control,{onChange:m,name:"name",type:"email",placeholder:"Enter email"})),c.a.createElement(K.a.Group,{controlId:"formBasicPassword"},c.a.createElement(K.a.Label,null,"Password"),c.a.createElement(K.a.Control,{type:"password",onChange:m,name:"password",placeholder:"Password"})),c.a.createElement(K.a.Group,{controlId:"formBasicPassword"},c.a.createElement(K.a.Label,null,"New password"),c.a.createElement(K.a.Control,{type:"password",onChange:m,name:"newPassword",placeholder:"Password"})),c.a.createElement(X.a,{onClick:i,variant:"primary",type:"submit"},"Update")))))};function Me(){return c.a.createElement(o.a,null,c.a.createElement(s.d,null,c.a.createElement(u,{exact:!0,path:"/",component:J}),c.a.createElement(s.b,{path:"/login",component:te}),c.a.createElement(s.b,{path:"/edit/profile",component:De}),c.a.createElement(s.b,{path:"/profiles/:id",component:ie}),c.a.createElement(s.b,{path:"/posts/:id",component:ue}),c.a.createElement(u,{path:"/messages",component:Se}),c.a.createElement(u,{path:"/explore",component:de}),c.a.createElement(u,{path:"/create",component:Ce}),c.a.createElement(s.b,{path:"*",component:Ie})))}localStorage.setItem("Clip","http://localhost:3000"),localStorage.setItem("URL","http://localhost:5000/api/v1/"),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Me,null)),document.getElementById("root"))},90:function(e,t,a){e.exports=a(152)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.5f250478.chunk.js.map