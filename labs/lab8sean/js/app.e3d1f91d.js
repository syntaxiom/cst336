(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],d=0,f=[];d<i.length;d++)s=i[d],n[s]&&f.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e8b":function(t,e,a){},2234:function(t,e,a){},"44a8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["a"].use(n["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Toolbar",{attrs:{getImagesCallback:t.getImagesData,getKeywordsCallback:t.setKeywords}}),a("v-content",[a("v-parallax",{attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",height:t.height}},[t.images?a("Images",{attrs:{images:t.images,keyword:t.keyword,getKeywordsCallback:t.setKeywords}}):a("Welcome"),a("Drawer",{attrs:{keywords:t.keywords,favorites:t.favorites}})],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Pixabay ")]),a("span",{staticClass:"font-weight-light"},[t._v("Image Search")])]),a("v-spacer"),a("v-text-field",{staticClass:"field",attrs:{label:"Keyword",color:"gray darken-3"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchImages(e)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("v-btn",{attrs:{flat:""},on:{click:t.searchImages}},[a("span",[t._v("Search")])]),a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:t.getKeywordsFavorites}},[a("span",[t._v("View favorites")])])],1)},l=[],c=a("bc3a"),u=a.n(c);function d(t,e){u()({method:"get",url:"http://lest-cst336.herokuapp.com/labs/lab8/api/pixabayProxy.php",params:{keyword:t}}).then(function(t){e(t.data)})}function f(t,e,a){u()({method:"get",url:"http://lest-cst336.herokuapp.com/labs/lab8/api/favoritesAPI.php",params:{action:"favorites",keyword:e}}).then(function(e){a(t,e.data)})}function v(t,e,a){u()({method:"get",url:"http://lest-cst336.herokuapp.com/labs/lab8/api/favoritesAPI.php",params:{action:"add",keyword:t,favorite:e}}).then(function(t){a(t)})}function h(t,e){u()({method:"get",url:"http://lest-cst336.herokuapp.com/labs/lab8/api/favoritesAPI.php",params:{action:"delete",favorite:t}}).then(function(t){e(t)})}function p(t){u()({method:"get",url:"http://lest-cst336.herokuapp.com/labs/lab8/api/favoritesAPI.php",params:{action:"keyword"}}).then(function(e){t(e.data)})}var g=new r["a"],y={props:{getImagesCallback:Function,getKeywordsCallback:Function},data:function(){return{keyword:"",keywordsFavorites:null}},methods:{searchImages:function(){this.getImagesCallback(this.keyword)},getKeywordsFavorites:function(){g.$emit("toggle-drawer"),p(this.setKeywordsFavorites)},setKeywordsFavorites:function(t){this.keywordsFavorites=t,console.log(this.keywordsFavorites),this.getKeywordsCallback(this.keywordsFavorites)}},mounted:function(){this.getKeywordsFavorites()}},m=y,w=(a("c29a"),a("2877")),b=a("6544"),k=a.n(b),x=a("8336"),_=a("9910"),I=a("2677"),C=a("71d9"),V=a("2a7f"),F=Object(w["a"])(m,i,l,!1,null,"7ce00268",null),j=F.exports;k()(F,{VBtn:x["a"],VSpacer:_["a"],VTextField:I["a"],VToolbar:C["a"],VToolbarTitle:V["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"fill-height":"","justify-center":"","align-center":""}},[a("v-sheet",{staticClass:"box",attrs:{color:"#000000aa"}},[a("v-layout",{attrs:{"justify-center":"","align-center":"",column:""}},[a("h1",{staticClass:"font-weight-light box-text"},[t._v("Welcome!")]),a("h2",{staticClass:"font-weight-light box-text"},[t._v("Thank you to "),a("strong",[t._v("Gurpreet Sidhu")]),t._v(" for the indirect help!")])])],1)],1)},K=[],P=(a("dd9a"),a("a722")),S=a("8dd9"),$={},E=Object(w["a"])($,O,K,!1,null,"1ed4e522",null),T=E.exports;k()(E,{VLayout:P["a"],VSheet:S["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{sm5:""}},[a("v-card",[a("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.images,function(e,r){return a("v-flex",{key:r,attrs:{xs4:"","d-flex":""}},[a("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return a("v-img",{staticClass:"grey lighten-2",attrs:{src:""+e,"lazy-src":""+e,"aspect-ratio":"1"},on:{mouseenter:function(e){return t.setCurrentIndex(r)},mouseleave:function(e){return t.setCurrentIndex(-1)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[o?a("div",{staticClass:"d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-3",staticStyle:{height:"100%"}},[a("v-layout",{attrs:{"justify-center":"","align-center":"","fill-height":""}},[a("v-btn",{attrs:{flat:"",icon:"",color:"red",id:r},on:{click:function(a){return t.toggleFavorite(e)}}},[1==t.favorited[r]?a("v-icon",[t._v("favorite")]):a("v-icon",[t._v("favorite_border")])],1)],1)],1):t._e()])}}],null,!0)})],1)],1)}),1)],1)],1)],1)],1)},D=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{flat:"",icon:"",color:"red"},on:{click:t.callback}},[a("v-icon",[t._v("favorite")])],1)},H=[],L={props:{callback:Function}},M=L,U=a("132d"),W=Object(w["a"])(M,B,H,!1,null,null,null),J=W.exports;k()(W,{VBtn:x["a"],VIcon:U["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{flat:"",icon:"",color:"red"},on:{click:t.callback}},[a("v-icon",[t._v("favorite_border")])],1)},G=[],N={props:{callback:Function}},R=N,q=Object(w["a"])(R,z,G,!1,null,null,null),Q=q.exports;k()(q,{VBtn:x["a"],VIcon:U["a"]});var X={components:{Heart:J,HeartBorder:Q},props:{keyword:String,images:Array,getKeywordsCallback:Function},data:function(){return{currentIndex:-1,favorited:{},firstClicked:{}}},methods:{setCurrentIndex:function(t){this.currentIndex=t},toggleFavorite:function(t){0==this.favorited[this.currentIndex]?(this.favorited[this.currentIndex]=!0,v(this.keyword,t,this.setFavorite)):(this.favorited[this.currentIndex]=!1,h(t,this.setFavorite)),p(this.getKeywordsCallback),this.$forceUpdate()},setFavorite:function(t){console.log(t)}},mounted:function(){for(var t=0;t<this.images.length;t++)this.favorited[t]=!1}},Y=X,Z=(a("b5c7"),a("b0af")),tt=a("a523"),et=a("0e8f"),at=a("ce87"),rt=a("adda"),nt=a("490a"),ot=Object(w["a"])(Y,A,D,!1,null,"19ea065f",null),st=ot.exports;k()(ot,{VBtn:x["a"],VCard:Z["a"],VContainer:tt["a"],VFlex:et["a"],VHover:at["a"],VIcon:U["a"],VImg:rt["a"],VLayout:P["a"],VProgressCircular:nt["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{wrap:""}},[a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:"",width:"500"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},t._l(t.keywords,function(e,r){return a("v-expansion-panel",{key:r},[a("v-expansion-panel-content",{scopedSlots:t._u([{key:"header",fn:function(){return[a("div",[t._v(t._s(e))])]},proxy:!0}],null,!0)},t._l(t.favorites[r],function(t,e){return a("v-card",{key:e},[a("img",{staticClass:"image",attrs:{src:t.imageURL,alt:"image"}})])}),1)],1)}),1)],1)},lt=[],ct={props:{keywords:Array,favorites:Array},data:function(){return{drawer:!1,images:[],faves:[]}},methods:{setDrawer:function(){if(this.drawer=!this.drawer,this.drawer)for(var t=0;t<this.keywords.length;t++)f(t,this.keywords[t],this.setFaves)},setFaves:function(t,e){this.faves[t]=e}},mounted:function(){g.$on("toggle-drawer",this.setDrawer)},updated:function(){for(var t=0;t<this.keywords.length;t++)f(t,this.keywords[t],this.setFaves)}},ut=ct,dt=(a("a6ee"),a("cd55")),ft=a("49e2"),vt=a("f774"),ht=Object(w["a"])(ut,it,lt,!1,null,"8d727b96",null),pt=ht.exports;k()(ht,{VCard:Z["a"],VExpansionPanel:dt["a"],VExpansionPanelContent:ft["a"],VLayout:P["a"],VNavigationDrawer:vt["a"]});var gt={name:"App",components:{Toolbar:j,Welcome:T,Images:st,Drawer:pt},data:function(){return{height:window.innerHeight-64,images:null,keyword:"",keywords:[],favorites:[],tempKeyword:""}},methods:{getImagesData:function(t){this.keyword=t,d(t,this.setImages)},setImages:function(t){this.images=t},setKeywords:function(t){for(var e=[],a=0;a<t.length;a++)e.push(t[a].keyword);this.keywords=e;for(var r=0;r<this.keywords.length;r++)f(r,this.keywords[r],this.setFavoriteImages);this.$forceUpdate()},setFavoriteImages:function(t,e){this.favorites[t]=e}},updated:function(){for(var t=0;t<this.keywords.length;t++)f(t,this.keywords[t],this.setFavoriteImages)}},yt=gt,mt=a("7496"),wt=a("549c"),bt=a("8b9c"),kt=Object(w["a"])(yt,o,s,!1,null,null,null),xt=kt.exports;k()(kt,{VApp:mt["a"],VContent:wt["a"],VParallax:bt["a"]}),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(xt)}}).$mount("#app")},a6ee:function(t,e,a){"use strict";var r=a("b14f"),n=a.n(r);n.a},b14f:function(t,e,a){},b5c7:function(t,e,a){"use strict";var r=a("44a8"),n=a.n(r);n.a},c29a:function(t,e,a){"use strict";var r=a("1e8b"),n=a.n(r);n.a},dd9a:function(t,e,a){"use strict";var r=a("2234"),n=a.n(r);n.a}});
//# sourceMappingURL=app.e3d1f91d.js.map