(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(278)},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},276:function(e,t,a){e.exports=a.p+"static/media/AmbroseKuoResume.76a8fbcb.pdf"},277:function(e,t,a){e.exports=a.p+"static/media/Resume.b95bbfea.png"},278:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(93),o=a.n(l),i=(a(105),a(8));a(106),a(35),a(99),a(107),a(94);var c=function(e){var t=e.projectInformation,a=Object(n.useState)({titleColor:"black",panelColors:"white",backgroundColor:"#white"}),l=Object(i.a)(a,2),o=l[0],c=(l[1],t.toolsUsed.map(function(e,t,a){return r.a.createElement("span",{key:"toolUsed"+t}," ",e+(t<a.length-1?", ":".")," ")})),s=""!=t.siteLink?r.a.createElement("a",{className:"Site-Link",href:t.siteLink}," ","To Site"," "):r.a.createElement("div",{className:"Site-Link",style:{background:"grey"}}," ","Site not hosted");return r.a.createElement("div",{className:"ProjectPanel",style:{backgroundColor:o.backgroundColor}},r.a.createElement("h3",{className:"Project-Title",style:{color:o.titleColor}},t.name),r.a.createElement("img",{className:"Project-Image",src:t.imageLinks[0],alt:t.name}),r.a.createElement("div",{className:"Tools-Used",style:{backgroundColor:o.panelColors}}," ",r.a.createElement("span",null," Made with: ")," ",c),r.a.createElement("div",{className:"ProjectPanel-Description",style:{backgroundColor:o.panelColors}}," ",t.description," "),r.a.createElement("div",{className:"Site-Links"},s,r.a.createElement("a",{className:"Github-Link",href:t.githubLink}," ","Github"," ")))},s=a(17),m=a(9),u=[{name:"Type Talk",toolsUsed:["React.js","Socket.io"],description:"This Chat Web Application was created using primarily Javascript, using the React.js library and the runtime environment Node.js to create a server that can interact with clients. React.js is used in conjunction with HTML and CSS to create the visual layer that the client will see when interacting with the website. ",imageLinks:["/assets/ChatServer0.png"],siteLink:"http://typetalk.herokuapp.com/",githubLink:"https://github.com/ambrosekuo/MultiChatServer"},{name:"World Explorer",toolsUsed:["Phaser3.js","Socket.io"],description:"Multiplayer Platformer that was created using sockets and also has a login/logout system to save progress. Also a simpler working version made without l",imageLinks:["/assets/MultiplayerGame0.png","/assets/MultiplayerGame1.png"],siteLink:"https://aks-world-explorer.herokuapp.com/",githubLink:"https://github.com/ambrosekuo/world-explorer-multiplayer"},{name:"OTC Recommendation Web App",toolsUsed:["React.js","Node.js","string_score","stream"],description:"Drug Recommendation site made with a UofT Pharmacology student. They compile an excel sheet through research and academic knowledge. The excel sheet links symptoms to drugs and this web app displays it as an interactive site. Also includes a search function.",imageLinks:["/assets/DrugRecommendation0.png"],siteLink:"http://drug-recommendation.herokuapp.com/",githubLink:"https://github.com/ambrosekuo/drugRecommendation"}],d=[{title:"Issue: Multiplayer Game desyncing",difficulty:"Hell",description:"Currently, you can only see the people that joined after you, so it's multiplayer, but not syncing correctly. The code is messy/not modularize and very long since it was a difficult project."},{title:"Todo: Make this Portfolio look better",difficulty:"???",description:"Figuring out how to make this site look professional"},{title:"Expanding on: Chat Server",difficulty:"Medium",description:"Creating database end and being able to create chat rooms."}];a(229);function p(e){var t=e.currentIdea,a=e.keyID;return r.a.createElement("li",{key:a},r.a.createElement("h3",null," ",t.title," "),r.a.createElement("h3",null," Difficulty Rating: ",t.difficulty," "),r.a.createElement("div",null," ",t.description," "),r.a.createElement("hr",{style:{margin:"0",width:"95%"}}))}var h=function(e){var t,a=e.toggleExpand,l=e.currentIdeas,o=Object(n.useState)(!1),c=Object(i.a)(o,2),s=c[0],m=c[1];return t=s?l.map(function(e,t,a){return r.a.createElement(p,{currentIdea:e,key:"currentIdea"+t}," ")}):l.length>=1?r.a.createElement(p,{currentIdea:l[0],key:"currentIdea0"}," "):"",r.a.createElement("div",{className:"Project-Description"},r.a.createElement("div",{className:"Project-Description-Header"},r.a.createElement("h2",null," Current Issues/Ideas ")),r.a.createElement("ul",null,t),r.a.createElement("button",{className:"Toggle-Current-Ideas",onClick:function(){m(!s),a(s)}},s?"Show less \u2b06":"Show more \u2b07"))};a(230);var E=function(){return r.a.createElement("div",{className:"About-Me"},r.a.createElement("div",{className:"About-Me-Container"},r.a.createElement("img",{src:"/assets/me.jpg",alt:"Me"}),r.a.createElement("div",{className:"About-Me-Description"},r.a.createElement("h1",null," ABOUT ME"),r.a.createElement("p",null,"Hello! I'm Ambrose Kuo, a 3rd year Computer Science student at Ryerson University. These are some projects I'm working on!"," "))))},g=a(98);a(95);var b=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/"},"H O M E")),r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/projects"}," ","P R O J E C T S"," ")),r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/resume"}," ","R E S U M E"," ")),r.a.createElement("li",null,r.a.createElement(s.b,{className:"link",to:"/todo"}," ","T O D O"," ")))},k=function(){return r.a.createElement(h,{currentIdeas:d,toggleExpand:function(e){e}}," ")};var f=function(){return r.a.createElement("div",{className:"External-Links"},r.a.createElement("a",{href:"https://github.com/ambrosekuo"}," Github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/ambrose-kuo-832147113/"}," Linkedln"))},v=function(){return r.a.createElement(E,null)},y=function(){return r.a.createElement("div",{className:"Resume"},r.a.createElement("div",{className:"Resume-Link"}," ",r.a.createElement("button",{onClick:function(){var e=a(276);window.open(e)}}," ","View as PDF")," "),r.a.createElement("img",{src:a(277),alt:"resume"}))},w=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],o=u.map(function(e,t,a){return r.a.createElement(c,{projectInformation:e,key:t}," ")});return r.a.createElement("div",{className:"Favourite-Projects"},r.a.createElement("h1",null," Current Projects "),o[a],r.a.createElement("div",{className:"Page-Buttons"},r.a.createElement("span",null," ","Project: ",a+1," of ",u.length),r.a.createElement("button",{onClick:function(){a>0&&l(a-1)}}," ","<="," "),r.a.createElement("button",{onClick:function(){a<u.length-1&&l(a+1)}}," ","=>"," ")))},N=function(){g.a.div({visible:{x:50},hidden:{x:-50}});var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"App-header-title"},r.a.createElement("div",{className:"Button-Container-Mobile",onClick:function(){l(!a)}},r.a.createElement("div",{className:"Hamburger"}),r.a.createElement("div",{className:"Hamburger"}),r.a.createElement("div",{className:"Hamburger"}),r.a.createElement("div",{style:{visibility:a?"visible":"hidden"},className:"Mobile-Dropdown"},r.a.createElement(b,null))),r.a.createElement("h1",null," Ambrose's Projects "),r.a.createElement("div",{className:"Button-Container"},r.a.createElement(b,null)),r.a.createElement(f,null)),r.a.createElement("div",{className:"Content-Panel"},r.a.createElement(m.a,{exact:!0,path:"/",component:v}),r.a.createElement(m.a,{path:"/projects",component:w}),r.a.createElement(m.a,{path:"/resume",component:y}),r.a.createElement(m.a,{path:"/todo",component:k})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.0748abea.chunk.js.map