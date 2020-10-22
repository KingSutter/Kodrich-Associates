(this["webpackJsonpKodrich-Associates"]=this["webpackJsonpKodrich-Associates"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=a(24),i=a(44),s=a(63),m=(a(75),Object(c.c)({loginMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_LOGIN_ERROR":return"";case"LOGIN_INPUT_ERROR":return"Enter your username and password!";case"LOGIN_FAILED":return"Oops! The username and password didn't match. Try again!";case"LOGIN_FAILED_NO_CODE":return"Oops! Something went wrong! Is the server running?";default:return e}},registrationMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_REGISTRATION_ERROR":return"";case"REGISTRATION_INPUT_ERROR":return"Choose a username and password!";case"REGISTRATION_FAILED":return"Oops! That didn't work. The username might already be taken. Try again!";default:return e}}})),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"login",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TO_LOGIN_MODE":return"login";case"SET_TO_REGISTER_MODE":return"register";default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.payload;case"UNSET_USER":return{};default:return e}},d=Object(c.c)({errors:m,loginMode:u,user:p}),g=a(16),f=a.n(g),h=a(17),E=a(28),v=a.n(E),b=f.a.mark(k),y=f.a.mark(O),w=f.a.mark(j);function k(e){var t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.b)({type:"CLEAR_LOGIN_ERROR"});case 3:return t={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=6,v.a.post("/api/user/login",e.payload,t);case 6:return a.next=8,Object(h.b)({type:"FETCH_USER"});case 8:a.next=20;break;case 10:if(a.prev=10,a.t0=a.catch(0),console.log("Error with user login:",a.t0),401!==a.t0.response.status){a.next=18;break}return a.next=16,Object(h.b)({type:"LOGIN_FAILED"});case 16:a.next=20;break;case 18:return a.next=20,Object(h.b)({type:"LOGIN_FAILED_NO_CODE"});case 20:case"end":return a.stop()}}),b,null,[[0,10]])}function O(e){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={headers:{"Content-Type":"application/json"},withCredentials:!0},e.next=4,v.a.post("/api/user/logout",t);case 4:return e.next=6,Object(h.b)({type:"UNSET_USER"});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error with user logout:",e.t0);case 11:case"end":return e.stop()}}),y,null,[[0,8]])}function j(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)("LOGIN",k);case 2:return e.next=4,Object(h.c)("LOGOUT",O);case 4:case"end":return e.stop()}}),w)}var C=j,_=f.a.mark(I),N=f.a.mark(S);function I(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.b)({type:"CLEAR_REGISTRATION_ERROR"});case 3:return t.next=5,v.a.post("/api/user/register",e.payload);case 5:return t.next=7,Object(h.b)({type:"LOGIN",payload:e.payload});case 7:return t.next=9,Object(h.b)({type:"SET_TO_LOGIN_MODE"});case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log("Error with user registration:",t.t0),t.next=16,Object(h.b)({type:"REGISTRATION_FAILED"});case 16:case"end":return t.stop()}}),_,null,[[0,11]])}function S(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)("REGISTER",I);case 2:case"end":return e.stop()}}),N)}var T=S,x=f.a.mark(R),A=f.a.mark(L);function R(){var e,t;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e={headers:{"Content-Type":"application/json"},withCredentials:!0},a.next=4,v.a.get("/api/user",e);case 4:return t=a.sent,a.next=7,Object(h.b)({type:"SET_USER",payload:t.data});case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("User get request failed",a.t0);case 12:case"end":return a.stop()}}),x,null,[[0,9]])}function L(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.c)("FETCH_USER",R);case 2:case"end":return e.stop()}}),A)}var M=L,F=f.a.mark(U);function U(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([C(),T(),M()]);case 2:case"end":return e.stop()}}),F)}var G=a(11),D=a(12),q=a(14),H=a(13),W=a(25),P=a(10),B=a(128),Y=a(129),K=(a(94),function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={anchorEl:null,open:!1},e.handleOpen=function(t){t.preventDefault(),e.setState({open:!0,anchorEl:t.currentTarget})},e.handleClose=function(t){t.preventDefault(),e.setState({open:!1})},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"nav"},r.a.createElement(W.b,{to:"/"},r.a.createElement("h2",{className:"nav-title"},"Kodrich Associates")),r.a.createElement("div",{className:"nav-right"},r.a.createElement(W.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(W.b,{"aria-controls":"simple-menu",className:"nav-link",to:"/vendors","aria-haspopup":"true",onOpen:function(t){return e.handleOpen},onMouseOver:this.handleOpen,MenuListProps:{onMouseLeave:this.handleClose}},"Vendors \u21c2"),r.a.createElement(B.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:this.state.open,keepMounted:!0,onClose:this.handleClose,MenuListProps:{onMouseLeave:this.handleClose}},r.a.createElement(Y.a,{onClick:function(){return e.props.history.push("/vendors")}},"Vendors Overview"),r.a.createElement(Y.a,{onClick:function(){return e.props.history.push("/vendors/coriander")}},"Coriander Designs"),r.a.createElement(Y.a,{onClick:function(){return e.props.history.push("/vendors/om")}},"OM Seating"),r.a.createElement(Y.a,{onClick:function(){return e.props.history.push("/vendors/standup")}},"Stand Up Desking"),r.a.createElement(Y.a,{onClick:function(){return e.props.history.push("/vendors/invincible")}},"Invincible Furniture"),r.a.createElement(Y.a,{onClick:function(){return e.props.history.push("/vendors/afra")}},"AFRA Furniture")),r.a.createElement(W.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(W.b,{className:"nav-link",to:"/contact"},"Contact")))}}]),a}(n.Component)),V=Object(P.f)(K),J=(a(96),function(){return r.a.createElement("footer",null,"\xa9 Kodrich Associates Inc.")}),Q=(a(97),function(){return r.a.createElement("div",{className:"about-page"},r.a.createElement("h2",null,"Our Team"),r.a.createElement("p",null,"We are dedicated to provide you with product knowledge, hands on assistance, customer service, demos and quality manufacturers.  Our goal is to \u201cMake doing Business Easy\u201d."),r.a.createElement("br",null),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/Lucy.jpg",alt:"Lucy Rogness profile photo"})),r.a.createElement("td",null,r.a.createElement("p",null,"Lucy Rogness"),r.a.createElement("p",{style:{fontStyle:"italic"}},"Owner"),r.a.createElement("p",null,"Working as a Manufacturer\u2019s Representative for over 25 years."))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/Cassie.jpg",alt:"Cassie Bohmbach profile photo"})),r.a.createElement("td",null,r.a.createElement("p",null,"Cassie Bohmbach"),r.a.createElement("p",null,"Joined Kodrich Associates, Inc. in 2019.")))))}),z=a(62),X=(a(98),a(99),["img/home4.jpeg","img/home5.jpeg","img/home6.jpeg"]),Z=function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={timer:0},e.handleImageClick=function(t){e.props.history.push({pathname:"/vendors/".concat(t)})},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{red:this.myRef},r.a.createElement("div",{className:"slide-container"},r.a.createElement(z.Fade,{transitionDuration:"500",duration:"4000",pauseOnHover:!1},r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:X[0],alt:"slide image 1"}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:X[1],alt:"slide image 2"}))),r.a.createElement("div",{className:"each-fade"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:X[2],alt:"slide image 3"}))))),r.a.createElement("div",{className:"mission-statement"},"Dedicated to provide you with product knowledge, hands on assistance, customer service, demos and quality manufacturers. Our goal is to \u201cMake doing business easy\u201d."),r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"companyLogo",onClick:function(){return e.handleImageClick("coriander")},src:"img/Coriander-logo.png"}),r.a.createElement("img",{className:"companyLogo",onClick:function(){return e.handleImageClick("om")},src:"img/om-logo.png"}),r.a.createElement("img",{className:"companyLogo",onClick:function(){return e.handleImageClick("standup")},src:"img/Standup-logo.png"}),r.a.createElement("img",{className:"companyLogo",onClick:function(){return e.handleImageClick("invincible")},src:"img/Invincible-logo.png"}),r.a.createElement("img",{className:"companyLogo",id:"afraLogo",onClick:function(){return e.handleImageClick("afra")},src:"img/Afra-logo.png"})))}}]),a}(n.Component),$=Object(P.f)(Z),ee=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Info Page"))},te=(a(100),function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleImageClick=function(t){e.props.history.push({pathname:"/vendors/".concat(t)})},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"vendors-page",style:{paddingBottom:"10vh"}},r.a.createElement("div",{className:"page-header"},r.a.createElement("h2",null,"Vendors"),r.a.createElement("p",null,"If you would like more information about our products, ",r.a.createElement("a",{href:"http://localhost:3000/#/contact"},"click here to contact us"),".")),r.a.createElement("table",{width:"90%",border:"0",cellpadding:"30%"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/Coriander-logo.png",alt:"Coriander logo",onClick:function(){return e.handleImageClick("coriander")}})),r.a.createElement("td",null,"Manufactured in the USA. Coriander Designs offers products and services that address the unique needs in Corporate, Healthcare and the Education Environments. Any standard or custom product can be manipulated to meet a project\u2019s precise requirements. Sustainability.")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/om-logo.png",alt:"OM logo",onClick:function(){return e.handleImageClick("om")}})),r.a.createElement("td",null,"The OM mission is to solve everyday seating requirements with value-based and ergonomic focused product. We are focused on delivering smart solutions to our customers wide range of needs. We stock many fabrics to offer our quick shipping on our products. Quality, cost efficient product for Corporate, Education, Healthcare, Government or Hospitality.")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/Standup-logo.png",alt:"Standup logo",onClick:function(){return e.handleImageClick("standup")}})),r.a.createElement("td",null,"Empowering employees to transition from seated to standing positions throughout the day can help increase productivity and improve employee wellness. With mechanisms for all major office furniture manufacturers, standUP makes it easy for designers and dealers to spec standUP\u2019s sit/stand mechanisms into new projects, or retrofit existing office furniture.")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/Invincible-logo.png",alt:"Invincible logo",onClick:function(){return e.handleImageClick("invincible")}})),r.a.createElement("td",null,"We are pleased to offer you some of the highest quality office furniture on the market. Invincible\u2122 Office Furniture Solutions is proud to say our products; including our workstations, filing and storage solutions, systems furniture, and panel systems are 100% U.S. manufactured. Invincible\u2122\u2019s legendary \u201cmade in America\u201d quality is supported by over a century of office furniture manufacturing experience and backed up by our lifetime warranty. When you buy Invincible\u2122, you can know that we are \u201cbuilding forever furniture\u201d just for you.")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:"img/Afra-logo.png",alt:"Afra logo",onClick:function(){return e.handleImageClick("afra")}})),r.a.createElement("td",null,"AFRA furniture offers a commercial and industrial furniture design representing comfort and innovation, using a broad spectrum of materials, technologies, finishes and colors. We are focused on diversity in design that is suitable for every project and environment. Our goal is to improve our quality of life, by supporting sustainability, innovation and training. AFRA is continuously looking to offer durability, purpose and harmony in all of our furniture."))))}}]),a}(n.Component)),ae=Object(P.f)(te),ne=(a(101),function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(e){var n;return Object(G.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(D.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),v()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Contact-page"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h2",null,"Contact Us"),r.a.createElement("p",null,"Please feel free to contact us at any time and we'll do our best to get back to you as soon as possible during normal business hours.")),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"info-container"},r.a.createElement("h4",null,"Our address:"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://goo.gl/maps/wdAusCJoAjLz9pRT8",target:"_blank",rel:"noopener noreferrer"},"14333 Oakwood Road",r.a.createElement("br",null),"Minnetonka, MN 55345"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Phone: "),r.a.createElement("a",{href:"tel:6127162352"},"612-716-2352 "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Email: "),r.a.createElement("a",{href:"mailto:kodrich@hotmail.com"},"kodrich@hotmail.com"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Hours: "),r.a.createElement("div",null,"Monday to Friday, 9am - 5pm"))))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(r.a.Component)),re=(a(47),function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"om-page"},r.a.createElement("div",{className:"mission-header"},r.a.createElement("a",{href:"https://www.omseating.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/om-logo.png",alt:"OM company logo",style:{marginTop:"1%",marginLeft:"1%"}})),r.a.createElement("p",null,"The OM mission is to solve everyday seating requirements with value-based and ergonomic focused product. We are focused on delivering smart solutions to our customers wide range of needs. We stock many fabrics to offer our quick shipping on our products. Quality, cost efficient product for Corporate, Education, Healthcare, Government or Hospitality.")),r.a.createElement("table",{width:"500",border:"0",cellpadding:"10",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.omseating.com/series/om5-active/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/OM5.jpg",alt:"OM5 series preview"}),r.a.createElement("br",null),"OM5 Active Series")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.omseating.com/series/truly/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Truly.jpeg",alt:"Truly series preview"}),r.a.createElement("br",null),"Truly Series")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.omseating.com/series/ginny/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Ginny.jpeg",alt:"Ginny series preview"}),r.a.createElement("br",null),"Ginny Series"))),r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.omseating.com/series/yes-series/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/YESstools.jpg",alt:"YES series stools preview"}),r.a.createElement("br",null),"YES Series Stools")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.omseating.com/series/yes-series/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/YESchairs.jpeg",alt:"YES series chairs preview"}),r.a.createElement("br",null),"YES Series Chairs")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.omseating.com/series/classic-exam-room-stools/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/ClassicExamRoom.jpeg",alt:"Exam room stools preview"}),r.a.createElement("br",null),"Exam Room Stools")))),r.a.createElement("div",{className:"page-footer"},r.a.createElement("p",null,"If you would like more information about the OM line of products, ",r.a.createElement("a",{href:"http://localhost:3000/#/contact"},"click here to contact us"),".")))}}]),a}(n.Component)),le=function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{paddingBottom:"6vh"}},r.a.createElement("div",{className:"mission-header"},r.a.createElement("a",{href:"https://www.corianderdesigns.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Coriander-logo.png",alt:"Coriander company logo",width:"356",style:{marginTop:"1%",marginLeft:"1%"}})),r.a.createElement("p",null,"Manufactured in the USA. Coriander Designs offers products and services that address the unique needs in Corporate, Healthcare and the Education Environments. Any standard or custom product can be manipulated to meet a project\u2019s precise requirements. Sustainability.")),r.a.createElement("table",{width:"500",border:"0",cellpadding:"10",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.corianderdesigns.com/products/taylor-collection/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Coriander-Taylor.jpg",alt:"Talor collection preview"}),r.a.createElement("br",null),"Taylor Collection")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.corianderdesigns.com/products-page/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Coriander-Lounge.jpg",alt:"Lounge furniture preview"}),r.a.createElement("br",null),"Lounge Furnature")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.corianderdesigns.com/products-page/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Coriander-Lounge2-cropped.jpg",alt:"Lounge furniture preview 2"}),r.a.createElement("br",null),"Lounge Furnature")))),r.a.createElement("table",{width:"500",border:"0",cellpadding:"10",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.corianderdesigns.com/products/technology-conference-table/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Coriander-Conference.jpg",alt:"Conference Tables preview"}),r.a.createElement("br",null),"Conference Tables")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.corianderdesigns.com/product_category/occasional-tables/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Coriander-Occasional.jpg",alt:"Occasional Tables preview"}),r.a.createElement("br",null),"Occasional Tables")))),r.a.createElement("div",{className:"page-footer"},r.a.createElement("p",null,"If you would like more information about the Coriander line of products, ",r.a.createElement("a",{href:"http://localhost:3000/#/contact"},"click here to contact us"),".")))}}]),a}(n.Component),oe=function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"StandUp-page",style:{paddingBottom:"6vh"}},r.a.createElement("div",{className:"mission-header"},r.a.createElement("a",{href:"https://www.standupdesking.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Standup-logo.png",alt:"OM company logo",style:{marginTop:"1%",marginLeft:"1%"}})),r.a.createElement("p",null,"Stand Up Mechanisms attach to all manufacturers panel systems.",r.a.createElement("br",null),"Convert fixed work areas into sit/stand workstations with Stand-Up Desking\u2019s Mechanism. Specify in new projects, or convert existing furniture to sit/stand.")),r.a.createElement("table",{width:"500",border:"0",cellpadding:"30",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("img",{src:"img/standup1.png",alt:"OM5 series preview"})),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("img",{src:"img/standup2.png",alt:"Truly series preview"})),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("img",{src:"img/standup3.png",alt:"Ginny series preview"})))),r.a.createElement("div",{className:"page-footer",style:{marginTop:"100px"}},r.a.createElement("p",null,"If you would like more information about the StandUp line of products, ",r.a.createElement("a",{href:"http://localhost:3000/#/contact"},"click here to contact us"),".")))}}]),a}(n.Component),ce=function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Invincible-page",style:{paddingBottom:"6vh"}},r.a.createElement("div",{className:"mission-header"},r.a.createElement("a",{href:"https://www.invinciblefurniture.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/invincible-logo.png",style:{marginTop:"1%",marginLeft:"1%",maxWidth:"320px"}})),r.a.createElement("p",null,"Invincible Furniture has always stood for quality, and for more than 100 years Invincible\u2122 has been manufacturing products in the United States, using skilled U.S. labor, strong product designs, and quality U.S. materials. In fact, over 90% of Invincible\u2019 s total spend is for U.S. goods and services (including materials and labor). In addition, Invincible\u2122 continues to use quality raw materials, including heavier (thicker) steel than most of our competitors, and designs that incorporate more forming for added strength, durability, and aesthetics.")),r.a.createElement("table",{width:"500",border:"0",cellpadding:"10",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.invinciblefurniture.com/products_tables_flipnest.php",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/invincible-flipnest.jpg",alt:"Flipnest preview"}),r.a.createElement("br",null),"Flipnest Tables")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.invinciblefurniture.com/products_desks_educator_series.php",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/invincible-educator.jpg",alt:"Educator preview"}),r.a.createElement("br",null),"Educator Ironworks Desks")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.invinciblefurniture.com/products_vistamodular_overview.php",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/invincible-vista.jpg",alt:"Vista preview"}),r.a.createElement("br",null),"Vista Modular Workspace")))),r.a.createElement("table",{width:"500",border:"0",cellpadding:"10",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.invinciblefurniture.com/products_tables_training.php",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/invincible-training.jpg",alt:"Training preview"}),r.a.createElement("br",null),"Education Training Tables")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://www.invinciblefurniture.com/products_filingstorage_lateralfiles.php",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/invincible-lateral.jpg",alt:"Lateral filing storage preview"}),r.a.createElement("br",null),"Lateral Filing and Storage")))),r.a.createElement("div",{className:"page-footer"},r.a.createElement("p",null,"If you would like more information about the Invincible line of products, ",r.a.createElement("a",{href:"http://localhost:3000/#/contact"},"click here to contact us"),".")))}}]),a}(n.Component),ie=function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"AFRA-page"},r.a.createElement("div",{className:"mission-header"},r.a.createElement("a",{href:"https://www.afrafurniture.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Afra-logo.png",style:{marginTop:"1%",marginLeft:"1%",maxWidth:"250px"}})),r.a.createElement("p",null,"AFRA Furniture offers a commercial and industrial furniture design representing comfort and innovation, using a broad spectrum of materials, technologies, finishes and colors. We are focused on diversity in design that is suitable for every project and environment. AFRA is continuously looking to offer durability, purpose and harmony in all of our furniture."),r.a.createElement("p",null,"Our objective is to help our customers to discover new ideas, design and inspiration for all areas and spaces.")),r.a.createElement("table",{width:"500",border:"0",cellpadding:"10",className:"vendor-preview-images"},r.a.createElement("tr",null,r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://afrafurniture.com/products/?f_product_application=12733",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Afra-Hospitality.png",alt:"Afra hospitality preview",style:{margin:"1.5vw"}}),r.a.createElement("br",null),"Hospitality")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://afrafurniture.com/products/?f_product_application=12734",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Afra-Workplace.png",alt:"Afra workplace preview",style:{margin:"1.5vw"}}),r.a.createElement("br",null),"Workplace")),r.a.createElement("td",{align:"center",valign:"center"},r.a.createElement("a",{href:"https://afrafurniture.com/products/?f_product_application=12735",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"img/Afra-Healthcare.jpg",alt:"Afra healthcare preview",style:{margin:"1.5vw"}}),r.a.createElement("br",null),"Healthcare")))),r.a.createElement("div",{className:"page-footer",style:{marginTop:"6vh"}},r.a.createElement("p",null,"If you would like more information about the AFRA line of products, ",r.a.createElement("a",{href:"http://localhost:3000/#/contact"},"click here to contact us"),".")))}}]),a}(n.Component),se=(a(102),function(e){Object(q.a)(a,e);var t=Object(H.a)(a);function a(){return Object(G.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"FETCH_USER"})}},{key:"render",value:function(){return r.a.createElement(W.a,null,r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(P.c,null,r.a.createElement(P.a,{exact:!0,path:"/about",component:Q}),r.a.createElement(P.a,{exact:!0,path:"/",component:$}),r.a.createElement(P.a,{exact:!0,path:"/info",component:ee}),r.a.createElement(P.a,{exact:!0,path:"/vendors",component:ae}),r.a.createElement(P.a,{exact:!0,path:"/vendors/om",component:re}),r.a.createElement(P.a,{exact:!0,path:"/vendors/coriander",component:le}),r.a.createElement(P.a,{exact:!0,path:"/vendors/standup",component:oe}),r.a.createElement(P.a,{exact:!0,path:"/vendors/invincible",component:ce}),r.a.createElement(P.a,{exact:!0,path:"/vendors/afra",component:ie}),r.a.createElement(P.a,{exact:!0,path:"/contact",component:ne}),r.a.createElement(P.a,{render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center"}},"Error 404"),r.a.createElement("h2",{style:{textAlign:"center"}},"This page does not exist"))}})),r.a.createElement(J,null)))}}]),a}(n.Component)),me=Object(i.b)()(se),ue=Object(s.a)(),pe=[ue],de=Object(c.e)(d,c.a.apply(void 0,pe));ue.run(U),o.a.render(r.a.createElement(i.a,{store:de},r.a.createElement(me,null)),document.getElementById("react-root"))},47:function(e,t,a){},66:function(e,t,a){e.exports=a(103)},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.57845b1e.chunk.js.map