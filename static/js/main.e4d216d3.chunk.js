(this["webpackJsonpwhatsapp-mern"]=this["webpackJsonpwhatsapp-mern"]||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(28),i=a.n(n),r=(a(71),a(16)),o=(a(72),a(73),a(105)),j=a(100),d=a(56),l=a.n(d),h=a(57),b=a.n(h),u=a(58),m=a.n(u),O=a(101),p=(a(74),a(31)),x=p.a.initializeApp({apiKey:"AIzaSyAD3B2VEpxm1jWz7cVnxag4_wp94T9scW4",authDomain:"whatsapp-clone-fe47f.firebaseapp.com",projectId:"whatsapp-clone-fe47f",storageBucket:"whatsapp-clone-fe47f.appspot.com",messagingSenderId:"896810549957",appId:"1:896810549957:web:baeb3863162059243f26ac"}).firestore(),f=p.a.auth(),v=new p.a.auth.GoogleAuthProvider,g=x,N=a(35),S=a(4);var w=function(e){var t,a=e.id,s=e.name,n=e.addNewChat,i=Object(c.useState)(""),j=Object(r.a)(i,2),d=j[0],l=j[1],h=Object(c.useState)(""),b=Object(r.a)(h,2),u=b[0],m=b[1];return Object(c.useEffect)((function(){a&&g.collection("rooms").doc(a).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){m(e.docs.map((function(e){return e.data()})))}))}),[a]),Object(c.useEffect)((function(){l(Math.floor(5e3*Math.random()))}),[]),n?Object(S.jsx)("div",{onClick:function(){var e=prompt("Please Enter Name for Chat");e&&g.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(S.jsx)("h3",{className:"add-new-chat-title",children:"Add New Chat"})}):Object(S.jsx)(N.b,{to:"/rooms/".concat(a),children:Object(S.jsxs)("div",{className:"sidebarChat",children:[Object(S.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(d,".svg")}),Object(S.jsxs)("div",{className:"sidebarChat_info",children:[Object(S.jsx)("h2",{children:s}),Object(S.jsx)("p",{children:null===(t=u[0])||void 0===t?void 0:t.message})]})]})},a)},_=Object(c.createContext)(),C=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(S.jsx)(_.Provider,{value:Object(c.useReducer)(t,a),children:s})},y=function(){return Object(c.useContext)(_)};var E=function(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),s=a[0],n=a[1],i=y(),d=Object(r.a)(i,2),h=d[0].user;return d[1],Object(c.useEffect)((function(){var e=g.collection("rooms").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(S.jsxs)("div",{className:"sidebar",children:[Object(S.jsxs)("div",{className:"sidebar_header",children:[Object(S.jsx)(o.a,{src:null===h||void 0===h?void 0:h.photoURL}),Object(S.jsxs)("div",{className:"sidebar_headerRight",children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(l.a,{})}),Object(S.jsx)(j.a,{children:Object(S.jsx)(b.a,{})}),Object(S.jsx)(j.a,{children:Object(S.jsx)(m.a,{})})]})]}),Object(S.jsx)("div",{className:"sidebar_search",children:Object(S.jsxs)("div",{className:"sidebar_searchContainer",children:[Object(S.jsx)(O.a,{}),Object(S.jsx)("input",{type:"text",placeholder:"Search or start new chat"})]})}),Object(S.jsxs)("div",{className:"sidebar_chats",children:[Object(S.jsx)(w,{addNewChat:!0}),s.map((function(e){return Object(S.jsx)(w,{id:e.id,name:e.data.name},e.id)}))]})]})},I=a(102),k=a(103),D=a(60),T=a.n(D),A=a(59),B=a.n(A),M=(a(84),a(11));var P=function(){var e,t,a=Object(c.useState)(""),s=Object(r.a)(a,2),n=s[0],i=s[1],d=Object(c.useState)(""),l=Object(r.a)(d,2),h=l[0],b=l[1],u=Object(M.f)().roomId,m=Object(c.useState)(""),x=Object(r.a)(m,2),f=x[0],v=x[1],N=Object(c.useState)([]),w=Object(r.a)(N,2),_=w[0],C=w[1],E=y(),D=Object(r.a)(E,2),A=D[0].user;return D[1],Object(c.useEffect)((function(){u&&(g.collection("rooms").doc(u).onSnapshot((function(e){v(e.data().name)})),g.collection("rooms").doc(u).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){C(e.docs.map((function(e){return e.data()})))})))}),[u]),Object(c.useEffect)((function(){b(Math.floor(5e3*Math.random()))}),[u]),Object(S.jsxs)("div",{className:"chat",children:[Object(S.jsxs)("div",{className:"chat_header",children:[Object(S.jsx)(o.a,{src:"https://avatars.dicebear.com/api/human/".concat(h,".svg")}),Object(S.jsxs)("div",{className:"chat_headerInfo",children:[Object(S.jsx)("h3",{className:"chat-room-name",children:f}),Object(S.jsxs)("p",{className:"chat-room-last-seen",children:["Last seen "," ",new Date(null===(e=_[_.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(S.jsxs)("div",{className:"chat_headerRight",children:[Object(S.jsx)(j.a,{children:Object(S.jsx)(O.a,{})}),Object(S.jsx)(j.a,{children:Object(S.jsx)(I.a,{})}),Object(S.jsx)(j.a,{children:Object(S.jsx)(k.a,{})})]})]}),Object(S.jsx)("div",{className:"chat_body",children:_.map((function(e){var t;return Object(S.jsxs)("p",{className:"chat_message ".concat(e.name===A.displayName&&"chat_receiver"),children:[Object(S.jsx)("span",{className:"chat_name",children:e.name}),e.message,Object(S.jsx)("span",{className:"chat_timestemp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(S.jsxs)("div",{className:"chat_footer",children:[Object(S.jsx)(B.a,{}),Object(S.jsxs)("form",{children:[Object(S.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Type a message"}),Object(S.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),g.collection("rooms").doc(u).collection("messages").add({message:n,name:A.displayName,timestamp:p.a.firestore.FieldValue.serverTimestamp()}),i("")},children:" Send a Message"})]}),Object(S.jsx)(T.a,{})]})]})},W=a(61),F=a(104),R=(a(85),a(47)),L="SET_USER",U=function(e,t){switch(t.type){case L:return Object(R.a)(Object(R.a)({},e),{},{user:t.user});default:return e}};var z=function(){var e=y(),t=Object(r.a)(e,2);Object(W.a)(t[0]);var a=t[1];return Object(S.jsx)("div",{className:"login",children:Object(S.jsxs)("div",{className:"login_container",children:[Object(S.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),Object(S.jsx)("div",{className:"login_text",children:Object(S.jsx)("h1",{children:"Sign in to Whatsapp"})}),Object(S.jsx)(F.a,{type:"submit",onClick:function(){f.signInWithPopup(v).then((function(e){a({type:L,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign in With Google"})]})})};var V=function(){var e=y(),t=Object(r.a)(e,2),a=t[0].user;return t[1],Object(S.jsx)("div",{className:"app",children:a?Object(S.jsx)("div",{className:"app_body",children:Object(S.jsxs)(N.a,{children:[Object(S.jsx)(E,{}),Object(S.jsxs)(M.c,{children:[Object(S.jsx)(M.a,{path:"/rooms/:roomId",children:Object(S.jsx)(P,{})}),Object(S.jsx)(M.a,{path:"/",children:Object(S.jsx)(P,{})})]})]})}):Object(S.jsx)(z,{})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(C,{initialState:{user:null},reducer:U,children:Object(S.jsx)(V,{})})}),document.getElementById("root")),G()}},[[87,1,2]]]);
//# sourceMappingURL=main.e4d216d3.chunk.js.map