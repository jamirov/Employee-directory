(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n.n(r),c=n(16),a=n.n(c),i=(n(23),n(3)),l=n(4),o=n(6),h=n(5),u=n(17),j=n(0);function d(e){return Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:e.imgSrc,alt:"user img"})}),Object(j.jsx)("td",{children:e.firstName}),Object(j.jsx)("td",{children:e.lastName}),Object(j.jsx)("td",{children:e.phoneNumber}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.userName})]})})}var b=n(18),m=n.n(b),f=function(){return m.a.get("https://randomuser.me/api/?results=20")};var O=function(e){return Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(j.jsx)("input",{onChange:e.blue,value:e.redb,name:"search",type:"text",placeholder:"Enter First Name",id:"search"})]})})},p=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={result:[],filterResults:[],search:"",firstName:[]},e.searchEEs=function(){f().then((function(t){e.setState({result:t.data.results,filterResults:t.data.results}),console.log(e.state.result[0].picture.thumbnail)})).catch((function(e){return console.log(e)}))},e.sortfirst=function(){var t=e.state.filterResults.sort((function(e,t){return e.name.first>t.name.first?1:-1}));console.log(t),e.setState({filterResults:t}),console.log("sorting")},e.handleInputChange=function(t){var n=t.target.name,r=t.target.value;e.setState(Object(u.a)({},n,r)),e.filterEmployees(r)},e.filterEmployees=function(t){var n=e.state.result.filter((function(e){return e.name.first.toLowerCase().includes(t.toLowerCase())}));e.setState({filterResults:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.searchEEs()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container p-3 mb-2 bg-dark text-white",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(j.jsx)("h3",{className:"text-center",children:"Click on the headings to toggle-sort, or search for a specific employee by first name using the search bar"})]}),Object(j.jsx)(O,{blue:this.handleInputChange,redb:this.state.search}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Photo"}),Object(j.jsx)("th",{onClick:this.sortfirst,children:"First name  "}),Object(j.jsx)("th",{children:"Last name"}),Object(j.jsx)("th",{children:"Phone Number"}),Object(j.jsx)("th",{children:"Email address"}),Object(j.jsx)("th",{children:"User name"})]})}),this.state.result.length?this.state.filterResults.map((function(e){return Object(j.jsx)(d,{imgSrc:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,phoneNumber:e.phone,email:e.email,userName:e.login.username})})):"loading"]})]})}}]),n}(r.Component),x=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"bg-dark",children:Object(j.jsx)(p,{})})}}]),n}(r.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(43);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),g()}},[[44,1,2]]]);
//# sourceMappingURL=main.1b8280e2.chunk.js.map