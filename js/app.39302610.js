(function(e){function t(t){for(var a,i,l=t[0],c=t[1],s=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/punk_beer/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"green",dark:""}}),n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},l=i,c=n("2877"),s=n("6544"),u=n.n(s),p=n("7496"),f=n("40dc"),d=n("f6c4"),v=Object(c["a"])(l,r,o,!1,null,null,null),b=v.exports;u()(v,{VApp:p["a"],VAppBar:f["a"],VMain:d["a"]});var g=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.beers?n("div",[n("v-pagination",{staticClass:"mb-12 mt-12",attrs:{length:13,"total-visible":7},on:{input:e.pageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),n("v-container",[n("v-row",{attrs:{"align-content":"space-evenly"}},e._l(e.beers,(function(e){return n("beer-card",{key:e.id,attrs:{beer:e}})})),1)],1),n("v-pagination",{staticClass:"mb-12 mt-12",attrs:{length:13,"total-visible":7},on:{input:e.pageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()])},m=[],_=n("bc3a"),x=n.n(_),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[n("v-card",{staticClass:"d-flex pa-6",attrs:{height:"250"}},[n("div",{staticClass:"d-flex flex-grow-1 flex-shrink-0",staticStyle:{"max-width":"100%"}},[n("v-img",{attrs:{src:e.beer.image_url,height:"200","max-width":"80",contain:""}}),n("div",{staticClass:"d-flex flex-column justify-space-between flex-grow-1 flex-shrink-1"},[n("div",[n("v-card-title",[e._v(e._s(e.beer.name))]),n("v-card-subtitle",[e._v(e._s(e.beer.tagline))])],1),n("v-btn",{staticClass:"align-self-end",attrs:{color:"green",small:""},on:{click:e.toBeerPage}},[e._v(" More ")])],1)],1)])],1)},w=[],C={name:"BeerCard",props:["beer"],data:function(){return{}},methods:{toBeerPage:function(){this.$router.push("beer/".concat(this.beer.id))}}},O=C,j=n("8336"),k=n("b0af"),V=n("99d9"),P=n("62ad"),B=n("adda"),S=Object(c["a"])(O,y,w,!1,null,null,null),$=S.exports;u()(S,{VBtn:j["a"],VCard:k["a"],VCardSubtitle:V["a"],VCardTitle:V["b"],VCol:P["a"],VImg:B["a"]});var M={name:"Home",components:{BeerCard:$},data:function(){return{beers:null,page:1}},mounted:function(){var e=this;x.a.get("https://api.punkapi.com/v2/beers?page=".concat(this.page)).then((function(t){console.log(t),e.beers=t.data})).catch((function(e){return console.log(e)}))},updated:function(){console.log(this.beers),console.log(this.page)},methods:{pageChange:function(){var e=this;x.a.get("https://api.punkapi.com/v2/beers?page=".concat(this.page)).then((function(t){console.log(t),e.beers=t.data})).catch((function(e){return console.log(e)}))}}},E=M,T=n("a523"),A=n("891e"),H=n("0fd9"),J=Object(c["a"])(E,h,m,!1,null,null,null),I=J.exports;u()(J,{VContainer:T["a"],VPagination:A["a"],VRow:H["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.beer?n("div",[n("h1",[e._v(e._s(e.beer.name))])]):e._e()},q=[],z={name:"Beer",components:{},data:function(){return{beer:null}},mounted:function(){var e=this;x.a.get("https://api.punkapi.com/v2/beers/".concat(this.$route.params.id)).then((function(t){return e.beer=t.data[0]})).catch((function(e){return console.log(e)}))}},D=z,F=Object(c["a"])(D,R,q,!1,null,null,null),G=F.exports;a["a"].use(g["a"]);var K=[{path:"/",name:"Home",component:I},{path:"/beer/:id",name:"Beer",component:G}],L=new g["a"]({routes:K}),N=L,Q=n("f309");a["a"].use(Q["a"]);var U=new Q["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:N,vuetify:U,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.39302610.js.map