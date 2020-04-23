(this["webpackJsonpcreative-project-spotify-manager"]=this["webpackJsonpcreative-project-spotify-manager"]||[]).push([[0],[,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),s=(n(12),n(2)),i=n.n(s),l=n(3),u=n(1);function m(e,t){window.localStorage.setItem(e,JSON.stringify(t))}function p(e,t){t||(t="");try{return function(e){return JSON.parse(window.localStorage.getItem(e))}(e)}catch(n){return t}}var d="ede2e752aac9420c8255c01272a9d8ca",f="https://bcwebcourse.github.io/creative-project-spotify-manager",h=["playlist-modify-public","user-read-email","user-top-read"];function g(){var e=new URLSearchParams;return e.append("client_id",d),e.append("response_type","token"),e.append("redirect_uri",f),e.append("scope",h.join(" ")),"".concat("https://accounts.spotify.com/authorize","?").concat(e.toString())}function y(e){return new Promise((function(t){return setTimeout(t,e)}))}var v=Object(a.createContext)();var b=function(e){var t=Object(a.useState)(p("accessToken")),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(p("exprDate")),d=Object(u.a)(s,2),f=d[0],h=d[1],b=Object(a.useState)(p("userGrantedAccess",!0)),E=Object(u.a)(b,2),w=E[0],j=E[1];function k(){var e=new Date,t=new Date(f);return r&&w&&e<t}function O(){if(new URLSearchParams(window.location.search.substr(1)).get("error"))return j(!1),void m("userGrantedAccess",!1);var e=new URLSearchParams(window.location.hash.substr(1)),t=e.get("access_token");if(t){var n=function(e){var t=new Date,n=1e3*e;return t.setTime(t.getTime()+n),t}(parseInt(e.get("expires_in")));c(t),h(n),j(!0),m("accessToken",t),m("exprDate",n.toString()),m("userGrantedAccess",!0),window.history.replaceState(null,null," ")}}function S(){return(S=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("accessToken",""),m("exprDate",""),m("userGrantedAccess",!1),"https://accounts.spotify.com/en/logout","width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1",t=window.open("https://accounts.spotify.com/en/logout","Spotify Logout","width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1"),e.next=8,y(1300);case 8:t.close(),window.location.href=g();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useLayoutEffect)(O,[]);var N={accessToken:r,userGrantedAccess:w,userIsAuthenticated:k,handleAuthRedirect:O,authenticateUser:function(){k()||(O(),window.location.href=g())},logoutUser:function(){return S.apply(this,arguments)}};return o.a.createElement(v.Provider,{value:N},e.children)},E=(n(5),n(14),function(e){return"/creative-project-spotify-manager"+e});var w=function(e){return o.a.createElement("div",{className:"playlist-obj"},o.a.createElement("img",{className:"playlist-thumbnail",src:e.playlist.images.length?e.playlist.images[0].url:E("/empty-playlist.png"),alt:"playlist",onClick:function(t){return n=e.playlist.name,void console.log(n);var n}}),o.a.createElement("p",null,e.playlist.name))};var j=function(e){var t=e.playlists;return o.a.createElement("div",{className:"playlists"},t.map((function(e,t){return o.a.createElement(w,{key:t,playlist:e})})))};var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(v),s=c.accessToken,m=c.authenticateUser;return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({limit:50}),n="https://api.spotify.com/v1/me/playlists?".concat(t),e.next=4,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,r(o.items);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m(),function(){e.apply(this,arguments)}()}),[s,m]),o.a.createElement("div",{className:"home"},o.a.createElement("header",{className:"home-header"},o.a.createElement("h1",null,"Welcome to Spotify Manager."),o.a.createElement("p",null,'We believe that people deserve to have more control over their music listening experience. That\'s why we created Spotify Manager. Use the navigation bar to checkout your top 50 songs across various timespans, and if you like what you see, click "create playlist" to generate a new playlist of those songs. Then come back here to see that playlist appear below, or open up Spotify to start listening right away.')),o.a.createElement("section",{className:"home-body"},n.length?o.a.createElement("div",null,o.a.createElement("h2",{className:"home-body-header"},"Your Playlists"),o.a.createElement(j,{playlists:n})):o.a.createElement("h2",{className:"loading-indicator"},"Loading...")))};n(15);var O=function(e){var t=e.song.artists.map((function(e){return e.name})).join(", ");return o.a.createElement("div",{className:"song-row"},o.a.createElement("div",{className:"song-ranking"},e.rank,"."),o.a.createElement("div",null,e.song.name),o.a.createElement("div",{className:"song-artist"},t),o.a.createElement("div",{className:"song-popularity"},e.song.popularity," / 100"))};n(16);var S=function(e){var t=e.songs,n=e.isAscending,a=t.map((function(e,t){var a=n?t+1:50-t;return o.a.createElement(O,{key:t,rank:a,song:e})}));return o.a.createElement("div",{className:"top-songs-chart"},o.a.createElement("header",{className:"top-songs-chart-header"},o.a.createElement("div",{className:"song-ranking-placeholder"}),o.a.createElement("div",null,"Title"),o.a.createElement("div",{className:"song-artist"},"Artist"),o.a.createElement("div",{id:"song-popularity",className:"song-popularity"},"Popularity")),a)},N=Object(a.createContext)();var x=function(e){var t=Object(a.useState)("Home"),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)("Month"),i=Object(u.a)(s,2),l={timeframe:r,setTimeframe:c,timeframeReadable:i[0],setTimeframeReadable:i[1]};return o.a.createElement(N.Provider,{value:l},e.children)};function T(e){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(i.a.mark((function e(t){var n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.endpoint,a=t.accessToken,e.next=3,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}});case 3:return o=e.sent,e.next=6,o.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(i.a.mark((function e(t){var n,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.endpoint,a=t.accessToken,o=t.body,e.next=3,fetch(n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(o)});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return function(e){var t=e.indexOf(" ")+1;return e.substring(t)}((new Date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}))}n(17);var _=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),s=Object(u.a)(c,2),m=s[0],p=s[1],d=Object(a.useState)(!1),f=Object(u.a)(d,2),h=f[0],g=f[1],y=Object(a.useState)(""),b=Object(u.a)(y,2),E=b[0],w=b[1],j=Object(a.useContext)(v),k=j.accessToken,O=j.authenticateUser,x=Object(a.useContext)(N),C=x.timeframe,P=x.timeframeReadable;function _(){return"short_term"===C?"Top Songs of the ".concat(P):"medium_term"===C?"Top Songs of the Past ".concat(P):"long_term"===C?"Top Songs of ".concat(P):void 0}function D(e){return R.apply(this,arguments)}function R(){return(R=Object(l.a)(i.a.mark((function e(t){var a,o,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(),e.next=3,T({endpoint:"https://api.spotify.com/v1/me",accessToken:k});case 3:return a=e.sent,o=m?"ascending":"descending",r=m?"1 - 50":"50 - 1",e.next=8,A({endpoint:"https://api.spotify.com/v1/users/".concat(a.id,"/playlists"),accessToken:k,body:{name:_(),description:"This playlist was created for you by Spotify "+"Manager on ".concat(L(),". Ranked in ")+"".concat(o," order from ").concat(r,".")}});case 8:return c=e.sent,w(c.id),e.next=12,A({endpoint:"https://api.spotify.com/v1/playlists/".concat(c.id,"/tracks"),accessToken:k,body:n.map((function(e){return e.uri}))});case 12:e.sent.snapshot_id&&g(!0);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){p(!m),r(n.reverse())}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({time_range:C,limit:50}),e.next=3,T({endpoint:"https://api.spotify.com/v1/me/top/tracks?".concat(t),accessToken:k});case 3:n=e.sent,r(n.items);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O(),g(!1),p(!0),function(){e.apply(this,arguments)}()}),[O,k,C]),o.a.createElement("div",{className:"top-songs"},h&&o.a.createElement("div",{className:"success-message"},"Success! Go",o.a.createElement("button",{className:"nav-link",onClick:function(){window.location.href="/creative-project-spotify-manager"}},"Home"),"or open",o.a.createElement("button",{className:"nav-link",onClick:function(){window.open("https://open.spotify.com/playlist/".concat(E))}},"Spotify"),"to see your new playlist."),o.a.createElement("header",{className:"top-songs-small-header"},o.a.createElement("div",{className:"top-songs-small-header-buttons"},o.a.createElement("button",{className:"spotify-button top-songs-button small-header-order",onClick:U},"Order ",m?"Descending":"Ascending"),o.a.createElement("button",{className:"spotify-button top-songs-button",onClick:D},"Create Playlist")),o.a.createElement("h2",{className:"top-songs-title"},_())),o.a.createElement("header",{className:"top-songs-large-header"},o.a.createElement("button",{value:"Descending",className:"spotify-button top-songs-button large-header-order",onClick:U},"Order ",m?"Descending":"Ascending"),o.a.createElement("h2",{className:"top-songs-title"},_()),o.a.createElement("button",{className:"spotify-button top-songs-button",onClick:D},"Create Playlist")),n.length?o.a.createElement(S,{songs:n,isAscending:m}):o.a.createElement("h2",{className:"loading-indicator"},"Loading..."))};n(18);var D=function(){return o.a.createElement("div",{className:"not-authenticated"},o.a.createElement("h1",null,"Please log in to your Spotify account."),o.a.createElement("p",null,"In order to use this web app, you must log in to your Spotify account and grant all the necessary permissions. If it has been more than an hour since you last logged in, you may be asked to do so again."),o.a.createElement("button",{className:"spotify-button login-button",onClick:function(){window.location.href=g()}},"Log in"))},R=Object(a.createContext)();var U=function(e){var t=Object(a.useState)("Home"),n=Object(u.a)(t,2),r={page:n[0],setPage:n[1]};return o.a.createElement(R.Provider,{value:r},e.children)};var I=function(){var e=Object(a.useContext)(v).userIsAuthenticated,t=Object(a.useContext)(R).page;if(!e())return o.a.createElement(D,null);switch(t){case"Home":return o.a.createElement(k,null);case"TopSongs":return o.a.createElement(_,null);default:return o.a.createElement(k,null)}};n(19);var M=function(){var e=Object(a.useContext)(N),t=e.setTimeframe,n=e.setTimeframeReadable,r=Object(a.useContext)(v).logoutUser,c=Object(a.useContext)(R).setPage;function s(e){["home-button","short-term","medium-term","long-term"].forEach((function(t){t!==e.id&&(document.getElementById(t).style.color="white")}));var t=getComputedStyle(document.body).getPropertyValue("--spotify-green");e.style.color=t}function i(e,a){s(e.target),t(a),n(e.target.value),c("TopSongs")}return Object(a.useLayoutEffect)((function(){s(document.getElementById("home-button"))}),[]),o.a.createElement("nav",null,o.a.createElement("header",{className:"title"},o.a.createElement("img",{className:"logo",src:E("/favicon.ico"),alt:"Logo"}),o.a.createElement("h1",{className:"app-title"},"Spotify Manager")),o.a.createElement("section",{className:"nav-body"},o.a.createElement("button",{id:"home-button",className:"top-songs-nav-item",onClick:function(e){s(e.target),c("Home")}},"Home"),o.a.createElement("h2",{className:"top-songs-nav-item"},"Your Top Songs:"),o.a.createElement("button",{value:"Month",id:"short-term",onClick:function(e){return i(e,"short_term")}},"Month"),o.a.createElement("button",{value:"Six Months",id:"medium-term",onClick:function(e){return i(e,"medium_term")}},"Six Months"),o.a.createElement("button",{value:"All Time",id:"long-term",onClick:function(e){return i(e,"long_term")}},"All Time"),o.a.createElement("button",{className:"top-songs-nav-item",onClick:r},"Logout")))};n(20);var B=function(){return o.a.createElement(b,null,o.a.createElement(U,null,o.a.createElement(x,null,o.a.createElement("div",{className:"main"},o.a.createElement(M,null),o.a.createElement("div",{className:"content"},o.a.createElement(I,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.0ca7e039.chunk.js.map