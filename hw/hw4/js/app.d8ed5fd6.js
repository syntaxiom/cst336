(function(t){function e(e){for(var a,i,c=e[0],u=e[1],l=e[2],p=0,d=[];p<c.length;p++)i=c[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);s&&s(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cda":function(t,e,n){},1:function(t,e){},1020:function(t,e,n){},"1b7a":function(t,e,n){"use strict";var a=n("0cda"),r=n.n(a);r.a},2:function(t,e){},"506d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{class:t.color+" lighten-3"},[n("v-content",[n("Home",{attrs:{backgroundColor:t.color,changeBackground:t.pickColor}})],1)],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[n("v-sheet",{staticClass:"game-display",attrs:{color:"grey lighten-3"}},[n("v-layout",{attrs:{"fill-height":"",column:""}},[t.game?n("v-layout",{attrs:{column:""}},[n("Display",{attrs:{title:t.game.title,image:t.game.image,description:t.game.description,counter:t.game.counter}})],1):n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1),n("DisplayButtons",{attrs:{buttonCheckItOut:t.checkOutGame,buttonNewGame:t.getNewGame,isGameLoaded:null!=t.game,baseColor:t.backgroundColor}})],1)],1)],1)],1)},u=[],l=(n("b54a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Title",{attrs:{text:t.title}}),n("Thumbnail",{attrs:{image:t.image}}),n("Description",{attrs:{text:t.description}}),n("Counter",{attrs:{text:"(Found "+t.counter+" times!)"}})],1)}),s=[],p=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-space-around":"","align-start":""}},[n("div",{staticClass:"game-title"},[t._v("\n    "+t._s(t.text)+"\n  ")])])}),d=[],f={props:{text:String}},m=f,g=(n("72b9"),n("2877")),h=n("6544"),b=n.n(h),v=n("a722"),y=Object(g["a"])(m,p,d,!1,null,"60ce1844",null),_=y.exports;b()(y,{VLayout:v["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-space-around":"","align-center":""}},[n("img",{staticClass:"thumbnail",attrs:{src:t.image,alt:"Game Thumbnail"}})])},k=[],C={props:{image:String}},w=C,j=(n("a91f"),Object(g["a"])(w,x,k,!1,null,"7f0ca8d1",null)),O=j.exports;b()(j,{VLayout:v["a"]});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":"","align-center":"",wrap:""}},[n("div",{staticClass:"game-description"},[t.text?n("div",[t._v("\n      "+t._s(t.text)+"\n    ")]):n("div",[n("i",[t._v("((No description provided))")])])])])},G=[],V={props:{text:String}},L=V,N=(n("1b7a"),Object(g["a"])(L,S,G,!1,null,"c75bba7e",null)),T=N.exports;b()(N,{VLayout:v["a"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-space-around":"","align-end":""}},[n("div",{staticClass:"game-counter"},[n("b",[t._v(t._s(t.text))])])])},E=[],M={props:{text:String}},B=M,P=(n("ae6a"),Object(g["a"])(B,$,E,!1,null,"29d18a5c",null)),D=P.exports;b()(P,{VLayout:v["a"]});var F={components:{Title:_,Thumbnail:O,Description:T,Counter:D},props:{title:String,image:String,description:String,counter:Number}},I=F,A=Object(g["a"])(I,l,s,!1,null,null,null),H=A.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"buttons-row",attrs:{"justify-space-around":"","align-end":""}},[n("v-btn",{staticClass:"white--text",attrs:{color:t.baseColor+" darken-1",disabled:!t.isGameLoaded},on:{click:function(e){return t.buttonCheckItOut()}}},[t._v("Check it out")]),n("v-btn",{staticClass:"white--text",attrs:{color:t.baseColor+" darken-4",disabled:!t.isGameLoaded},on:{click:function(e){return t.buttonNewGame()}}},[t._v("New game!")])],1)},q=[],z={props:{buttonCheckItOut:Function,buttonNewGame:Function,isGameLoaded:Boolean,baseColor:String}},K=z,Q=(n("bdb4"),n("8336")),R=Object(g["a"])(K,J,q,!1,null,"278adf80",null),U=R.exports;b()(R,{VBtn:Q["a"],VLayout:v["a"]});n("28a5");var W=n("bc3a"),X=n.n(W),Y=n("c51a");function Z(t){X.a.get("https://itch.io/games.xml").then(function(e){var n=Object(Y["xml2js"])(e.data,{compact:!0}).rss.channel.item,a=Math.floor(Math.random()*n.length),r=n[a];X()({method:"get",url:"http://lest-cst336.herokuapp.com/hw/hw4/api/game.php",params:{title:r.plainTitle._text}}).then(function(e){t({title:r.plainTitle._text,image:r.imageurl._text,description:r.description._cdata.split("\n<img")[0],price:r.price._text,link:r.link._text,counter:Number(e.data.quantity)})})})}var tt={components:{Display:H,DisplayButtons:U},props:{backgroundColor:String,changeBackground:Function},data:function(){return{game:{}}},methods:{checkOutGame:function(){window.location.href=this.game.link},getNewGame:function(){var t=this;this.game=null,Z(function(e){t.game=e}),this.changeBackground()}},mounted:function(){this.getNewGame()}},et=tt,nt=(n("d9e7"),n("a523")),at=n("490a"),rt=n("8dd9"),ot=Object(g["a"])(et,c,u,!1,null,"7986b4b6",null),it=ot.exports;b()(ot,{VContainer:nt["a"],VLayout:v["a"],VProgressCircular:at["a"],VSheet:rt["a"]});var ct={name:"App",components:{Home:it},data:function(){return{colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange"],color:""}},methods:{pickColor:function(){var t=Math.floor(Math.random()*this.colors.length);this.color=this.colors[t]}},mounted:function(){this.pickColor()}},ut=ct,lt=n("7496"),st=n("549c"),pt=Object(g["a"])(ut,o,i,!1,null,"f6af1b9a",null),dt=pt.exports;b()(pt,{VApp:lt["a"],VContent:st["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(dt)}}).$mount("#app")},"63cc":function(t,e,n){},"72b9":function(t,e,n){"use strict";var a=n("506d"),r=n.n(a);r.a},8647:function(t,e,n){},a91f:function(t,e,n){"use strict";var a=n("1020"),r=n.n(a);r.a},ae6a:function(t,e,n){"use strict";var a=n("63cc"),r=n.n(a);r.a},bdb4:function(t,e,n){"use strict";var a=n("8647"),r=n.n(a);r.a},d9e7:function(t,e,n){"use strict";var a=n("de58"),r=n.n(a);r.a},de58:function(t,e,n){}});
//# sourceMappingURL=app.d8ed5fd6.js.map