(this["webpackJsonptraversy-crash-course"]=this["webpackJsonptraversy-crash-course"]||[]).push([[0],{28:function(t,e,o){},34:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),c=o.n(r),a=o(20),s=o.n(a),i=o(18),d=o(7),l=o(8),u=o(10),p=o(9),b=(o(28),o(13)),j=o(2),h=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{textDecoration:t.props.todo.completed?"line-through":"none",padding:"10px",borderBottom:"1px #ccc dotted",backgroundColor:"#f4f4f4"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsxs)("div",{style:this.getStyle(),children:[Object(n.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,Object(n.jsx)("button",{onClick:this.props.delTodo.bind(this,e),style:f,children:"X"})]})}}]),o}(r.Component),f={background:"#ff0000",color:"#fff",border:"none",padding:"5px",borderRadius:"50%",cursor:"pointer",float:"right",width:"25px"},O=h,m=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){return Object(d.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(O,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),o}(r.Component),x=o(21),g=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onChange=function(e){return t.setState(Object(x.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(n.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})]})}}]),o}(r.Component);function v(){return Object(n.jsxs)("header",{style:y,children:[Object(n.jsx)("h1",{children:"Todo List"}),Object(n.jsx)(b.b,{style:C,to:"/",children:"Home"})," ","|"," ",Object(n.jsx)(b.b,{style:C,to:"/about",children:"About"})]})}var y={background:"#333",color:"white",textAlign:"center",padding:"10px"},C={color:"white"},k=o(36);function T(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is the Todo List App v1.0.0"})]})}var S=function(t){Object(u.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={todos:[{id:Object(k.a)(),title:"Take out the trash",completed:!1},{id:Object(k.a)(),title:"Dinner with wife",completed:!0},{id:Object(k.a)(),title:"Meeting with boss",completed:!1}]},t.markComplete=function(e){console.log("from app.js",e),t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){console.log(e),t.setState({todos:Object(i.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){console.log(e);var o={id:Object(k.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(i.a)(t.state.todos),[o])})},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return console.log(this.state.todos),Object(n.jsx)(b.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(v,{}),Object(n.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(g,{addTodo:t.addTodo}),Object(n.jsx)(m,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(n.jsx)(j.a,{path:"/about",component:T})]})})})}}]),o}(r.Component),w=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,37)).then((function(e){var o=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;o(t),n(t),r(t),c(t),a(t)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.841c4f46.chunk.js.map