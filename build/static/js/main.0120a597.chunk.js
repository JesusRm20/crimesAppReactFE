(this.webpackJsonpfirstproject=this.webpackJsonpfirstproject||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"jwtPrivateKey":"secrete","pathLogin":"http://localhost/login","pathLoad":"http://localhost/load","pathSignUp":"http://localhost/signup","pathCrimeDetails":"http://localhost/edit/","pathCrimes":"http://localhost/home","updateCrime":"http://localhost/updateCrime","deleteCrime":"http://localhost/delete/","requiresAuth":false}')},37:function(e,t,a){e.exports=a(67)},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),o=a(10),s=(a(42),a(1)),m=a.n(s),i=a(3),u=a(5),d=a(6),p=a(8),E=a(7),h=a(2),f=function(e){var t=Object(h.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:e.session?"/":"/login"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},e.session?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/loadCrimes"},"Load Crimes"))):null),r.a.createElement("span",{className:"navbar-text"},"/login"===t.pathname?r.a.createElement(o.b,{to:"/signup"},r.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"}," Sign Up ")):r.a.createElement(o.b,{to:e.logged?"/":"/login"},r.a.createElement("i",{className:e.session?"fa fa-sign-out":"fa fa-sign-in",onClick:e.session?e.logOut:null,"aria-hidden":"true"},e.session?"Log out":"Log in"))))))},g=a(15),b=a.n(g),v=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.allCategories,a=e.selectedCategory,n=e.onCategoryChange;return r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{key:"allCategories"},r.a.createElement("button",{type:"button",className:"allCategories"===a?"list-group-item col-md-12 active":"list-group-item col-md-12",onClick:function(){return n("allCategories")}},"All Categories")),t.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("button",{type:"button",className:a===e?"list-group-item col-md-12 active":"list-group-item col-md-12",onClick:function(){return n(e)}},e))})))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.itemsCount,a=e.pageSize,n=e.onPageChange,l=e.currentPage,c=Math.ceil(t/a);if(1===c)return null;var o=b.a.range(1,c+1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("button",{className:l===e?"page-link bg-primary text-white active":"page-link",onClick:function(){return n(e)}},e))}))))))}}]),a}(n.Component);var y=a(14),C=a(18),w=a.n(C),x={get:w.a.get,post:w.a.post,put:w.a.put,delete:w.a.delete},k={loadCrimes:function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(y.pathLoad,t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),crimeDetails:function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(y.pathCrimeDetails+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCrimes:function(){var e=Object(i.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(y.pathCrimes);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateCrime:function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.put(y.updateCrime,{obj:t});case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteCrime:function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.delete(y.deleteCrime+t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={crimes:[],crime:[],categories:[],elements:[],selectedCategory:"allCategories",currentPage:1,pageSize:5,sortColumn:{path:"",order:""}},e.filterCrimes=function(e,t){return"allCategories"!==t?e.filter((function(e){if(e.category_id===t)return e.category_id})):e},e.handleSort=function(t,a){a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.setState({sortColumn:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.selectedCategoryChange=function(t){var a=t;e.setState({selectedCategory:a});e.setState({currentPage:1})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark((function e(){var t,a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getCrimes();case 2:t=e.sent,this.setState({crimes:t}),a=[],t.map((function(e){a.push(e.category_id)})),n=b.a.uniq(a),this.setState({categories:n}),r="allCategories"===this.state.selectedCategory?this.state.crimes:null,this.setState({elements:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.crimes,n=t.selectedCategory,l=t.sortColumn,c=t.currentPage,s=t.pageSize,m=t.categories,i="allCategories"!==n?this.filterCrimes(a,n):a,u=function(e,t,a){var n=(t-1)*a;return b()(e).slice(n).take(a).value()}(b.a.orderBy(i,[l.path],[l.order]),c,s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3 m-2"},r.a.createElement(v,{allCategories:m,selectedCategory:n,onCategoryChange:this.selectedCategoryChange})),r.a.createElement("div",{className:"col m-4"},r.a.createElement("p",null,"Showing ",u.length," crimes in the database."),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",onClick:function(){return e.handleSort("id",l)}},"#"),r.a.createElement("th",{scope:"col",onClick:function(){return e.handleSort("category_id",l)}},"Category"),r.a.createElement("th",{scope:"col",onClick:function(){return e.handleSort("latitude",l)}},"Latitud"),r.a.createElement("th",{scope:"col",onClick:function(){return e.handleSort("longitude",l)}},"Longitude"),r.a.createElement("th",{scope:"col",onClick:function(){return e.handleSort("street_name",l)}},"Street Name"),r.a.createElement("th",{scope:"col"},"Outcome"),r.a.createElement("th",{scope:"col",onClick:function(){return e.handleSort("month",l)}},"Month"),r.a.createElement("th",{scope:"col"},"Delete"))),r.a.createElement("tbody",null,u.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.category_id),r.a.createElement("td",null,e.latitude),r.a.createElement("td",null,e.longitude),r.a.createElement("td",null,e.street_name),r.a.createElement("td",null,e.outcome_status),r.a.createElement("td",null,e.month),r.a.createElement("td",null,r.a.createElement(o.b,{to:{pathname:"/crimeDetails/"+e.id,crime:{out:e}}},r.a.createElement("button",{className:"btn btn-primary"},"Details"))))})))),r.a.createElement("div",null,r.a.createElement(N,{itemsCount:i.length,pageSize:s,currentPage:c,onPageChange:this.handlePageChange})))))}}]),a}(n.Component),O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-form m-5"},r.a.createElement("div",{className:"cotainer"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("form",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Log in"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"userName",className:"col-md-4 col-form-label text-md-right"},"User Name"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{type:"text",id:"userName",className:"form-control",name:"userName",required:!0,autoFocus:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"password",className:"col-md-4 col-form-label text-md-right"},"Password"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{type:"password",id:"password",className:"form-control",name:"password",required:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-6 offset-md-4"},r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:"remember"})," Remember Me")))),r.a.createElement("div",{className:"col-md-6 offset-md-4"},r.a.createElement("button",{type:"button",onClick:function(){return e.onSubmit()},className:"btn btn-primary"},"Log in"),r.a.createElement("a",{href:"#",className:"btn btn-link"},"Forgot Your Password?"),r.a.createElement(o.b,{to:"/signup",className:"btn btn-link"},"Sign Up"))))))))))},j=a(35),_=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.onSubmit;return r.a.createElement("div",{className:"container-fluid col-md-5"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center",id:"title"},"Sign Up to Gain Free Access"),r.a.createElement("p",{className:"text-center"},r.a.createElement("small",{id:"passwordHelpInline",className:"text-muted"}," Developer: follow me on facebook ",r.a.createElement("a",{href:"https://www.facebook.com/JheanYu"}," John niro yumang")," inspired from ",r.a.createElement("a",{href:"https://p.w3layouts.com/"},"https://p.w3layouts.com/"),".")),r.a.createElement("div",Object(j.a)({className:"row"},"className","custom-centered"),r.a.createElement("div",{className:"col align-self-center"},r.a.createElement("center",null,r.a.createElement("fieldset",null,r.a.createElement("form",{onSubmit:e},r.a.createElement("p",{className:"text-uppercase pull-center"}," SIGN UP."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"firstName",id:"firstName",riquire:"true",className:"form-control input-lg text-center",placeholder:"First Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"lastName",id:"lastName",className:"form-control input-lg text-center",placeholder:"Last Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"username",id:"username",className:"form-control input-lg text-center",placeholder:"username"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",name:"email",id:"email",className:"form-control input-lg text-center",placeholder:"Email Address"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"password",id:"password",className:"form-control input-lg text-center",placeholder:"Password"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",name:"passwordConfirm",id:"passwordConfirm",className:"form-control input-lg text-center",placeholder:"Comfirm Password"})),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input"}),"By Clicking register you're agree to our policy & terms")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-md btn-primary"},"Register")))))))),r.a.createElement("p",{className:"text-center"},r.a.createElement("small",{id:"passwordHelpInline",className:"text-muted"}," Developer:",r.a.createElement("a",{href:"http://www.psau.edu.ph/"}," Pampanga state agricultural university ?")," BS. Information and technology students @2017 Credits: ",r.a.createElement("a",{href:"https://v4-alpha.getbootstrap.com/"},"boostrap v4."))))}}]),a}(n.Component),I={login:function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(y.pathLogin,t);case 2:if(a=e.sent,"true"!==(n=a.data).val){e.next=7;break}return localStorage.setItem("token",n.token),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),signout:function(){return localStorage.removeItem("token"),!1},getSession:function(){var e=localStorage.getItem("token");return e||!1},signUp:function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.post(y.pathSignUp,t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",null,"Welcome to Public Street Level Crimes")),r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("p",null,"Here you will be able to load crimes for a specific month."))),r.a.createElement("div",{className:"cotainer"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-8  col-sm-10"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header"},"Please enter a date in a year-month(XXXX-XX) format:"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"date",className:"col-md-4 col-form-label text-md-right"},"Date"),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("input",{type:"text",id:"date",className:"form-control",name:"date",required:!0,autoFocus:!0}))),r.a.createElement("div",{className:"col-md-6 offset-md-4"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Load")))))))))}}]),a}(n.Component),D=a(36),F=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={crime:{id:"",category_id:"",location_type:"",latitude:"",longitude:"",street_name:"",persistent_id:"",month:""},outcomes:[],disabled:!0},e.handleEdit=function(){e.setState({disabled:!1})},e.handleSave=Object(i.a)(m.a.mark((function t(){var a,n,r,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={id:document.getElementById("id").value,category:document.getElementById("category").value,location_type:document.getElementById("location_type").value,latitude:document.getElementById("latitude").value,longitude:document.getElementById("longitude").value,street_name:document.getElementById("street_name").value,month:document.getElementById("month").value},t.next=3,k.updateCrime(a);case 3:n=t.sent,r=n.crime,e.setState({crime:r}),l=n.outcomes,e.setState({outcomes:l}),!0,e.setState({disabled:!0});case 10:case"end":return t.stop()}}),t)}))),e.handleCancel=function(){e.setState({disabled:!0})},e.handleDelete=function(){var t=Object(i.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(D.a)(e.state.outcomes),r=e.state.outcomes.filter((function(e){return e.id!==a})),e.setState({outcomes:r}),t.next=5,k.deleteCrime(a);case 5:t.sent||(r=n,e.setState({outcomes:r}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.crimeDetails(this.props.match.params.id);case 2:t=e.sent,a=t.crime,this.setState({crime:a}),n=t.outcomes,this.setState({outcomes:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.crime,n=t.outcomes,l=t.disabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row custom-centered"},r.a.createElement("div",{className:"col align-self-center"},r.a.createElement("center",null,r.a.createElement("fieldset",null,r.a.createElement("form",{className:"col-md-8 col-sm-9",id:"editCrime"},r.a.createElement("h3",{className:"text-uppercase pull-center"},"CRIME DETAILS"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"id"},"ID"),r.a.createElement("input",{type:"text",name:"id",id:"id",className:"form-control input-lg text-center",defaultValue:a.id,disabled:!0})),r.a.createElement("div",{className:"form-group col-md-6"},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",id:"category",className:"form-control input-lg text-center edit",defaultValue:a.category_id,disabled:l}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("label",{htmlFor:"persistent_id"},"Persistent ID"),r.a.createElement("input",{type:"text",name:"persistent_id",id:"persistent_id",className:"form-control input-lg text-center",defaultValue:a.persistent_id,disabled:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"location_type"},"Location Type"),r.a.createElement("input",{type:"text",name:"location_type",id:"location_type",className:"form-control input-lg text-center edit",defaultValue:a.location_type,disabled:l})),r.a.createElement("div",{className:"form-group col-md-8"},r.a.createElement("label",{htmlFor:"street_name"},"Street"),r.a.createElement("input",{type:"text",name:"street_name",id:"street_name",className:"form-control input-lg text-center edit",defaultValue:a.street_name,disabled:l}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"longitud"},"Longitud"),r.a.createElement("input",{type:"text",name:"longitude",id:"longitude",className:"form-control input-lg text-center edit",defaultValue:a.longitude,disabled:l})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"latitude"},"Latitud"),r.a.createElement("input",{type:"text",name:"latitude",id:"latitude",className:"form-control input-lg text-center edit",defaultValue:a.latitude,disabled:l})),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("label",{htmlFor:"month"},"Month"),r.a.createElement("input",{type:"text",name:"month",id:"month",className:"form-control input-lg text-center edit",defaultValue:a.month,disabled:l}))),r.a.createElement("div",{className:"row md-3"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",id:"cancelEdition",disabled:l,onClick:function(){return e.handleCancel()}}," CANCEL")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-md btn-primary",id:"saveEdition",disabled:l,onClick:function(){return e.handleSave()}},"SAVE")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-md btn-primary",id:"editOutcomes",disabled:!l,onClick:function(){return e.handleEdit()}},"EDIT")))),r.a.createElement("div",{className:"row col-md-8"},r.a.createElement("div",{className:"col self-align-center"},r.a.createElement("h4",{className:"text-uppercase col-md-10"}," OUTCOMES")),r.a.createElement("table",{className:"table table-striped col-md-12"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Category"),r.a.createElement("th",{scope:"col"},"Month"),r.a.createElement("th",{scope:"col"},"Person ID"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,n.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("th",{scope:"row"},t.id),r.a.createElement("td",null,t.category),r.a.createElement("td",null,t.date_1),r.a.createElement("td",null,t.person_id),r.a.createElement("td",null,r.a.createElement("button",{id:"cancelOutcomes",className:"btn btn-md btn-secondary cancel",onClick:function(){return e.handleDelete(t.id)},disabled:l},"DELETE")))}))))))))))))}}]),a}(n.Component),P=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={session:!1,token:!1},e.handleSubmitLogin=Object(i.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={userName:document.getElementById("userName").value,password:document.getElementById("password").value},t.next=3,I.login(a);case 3:t.sent&&(!0,e.setState({session:!0}));case 5:case"end":return t.stop()}}),t)}))),e.handleLogOut=function(){if(!I.signout()){console.log(!1);e.setState({session:!1})}},e.handlesubmitLoad=function(e){e.preventDefault();var t={date:document.getElementById("date").value};k.loadCrimes(t)},e.handlesubmitSignup=function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,username:document.getElementById("username").value,email:document.getElementById("email").value,password:document.getElementById("password").value},n=I.signUp(a),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=I.getSession())&&(!0,this.setState({session:!0}),this.setState({token:t}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{session:this.state.session,logOut:this.handleLogOut}),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/login"},this.state.session?r.a.createElement(h.a,{to:"/"}):r.a.createElement(h.a,{to:"/login"}),r.a.createElement(O,{onSubmit:this.handleSubmitLogin})),r.a.createElement(h.b,{path:"/signup"},this.state.session?r.a.createElement(h.a,{to:"/"}):r.a.createElement(h.a,{to:"/signup"}),r.a.createElement(_,{onSubmit:this.handlesubmitSignup})),r.a.createElement(h.b,{path:"/loadCrimes"},r.a.createElement(L,{onSubmit:this.handlesubmitLoad})),r.a.createElement(h.b,{path:"/crimeDetails/:id",component:F}),r.a.createElement(h.b,{path:"/"},this.state.session?r.a.createElement(h.a,{to:"/"}):r.a.createElement(h.a,{to:"/login"}),r.a.createElement(S,null))))}}]),a}(n.Component);a(66);c.a.render(r.a.createElement(o.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0120a597.chunk.js.map