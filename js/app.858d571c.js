(function(e){function t(t){for(var a,s,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/punk_beer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"green",dark:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"3",sm:"3"}},[n("h1",{staticClass:"mr-12",staticStyle:{cursor:"pointer"},on:{click:e.navHome}},[e._v(" Punk beer ")])]),n("v-col",{attrs:{cols:"9",sm:"6"}},[n("v-autocomplete",{attrs:{width:"300",items:e.items,loading:e.isLoading,"search-input":e.search,color:"white","hide-no-data":"","hide-details":"","hide-selected":"","item-text":"name",placeholder:"Search for a beer...","prepend-icon":"mdi-magnify","return-object":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},change:e.selectBeer},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)],1),n("v-main",[n("router-view",{key:e.$route.path})],1)],1)},i=[],s=(n("d81d"),n("b0c0"),n("ac1f"),n("841c"),n("d3b7"),n("bc3a")),o=n.n(s),c={name:"App",data:function(){return{beers:[],isLoading:!1,model:null,search:null}},computed:{items:function(){return this.beers.map((function(e){return{id:e.id,name:e.name}}))}},watch:{search:function(e){var t=this;this.beers.length>0||this.isLoading||this.search.length<3||(this.isLoading=!0,o.a.get("https://api.punkapi.com/v2/beers?beer_name=".concat(e)).then((function(e){t.beers=e.data})).catch((function(e){console.log(e)})).finally(this.isLoading=!1))}},methods:{selectBeer:function(e){this.$router.push({name:"Beer",params:{id:e.id}})},navHome:function(){"/"!==this.$route.path&&this.$router.push({name:"Home"})}}},l=c,u=n("2877"),p=n("6544"),d=n.n(p),m=n("7496"),h=n("40dc"),f=n("c6a6"),v=n("62ad"),b=n("f6c4"),g=n("0fd9"),_=Object(u["a"])(l,r,i,!1,null,null,null),C=_.exports;d()(_,{VApp:m["a"],VAppBar:h["a"],VAutocomplete:f["a"],VCol:v["a"],VMain:b["a"],VRow:g["a"]});var y=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e.beers?n("div",[n("v-pagination",{staticClass:"mb-12 mt-12",attrs:{length:13,"total-visible":7},on:{input:e.pageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),n("v-container",[n("v-row",e._l(e.beers,(function(e){return n("beer-card",{key:e.id,attrs:{beer:e}})})),1)],1),n("v-pagination",{staticClass:"mb-12 mt-12",attrs:{length:13,"total-visible":7},on:{input:e.pageChange},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()])},x=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{attrs:{cols:"12",sm:"6",lg:"4"}},[n("v-card",{staticClass:"d-flex pa-6",attrs:{height:"250"}},[n("div",{staticClass:"d-flex flex-grow-1 flex-shrink-0",staticStyle:{"max-width":"100%"}},[n("v-img",{attrs:{src:e.beer.image_url,height:"200","max-width":"80",contain:""}}),n("div",{staticClass:"d-flex flex-column justify-space-between flex-grow-1 flex-shrink-1"},[n("div",[n("v-card-title",[e._v(e._s(e.beer.name))]),n("v-card-subtitle",[e._v(e._s(e.beer.tagline))])],1),n("v-btn",{staticClass:"align-self-end",attrs:{color:"green",small:""},on:{click:e.toBeerPage}},[e._v(" More ")])],1)],1)])],1)},V=[],j={name:"BeerCard",props:["beer"],data:function(){return{}},methods:{toBeerPage:function(){this.$router.push({path:"beer/".concat(this.beer.id)})}}},O=j,P=n("8336"),B=n("b0af"),$=n("99d9"),S=n("adda"),M=Object(u["a"])(O,k,V,!1,null,null,null),H=M.exports;d()(M,{VBtn:P["a"],VCard:B["a"],VCardSubtitle:$["a"],VCardTitle:$["b"],VCol:v["a"],VImg:S["a"]});var A={name:"Home",components:{BeerCard:H},data:function(){return{beers:null,page:1}},mounted:function(){var e=this;o.a.get("https://api.punkapi.com/v2/beers?page=".concat(this.page)).then((function(t){e.beers=t.data})).catch((function(e){return console.log(e)}))},methods:{pageChange:function(){var e=this;o.a.get("https://api.punkapi.com/v2/beers?page=".concat(this.page)).then((function(t){console.log(t),e.beers=t.data})).catch((function(e){return console.log(e)}))}}},E=A,L=n("a523"),I=n("891e"),T=Object(u["a"])(E,w,x,!1,null,null,null),J=T.exports;d()(T,{VContainer:L["a"],VPagination:I["a"],VRow:g["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.beer?n("v-container",{staticClass:"mt-12"},[n("div",{staticClass:"d-flex"},[n("v-img",{attrs:{src:e.beer.image_url,height:"500","max-width":"200",contain:""}}),n("div",{staticClass:"ml-12"},[n("h1",[e._v(e._s(e.beer.name))]),n("h3",{staticClass:"mb-6"},[e._v(e._s(e.beer.tagline))]),n("p",[e._v(e._s(e.beer.description))]),n("p",{staticClass:"d-inline mr-6"},[e._v(" Abv: "),n("span",[e._v(e._s(e.beer.abv)+"%")])]),n("p",{staticClass:"d-inline mr-6"},[e._v(" Ibu: "),n("span",[e._v(e._s(e.beer.ibu))])]),n("p",{staticClass:"d-inline mr-6"},[e._v(" Ebc: "),n("span",[e._v(e._s(e.beer.ebc))])]),n("p",{staticClass:"d-inline mr-6"},[e._v(" Srm: "),n("span",[e._v(e._s(e.beer.srm))])]),n("p",{staticClass:"d-inline mr-6"},[e._v(" Ph: "),n("span",[e._v(e._s(e.beer.ph))])]),e.beer.ingredients.malt?n("div",[n("p",{staticClass:"mb-0 mt-3"},[e._v("Malts:")]),n("ul",e._l(e.beer.ingredients.malt,(function(t,a){return n("li",{key:t.name+a},[e._v(" "+e._s(t.name)+" - "+e._s(t.amount.value)+" "+e._s(t.amount.unit)+" ")])})),0),n("p",{staticClass:"mb-0 mt-3"},[e._v("Hops:")]),n("ul",e._l(e.beer.ingredients.hops,(function(t,a){return n("li",{key:t.name+a},[e._v(" "+e._s(t.name)+" - "+e._s(t.amount.value)+" "+e._s(t.amount.unit)+" ")])})),0),n("p",{staticClass:"mb-0 mt-3"},[e._v("Food pairing:")]),n("ul",e._l(e.beer.food_pairing,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e()])],1)]):e._e()},F=[],q={name:"Beer",components:{},data:function(){return{beer:null}},mounted:function(){var e=this;o.a.get("https://api.punkapi.com/v2/beers/".concat(this.$route.params.id)).then((function(t){return e.beer=t.data[0]})).catch((function(e){return console.log(e)}))}},z=q,D=Object(u["a"])(z,R,F,!1,null,null,null),G=D.exports;d()(D,{VContainer:L["a"],VImg:S["a"]}),a["a"].use(y["a"]);var K=[{path:"/",name:"Home",component:J},{path:"/beer/:id",name:"Beer",component:G}],N=new y["a"]({routes:K}),Q=N,U=n("f309");a["a"].use(U["a"]);var W=new U["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Q,vuetify:W,render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.858d571c.js.map