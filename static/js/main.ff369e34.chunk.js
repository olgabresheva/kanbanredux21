(this.webpackJsonpkanbanredux21=this.webpackJsonpkanbanredux21||[]).push([[0],{25:function(e,t,a){},51:function(e,t,a){e.exports=a(82)},56:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(56),a(25),a(5)),s=a(16),i=a(12),u=a.n(i);function m(){return function(e){u()({url:"https://kanban-app-trial.herokuapp.com/card",method:"GET"}).then((function(t){e({type:"GET_TASKS",payload:t.data})})).catch((function(e){console.log(e)}))}}function d(){return function(e){u()({url:"https://kanban-app-trial.herokuapp.com/column",method:"GET"}).then((function(t){e({type:"GET_COLUMNS",payload:t.data})})).catch((function(e){console.log(e)}))}}var p=Object(s.b)(null,(function(e){return{getTasks:function(){return e(m())},onTaskCreate:function(t,a,n){return e(function(e,t,a){return function(n){u()({url:"https://kanban-app-trial.herokuapp.com/card",method:"POST",data:{name:e,description:t,priority:a}}).then((function(e){n(m())})).catch((function(e){console.log(e)}))}}(t,a,n))},onColumnCreate:function(t,a){return e(function(e,t){return function(a){u()({url:"https://kanban-app-trial.herokuapp.com/column",method:"POST",data:{title:e,status:t}}).then((function(e){a(d())})).catch((function(e){console.log(e)}))}}(t,a))}}}))((function(e){Object(n.useEffect)((function(){m()}),[]);var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),u=i[0],d=i[1],p=Object(n.useState)("Select Priority"),h=Object(o.a)(p,2),f=h[0],b=h[1],E=Object(n.useState)(!0),v=Object(o.a)(E,2),k=v[0],g=v[1],w=Object(n.useState)(!1),y=Object(o.a)(w,2),C=y[0],S=y[1],N=Object(n.useState)(!1),O=Object(o.a)(N,2),j=O[0],T=O[1],x=Object(n.useState)(""),z=Object(o.a)(x,2),M=z[0],P=z[1],D=Object(n.useState)(""),H=Object(o.a)(D,2),L=H[0],A=H[1];return r.a.createElement("div",{className:"TaskCreateForm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"submit",className:"btn btn-info create",onClick:function(){return S(!0)}},"Create New Task"),r.a.createElement("p",null),C&&r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Take Name",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Task Description",value:u,onChange:function(e){return d(e.target.value)}}))),r.a.createElement("p",null),r.a.createElement("select",{className:"custom-select",onChange:function(e){b(e.target.value),g("0"===f)},required:!0},r.a.createElement("option",{value:"0"},"Select Priority"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3")),r.a.createElement("p",null),r.a.createElement("button",{disabled:k,type:"submit",className:"btn btn-outline-info",onClick:function(t){t.preventDefault(),e.onTaskCreate(l,u,f),S(!1),c(""),d(""),g(!0)}},"Add Task"),r.a.createElement("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){c(""),d(""),b("Select Priority"),g(!0),S(!1)}},"Cancel")))),r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"submit",className:"btn btn-info create",onClick:function(){return T(!0)}},"Add New Column"),r.a.createElement("p",null),j&&r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Column Title",value:M,onChange:function(e){return P(e.target.value)}})),r.a.createElement("p",null),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Column Status",value:L,onChange:function(e){return A(e.target.value)}}))),r.a.createElement("p",null),r.a.createElement("button",{type:"submit",className:"btn btn-outline-info",onClick:function(t){t.preventDefault(),e.onColumnCreate(M,L),P(""),A(""),T(!1)}},"Create"),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary",onClick:function(){P(""),A(""),T(!1)}},"Cancel"))))))})),h=a(17),f=a(24),b=a(47),E=a.n(b),v=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})),k=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-left-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"})),g=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-arrow-right-circle",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"})),w=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-down",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})),y=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-chevron-up",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})),C=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-pencil",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"}));var S=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(e.taskName),i=Object(o.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(e.taskDescription),p=Object(o.a)(d,2),b=p[0],S=p[1],N=Object(n.useState)(!1),O=Object(o.a)(N,2),j=O[0],T=O[1],x=function(){e.taskDelete(e.taskId),T(!1)},z=function(t,a){var n;n="up"===a?e.taskPriority-1:e.taskPriority+1,e.taskPriorityChg(t,n)},M=function(t,a){var n,r;r=e.boardState.findIndex((function(t){return t.title===e.taskStatus})),n="right"===a?e.boardState[r+1].title:e.boardState[r-1].title,e.taskStateChg(t,n)};return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"priority"},e.taskPriority<3&&r.a.createElement("span",{onClick:function(){return z(e.taskId,"down")}},w),e.taskPriority>1&&r.a.createElement("span",{onClick:function(){return z(e.taskId,"up")}},y)),r.a.createElement("span",{className:{1:"badge badge-danger",2:"badge badge-warning",3:"badge badge-success"}[e.taskPriority]},"Priority: ",e.taskPriority)),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},e.taskName,":"),r.a.createElement(E.a,{className:"card-title small",lines:1,more:"Show more",less:"Show less"},e.taskDescription)),r.a.createElement("div",{className:"card-footer bg-transparent text-muted border-0"},r.a.createElement("span",{className:"float-left"},r.a.createElement("span",{onClick:function(){return c(!0)}},C),r.a.createElement("span",{onClick:function(){return T(!0)}},v)),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{show:l,onHide:x},r.a.createElement(h.a.Body,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Task Name:")),r.a.createElement("input",{className:"mytext",type:"text",value:u,onChange:function(e){return m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("strong",null,"Task Description:")),r.a.createElement("input",{className:"mytext",type:"text",value:b,onChange:function(e){return S(e.target.value)}}),r.a.createElement("br",null)),r.a.createElement(h.a.Footer,null,r.a.createElement(f.a,{type:"button",className:"btn btn-secondary btn-sm",onClick:function(){return c(!1)}},"Cancel"),r.a.createElement(f.a,{type:"button",className:"btn btn-primary btn-sm",onClick:function(){e.taskEdit(e.taskId,u,b),c(!1)}},"Save")))),j&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{show:j,onHide:x},r.a.createElement(h.a.Body,null,"Please confirm if you want to delete this task"),r.a.createElement(h.a.Footer,null,r.a.createElement(f.a,{type:"button",className:"btn btn-secondary btn-sm",onClick:function(){return T(!1)}},"Cancel"),r.a.createElement(f.a,{type:"button",className:"btn btn-primary btn-sm",onClick:x},"Confirm")))),r.a.createElement("span",{className:"float-right"},"To Do"!==e.taskStatus&&r.a.createElement("span",{onClick:function(){return M(e.taskId,"left")}},k),e.taskStatus!==e.boardList[e.boardList.length-1].title&&r.a.createElement("span",{onClick:function(){return M(e.taskId,"right")}},g)))))},N=a(50),O=r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-trash",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}));var j=Object(s.b)((function(e){return{taskList:e.tasks,boardState:e.boardStatus}}),(function(e){return{getTasks:function(){return e(m())},taskDelete:function(t){return e(function(e){return function(t){u()({url:"https://kanban-app-trial.herokuapp.com/card/".concat(e),method:"DELETE"}).then((function(e){t(m())})).catch((function(e){console.log(e)}))}}(t))},taskEdit:function(t,a,n){return e(function(e,t,a){return function(n){u()({url:"https://kanban-app-trial.herokuapp.com/card/".concat(e),method:"PATCH",data:{name:t,description:a}}).then((function(e){n(m())})).catch((function(e){console.log(e)}))}}(t,a,n))},taskPriorityChg:function(t,a){return e(function(e,t){return function(a){u()({url:"https://kanban-app-trial.herokuapp.com/card/".concat(e),method:"PATCH",data:{priority:t}}).then((function(e){a(m())})).catch((function(e){console.log(e)}))}}(t,a))},taskStateChg:function(t,a){return e(function(e,t){return function(a){u()({url:"https://kanban-app-trial.herokuapp.com/card/".concat(e),method:"PATCH",data:{status:t}}).then((function(e){a(m())})).catch((function(e){console.log(e)}))}}(t,a))},colDelete:function(t){return e(function(e){return function(t){u()({url:"https://kanban-app-trial.herokuapp.com/column/".concat(e),method:"DELETE"}).then((function(e){t(d())})).catch((function(e){console.log(e)}))}}(t))}}}))((function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){e.getTasks()}),[]),r.a.createElement("span",{className:"col-sm"},r.a.createElement("div",{className:"card-header"},e.columnStatus,r.a.createElement("span",{className:"float-right"},"To Do"!==e.columnStatus&&"In Progress"!==e.columnStatus&&"Review"!==e.columnStatus&&"Done"!==e.columnStatus&&r.a.createElement("span",{onClick:function(){return function(t,a){for(var n=0;n<=e.taskList.length-1;n++)if(e.taskList[n].status===t)return c(!0);e.colDelete(a)}(e.columnStatus,e.colId)}},O))),r.a.createElement("p",null),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"danger",onClose:function(){return c(!1)},dismissible:!0},r.a.createElement("p",null,"Please make sure there are no tasks associated with column you wish to delete."))),e.taskList.filter((function(t){return t.status===e.columnStatus})).sort((function(e,t){return e.priority-t.priority})).map((function(t){return r.a.createElement("li",{key:t._id},r.a.createElement(S,{taskName:t.name,taskDescription:t.description,taskPriority:t.priority,taskStatus:t.status,taskId:t._id,boardList:e.boardState,boardState:e.boardState,taskDelete:e.taskDelete,taskStateChg:e.taskStateChg,taskPriorityChg:e.taskPriorityChg,taskEdit:e.taskEdit}))})))}));a(81);var T=Object(s.b)((function(e){return{columnStatus:e.boardStatus}}),(function(e){return{getColumns:function(){return e(d())}}}))((function(e){return Object(n.useEffect)((function(){e.getColumns()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Kanban Board"),r.a.createElement(p,null),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},e.columnStatus.map((function(e){return r.a.createElement(j,{key:e._id,colId:e._id,columnStatus:e.title})})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(18),z=a(48),M=a(32),P=a(10),D={tasks:[],boardStatus:[],columns:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASKS":return Object(P.a)(Object(P.a)({},e),{},{tasks:t.payload});case"TASK_CREATE":return Object(P.a)(Object(P.a)({},e),{},{tasks:[].concat(Object(M.a)(e.tasks),Object(M.a)(t.payload))});case"TASK_DELETE":return Object(P.a)(Object(P.a)({},e),{},{tasks:t.payload});case"TASK_EDIT":return Object(P.a)(Object(P.a)({},e),{},{tasks:[].concat(Object(M.a)(e.tasks),[t.payload])});case"GET_COLUMNS":return Object(P.a)(Object(P.a)({},e),{},{boardStatus:t.payload});default:return e}},L=a(49),A=Object(x.createStore)(H,Object(z.composeWithDevTools)(Object(x.applyMiddleware)(L.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:A},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.ff369e34.chunk.js.map