(function(e){function t(t){for(var r,a,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({"Create~Details~TripList":"Create~Details~TripList","Create~Signin~Signup":"Create~Signin~Signup",Create:"Create",Details:"Details",TripList:"TripList",Signin:"Signin",Signup:"Signup",NotFound:"NotFound"}[e]||e)+"."+{"Create~Details~TripList":"835f8015","Create~Signin~Signup":"5fc0ef30",Create:"b4598005",Details:"9663cdfc",TripList:"c83c1ac3",Signin:"363318ca",Signup:"275925c2",NotFound:"35a86d0a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Create:1,Details:1,TripList:1,Signin:1,Signup:1,NotFound:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"Create~Details~TripList":"Create~Details~TripList","Create~Signin~Signup":"Create~Signin~Signup",Create:"Create",Details:"Details",TripList:"TripList",Signin:"Signin",Signup:"Signup",NotFound:"NotFound"}[e]||e)+"."+{"Create~Details~TripList":"31d6cfe0","Create~Signin~Signup":"31d6cfe0",Create:"525efffc",Details:"e7d63e20",TripList:"90d02b9c",Signin:"611edd2b",Signup:"ee1cccf8",NotFound:"ee3ab582"}[e]+".css",i=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===r||c===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3aec":function(e,t,n){"use strict";var r=n("2b0e"),a=new r["default"]({data:{user:null},methods:{setUser:function(e){this.user=e},clearUser:function(){this.user=null}},computed:{isLogged:function(){return!!this.user},getToken:function(){return this.user.idToken}}});t["a"]=a},"41a4":function(e,t,n){e.exports=n.p+"media/coverr-ocean-and-footsteps-1559889043636.00faf784.mp4"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view"),n("Footer")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand font-weight-bold",attrs:{to:"/"}},[e._v("ADVENTURE")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse"},[n("div",{staticClass:"ml-auto"},[n("ul",{staticClass:"navbar-nav"},[e.isLogged?[e.isLogged?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/list"}},[e._v("Trips")])],1):e._e(),e.isLogged?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[e._v("Create")])],1),n("span",[n("a",{staticClass:"nav-link",on:{click:e.onLogout}},[e._v("Logout")])])]:[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/signin"}},[e._v("Sign In")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]],2)])])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],u=n("a20e"),l=n("3aec"),c={name:"Header",computed:{isLogged:function(){return l["a"].isLogged}},mixins:[u["a"]],methods:{onLogout:function(){this.logout()}}},d=c,p=(n("ce61"),n("2877")),f=Object(p["a"])(d,o,s,!1,null,"5dfbc74f",null),g=f.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col copyright"},[n("p",{staticClass:"text-center"},[n("small",{staticClass:"text-dark-50"},[e._v("© 2020. All Rights Reserved.")])])])}],m={name:"Footer"},b=m,C=Object(p["a"])(b,h,v,!1,null,null,null),y=C.exports,S={name:"App",components:{Header:g,Footer:y}},_=S,w=Object(p["a"])(_,a,i,!1,null,null,null),L=w.exports,T=n("5f5b"),k=n("b1e0"),E=(n("f9e3"),n("2dd8"),n("d3b7"),n("8c4f")),D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[r("div",{staticClass:"video-background"}),r("video",{attrs:{playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop"},domProps:{muted:!0}},[r("source",{attrs:{src:n("41a4"),type:"video/mp4"}})]),e._m(0)]),e._m(1)])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container h-100"},[n("div",{staticClass:"d-flex h-100 text-center align-items-center"},[n("div",{staticClass:"w-100 text-white font-weight-bold"},[n("h1",{staticClass:"display-3 font-weight-bold"},[e._v("Adventure?")]),n("p",{staticClass:"lead mb-0"},[e._v("Plan and find your next adventure with us.")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"my-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-8 mx-auto"},[n("p",[e._v("What Type Of Adventurer Are You? How adventurous are you really? Are you a light adventurer, who likes a good time but never goes too far out of his/her comfort zone? Or are you a real, true, serious adventurer, who would brave any situation and loves a good challenge?")]),n("p",[e._v("“Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.” – Mark Twain")]),n("p",{staticClass:"mb-0"},[e._v(" For more adventures "),n("a",{attrs:{routerLink:"/auth/signup"}},[e._v("Sing Up")])])])])])])}],P={name:"Home"},O=P,j=(n("8348"),Object(p["a"])(O,D,x,!1,null,"55329231",null)),A=j.exports;function F(e,t,n){l["a"].isLogged?n():n("/signin")}r["default"].use(E["a"]);var N=new E["a"]({mode:"history",routes:[{path:"/",component:A},{path:"/signin",component:function(){return Promise.all([n.e("Create~Signin~Signup"),n.e("Signin")]).then(n.bind(null,"6c89"))}},{path:"/signup",component:function(){return Promise.all([n.e("Create~Signin~Signup"),n.e("Signup")]).then(n.bind(null,"78e9"))}},{path:"/create",component:function(){return Promise.all([n.e("Create~Details~TripList"),n.e("Create~Signin~Signup"),n.e("Create")]).then(n.bind(null,"ae53"))},beforeEnter:F},{path:"/edit/:id",name:"edit",props:!0,component:function(){return Promise.all([n.e("Create~Details~TripList"),n.e("Create~Signin~Signup"),n.e("Create")]).then(n.bind(null,"79dd"))},beforeEnter:F},{path:"/list",props:!0,component:function(){return Promise.all([n.e("Create~Details~TripList"),n.e("TripList")]).then(n.bind(null,"5763"))},beforeEnter:F,children:[{path:"details/:id",component:function(){return Promise.all([n.e("Create~Details~TripList"),n.e("Details")]).then(n.bind(null,"4a0f"))},props:!0,beforeEnter:F}]},{path:"*",component:function(){return n.e("NotFound").then(n.bind(null,"0756"))}}]});r["default"].use(T["a"]),r["default"].use(k["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(L)},router:N}).$mount("#app")},8348:function(e,t,n){"use strict";var r=n("c0cd"),a=n.n(r);a.a},a20e:function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),i=a.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1",headers:{"Content-Type":"application/json"}});i.interceptors.request.use((function(e){return e.url="".concat(e.url,"?key=AIzaSyADBIZkF3GnSQM5AP_pOW7aE9SFSBfbpP0"),e}));var o=i,s=n("3aec");t["a"]={data:function(){return{}},methods:{signin:function(e){var t=this;o.post("/accounts:signInWithPassword",e).then((function(e){s["a"].setUser(e.data),t.$router.push("/list")})).catch((function(e){console.error(e)}))},signup:function(e){var t=this;o.post("/accounts:signUp",e).then((function(e){s["a"].setUser(e.data),t.$router.push("/list")})).catch((function(e){console.error(e)}))},logout:function(){s["a"].clearUser(),this.$router.push("/")}}}},c0cd:function(e,t,n){},ce61:function(e,t,n){"use strict";var r=n("dd85"),a=n.n(r);a.a},dd85:function(e,t,n){}});
//# sourceMappingURL=app.7afe92d9.js.map