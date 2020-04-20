(this["webpackJsonpcreative-project-spotify-manager"]=this["webpackJsonpcreative-project-spotify-manager"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),s=(a(11),a(1)),i=a(2),l=a.n(i),u=a(3);function p(e,t){window.localStorage.setItem(e,JSON.stringify(t))}function m(e,t){return t||(t=""),a=e,JSON.parse(window.localStorage.getItem(a))||t;var a}var f="ede2e752aac9420c8255c01272a9d8ca",h="https://bcwebcourse.github.io/creative-project-spotify-manager",d=["playlist-modify-public","user-read-email","user-top-read"];function g(){var e=new URLSearchParams;return e.append("client_id",f),e.append("response_type","token"),e.append("redirect_uri",h),e.append("scope",d.join(" ")),"".concat("https://accounts.spotify.com/authorize","?").concat(e.toString())}function y(e){return new Promise((function(t){return setTimeout(t,e)}))}var v=Object(n.createContext)();var b=function(e){var t=Object(n.useState)(m("accessToken")),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(m("exprDate")),f=Object(s.a)(i,2),h=f[0],d=f[1],b=Object(n.useState)(m("userGrantedAccess",!0)),E=Object(s.a)(b,2),w=E[0],j=E[1];function S(){var e=new Date,t=new Date(h);return r&&w&&e<t}function O(){if(!S()){if(new URLSearchParams(window.location.search.substr(1)).get("error"))return j(!1),void p("userGrantedAccess",!1);var e=new URLSearchParams(window.location.hash.substr(1)),t=e.get("access_token");if(t){var a=function(e){var t=new Date,a=1e3*e;return t.setTime(t.getTime()+a),t}(parseInt(e.get("expires_in")));return c(t),d(a),j(!0),p("accessToken",t),p("exprDate",a.toString()),p("userGrantedAccess",!0),void(window.location.href="/creative-project-spotify-manager")}window.location.href=g()}}function k(){return(k=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p("accessToken",""),p("exprDate",""),p("userGrantedAccess",!1),"https://accounts.spotify.com/en/logout","width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1",t=window.open("https://accounts.spotify.com/en/logout","Spotify Logout","width=100,height=100,top=0,left=0,toolbar=1,location=1,directories=1,status=1,menubar=1,scrollbars=1"),e.next=8,y(1300);case 8:t.close(),window.location.href=g();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useLayoutEffect)(O,[r,h,w]);var N={accessToken:r,userGrantedAccess:w,userIsAuthenticated:S,authenticateUser:O,logoutUser:function(){return k.apply(this,arguments)}};return o.a.createElement(v.Provider,{value:N},e.children)};a(13),a(14);var E=function(e){var t=e.playlist.name.substr(0,25);return t<e.playlist.name&&(t+="..."),o.a.createElement("div",{className:"playlist-obj"},o.a.createElement("img",{className:"playlist-thumbnail",src:e.playlist.images[0].url,alt:"playlist",onClick:function(t){return function(e,t){console.log(t)}(0,e.playlist.name)}}),o.a.createElement("p",null,t))};var w=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useContext)(v).accessToken;return Object(n.useLayoutEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.spotify.com/v1/me/playlists?",e.next=3,fetch("https://api.spotify.com/v1/me/playlists?",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(c)}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a.items);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),o.a.createElement("div",null,o.a.createElement("div",{className:"home-header"},o.a.createElement("h1",null,"Welcome to Spotify Manager."),o.a.createElement("p",null,'To see your top songs, use the navigation bar on the left. If you like what you see, click "create playlist" on any of those pages to generate a new playlist of those songs. Come back here to see that playlist appear below, or open up Spotify to start listening right away.')),o.a.createElement("h2",{className:"home-section-header"},"Your Playlists"),o.a.createElement("div",{className:"playlists"},a.map((function(e,t){return o.a.createElement(E,{key:t,playlist:e})}))))};a(15);var j=function(e){var t=e.song.name.substr(0,40);t<e.song.name&&(t+="...");var a=e.song.artists.map((function(e){return e.name})).join(", ");return o.a.createElement("div",{className:"song-row"},o.a.createElement("div",{className:"song-ranking"},e.rank,"."),o.a.createElement("div",null,t),o.a.createElement("div",null,a),o.a.createElement("div",{className:"song-popularity"},e.song.popularity))},S=Object(n.createContext)();var O=function(e){var t=Object(n.useState)("Home"),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("Month"),l=Object(s.a)(i,2),u={timeframe:r,setTimeframe:c,timeframeReadable:l[0],setTimeframeReadable:l[1]};return o.a.createElement(S.Provider,{value:u},e.children)};a(16);var k=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),p=i[0],m=i[1],f=Object(n.useContext)(v).accessToken,h=Object(n.useContext)(S),d=h.timeframe,g=h.timeframeReadable;function y(){return(y=Object(u.a)(l.a.mark((function e(t){var n,o,r,c,s,i,u,p,h,d,y,v,b,E,w;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spotify.com/v1/me",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(f)}});case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,r=new Date,c={weekday:"long",year:"numeric",month:"long",day:"numeric"},s={hour:"2-digit",minute:"2-digit"},i=r.toLocaleDateString(void 0,c),u=r.toLocaleTimeString([],s),p="https://api.spotify.com/v1/users/".concat(o.id,"/playlists"),e.next=14,fetch(p,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(f)},body:JSON.stringify({name:"Top Songs of the Past ".concat(g),description:"This playlist was created for you by Spotify Manager on ".concat(i," at ").concat(u,".")})});case 14:return h=e.sent,e.next=17,h.json();case 17:return d=e.sent,y=d.id,v=a.map((function(e){return e.uri})),b="https://api.spotify.com/v1/playlists/".concat(y,"/tracks"),e.next=23,fetch(b,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(f)},body:JSON.stringify(v)});case 23:return E=e.sent,e.next=26,E.json();case 26:w=e.sent,console.log(w),w.snapshot_id&&m(!0);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useLayoutEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({time_range:d,limit:50}),a="https://api.spotify.com/v1/me/top/tracks?"+t,e.next=4,fetch(a,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(f)}});case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,r(o.items);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,d]),o.a.createElement("div",{className:"top-songs"},p&&o.a.createElement("div",{className:"success-message"},"Success! Open Spotify to see your new playlist."),o.a.createElement("header",{className:"top-songs-header"},o.a.createElement("button",{className:"top-songs-button"},"Filter Button"),o.a.createElement("h2",{className:"top-songs-title"},"Top Songs of the Past ",g),o.a.createElement("button",{className:"top-songs-button",onClick:function(e){return y.apply(this,arguments)}},"Create Playlist")),o.a.createElement("header",{className:"top-songs-charts-header"},o.a.createElement("div",{className:"song-ranking-placeholder"}),o.a.createElement("div",null,"Title"),o.a.createElement("div",{className:"song-artist"},"Artist"),o.a.createElement("div",{className:"song-popularity"},"Popularity / 100")),a.map((function(e,t){return o.a.createElement(j,{key:t,rank:t+1,song:e})})))};a(17);var N=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"Please log in to your Spotify account."),o.a.createElement("p",null,"In order to use this web app, you must log in to your Spotify account and grant all the necessary permissions. If it has been more than an hour since you last logged in, you may be asked to do so again."),o.a.createElement("button",{onClick:function(e){window.location.href=g()}},"Log in"))};var T=function(e){if(!Object(n.useContext)(v).userGrantedAccess)return o.a.createElement(N,null);switch(e.page){case"Home":return o.a.createElement(w,null);case"TopSongs":return o.a.createElement(k,null);default:return o.a.createElement(w,null)}};a(18);var x=function(e){var t,a=Object(n.useContext)(S),r=a.setTimeframe,c=a.setTimeframeReadable,s=Object(n.useContext)(v).logoutUser;function i(t,a){r(a),c(t.target.innerHTML),e.setPage("TopSongs")}return o.a.createElement("nav",null,o.a.createElement("div",{className:"title"},o.a.createElement("img",{className:"logo",src:(t="/favicon.ico","/creative-project-spotify-manager"+t),alt:"Logo"}),o.a.createElement("h1",{className:"app-title"},"Spotify Manager")),o.a.createElement("button",{className:"top-songs-nav-item",onClick:function(){return e.setPage("Home")}},"Home"),o.a.createElement("h2",{className:"top-songs-nav-item"},"Your Top Songs of the Past:"),o.a.createElement("button",{onClick:function(e){return i(e,"short_term")}},"Month"),o.a.createElement("button",{onClick:function(e){return i(e,"medium_term")}},"Six Months"),o.a.createElement("button",{onClick:function(e){return i(e,"long_term")}},"Few Years"),o.a.createElement("button",{className:"top-songs-nav-item",onClick:s},"Logout"))};a(19);var C=function(){var e=Object(n.useState)("Home"),t=Object(s.a)(e,2),a=t[0],r=t[1];return o.a.createElement(b,null,o.a.createElement(O,null,o.a.createElement("div",{className:"main"},o.a.createElement(x,{setPage:r}),o.a.createElement("div",{className:"content"},o.a.createElement(T,{page:a})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.8d12cdc0.chunk.js.map