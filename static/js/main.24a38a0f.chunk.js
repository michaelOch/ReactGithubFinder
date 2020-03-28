(this["webpackJsonpreact-githubfinder"]=this["webpackJsonpreact-githubfinder"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(3),c=t.n(s);t(13),t(14);var l=function(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-info mb-3"},n.a.createElement("div",{className:"container"},n.a.createElement("span",{className:"navbar-brand"},"Github Finder")))},o=t(4),i=t(5),m=t(1),d=t(6),u=t(7);var p=function(e){return n.a.createElement("main",null,n.a.createElement("div",{className:"card card-body mb-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{className:"img-fluid mb-2",src:e.data.avatar_url,alt:"profile"}),n.a.createElement("a",{href:e.data.html_url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary btn-block mb-2"},"View Profile")),n.a.createElement("div",{className:"col-md-9"},n.a.createElement("span",{className:"badge badge-primary mr-2"},"Public Repos: ",e.data.public_repos),n.a.createElement("span",{className:"badge badge-secondary mr-2"},"Public Gists: ",e.data.public_gists),n.a.createElement("span",{className:"badge badge-success mr-2"},"Followers: ",e.data.followers),n.a.createElement("span",{className:"badge badge-info"},"Following: ",e.data.following),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"Company:")," ",e.data.company),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"Website/Blog:")," ",e.data.blog),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"Location:")," ",e.data.location),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("strong",null,"Member Since:")," ",e.data.created_at))))),n.a.createElement("h5",{className:"page-heading mb-3"},"Latest Repos"))};var b=function(e){return e.repo?n.a.createElement("div",{className:"card card-body mb-2"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("a",{href:e.repo.html_url,target:"_blank",rel:"noopener noreferrer"},e.repo.name)),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("span",{className:"badge badge-primary mr-2"},"Stars: ",e.repo.stargazers_count),n.a.createElement("span",{className:"badge badge-secondary mr-2"},"Watchers: ",e.repo.watchers_count),n.a.createElement("span",{className:"badge badge-success mr-2"},"Forks: ",e.repo.forks_count)))):n.a.createElement("div",null)},h=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=a.call(this,e)).client_id="6a47cf9dcc010584fa67",r.client_secret="b4f6cc84dd2b0cb51b1953ec41c91dfe9cf7a59e",r.repos_count=5,r.repos_sort="created: asc",r.state={user:"",data:{},repos:[],isLoadedUser:!1,isLoadedRepos:!1},r.handleChange=r.handleChange.bind(Object(m.a)(r)),r}return Object(i.a)(t,[{key:"handleChange",value:function(e){var a=this,t=e.target.value;this.setState({user:t,isLoadedUser:!1,isLoadedRepos:!1}),fetch("https://api.github.com/users/".concat(t,"?client_id=").concat(this.client_id,"&client_secret=").concat(this.client_secret)).then((function(e){return e.json()})).then((function(e){a.setState({isLoadedUser:!0,data:e})})),fetch("https://api.github.com/users/".concat(t,"/repos?per_page=").concat(this.repos_count,"&sort=").concat(this.repos_sort,"&client_id=").concat(this.client_id,"&client_secret=").concat(this.client_secret)).then((function(e){return e.json()})).then((function(e){a.setState({isLoadedRepos:!0,repos:e})}))}},{key:"render",value:function(){var e,a,t,r,s=this.state,c=s.isLoadedUser,l=s.isLoadedRepos,o=[];if(""!==this.state.user)if(t=c?n.a.createElement("div",null):n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border text-info mt-5",style:{width:"5rem",height:"5rem"},role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))),"Not Found"===this.state.data.message||0===Object.entries(this.state.data).length)a=n.a.createElement("div",{className:"alert alert-danger"},"User Not Found");else if(e=n.a.createElement(p,{data:this.state.data}),r=this.state.repos,l&&r.length)for(var i=0;i<this.repos_count;i++)o.push(n.a.createElement(b,{key:r[i].id,repo:r[i]}));return n.a.createElement("div",{className:"container"},a,n.a.createElement("div",{className:"card card-body mb-3"},n.a.createElement("h4",null,"Search Github Users"),n.a.createElement("p",{className:"lead"},"Enter a username to fetch a user profile and repos"),n.a.createElement("input",{type:"text",name:"user",className:"form-control",placeholder:"Github username...",onChange:this.handleChange})),t,c?e:null,l?o:null)}}]),t}(r.Component);var g=function(){return n.a.createElement("footer",{className:"mt-5 p-3 text-center bg-light"},"Github Finder \xa9 2020")};var E=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l,null),n.a.createElement(h,null),n.a.createElement(g,null))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.24a38a0f.chunk.js.map