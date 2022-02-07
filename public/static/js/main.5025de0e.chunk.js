(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(24),u=a(56),i=a(5),m="[ui] Open modal",d="[ui] Close modal",f="[event] Set Active",v="[event] Logout event",p="[event] Add new",b="[event] Clear active event",E="[event] Event updated",h="[event] Event deleted",g="[event] Events loaded",O="[auth] Finish checking login state",j="[auth] Login",y="[auth] Logout",N={modalOpen:!1},w=a(44),k={events:[],activeEvent:null},x={checking:!0},S=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case p:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case E:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case h:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case g:return Object(i.a)(Object(i.a)({},e),{},{events:Object(w.a)(t.payload)});case v:return Object(i.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)(Object(i.a)({},e),t.payload),{},{checking:!1});case O:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,D=Object(s.d)(S,C(Object(s.a)(u.a))),T=a(30),I=a(4),P=a(11),_=a.n(P),L=a(18),A="https://mear-calendar-backend.herokuapp.com/api",R=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(A,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(A,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},F=a(15),V=a.n(F),H=a(14),J=a.n(H),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:J()(e.end).toDate(),start:J()(e.start).toDate()})}))},U=function(e){return{type:p,payload:e}},B=function(){return{type:b}},X=function(e){return{type:E,payload:e}},q=function(){return{type:h}},z=function(e){return{type:g,payload:e}},K=function(){return{type:O}},Q=function(e){return{type:j,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:v}),e(Y())}},Y=function(){return{type:y}},Z=a(10),$=a(22),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(Z.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object($.a)({},t.name,t.value)))};return[r,l,o]},te=(a(79),function(){var e=Object(l.b)(),t=ee({lEmail:"emma@mail.com",lPassword:"123456"}),a=Object(Z.a)(t,2),n=a[0],c=a[1],o=ee({rName:"Ivan",rEmail:"ivan@mail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(Z.a)(o,2),u=s[0],i=s[1],m=n.lEmail,d=n.lPassword,f=u.rName,v=u.rEmail,p=u.rPassword1,b=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=m,n=d,function(){var e=Object(L.a)(_.a.mark((function e(t){var r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:c.uid,name:c.name}))):V.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:m,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),p!==b)return V.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var a,n,r;e((a=v,n=p,r=f,function(){var e=Object(L.a)(_.a.mark((function e(t){var c,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("auth/new",{email:a,password:n,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:o.uid,name:o.name}))):V.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:f,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:p,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),ae=a(43),ne=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){t(W())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},re={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=(a(83),a(84),function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))}),oe=a(40),le=a.n(oe),se=a(41),ue=a.n(se),ie=function(){return{type:m}},me={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};le.a.setAppElement("#root");var de=J()().minutes(0).seconds(0).add(1,"hours"),fe=de.clone().add(1,"hours"),ve={title:"",notes:"",start:de.toDate(),end:fe.toDate()},pe=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(de.toDate()),o=Object(Z.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)(fe.toDate()),f=Object(Z.a)(m,2),v=f[0],p=f[1],b=Object(n.useState)(!0),E=Object(Z.a)(b,2),h=E[0],g=E[1],O=Object(n.useState)(ve),j=Object(Z.a)(O,2),y=j[0],N=j[1],w=y.notes,k=y.title,x=y.start,S=y.end;Object(n.useEffect)((function(){N(t||ve)}),[t,N]);var C=function(e){var t=e.target;N(Object(i.a)(Object(i.a)({},y),{},Object($.a)({},t.name,t.value)))},D=function(){a({type:d}),a(B()),N(ve)};return r.a.createElement(le.a,{isOpen:e,onRequestClose:D,style:me,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n,r=J()(x),c=J()(S);return r.isSameOrAfter(c)?V.a.fire("Error","La fecha final debe ser mayor a la fecha de inicio","error"):k.trim().length<2?g(!1):(a(t?(n=y,function(){var e=Object(L.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(r=e.sent).ok?t(X(n)):V.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(L.a)(_.a.mark((function t(a,n){var r,c,o,l,s;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,G("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:s=t.sent,console.log(s),s.ok&&(e.id=s.evento.id,e.user={_id:c,name:o},console.log(e),a(U(e))),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),g(!0),void D())},className:"container"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(ue.a,{onChange:function(e){u(e),N(Object(i.a)(Object(i.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(ue.a,{onChange:function(e){p(e),N(Object(i.a)(Object(i.a)({},y),{},{end:e}))},value:v,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!h&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},be=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(ie())}},r.a.createElement("i",{className:"fas fa-plus"}))},Ee=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(L.a)(_.a.mark((function e(t,a){var n,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,G("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(q()):V.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento"))};J.a.locale("es");var he=Object(ae.b)(J.a),ge=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(Z.a)(s,2),i=u[0],m=u[1];Object(n.useEffect)((function(){e(function(){var e=Object(L.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=M(n.eventos),t(z(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(ne,null),r.a.createElement(ae.a,{localizer:he,events:a,startAccessor:"start",endAccessor:"end",messages:re,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ie())},onSelectEvent:function(t){e({type:f,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(B())},selectable:!0,view:i,components:{event:ce}}),r.a.createElement(be,null),c&&r.a.createElement(Ee,null),r.a.createElement(pe,null))},Oe=function(e){var t=e.children;return e.uid?t:r.a.createElement(I.a,{to:"/login"})},je=function(e){var t=e.children;return e.uid?r.a.createElement(I.a,{to:"/"}):t},ye=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(L.a)(_.a.mark((function e(t){var a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:n.uid,name:n.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null," Espere... "):r.a.createElement(T.a,null,r.a.createElement("div",null,r.a.createElement(I.d,null,r.a.createElement(I.b,{exact:!0,path:"/login",element:r.a.createElement(je,{uid:c},r.a.createElement(te,null))}),r.a.createElement(I.b,{exact:!0,path:"/*",element:r.a.createElement(Oe,{uid:c},r.a.createElement(ge,null))}))))},Ne=function(){return r.a.createElement(l.a,{store:D},r.a.createElement(ye,null))};a(113);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(115)},79:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.5025de0e.chunk.js.map