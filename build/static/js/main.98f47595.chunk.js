(this["webpackJsonpteam-builder"]=this["webpackJsonpteam-builder"]||[]).push([[0],{28:function(e,t,n){e.exports=n(50)},33:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o);n(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(9),u=n(6),s=function(){return function(e){fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/companies").then((function(e){return e.json()})).then((function(e){return e})).then((function(t){return e(function(e){return{type:"FETCH_COMPANIES_SUCCESS",payload:e}}(t))})).catch((function(e){return function(e){return{type:"FETCH_COMPANIES_FAIL",payload:e}}(e)}))}},l=function(e,t){return function(n){n({type:"LOGIN_START"}),function(e,t){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/login",{method:"POST",body:JSON.stringify({email:e,password:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e}))}(e,t).then((function(e){if(200===e.status)return e.json();throw new Error("Login failed")})).then((function(e){return n(function(e){return sessionStorage.setItem("userToken",e.token),{type:"LOGIN_SUCCESS",payload:e}}(e))})).catch((function(e){return n(function(e){return console.log(e),{type:"LOGIN_FAIL",payload:e}}(e))}))}},p=function(e){return function(t){var n;t({type:"REGISTER_START"}),(n=e,fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e}))).then((function(e){return e})).then((function(e){200===e.status?(console.log("You have registered successfully",e),t({type:"REGISTER_SUCCESS",payload:"You have registered successfully"})):(console.log("Something went wrong while registering",e),t({type:"REGISTER_FAIL",payload:"something went wrong while registering"}))}))}},m=function(e){return function(t){(function(e){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/logout",{method:"GET",headers:{token:e}}).then((function(e){return e}))})(e).then((function(e){if(200!==e.status)throw new Error("Logout failed");t({type:"LOGLOGOUT_SUCCESSOUT"})})).catch((function(e){return t(function(e){return{type:"LOGOUT_FAIL",payload:e}}(e))}))}},h=function(e){return function(t){t({type:"fETCH_USER_START"}),function(e){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users",{method:"GET",headers:{token:e}}).then((function(e){return e}))}(e).then((function(e){if(200===e.status)return e.json();throw new Error("User data failed to get by token")})).then((function(e){return t(function(e){return{type:"fETCH_USER_SUCCESS",payload:e}}(e))})).catch((function(e){return t(function(e){return{type:"fETCH_USER_FAIL",payload:e}}(e))}))}},d=function(e){return function(t){t({type:"FETCH_TOPICS_START"}),function(e){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics",{method:"GET",headers:{token:e,"Content-Type":"application/json"}}).then((function(e){return e}))}(e).then((function(e){if(200===e.status)return e.json();throw new Error("Topics dispatch failed.")})).then((function(e){return t(function(e){return{type:"FETCH_TOPICS_SUCCESS",payload:e}}(e))})).catch((function(e){return t(function(e){return{type:"FETCH_TOPICS_FAIL",payload:e}}(e))}))}},f=function(e,t){return function(n){n({type:"ADD_TOPIC_START"}),function(e,t){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics",{method:"POST",headers:{token:e,"Content-Type":"application/json"},body:JSON.stringify({title:t})}).then((function(e){return e}))}(e,t).then((function(e){if(200===e.status)return e.json();throw new Error("Topic addition failed")})).then((function(t){n(function(e){return{type:"ADD_TOPIC_SUCCESS",payload:e}}(t)),n(d(e))})).catch((function(e){return n(function(e){return{type:"ADD_TOPIC_FAIL",payload:e}}(e))}))}},E=function(e,t,n){return function(a){a({type:"VOTE_TOPIC_START"}),function(e,t,n){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/".concat(n,"/voting"),{method:"POST",headers:{token:e,"Content-Type":"application/json"},body:JSON.stringify({type:t})}).then((function(e){return e}))}(e,t,n).then((function(t){if(200!==t.status)throw new Error("Voting failed");a({type:"VOTE_TOPIC_SUCCESS"}),a(d(e))})).catch((function(e){return a(function(e){return{type:"VOTE_TOPIC_FAIL",payload:e}}(e))}))}},g=function(e,t){return function(n){n({type:"DELETE_TOPIC_START"}),function(e,t){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/".concat(t),{method:"DELETE",headers:{token:e,"Content-Type":"application/json"}}).then((function(e){return e}))}(e,t).then((function(t){if(200!==t.status)throw new Error("Deleting failed");n({type:"DELETE_TOPIC_SUCCESS"}),n(d(e))})).catch((function(e){return n(function(e){return{type:"DELETE_TOPIC_FAIL",payload:e}}(e))}))}},b=function(e){return function(t){t({type:"FETCH_TEAMS_START"}),function(e){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/teams",{method:"GET",headers:{token:e,"Content-Type":"application/json"}}).then((function(e){return e}))}(e).then((function(e){if(200===e.status)return e.json();throw new Error("Teams fetch failed.")})).then((function(e){return t(function(e){return{type:"FETCH_TEAMS_SUCCESS",payload:e}}(e))})).catch((function(e){return t(function(e){return{type:"FETCH_TEAMS_FAIL",payload:e}}(e))}))}},C=function(e){return function(t){t({type:"FETCH_PROJECTS_START"}),function(e){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/projects",{method:"GET",headers:{token:e,"Content-Type":"application/json"}}).then((function(e){return e}))}(e).then((function(e){if(200===e.status)return e.json();throw new Error("Topics dispatch failed.")})).then((function(e){return t(function(e){return{type:"FETCH_PROJECTS_SUCCESS",payload:e}}(e))})).catch((function(e){return t(function(e){return{type:"FETCH_PROJECTS_FAIL",payload:e}}(e))}))}},O=function(e,t,n){return function(a){a({type:"VOTE_PROJECT_START"}),function(e,t,n){return fetch("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/projects/".concat(n,"/voting"),{method:"POST",headers:{token:e,"Content-Type":"application/json"},body:JSON.stringify({type:t})}).then((function(e){return e}))}(e,t,n).then((function(t){if(200!==t.status)throw new Error("Voting failed");a({type:"VOTE_PROJECT_SUCCESS"}),a(C(e))})).catch((function(e){return a(function(e){return{type:"VOTE_PROJECT_FAIL",payload:e}}(e))}))}},v=n(4),y=n(5),T=n(8),j=n(7),S=(n(38),function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isDropdownOpen:!1},e.handleDropdownOpen=function(){e.setState((function(e){return{isDropdownOpen:!e.isDropdownOpen}}))},e}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"accDropdownWrap"},r.a.createElement("span",{className:"myAccBtn",onClick:this.handleDropdownOpen},"My Account"),r.a.createElement("div",{className:"dropdown ".concat(this.state.isDropdownOpen?"open":"")},r.a.createElement(u.b,{to:"my-account",onClick:this.handleDropdownOpen},r.a.createElement("img",{src:this.props.avatarUrl,className:"avatar"})),r.a.createElement(u.b,{to:"my-account",onClick:this.handleDropdownOpen},"Edit my account"),r.a.createElement("span",{className:"logoutBtn",onClick:this.props.logout},"Log out")))}}]),n}(r.a.Component)),_=(n(40),function(e){var t=r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(u.c,{to:"/",exact:!0},"Home")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/topics"},"Topics")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/projects"},"Projects")));return e.loggedIn||(t=r.a.createElement("li",null,r.a.createElement(u.c,{to:"login"},"Log In"))),r.a.createElement("div",{className:"navigation"},r.a.createElement("ul",{className:"mainMenu"},t),e.loggedIn?r.a.createElement(S,{logout:e.logout,avatarUrl:e.avatarUrl}):null)}),k=(n(41),Object(i.b)((function(e){return{token:e.auth.token,userInfo:e.auth.userInfo}}),(function(e){return{onLogout:function(t){return e(m(t))}}}))((function(e){return r.a.createElement("div",{className:"header"},r.a.createElement(_,{loggedIn:e.token,logout:function(){return e.onLogout(e.token)},avatarUrl:e.userInfo.avatarUrl}))}))),L=n(3),I=(n(42),function(e){return r.a.createElement("div",{className:"teamCard"},r.a.createElement("p",null,"Team name: ",e.name),r.a.createElement("p",null,"Topic: ",e.topic),r.a.createElement("p",null,"Project: ",e.project),r.a.createElement("h5",null,"Members"),r.a.createElement("div",{className:"members"},e.members.map((function(e){return r.a.createElement("p",{key:e.avatarUrl},"Name: ",e.firstName," ",e.lastName)}))))}),A=(n(43),function(){return r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),F=(n(44),n(1)),w={teams:[{id:1,name:"Editor",topic:"Hooks",project:"Canvas",members:[{firstName:"Name",lastName:"Lname",avatarUrl:"test.jpg"}]},{id:2,name:"Editor",topic:"Hooks",project:"Canvas",members:[{firstName:"Name",lastName:"Lname",avatarUrl:"test.jpg"}]},{id:3,name:"Editor",topic:"Hooks",project:"Canvas",members:[{firstName:"Name",lastName:"Lname",avatarUrl:"test.jpg"}]}],isLoading:!1,error:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TEAMS_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0,error:""});case"FETCH_TEAMS_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,teams:t.payload,error:""});case"FETCH_TEAMS_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});default:return e}},R=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.onFetchTeams(e.props.token)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=r.a.createElement(A,null);return this.props.isLoading||(e=this.props.teams.map((function(e){return r.a.createElement(I,{name:e.name,topic:e.topic,project:e.project,members:e.members,key:String(e.id)})}))),r.a.createElement(r.a.Fragment,null,this.props.token?null:r.a.createElement(L.a,{to:"login"}),r.a.createElement("h1",null,"Teams"),r.a.createElement("div",{className:"teams"},e))}}]),n}(r.a.Component),U=Object(i.b)((function(e){return{error:e.teams.error,isLoading:e.teams.isLoading,teams:e.teams.teams,token:e.auth.token}}),(function(e){return{onFetchTeams:function(t){return e(b(t))}}}))(R),P=n(15),D=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t,n){e.setState(Object(P.a)({},n,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.submit(e.state.email,e.state.password)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e.handleChange(t,"email")},value:this.state.email}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(t){return e.handleChange(t,"password")},value:this.state.password}),r.a.createElement("input",{type:"submit",value:"Log in"})))}}]),n}(r.a.Component),x=Object(i.b)((function(e){return{token:e.auth.token,error:e.auth.error}}),(function(e){return{onLogin:function(t,n){return e(l(t,n))}}}))((function(e){return r.a.createElement(r.a.Fragment,null,e.token?r.a.createElement(L.a,{to:"/"}):null,r.a.createElement("div",null,r.a.createElement(D,{submit:e.onLogin}),e.error?r.a.createElement("div",{className:"error"}," ",e.error," "):null,r.a.createElement("div",{className:"note"},"Don't have account yet? ",r.a.createElement(u.b,{to:"register"},"Sign Up"))))})),H=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputs:Object(F.a)({},e.props.userInfo)},e.componentDidMount=function(){console.log("update"),e.props.onFetchUser(e.props.token)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props.userInfo),r.a.createElement(r.a.Fragment,null,this.props.token?null:r.a.createElement(L.a,{to:"/login"}),r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e.handleChange(t,"email")},value:this.state.inputs.email}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(t){return e.handleChange(t,"password")},value:this.state.inputs.password}),r.a.createElement("input",{type:"text",placeholder:"First Name",onChange:function(t){return e.handleChange(t,"firstName")},value:this.state.inputs.firstName}),r.a.createElement("input",{type:"text",placeholder:"Last Name",onChange:function(t){return e.handleChange(t,"lastName")},value:this.state.inputs.lastName}),r.a.createElement("input",{type:"text",placeholder:"Birth Date",onChange:function(t){return e.handleChange(t,"birthDate")},value:this.state.inputs.birthDate}),r.a.createElement("div",{className:"radioInputs"},r.a.createElement("input",{id:"male",type:"radio",name:"sex",value:"male",onChange:function(t){return e.handleChange(t,"sex")},checked:"male"===this.state.inputs.sex}),r.a.createElement("label",{htmlFor:"male"},"Male"),r.a.createElement("input",{id:"female",type:"radio",name:"sex",value:"female",onChange:function(t){return e.handleChange(t,"sex")},checked:"female"===this.state.inputs.sex}),r.a.createElement("label",{htmlFor:"female"},"Female")),r.a.createElement("input",{type:"text",placeholder:"Avatar URL",onChange:function(t){return e.handleChange(t,"avatarUrl")},value:this.state.inputs.avatarUrl}),r.a.createElement("input",{type:"number",placeholder:"JS Experience",onChange:function(t){return e.handleChange(t,"jsExperience")},value:this.state.inputs.jsExperience}),r.a.createElement("input",{type:"number",placeholder:"React Experience",onChange:function(t){return e.handleChange(t,"reactExperience")},value:this.state.inputs.reactExperience}),r.a.createElement("select",{onChange:function(t){return e.handleChange(t,"companyId")},value:this.state.inputs.companyId},r.a.createElement("option",{value:""},"Choose company"),this.props.companies.map((function(e){return r.a.createElement("option",{key:"".concat(e.id),value:e.id},e.name)}))),r.a.createElement("input",{type:"submit",value:"Register",disabled:this.props.loading}))))}}]),n}(r.a.Component),M=Object(i.b)((function(e){return{token:e.auth.token,companies:e.auth.companies,userInfo:e.auth.userInfo}}),(function(e){return{onFetchUser:function(t){return e(h(t))},onUserUpdate:function(t){return e()}}}))(H),V=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputs:{email:"",password:"",firstName:"",lastName:"",birthDate:"",sex:"",avatarUrl:"",jsExperience:"",reactExperience:"",companyId:0}},e.handleChange=function(t,n){var a=Object(F.a)(Object(F.a)({},e.state.inputs),{},Object(P.a)({},n,t.target.value));"companyId"===n&&(a.companyId=+t.target.value),e.setState({inputs:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.submitForm(e.state.inputs)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"registerForm"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e.handleChange(t,"email")},value:this.state.inputs.email}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:function(t){return e.handleChange(t,"password")},value:this.state.inputs.password}),r.a.createElement("input",{type:"text",placeholder:"First Name",onChange:function(t){return e.handleChange(t,"firstName")},value:this.state.inputs.firstName}),r.a.createElement("input",{type:"text",placeholder:"Last Name",onChange:function(t){return e.handleChange(t,"lastName")},value:this.state.inputs.lastName}),r.a.createElement("input",{type:"text",placeholder:"Birth Date",onChange:function(t){return e.handleChange(t,"birthDate")},value:this.state.inputs.birthDate}),r.a.createElement("div",{className:"radioInputs"},r.a.createElement("input",{id:"male",type:"radio",name:"sex",value:"male",onChange:function(t){return e.handleChange(t,"sex")},checked:"male"===this.state.inputs.sex}),r.a.createElement("label",{htmlFor:"male"},"Male"),r.a.createElement("input",{id:"female",type:"radio",name:"sex",value:"female",onChange:function(t){return e.handleChange(t,"sex")},checked:"female"===this.state.inputs.sex}),r.a.createElement("label",{htmlFor:"female"},"Female")),r.a.createElement("input",{type:"text",placeholder:"Avatar URL",onChange:function(t){return e.handleChange(t,"avatarUrl")},value:this.state.inputs.avatarUrl}),r.a.createElement("input",{type:"number",placeholder:"JS Experience",onChange:function(t){return e.handleChange(t,"jsExperience")},value:this.state.inputs.jsExperience}),r.a.createElement("input",{type:"number",placeholder:"React Experience",onChange:function(t){return e.handleChange(t,"reactExperience")},value:this.state.inputs.reactExperience}),r.a.createElement("select",{onChange:function(t){return e.handleChange(t,"companyId")},value:this.state.inputs.companyId},r.a.createElement("option",{value:""},"Choose company"),this.props.companies.map((function(e){return r.a.createElement("option",{key:"".concat(e.id),value:e.id},e.name)}))),r.a.createElement("input",{type:"submit",value:"Register",disabled:this.props.loading})))}}]),n}(r.a.Component),G=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.isRegistered?r.a.createElement("p",null,"You have registered successfully. Please ",r.a.createElement(u.b,{to:"/login"},"login here")):r.a.createElement(V,{companies:this.props.companies,loading:this.props.isLoading,submitForm:this.props.onRegister}),this.props.regError?r.a.createElement("div",{className:"error"},this.props.regError):null,r.a.createElement("div",{className:"note"},"Already have an account? ",r.a.createElement(u.b,{to:"login"},"Log in")))}}]),n}(r.a.Component),J=Object(i.b)((function(e){return{token:e.auth.token,companies:e.auth.companies,regError:e.auth.regError,isRegistered:e.auth.isRegistered,isLoading:e.auth.isLoading}}),(function(e){return{onRegister:function(t){return e(p(t))}}}))(G),B=(n(45),function(e){var t="like";return e.votedByMe&&(t="unlike"),r.a.createElement("div",{className:"topic"},r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"btnsWrap"},e.votingsCount?r.a.createElement("div",{className:"votes"},"Votes: ",e.votingsCount):null,r.a.createElement("button",{className:"likeBtn ".concat(e.votedByMe?"liked":""),onClick:function(){return e.voting(t,e.id)}},"Like",e.votedByMe?"d":""),r.a.createElement("button",{className:"deletBtn",disabled:!e.canDelete,onClick:function(){return e.deleting(e.id)}},"\xd7")))}),W=(n(46),function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={input:""},e.handleSubmit=function(t){t.preventDefault(),e.props.submit(e.state.input),e.setState({input:""})},e.handleChange=function(t){e.setState({input:t.target.value})},e}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"topicForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.input,placeholder:"Topic title",onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Add"})))}}]),n}(r.a.Component)),Y=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.onTopicsFetch(e.props.token)},e.handleTopicAdd=function(t){e.props.onTopicAdd(e.props.token,t)},e.handleVoting=function(t,n){e.props.onTopicVote(e.props.token,t,n)},e.handleDelete=function(t){e.props.onDeleteTopic(e.props.token,t)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return setTimeout((function(){}),5e3),r.a.createElement(r.a.Fragment,null,this.props.token?null:r.a.createElement(L.a,{to:"/login"}),r.a.createElement("div",{className:"topics"},r.a.createElement(W,{submit:this.handleTopicAdd}),this.props.topics.map((function(t){return r.a.createElement(B,{title:t.title,votingsCount:t.votingsCount,key:t.id,id:t.id,votedByMe:t.votedByMe,canDelete:t.canDelete,voting:e.handleVoting,deleting:e.handleDelete})}))))}}]),n}(r.a.Component),$=Object(i.b)((function(e){return{token:e.auth.token,topics:e.topics.topicsList}}),(function(e){return{onTopicsFetch:function(t){return e(d(t))},onTopicAdd:function(t,n){return e(f(t,n))},onTopicVote:function(t,n,a){return e(E(t,n,a))},onDeleteTopic:function(t,n){return e(g(t,n))}}}))(Y),q=(n(47),function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.onProjectsFetch(e.props.token)},e.handleVoting=function(t,n){var a="like";t&&(a="unlike"),e.props.onProjectVote(e.props.token,a,n)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.token?null:r.a.createElement(L.a,{to:"/login"}),r.a.createElement("div",{className:"projectList"},this.props.projects.map((function(t){return r.a.createElement("div",{className:"project",key:String(t.id)},r.a.createElement("div",null,r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.description)),r.a.createElement("div",null,r.a.createElement("button",{className:"likeBtn ".concat(t.votedByMe?"liked":""),onClick:function(){return e.handleVoting(t.votedByMe,t.id)}},"Like",t.votedByMe?"d":"")))}))))}}]),n}(r.a.Component)),z=Object(i.b)((function(e){return{token:e.auth.token,projects:e.projects.projects}}),(function(e){return{onProjectsFetch:function(t){return e(C(t))},onProjectVote:function(t,n,a){return e(O(t,n,a))}}}))(q),K=(n(48),function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Page not found"))}),Q=function(e){Object(T.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.token&&e.props.onFetchUser(e.props.token),0===e.props.companies.length&&e.props.onCompanyFetch()},e}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/",exact:!0,component:U}),r.a.createElement(L.b,{path:"/login",exact:!0,component:x}),r.a.createElement(L.b,{path:"/register",exact:!0,component:J}),r.a.createElement(L.b,{path:"/my-account",exact:!0,component:M}),r.a.createElement(L.b,{path:"/topics",exact:!0,component:$}),r.a.createElement(L.b,{path:"/projects",exact:!0,component:z}),r.a.createElement(L.b,{component:K}))}}]),n}(r.a.Component),X=Object(i.b)((function(e){return{token:e.auth.token,companies:e.auth.companies}}),(function(e){return{onFetchUser:function(t){return e(h(t))},onCompanyFetch:function(){return e(s())}}}))(Q),Z=(n(49),function(){return r.a.createElement("div",{id:"main"},r.a.createElement(k,null),r.a.createElement("div",{className:"container"},r.a.createElement(X,null)))}),ee=n(16),te=n(27),ne={token:sessionStorage.getItem("userToken")||"",userInfo:{},companies:[],isLoading:!1,regError:!1,isRegistered:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMPANIES_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{companies:t.payload});case"LOGIN_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"LOGIN_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{userInfo:t.payload,token:t.payload.token,isLoading:!1});case"LOGIN_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});case"REGISTER_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0,regError:!1});case"REGISTER_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isRegistered:!0,isLoading:!1,regError:!1});case"REGISTER_FAIL":return console.log(t),Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,isRegistered:!1,regError:t.payload});case"LOGLOGOUT_SUCCESSOUT":return sessionStorage.removeItem("userToken"),Object(F.a)(Object(F.a)({},e),{},{token:"",userInfo:{}});case"fETCH_USER_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{userInfo:t.payload});default:return e}},re={topicsList:[],error:"",isLoading:!1,topicAdded:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TOPICS_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"FETCH_TOPICS_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,topicsList:t.payload,error:""});case"FETCH_TOPICS_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});case"ADD_TOPIC_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"ADD_TOPIC_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,topicAdded:!0,error:""});case"ADD_TOPIC_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});case"VOTE_TOPIC_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"VOTE_TOPIC_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:""});case"VOTE_TOPIC_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});case"DELETE_TOPIC_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"DELETE_TOPIC_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:""});case"DELETE_TOPIC_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});default:return e}},ce={projects:[],error:"",isLoading:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROJECTS_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"FETCH_PROJECTS_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,projects:t.payload,error:""});case"FETCH_PROJECTS_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});case"VOTE_PROJECT_START":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!0});case"VOTE_PROJECT_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:""});case"VOTE_PROJECT_FAIL":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,error:t.payload.message});default:return e}},ue=Object(ee.c)({auth:ae,topics:oe,teams:N,projects:ie}),se=Object(ee.d)(ue,Object(ee.a)(te.a));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(i.a,{store:se},r.a.createElement(Z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.98f47595.chunk.js.map