(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],j=c[1];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),j(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){j(e.target.value)}})})})},o=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=Mi5hzSnTuV0NYj5zoAVhma8nl2eHjhmT"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"card-grid animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(m,Object(o.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(j,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e,t){return Object(u.jsx)(p,{category:e},t)}))})]})};n(17);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4ef11e66.chunk.js.map