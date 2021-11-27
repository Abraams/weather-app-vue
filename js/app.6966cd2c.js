(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function u(e){return s.p+"js/"+({HistoryWidget:"HistoryWidget",SearchWidget:"SearchWidget",WeatherWidget:"WeatherWidget"}[e]||e)+"."+{HistoryWidget:"21ee9e25",SearchWidget:"5e3de211",WeatherWidget:"228120d4"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={SearchWidget:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({HistoryWidget:"HistoryWidget",SearchWidget:"SearchWidget",WeatherWidget:"WeatherWidget"}[e]||e)+"."+{HistoryWidget:"31d6cfe0",SearchWidget:"c9f5a90d",WeatherWidget:"31d6cfe0"}[e]+".css",i=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/weather-app-vue/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2465:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));var r="UNAVAILABLE_LANGUAGE",a="GEOLOCATION_ERROR",i="Не удалось получить доступ к вашему местоположению. \n Пожалуйста, воспользуейтесь поиском.",o="CITY_NOT_FOUND",u="Город с таким название не найден.",s="SMTH_WENT_WRONG";t["d"]={UNAVAILABLE_LANGUAGE:r,GEOLOCATION_ERROR:a,GEOLOCATION_ERROR_TEXT:i,CITY_NOT_FOUND:o,CITY_NOT_FOUND_TEXT:u}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DefaultLayout",[n("WeatherWidget")],1)},i=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-wrapper"}},[n("div",{staticClass:"app-background"}),n("v-app",{attrs:{id:"app"}},[n("v-main",[n("TheAppBar",{on:{"navigation:toggle":e.setNavigationVisible}}),n("v-navigation-drawer",{attrs:{app:"",absolute:"",temporary:""},model:{value:e.isDrawerVisible,callback:function(t){e.isDrawerVisible=t},expression:"isDrawerVisible"}},[n("HistoryWidget",{on:{"item:select":function(t){return e.setNavigationVisible(!1)}}})],1),n("v-container",[n("div",{staticStyle:{width:"100%"}},[e._t("default")],2)])],1)],1),n("div",{staticClass:"app-background"})],1)}),u=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{attrs:{id:"the-app-bar",color:"white",flat:"",outlined:"",elevation:"1",tile:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.setNavigationVisible(!0)}}}),e.isSearchVisible?e._e():[n("v-toolbar-title",{on:{click:function(t){return e.setSearchVisible(!0)}}},[n("v-fade-transition",[e.currentCity?n("span",[e._v(" "+e._s(e.currentCity)+" ")]):e._e()])],1),n("v-spacer")],n("SearchWidget",{attrs:{"input-visible":e.isSearchVisible,placeholder:e.currentCity},on:{"input:visible":e.setSearchVisible}}),e.$options.languages.length>1?n("TheLanguageSelect"):e._e()],2),n("v-expand-transition",{attrs:{"hide-on-leave":""}},[e.isAppLoading?n("v-progress-linear",{attrs:{indeterminate:"",absolute:"",color:"primary"}}):e._e()],1)],1)},c=[],l=n("5530"),f=(n("ac1f"),n("841c"),n("b0c0"),n("07ac"),n("2f62")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"nudge-top":"-4px",rounded:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.attrs,a=t.on;return[n("v-btn",e._g(e._b({attrs:{width:"48",height:"48",text:"",fab:""}},"v-btn",r,!1),a),[e._v(" "+e._s(e.language)+" ")])]}}])},[n("v-list",[n("v-list-item-group",{attrs:{value:e.language,mandatory:"",color:"primary"}},e._l(e.$options.languages,(function(t){return n("v-list-item",{key:t,attrs:{value:t},on:{click:function(n){return e.setLanguage(t)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t)}})],1)],1)})),1)],1)],1)},g=[],p=(n("1276"),n("caad"),n("2532"),{ru:"ru"}),h=function(e){return e.toLowerCase().split("-")[0]},v=function(e){return"string"===typeof e&&Object.values(p).includes(e)},m=function(){var e=h(navigator.language);return v(e)&&e||p.en},b={name:"TheLanguageSelect",computed:Object(l["a"])({},Object(f["b"])({language:function(e){return e.language}})),methods:{setLanguage:function(e){this.$vuetify.lang.current=e,this.$store.dispatch("setLanguage",{lang:e})}},languages:Object.values(p)},y=b,w=n("2877"),O=n("6544"),_=n.n(O),x=n("8336"),L=n("8860"),V=n("da13"),W=n("5d23"),E=n("1baa"),S=n("e449"),T=Object(w["a"])(y,d,g,!1,null,null,null),j=T.exports;_()(T,{VBtn:x["a"],VList:L["a"],VListItem:V["a"],VListItemContent:W["a"],VListItemGroup:E["a"],VListItemTitle:W["b"],VMenu:S["a"]});var k=function(){return n.e("SearchWidget").then(n.bind(null,"6c63"))},A={name:"TheAppBar",components:{SearchWidget:k,TheLanguageSelect:j},data:function(){return{isSearchVisible:!1}},computed:Object(l["a"])({},Object(f["b"])({currentCity:function(e){var t,n;return(null===(t=e.search)||void 0===t?void 0:t.query)||(null===(n=e.weather)||void 0===n?void 0:n.name)||void 0},isAppLoading:function(e){return e.loading}})),methods:{setNavigationVisible:function(e){this.$emit("navigation:toggle",e)},setSearchVisible:function(e){this.isSearchVisible=e}},languages:Object.values(p)},D=A,N=n("5bc1"),R=n("0789"),C=n("8e36"),I=n("2fa4"),F=n("71d9"),P=n("2a7f"),H=Object(w["a"])(D,s,c,!1,null,null,null),q=H.exports;_()(H,{VAppBarNavIcon:N["a"],VExpandTransition:R["a"],VFadeTransition:R["b"],VProgressLinear:C["a"],VSpacer:I["a"],VToolbar:F["a"],VToolbarTitle:P["a"]});var $=function(){return n.e("HistoryWidget").then(n.bind(null,"f626"))},B={name:"DefaultLayout",components:{TheAppBar:q,HistoryWidget:$},data:function(){return{isDrawerVisible:!1}},methods:{setNavigationVisible:function(e){this.isDrawerVisible=e}}},U=B,G=(n("773d"),n("7496")),M=n("a523"),J=n("f6c4"),Q=n("f774"),Y=Object(w["a"])(U,o,u,!1,null,null,null),X=Y.exports;_()(Y,{VApp:G["a"],VContainer:M["a"],VMain:J["a"],VNavigationDrawer:Q["a"]});var K=function(){return n.e("WeatherWidget").then(n.bind(null,"a061"))},z={name:"App",components:{DefaultLayout:X,WeatherWidget:K},methods:{initAppLanguage:function(){this.$store.dispatch("setUserLanguage"),this.$vuetify.lang.current=this.$store.state.language}},mounted:function(){this.initAppLanguage()}},Z=z,ee=Object(w["a"])(Z,a,i,!1,null,null,null),te=ee.exports,ne="en",re={setLanguage:function(e,t){e.language=t.lang||e.language},setLoading:function(e,t){e.loading=t.value||!1}},ae=re,ie=n("2465"),oe={setLanguage:function(e,t){var n=e.commit,r=t.lang,a=h(r);if(!v(a))throw new Error(ie["d"].UNAVAILABLE_LANGUAGE);n("setLanguage",{lang:a})},setLoading:function(e,t){var n=e.commit;n("setLoading",t)},setUserLanguage:function(e){var t=e.dispatch,n=m();t("setLanguage",{lang:n})}},ue=oe,se={setHistory:function(e,t){var n=t.history;e.history=n||e.history},setDataFetching:function(e,t){var n=t.value;e.dataFetching=void 0!==n?n:e.dataFetching}},ce=se,le=n("2909"),fe=n("1da1"),de=(n("96cf"),n("99af"),n("4de4"),n("e9c4"),function(e){return null!==localStorage.getItem(e)}),ge=function(e,t){var n=localStorage.getItem(e);return null!==n?JSON.parse(n):t||n},pe=function(e,t){localStorage.setItem(e,JSON.stringify(t))},he={checkValue:de,getValue:ge,setValue:pe},ve=he,me=function(){return Promise.resolve({data:ve.getValue("cities_storage",[])})},be=function(e){return Promise.resolve(ve.setValue("cities_storage",e))},ye={get:me,set:be},we={addHistoryItem:function(e,t){return Object(fe["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,e.state,r("setDataFetching",{value:!0}),n.prev=2,a=t.query,n.next=6,ye.get();case 6:return i=n.sent,o=i.data,u=[{name:a,id:Date.now()}].concat(Object(le["a"])(o.filter((function(e){return e.name!==a})))),n.next=11,ye.set(u);case 11:r("setHistory",{history:u});case 12:return n.prev=12,r("setDataFetching",{value:!1}),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[2,,12,15]])})))()},selectHistoryItem:function(e,t){return Object(fe["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=t.name,n.next=4,r("search/setQuery",{query:a},{root:!0});case 4:case"end":return n.stop()}}),n)})))()},initModule:function(e){return Object(fe["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("setDataFetching",{value:!0}),t.prev=2,t.next=5,ye.get();case 5:r=t.sent,a=r.data,n("setHistory",{history:a});case 8:return t.prev=8,n("setDataFetching",{value:!1}),t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[2,,8,11]])})))()}},Oe=we,_e=function(){return{history:null,dataFetching:!0}},xe={namespaced:!0,state:_e,mutations:ce,actions:Oe},Le={setQuery:function(e,t){var n=t.query;e.query=n||null},setError:function(e,t){var n=t.value;e.query=n||null}},Ve=Le,We={setQuery:function(e,t){return Object(fe["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,i=e.dispatch,r.query!==t.query){n.next=3;break}return n.abrupt("return");case 3:return a("setQuery",t),n.prev=4,n.next=7,i("weather/fetchData",{city:t.query},{root:!0});case 7:return n.next=9,i("history/addHistoryItem",{query:t.query},{root:!0});case 9:n.next=17;break;case 11:if(n.prev=11,n.t0=n["catch"](4),n.t0!==ie["a"]){n.next=16;break}throw a("setError",ie["a"]),new Error(ie["a"]);case 16:throw new Error(n.t0);case 17:case"end":return n.stop()}}),n,null,[[4,11]])})))()}},Ee=We,Se=function(){return{query:null,error:null}},Te={namespaced:!0,state:Se,mutations:Ve,actions:Ee},je={setWeather:function(e,t){var n=t.name,r=t.main,a=t.weather,i=t.wind;e.name=n,e.main=r,e.weather=a[0],e.wind=i},setDataFetching:function(e,t){var n=t.value;e.dataFetching=Boolean(n)},setError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.value;e.error=n||null}},ke=je,Ae=function(){return new Promise((function(e,t){var n=function(t){return e(t)},r=function(e){return t(e)};navigator.geolocation.getCurrentPosition(n,r)}))},De=n("bc3a"),Ne=n.n(De),Re=Ne.a.create({responseType:"json",headers:{"Content-Type":"application/json"}}),Ce=void 0,Ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if("function"!==typeof e)throw new Error("fn должен быть функцией");return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return new Promise((function(n,a){var i=Date.now(),o=e.apply(Ce,r);o instanceof Promise?o.then((function(e){var r=Date.now(),a=r-i;a<t?setTimeout((function(){n(e)}),t-a):n(e)})).catch(a):setTimeout((function(){n(o)}),t)}))}},Fe=function(e){return Re.get("".concat("https://api.openweathermap.org/","data/2.5/weather"),{params:Object(l["a"])(Object(l["a"])({},e),{},{units:"metric",appid:"9f8b83d0e829557a20a1c9f41660e1ec"})})},Pe=Ie(Fe,500),He={_$fetchData:function(e,t){return Object(fe["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,r=e.commit,a=e.dispatch,i=e.rootState,r("setError",{}),n.prev=2,a("setLoading",{value:!0},{root:!0}),r("setDataFetching",{value:!0}),n.next=7,Pe(Object(l["a"])(Object(l["a"])({},t),{},{lang:i.language}));case 7:o=n.sent.data,r("setWeather",o),n.next=19;break;case 11:if(n.prev=11,n.t0=n["catch"](2),u=n.t0.response.status,r("setWeather",$e()),404!==u){n.next=18;break}throw r("setError",{value:ie["a"]}),new Error(ie["a"]);case 18:500===u&&r("setError",{value:ie["c"]});case 19:return n.prev=19,r("setDataFetching",{value:!1}),a("setLoading",{value:!1},{root:!0}),n.finish(19);case 23:case"end":return n.stop()}}),n,null,[[2,11,19,23]])})))()},fetchData:function(e,t){return Object(fe["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.dispatch,!t.city){n.next=6;break}return n.next=4,r("_$fetchData",{q:t.city});case 4:n.next=9;break;case 6:if(!t.lat||!t.lon){n.next=9;break}return n.next=9,r("_$fetchData",{lat:t.lat,lon:t.lon});case 9:case"end":return n.stop()}}),n)})))()},refreshData:function(e){return Object(fe["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.dispatch,a=e.rootState,i=a.search.query||n.name,t.next=4,r("fetchData",{city:i});case 4:case"end":return t.stop()}}),t)})))()},initModule:function(e){return Object(fe["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.prev=1,t.next=4,Ae();case 4:a=t.sent.coords,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),r("setError",{value:ie["b"]});case 10:if(a){t.next=12;break}return t.abrupt("return");case 12:return t.next=14,n("fetchData",{lat:a.latitude,lon:a.longitude});case 14:case"end":return t.stop()}}),t,null,[[1,7]])})))()}},qe=He,$e=function(){return{name:null,main:{feels_like:null,humidity:null,pressure:null,temp:null,temp_max:null,temp_min:null},weather:{description:null,icon:null},wind:{speed:null,deg:null},dataFetching:!1,error:null}},Be={namespaced:!0,state:$e,mutations:ke,actions:qe},Ue={history:xe,search:Te,weather:Be},Ge=Ue;r["a"].use(f["a"]);var Me={language:ne,loading:!1},Je=new f["a"].Store({state:Me,mutations:ae,actions:ue,modules:Ge}),Qe=n("f309"),Ye=n("e1bf"),Xe=Object(l["a"])({},Ye["a"]),Ke=n("1072");r["a"].use(Qe["a"]);var ze=new Qe["a"]({lang:{locales:{ru:Xe,en:Ke["a"]},current:ne}});r["a"].config.productionTip=!1,new r["a"]({store:Je,vuetify:ze,render:function(e){return e(te)}}).$mount("#app")},"773d":function(e,t,n){"use strict";n("f717")},f717:function(e,t,n){}});