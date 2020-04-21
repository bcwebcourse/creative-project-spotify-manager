(this["webpackJsonpcreative-project-spotify-manager"]=this["webpackJsonpcreative-project-spotify-manager"]||[]).push([[0],[,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),s=(n(12),n(2)),i=n.n(s),l=n(3),u=n(1);function m(e,t){window.localStorage.setItem(e,JSON.stringify(t))}function p(e,t){return t||(t=""),n=e,JSON.parse(window.localStorage.getItem(n))||t;var n}var d="ede2e752aac9420c8255c01272a9d8ca",f="https://bcwebcourse.github.io/creative-project-spotify-manager",h=["playlist-modify-public","user-read-email","user-top-read"];function g(){var e=new URLSearchParams;return e.append("client_id",d),e.append("response_type","token"),e.append("redirect_uri",f),e.append("scope",h.join(" ")),"".concat("https://accounts.spotify.com/authorize","?").concat(e.toString())}function y(e){return new Promise((function(t){return setTimeout(t,e)}))}var v=Object(a.createContext)();var b=function(e){var t=Object(a.useState)(p("accessToken")),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(p("exprDate")),d=Object(u.a)(s,2),f=d[0],h=d[1],b=Object(a.useState)(p("userGrantedAccess",!0)),E=Object(u.a)(b,2),w=E[0],j=E[1];function O(){var e=new Date,t=new Date(f);return r&&w&&e<t}function S(){if(!O()){if(new URLSearchParams(window.location.search.substr(1)).get("error"))return j(!1),void m("userGrantedAccess",!1);var e=new URLSearchParams(window.location.hash.substr(1)),t=e.get("access_token");if(t){var n=function(e){var t=new Date,n=1e3*e;return t.setTime(t.getTime()+n),t}(parseInt(e.get("expires_in")));return c(t),h(n),j(!0),m("accessToken",t),m("exprDate",n.toString()),m("userGrantedAccess",!0),void(window.location.href="/creative-project-spotify-manager")}window.location.href=g()}}function k(){return(k=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("accessToken",""),m("exprDate",""),m("userGrantedAccess",!1),"https://accounts.spotify.com/en/logout","width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1",t=window.open("https://accounts.spotify.com/en/logout","Spotify Logout","width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1"),e.next=8,y(1300);case 8:t.close(),window.location.href=g();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useLayoutEffect)(S,[r,f,w]);var N={accessToken:r,userGrantedAccess:w,userIsAuthenticated:O,authenticateUser:S,logoutUser:function(){return k.apply(this,arguments)}};return o.a.createElement(v.Provider,{value:N},e.children)},E=(n(5),n(14),function(e){return"/creative-project-spotify-manager"+e});var w=function(e){var t=e.playlist.name.substr(0,25);return t<e.playlist.name&&(t+="..."),o.a.createElement("div",{className:"playlist-obj"},o.a.createElement("img",{className:"playlist-thumbnail",src:e.playlist.images.length?e.playlist.images[0].url:E("/empty-playlist.png"),alt:"playlist",onClick:function(t){return function(e,t){console.log(t)}(0,e.playlist.name)}}),o.a.createElement("p",null,t))};var j=function(e){var t=e.playlists;return o.a.createElement("div",{className:"playlists"},t.map((function(e,t){return o.a.createElement(w,{key:t,playlist:e})})))};var O=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useContext)(v),s=c.accessToken,m=c.authenticateUser;return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/me/playlists?",e.next=3,fetch("https://api.spotify.com/v1/me/playlists?",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n.items);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m(),function(){e.apply(this,arguments)}()}),[m,s,r]),o.a.createElement("div",{className:"home"},o.a.createElement("header",{className:"home-header"},o.a.createElement("h1",null,"Welcome to Spotify Manager."),o.a.createElement("p",null,'To see your top songs, use the navigation bar on the left. If you like what you see, click "create playlist" to generate a new playlist of those songs. Come back here to see your new playlist appear below, or open up Spotify to start listening right away.')),o.a.createElement("section",{className:"home-body"},n.length?o.a.createElement("div",null,o.a.createElement("h2",{className:"home-body-header"},"Your Playlists"),o.a.createElement(j,{playlists:n})):o.a.createElement("h2",{className:"loading-indicator"},"Loading...")))};n(15);var S=function(e){var t=e.song.name.substr(0,40);t<e.song.name&&(t+="...");var n=e.song.artists.map((function(e){return e.name})).join(", ");return o.a.createElement("div",{className:"song-row"},o.a.createElement("div",{className:"song-ranking"},e.rank,"."),o.a.createElement("div",null,t),o.a.createElement("div",null,n),o.a.createElement("div",{className:"song-popularity"},e.song.popularity))};n(16);var k=function(e){var t=e.songs;return o.a.createElement("div",{className:"top-songs-chart"},o.a.createElement("header",{className:"top-songs-chart-header"},o.a.createElement("div",{className:"song-ranking-placeholder"}),o.a.createElement("div",null,"Title"),o.a.createElement("div",{className:"song-artist"},"Artist"),o.a.createElement("div",{className:"song-popularity"},"Popularity / 100")),t.map((function(e,t){return o.a.createElement(S,{key:t,rank:t+1,song:e})})))},N=Object(a.createContext)();var x=function(e){var t=Object(a.useState)("Home"),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)("Month"),i=Object(u.a)(s,2),l={timeframe:r,setTimeframe:c,timeframeReadable:i[0],setTimeframeReadable:i[1]};return o.a.createElement(N.Provider,{value:l},e.children)};n(17);var T=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(u.a)(c,2),m=s[0],p=s[1],d=Object(a.useState)(""),f=Object(u.a)(d,2),h=f[0],g=f[1],y=Object(a.useContext)(v),b=y.accessToken,E=y.authenticateUser,w=Object(a.useContext)(N),j=w.timeframe,O=w.timeframeReadable;function S(){return(S=Object(l.a)(i.a.mark((function e(t){var a,o,r,c,s,l,u,m,d,f,h,y,v,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(b)}});case 2:return a=e.sent,e.next=5,a.json();case 5:return o=e.sent,r=new Date,c={weekday:"long",year:"numeric",month:"long",day:"numeric"},s={hour:"2-digit",minute:"2-digit"},l=r.toLocaleDateString(void 0,c),u=r.toLocaleTimeString([],s),m="https://api.spotify.com/v1/users/".concat(o.id,"/playlists"),e.next=14,fetch(m,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(b)},body:JSON.stringify({name:"Top Songs of the Past ".concat(O),description:"This playlist was created for you by Spotify Manager on ".concat(l," at ").concat(u,".")})});case 14:return d=e.sent,e.next=17,d.json();case 17:return f=e.sent,console.log(f),e.next=21,g(f.id);case 21:return h=n.map((function(e){return e.uri})),y="https://api.spotify.com/v1/playlists/".concat(f.id,"/tracks"),e.next=25,fetch(y,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(b)},body:JSON.stringify(h)});case 25:return v=e.sent,e.next=28,v.json();case 28:E=e.sent,console.log(E),E.snapshot_id&&p(!0);case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({time_range:j,limit:50}),n="https://api.spotify.com/v1/me/top/tracks?"+t,e.next=4,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(b)}});case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,r(o.items);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p(!1),E(),function(){e.apply(this,arguments)}()}),[p,E,b,j]),o.a.createElement("div",{className:"top-songs"},m&&o.a.createElement("div",{className:"success-message"},"Success! Go to the",o.a.createElement("button",{className:"nav-link",onClick:function(){window.location.href="/creative-project-spotify-manager"}},"Home page"),"or open",o.a.createElement("button",{className:"nav-link",onClick:function(){window.open("https://open.spotify.com/playlist/".concat(h))}},"Spotify"),"to see your new playlist."),o.a.createElement("header",{className:"top-songs-header"},o.a.createElement("button",{className:"top-songs-button"},"Filter Button"),o.a.createElement("h2",{className:"top-songs-title"},"Top Songs of the Past ",O),o.a.createElement("button",{className:"top-songs-button",onClick:function(e){return S.apply(this,arguments)}},"Create Playlist")),n.length?o.a.createElement(k,{songs:n}):o.a.createElement("h2",{className:"loading-indicator"},"Loading..."))};n(18);var C=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Please log in to your Spotify account."),o.a.createElement("p",null,"In order to use this web app, you must log in to your Spotify account and grant all the necessary permissions. If it has been more than an hour since you last logged in, you may be asked to do so again."),o.a.createElement("button",{onClick:function(e){window.location.href=g()}},"Log in"))},P=Object(a.createContext)();var L=function(e){var t=Object(a.useState)("Home"),n=Object(u.a)(t,2),r={page:n[0],setPage:n[1]};return o.a.createElement(P.Provider,{value:r},e.children)};var A=function(){var e=Object(a.useContext)(v).userGrantedAccess,t=Object(a.useContext)(P).page;if(!e)return o.a.createElement(C,null);switch(t){case"Home":return o.a.createElement(O,null);case"TopSongs":return o.a.createElement(T,null);default:return o.a.createElement(O,null)}};n(19);var B=function(){var e=Object(a.useContext)(N),t=e.setTimeframe,n=e.setTimeframeReadable,r=Object(a.useContext)(v).logoutUser,c=Object(a.useContext)(P).setPage;function s(e){["home-button","short-term","medium-term","long-term"].forEach((function(t){t!==e.id&&(document.getElementById(t).style.color="white")}));var t=getComputedStyle(document.body).getPropertyValue("--spotify-green");e.style.color=t}function i(e,a){s(e.target),t(a),n(e.target.innerHTML),c("TopSongs")}return Object(a.useLayoutEffect)((function(){s(document.getElementById("home-button"))}),[]),window.onresize=function(){(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<=370?(document.getElementById("medium-term").innerHTML="6 Months",document.getElementById("long-term").innerHTML="Years"):(document.getElementById("medium-term").innerHTML="Six Months",document.getElementById("long-term").innerHTML="Few Years")},o.a.createElement("nav",null,o.a.createElement("header",{className:"title"},o.a.createElement("img",{className:"logo",src:E("/favicon.ico"),alt:"Logo"}),o.a.createElement("h1",{className:"app-title"},"Spotify Manager")),o.a.createElement("section",{className:"nav-body"},o.a.createElement("button",{id:"home-button",className:"top-songs-nav-item",onClick:function(e){s(e.target),c("Home")}},"Home"),o.a.createElement("h2",{className:"top-songs-nav-item"},"Top Songs of the Past:"),o.a.createElement("button",{id:"short-term",onClick:function(e){return i(e,"short_term")}},"Month"),o.a.createElement("button",{id:"medium-term",onClick:function(e){return i(e,"medium_term")}},"Six Months"),o.a.createElement("button",{id:"long-term",onClick:function(e){return i(e,"long_term")}},"Few Years"),o.a.createElement("button",{className:"top-songs-nav-item",onClick:r},"Logout")))};n(20);var I=function(){return o.a.createElement(b,null,o.a.createElement(L,null,o.a.createElement(x,null,o.a.createElement("div",{className:"main"},o.a.createElement(B,null),o.a.createElement("div",{className:"content"},o.a.createElement(A,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f1db411f.chunk.js.map