(function(t){function e(e){for(var n,r,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)r=c[u],o[r]&&p.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0804":function(t,e,a){},"0ffc":function(t,e,a){"use strict";var n=a("2185"),o=a.n(n);o.a},2185:function(t,e,a){},2259:function(t,e,a){},"263d":function(t,e,a){},"27a4":function(t,e,a){"use strict";var n=a("2259"),o=a.n(n);o.a},"35e0":function(t,e,a){},"4c6e":function(t,e,a){"use strict";var n=a("35e0"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Explore"),a("Checkout"),a("Login"),a("Register"),a("DeleteCompany"),a("EditCompany"),a("router-view")],1)},r=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-speed-dial",{staticClass:"always-somewhere",attrs:{top:"",right:"",direction:"bottom"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-btn",{attrs:{color:"indigo darken-3",dark:"",fab:""},on:{click:t.checkAdmin}},[a("v-icon",{attrs:{large:""}},[t._v("explore")])],1)]},proxy:!0}])},[a("div",{staticClass:"offset-button"},[a("v-btn",{staticClass:"offset-button",attrs:{round:"",dark:"",color:"indigo darken-2"},on:{click:t.goHome}},[t._v("\n      Home\n      "),a("v-icon",{attrs:{right:""}},[t._v("home")])],1)],1),a("div",{staticClass:"offset-button"},[t.admin?a("v-btn",{staticClass:"offset-button",attrs:{round:"",dark:"",color:"indigo"},on:{click:t.goAdmin}},[t._v("\n      Admin\n      "),a("v-icon",{attrs:{right:""}},[t._v("remove_red_eye")])],1):a("v-btn",{staticClass:"offset-button",attrs:{round:"",dark:"",color:"indigo"},on:{click:t.triggerOpenCheckout}},[t._v("\n      Checkout\n      "),a("v-icon",{attrs:{right:""}},[t._v("shopping_cart")])],1)],1),a("div",{staticClass:"offset-button"},[t.admin?a("v-btn",{staticClass:"offset-button",attrs:{round:"",dark:"",color:"indigo lighten-1"},on:{click:t.logout}},[t._v("\n      Logout\n      "),a("v-icon",{attrs:{right:""}},[t._v("arrow_back")])],1):a("v-btn",{staticClass:"offset-button",attrs:{round:"",dark:"",color:"indigo lighten-1"},on:{click:t.triggerOpenLogin}},[t._v("\n      Login\n      "),a("v-icon",{attrs:{right:""}},[t._v("account_circle")])],1)],1)])},s=[],l=new n["a"],d="openLoginDialog",u="openRegisterDialog",p="openCheckoutDialog",m="openDeleteDialog",v="openEditDialog",f="companyWasDeleted",h="companyWasEdited",g="companyWasAdded",y=a("d225"),b=a("bd86"),x=function t(){Object(y["a"])(this,t)};Object(b["a"])(x,"isLoggedIn",!1),Object(b["a"])(x,"username","dummy"),Object(b["a"])(x,"isAdmin",!1),Object(b["a"])(x,"cart",{}),Object(b["a"])(x,"company",{}),Object(b["a"])(x,"isAdding",!1),Object(b["a"])(x,"endpoint","http://lest-cst336.herokuapp.com/final/api/");var _=a("5118"),k={data:function(){return{admin:!1}},methods:{triggerOpenCheckout:function(){l.$emit(p)},triggerOpenLogin:function(){l.$emit(d)},triggerOpenRegister:function(){l.$emit(u)},checkAdmin:function(){this.admin=x.isAdmin},goHome:function(){this.$router.push({name:"home"})},goAdmin:function(){this.$router.push({name:"admin"})},logout:function(){var t=this;Object(_["setTimeout"])(function(){x.isAdmin=!1,t.admin=!1,t.$router.push({name:"home"})},500)}},mounted:function(){}},C=k,V=(a("689e"),a("2877")),O=a("6544"),$=a.n(O),w=a("8336"),S=a("132d"),j=a("c73b"),T=Object(V["a"])(C,c,s,!1,null,"4c5ca910",null),E=T.exports;$()(T,{VBtn:w["a"],VIcon:S["a"],VSpeedDial:j["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"indigo lighten-2"},[a("v-toolbar",{attrs:{dark:"",fixed:"",color:"indigo"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("close")])],1),a("v-toolbar-title",[t._v("Cart")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){return t.purchase()}}},[t._v("Checkout = $"+t._s(t.total)+" million")])],1)],1),a("v-layout",{staticClass:"super-off-the-top indigo lighten-4",attrs:{"align-center":"",column:""}},t._l(t.cart,function(t){return a("div",{key:t.name,staticStyle:{"padding-bottom":"2em"}},[a("Company",{attrs:{company:t}})],1)}),0)],1)],1)},D=[],I=(a("c5f6"),a("456d"),a("ac4d"),a("8a81"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"company-card"},[a("v-card",[a("v-img",{staticClass:"square-image",attrs:{src:t.company.image,"aspect-ratio":"1.0",contain:""}}),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.company.name))]),a("div",[t._v(" "+t._s(t.company.description)+" ")])])]),a("v-card-title",[a("div",[a("h3",{staticClass:"headline mb-0"},[a("b",[t._v("CEO:")]),t._v(t._s(" "+t.company.ceo))])])]),a("v-card-actions",[a("h2",{staticClass:"headline mb-0"},[t._v(" "+t._s("$"+t.company.market_value+" million")+" ")]),!t.user.cart[t.comp]&&t.isShopping?a("v-btn",{attrs:{icon:"",flat:"",large:"",color:"indigo"},on:{click:t.addToCart}},[a("v-icon",[t._v("add_shopping_cart")])],1):t._e()],1)],1)],1)}),L=[],P={props:{company:Object,isShopping:Boolean},data:function(){return{comp:JSON.stringify(this.company),user:x}},methods:{addToCart:function(){x.cart[this.comp]||(x.cart[this.comp]=!0,this.user.cart[this.comp]=!0),this.$forceUpdate()},removeFromCart:function(){x.cart[this.comp]&&(x.cart[this.comp]=!1,this.user.cart[this.comp]=!1),this.$forceUpdate()}},mounted:function(){}},F=P,q=(a("c435"),a("b0af")),B=a("99d9"),N=a("12b2"),W=a("adda"),M=Object(V["a"])(F,I,L,!1,null,"821a9012",null),R=M.exports;$()(M,{VBtn:w["a"],VCard:q["a"],VCardActions:B["a"],VCardTitle:N["a"],VIcon:S["a"],VImg:W["a"]});var Y={components:{Company:R},data:function(){return{dialog:!1,cart:[],total:0}},methods:{updateCart:function(){this.cart=x.cart,this.$forceUpdate()},purchase:function(){var t=this,e=!0,a=!1,n=void 0;try{for(var o,i=this.cart[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var r=o.value;fetch(x.endpoint+"purchases.php",{method:"post",body:JSON.stringify({productId:r.compId,unitPrice:r.market_value,purchaseDate:(new Date).toISOString().substring(0,10)})}).then(function(t){return t.text()}).then(function(e){console.log(e),t.cart=[],t.total=0,x.cart={}})}}catch(c){a=!0,n=c}finally{try{e||null==i.return||i.return()}finally{if(a)throw n}}this.dialog=!1}},mounted:function(){var t=this;l.$on(p,function(){t.cart=[];for(var e=0,a=Object.keys(x.cart);e<a.length;e++){var n=a[e];t.cart.push(JSON.parse(n))}var o=!0,i=!1,r=void 0;try{for(var c,s=t.cart[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var l=c.value;t.total+=Number(l.market_value)}}catch(d){i=!0,r=d}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}t.dialog=!0})}},J=Y,U=(a("6b24"),a("169a")),G=a("a722"),H=a("9910"),z=a("71d9"),K=a("2a7f"),Q=Object(V["a"])(J,A,D,!1,null,"223bc37b",null),X=Q.exports;$()(Q,{VBtn:w["a"],VCard:q["a"],VDialog:U["a"],VIcon:S["a"],VLayout:G["a"],VSpacer:H["a"],VToolbar:z["a"],VToolbarItems:K["a"],VToolbarTitle:K["b"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Log Yourself In")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{color:"indigo",label:"Username*",hint:"We record everything.","persistent-hint":"",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{color:"indigo",label:"Password*",type:"password",hint:"We record everything.","persistent-hint":"",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:t.login}},[t._v("Login")])],1)],1)],1)},tt=[],et={data:function(){return{dialog:!1,username:"",password:""}},methods:{login:function(){var t=this;fetch(x.endpoint+"session.php",{method:"POST",body:JSON.stringify({username:this.username,password:this.password})}).then(function(t){return t.text()}).then(function(e){e&&(x.isAdmin=!0),t.dialog=!1}),this.$forceUpdate()}},mounted:function(){var t=this;l.$on(d,function(){return t.dialog=!0})}},at=et,nt=a("a523"),ot=a("0e8f"),it=a("2677"),rt=Object(V["a"])(at,Z,tt,!1,null,null,null),ct=rt.exports;$()(rt,{VBtn:w["a"],VCard:q["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:N["a"],VContainer:nt["a"],VDialog:U["a"],VFlex:ot["a"],VLayout:G["a"],VSpacer:H["a"],VTextField:it["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Register Yourself")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Legal first name*",hint:"Your cooperation is mandatory.","persistent-hint":"",required:""}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-text-field",{attrs:{label:"Legal last name*",hint:"Your cooperation is mandatory.","persistent-hint":"",required:""}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email*",hint:"Your cooperation is mandatory.","persistent-hint":"",required:""}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Password*",type:"password",hint:"Your cooperation is mandatory.","persistent-hint":"",required:""}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Retype Password*",type:"password",hint:"Your cooperation is mandatory.","persistent-hint":"",required:""}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Register")])],1)],1)],1)},lt=[],dt={data:function(){return{dialog:!1}},mounted:function(){var t=this;l.$on(u,function(){return t.dialog=!0})}},ut=dt,pt=Object(V["a"])(ut,st,lt,!1,null,null,null),mt=pt.exports;$()(pt,{VBtn:w["a"],VCard:q["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:N["a"],VContainer:nt["a"],VDialog:U["a"],VFlex:ot["a"],VLayout:G["a"],VSpacer:H["a"],VTextField:it["a"]});var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"1000"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Delete this company?")])]),a("Company",{attrs:{company:t.company,isShopping:!1}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){return t.triggerCompanyDelete()}}},[t._v("Yes")])],1)],1)],1)},ft=[],ht=(a("6b54"),{components:{Company:R},data:function(){return{dialog:!1,company:{}}},methods:{triggerCompanyDelete:function(){var t=this,e=new FormData;e.append("id",this.company.compId),fetch(x.endpoint+"products.php",{method:"DELETE",body:'{"id": '+this.company.compId.toString()+"}"}).then(function(t){return t.text()}).then(function(e){console.log(e),l.$emit(f),t.dialog=!1})}},mounted:function(){var t=this;l.$on(m,function(){t.dialog=!0,t.company=x.company})}}),gt=ht,yt=Object(V["a"])(gt,vt,ft,!1,null,"487b1ff8",null),bt=yt.exports;$()(yt,{VBtn:w["a"],VCard:q["a"],VCardActions:B["a"],VCardTitle:N["a"],VDialog:U["a"],VSpacer:H["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"800"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{color:"indigo",label:"Name",hint:"We record everything.",value:t.company?t.company.name:""},model:{value:t.company.name,callback:function(e){t.$set(t.company,"name",e)},expression:"company.name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{color:"indigo",label:"Image URL",hint:"We record everything.",value:t.company?t.company.image:""},model:{value:t.company.image,callback:function(e){t.$set(t.company,"image",e)},expression:"company.image"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{color:"indigo",label:"Description",hint:"We record everything.",value:t.company?t.company.description:""},model:{value:t.company.description,callback:function(e){t.$set(t.company,"description",e)},expression:"company.description"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{color:"indigo",label:"CEO",hint:"We record everything.",value:t.company?t.company.ceo:""},model:{value:t.company.ceo,callback:function(e){t.$set(t.company,"ceo",e)},expression:"company.ceo"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{color:"indigo",label:"Market Value",hint:"We record everything.",value:t.company?t.company.market_value:"",mask:"############"},model:{value:t.company.market_value,callback:function(e){t.$set(t.company,"market_value",e)},expression:"company.market_value"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"indigo darken-1",flat:""},on:{click:function(e){t.isAdding?t.triggerCompanyAdd():t.triggerCompanyEdit()}}},[t._v("Save")])],1)],1)],1)},_t=[],kt={data:function(){return{dialog:!1,company:{},isAdding:!1}},methods:{setCompany:function(){this.company=x.company},triggerCompanyEdit:function(){var t=this;fetch(x.endpoint+"products.php",{method:"PATCH",body:JSON.stringify(this.company)}).then(function(t){return t.text()}).then(function(e){console.log(e),l.$emit(h),t.dialog=!1})},triggerCompanyAdd:function(){var t=this;this.company.country="",this.company.headquarters="",this.company.category=1,fetch(x.endpoint+"products.php",{method:"POST",body:JSON.stringify(this.company)}).then(function(t){return t.text()}).then(function(e){console.log(e),l.$emit(g),t.dialog=!1})}},mounted:function(){var t=this;l.$on(v,function(){t.dialog=!0,t.isAdding=x.isAdding,t.setCompany()})}},Ct=kt,Vt=a("a844"),Ot=Object(V["a"])(Ct,xt,_t,!1,null,"9552c22c",null),$t=Ot.exports;$()(Ot,{VBtn:w["a"],VCard:q["a"],VCardActions:B["a"],VCardText:B["b"],VContainer:nt["a"],VDialog:U["a"],VFlex:ot["a"],VLayout:G["a"],VSpacer:H["a"],VTextField:it["a"],VTextarea:Vt["a"]});var wt={name:"App",components:{Explore:E,Login:ct,Register:mt,Checkout:X,DeleteCompany:bt,EditCompany:$t},data:function(){return{}}},St=wt,jt=a("7496"),Tt=Object(V["a"])(St,i,r,!1,null,null,null),Et=Tt.exports;$()(Tt,{VApp:jt["a"]});var At=a("8c4f"),Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"full-height"},[a("Greetings",{attrs:{message:"Greetings.™",showSearch:!0}}),a("Greetings",{attrs:{message:"We value your privacy.™"}})],1)},It=[],Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":"","align-center":"","fill-height":"",column:""}},[a("div",{staticClass:"company-title"},[t._v("\n    "+t._s(t.message)+"\n  ")]),t.showSearch?a("div",[0==t.categories.length?a("v-progress-circular",{attrs:{indeterminate:"",color:"indigo"}}):a("v-layout",{attrs:{"align-center":"",column:""}},[a("v-text-field",{staticClass:"input-width",attrs:{color:"indigo darken-1",label:"Search for a top-parent company (e.g. Alphabet)"},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),a("v-layout",{attrs:{row:""}},t._l(t.categories,function(e,n){return a("v-checkbox",{key:n,staticClass:"checkbox-offset",attrs:{color:"indigo",label:e.catName,value:n+1},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})}),1),a("h1",[t._v("Market value (in $million)")]),a("v-layout",{attrs:{row:""}},[a("v-text-field",{staticClass:"mt-0 range-input",attrs:{color:"indigo","hide-details":"","single-line":"",type:"number"},model:{value:t.price[0],callback:function(e){t.$set(t.price,0,e)},expression:"price[0]"}}),a("v-range-slider",{attrs:{color:"indigo",max:1e6,min:0,step:25e3},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),a("v-text-field",{staticClass:"mt-0 range-input",attrs:{color:"indigo","hide-details":"","single-line":"",type:"number"},model:{value:t.price[1],callback:function(e){t.$set(t.price,1,e)},expression:"price[1]"}})],1),a("v-btn",{attrs:{flat:"",icon:"",color:"indigo"},on:{click:t.getProducts}},[a("v-icon",[t._v("search")])],1)],1)],1):t._e()])},Pt=[],Ft=a("bc3a"),qt=a.n(Ft),Bt={props:{message:String,showSearch:Boolean},data:function(){return{categories:[],selected:[],searchTerm:"",price:[1e5,9e5]}},methods:{getProducts:function(){var t=this;""!=this.searchTerm?qt()({method:"get",url:x.endpoint+"products.php",params:{search:this.searchTerm}}).then(function(e){""!=e.data&&t.$router.push({name:"shop",params:{items:e.data}})}):this.selected.length>0&&qt()({method:"get",url:x.endpoint+"products.php",params:{category:this.selected.join(","),from:this.price[0],to:this.price[1]}}).then(function(e){t.$router.push({name:"shop",params:{items:e.data}})})}},mounted:function(){var t=this;this.showSearch&&qt()({method:"get",url:x.endpoint+"categories.php"}).then(function(e){t.categories=e.data;for(var a=0;a<t.categories.length;a++)t.selected.push(a+1)})}},Nt=Bt,Wt=(a("27a4"),a("ac7c")),Mt=a("490a"),Rt=a("5963"),Yt=Object(V["a"])(Nt,Lt,Pt,!1,null,"2552cd0c",null),Jt=Yt.exports;$()(Yt,{VBtn:w["a"],VCheckbox:Wt["a"],VIcon:S["a"],VLayout:G["a"],VProgressCircular:Mt["a"],VRangeSlider:Rt["a"],VTextField:it["a"]});var Ut={components:{Greetings:Jt}},Gt=Ut,Ht=(a("0ffc"),Object(V["a"])(Gt,Dt,It,!1,null,"24d56bda",null)),zt=Ht.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"off-the-top indigo lighten-4",attrs:{"align-center":"",column:""}},t._l(t.items,function(t){return a("div",{key:t.name,staticStyle:{"padding-bottom":"2em"}},[a("Company",{attrs:{company:t,isShopping:!0}})],1)}),0)},Qt=[],Xt={components:{Company:R},props:{items:Array}},Zt=Xt,te=(a("9bdd"),Object(V["a"])(Zt,Kt,Qt,!1,null,"10639382",null)),ee=te.exports;$()(te,{VLayout:G["a"]});var ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.admin?a("div",[a("v-toolbar",{attrs:{dark:"",fixed:"",color:"indigo"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.triggerOpenAdd}},[a("v-icon",[t._v("add")])],1),a("v-toolbar-title",[t._v("Average: $"+t._s(t.average)+" million")]),a("span",{staticClass:"small-divider"}),a("v-toolbar-title",[t._v("Range: $"+t._s(t.range)+" million")]),a("span",{staticClass:"small-divider"}),a("v-toolbar-title",[t._v("Total: $"+t._s(t.total)+" million")])],1),a("v-layout",{staticClass:"off-the-top indigo lighten-4",attrs:{"align-center":"",column:""}},t._l(t.items,function(e,n){return a("div",{key:e.name,staticStyle:{"padding-bottom":"2em"}},[a("Company",{attrs:{company:e,isShopping:!1}}),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-btn",{attrs:{dark:"",color:"indigo darken-2"},on:{click:function(a){return t.triggerOpenEdit(e)}}},[t._v("Edit")]),a("v-btn",{attrs:{dark:"",color:"deep-orange"},on:{click:function(a){return t.triggerOpenDelete(e,n)}}},[t._v("Delete")])],1)],1)}),0)],1):a("div",[a("div",{staticStyle:{"font-size":"5em"}},[t._v("\n      You're not supposed to be here.™\n    ")])])])},ne=[],oe=a("75fc"),ie={components:{Company:R},data:function(){return{admin:!1,items:[],average:0,range:0,total:0,selectedIndex:0}},methods:{setItems:function(){var t=this;qt()({method:"get",url:x.endpoint+"products.php"}).then(function(e){t.items=e.data,t.setEverything()})},setEverything:function(){this.total=0;var t=!0,e=!1,a=void 0;try{for(var n,o=this.items[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var i=n.value;this.total+=Number(i.market_value)}}catch(c){e=!0,a=c}finally{try{t||null==o.return||o.return()}finally{if(e)throw a}}this.total=this.total.toFixed(2),this.average=(this.total/this.items.length).toFixed(2);var r=this.items.map(function(t){return Number(t.market_value)});this.range=(Math.max.apply(Math,Object(oe["a"])(r))-Math.min.apply(Math,Object(oe["a"])(r))).toFixed(2)},triggerOpenDelete:function(t,e){this.selectedIndex=e,x.company=t,l.$emit(m)},triggerOpenEdit:function(t){x.isAdding=!1,x.company=t,l.$emit(v)},triggerOpenAdd:function(){x.isAdding=!0,l.$emit(v)}},mounted:function(){var t=this;l.$on(f,function(){t.items.splice(t.selectedIndex,1),t.setEverything()}),l.$on(h,function(){t.setItems(),t.setEverything()}),l.$on(g,function(){t.setItems(),t.setEverything()}),this.admin=x.isAdmin,this.admin&&this.setItems()}},re=ie,ce=(a("4c6e"),Object(V["a"])(re,ae,ne,!1,null,"75975800",null)),se=ce.exports;$()(ce,{VBtn:w["a"],VIcon:S["a"],VLayout:G["a"],VToolbar:z["a"],VToolbarTitle:K["b"]}),n["a"].use(At["a"]);var le=new At["a"]({routes:[{path:"/",name:"home",component:zt},{path:"/shop",name:"shop",component:ee,props:!0},{path:"/admin",name:"admin",component:se}]});n["a"].config.productionTip=!1,new n["a"]({router:le,render:function(t){return t(Et)}}).$mount("#app")},"689e":function(t,e,a){"use strict";var n=a("0804"),o=a.n(n);o.a},"6b24":function(t,e,a){"use strict";var n=a("c528"),o=a.n(n);o.a},"9bdd":function(t,e,a){"use strict";var n=a("f45f"),o=a.n(n);o.a},c435:function(t,e,a){"use strict";var n=a("263d"),o=a.n(n);o.a},c528:function(t,e,a){},f45f:function(t,e,a){}});
//# sourceMappingURL=app.ae35434a.js.map