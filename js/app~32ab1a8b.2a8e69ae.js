(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~32ab1a8b"],{"017b":function(t,e,n){"use strict";var a=n("c192"),o=n.n(a);o.a},"0480":function(t,e,n){"use strict";var a=n("0b2b"),o=n.n(a);o.a},"0ae0":function(t,e,n){},"0b2b":function(t,e,n){},"10bf":function(t,e,n){"use strict";var a=n("55e7"),o=n.n(a);o.a},"14c9":function(t,e,n){},"1f81":function(t,e,n){"use strict";var a=n("82cd"),o=n.n(a);o.a},"296f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"holder"},[n("img",{attrs:{src:t.common.api+"logo.png"}})])])},o=[],s=n("69d9"),i={mounted:function(){},data:function(){return{common:s["a"]}},methods:{}},c=i,r=(n("0480"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,"e3073bb2",null);e["a"]=l.exports},3317:function(t,e,n){},"451a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("logo",{staticClass:"logo"}),n("ul",[n("li",[n("b",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"tel:"+t.common.APP_PHONE_NUMBER},on:{click:function(e){return t.contact("Click phone number")}}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faPhoneAlt}}),t._v(" "+t._s(t.common.APP_PHONE_NUMBER)+" ")],1)])]),n("li",[n("span",{staticClass:"action-link",on:{click:function(e){return t.showModal()}}},[n("b",[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faMapMarker}}),t._v(" "+t._s(t.common.address)+" ")],1)])]),n("li",[n("span",[n("b",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"mailto:"+t.common.APP_EMAIL+"?Subject=INQUIRE",target:"_top"},on:{click:function(e){return t.contact("Click email")}}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faEnvelope}}),t._v(" "+t._s(t.common.APP_EMAIL)+" ")],1)])])])]),n("span",{staticClass:"menus"},[t._l(t.menus,(function(e,a){return n("span",{key:a,staticClass:"menu-holder"},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._l(e.subMenu,(function(e,a){return n("span",{key:a,staticClass:"item action-link",on:{click:function(n){return t.redirect(e)}}},[t._v(" "+t._s(e.title)+" ")])}))],2)})),n("span",{staticClass:"menu-holder subscribe"},[n("subscribe")],1)],2),n("span",{staticClass:"footer-content"},[n("Certificate")],1),n("span",{staticClass:"copyright"},[n("label",[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faCopyright}}),t._v(" "+t._s(t.common.APP_COPYRIGHT)+". All rights reserved. ")],1)])],1),n("GoogleMapModal",{ref:"mapModal",attrs:{place_data:t.places,propStyle:t.propStyle}})],1)},o=[],s=n("69d9"),i=n("a18c"),c=n("296f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"image-holder"},[a("a",{attrs:{href:"https://m.certipedia.com/?id=9000010741",target:"_blank"}},[a("img",{attrs:{id:"rec",src:n("f9cd")}})]),a("img",{attrs:{src:n("7cde")}}),a("img",{attrs:{src:n("9a8f")}}),a("img",{attrs:{src:n("ed7d")}}),a("img",{attrs:{src:n("e542")}})])])},l=[],u={mounted:function(){},data:function(){return{common:s["a"]}},methods:{}},d=u,m=(n("10bf"),n("2877")),p=Object(m["a"])(d,r,l,!1,null,"e76736e2",null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!1===t.successFlag?n("div",{staticClass:"form-container"},[t._m(0),null!==t.errorMessage?n("label",{staticClass:"text-danger",staticStyle:{width:"100%","padding-left":"10px"}},[n("b",[t._v(t._s(t.errorMessage))])]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.subscribe()}}},[t._v("SUBSCRIBE")])]):n("div",{staticClass:"form-container"},[n("h2",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px"}},[t._v("Thank you for subscribing!")])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-white"},[n("b",[t._v("Want to know more about our latest offers?")])])}],v=n("1157"),b=n.n(v),y={mounted:function(){},data:function(){return{common:s["a"],email:null,errorMessage:null,successFlag:!1}},components:{},methods:{validateEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/,n=/\s/;return!n.test(t)&&!1!==e.test(t)},subscribe:function(){var t=this;null!==this.email&&""!==this.email?!1!==this.validateEmail(this.email)?(b.a.ajaxSetup({headers:{"Access-Control-Allow-Origin":"*"}}),b.a.get(this.common.host+"php/mailchimp.php?email="+this.email,(function(){t.email=null,t.errorMessage=null,t.successFlag=!0}))):this.errorMessage="Invalid e-mail address":this.errorMessage="Please enter your e-mail address."}}},_=y,w=(n("5d17"),Object(m["a"])(_,h,g,!1,null,"17923759",null)),C=w.exports,x=n("c074"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"mapmodal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-full",attrs:{role:"document"}},[n("div",{staticClass:"modal-content",style:t.propStyle},[n("div",{staticClass:"modal-header bg-warning"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Map Viewer")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hideModal()}}},[n("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"modal-body",attrs:{id:"result"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-lg-12"},[n("div",{ref:"map",attrs:{id:"map"}})])])])])])])])},$=[],I=(n("99af"),n("4160"),n("d81d"),n("a9e3"),n("159b"),{props:["place_data","propStyle"],data:function(){return{map:null}},components:{},methods:{showModal:function(){b()("#mapmodal").modal("show")},hideModal:function(){b()("#mapmodal").modal("hide")},getMap:function(t){var e=this;function n(){e.map?t(e.map):setTimeout(n,200)}n()}},mounted:function(){var t=this;this.map=new window.google.maps.Map(this.$refs["map"],{center:{lat:Number(this.place_data[0].latitude),lng:Number(this.place_data[0].longitude)},zoom:15}),this.place_data.forEach((function(e){var n=new window.google.maps.InfoWindow({content:"<b>".concat(e.route,", ").concat(e.locality,", ").concat(e.country,"</b>")}),a=new window.google.maps.Marker({position:{lat:Number(e.latitude),lng:Number(e.longitude)},map:t.map,icon:{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}});a.addListener("click",(function(){n.open(this.map,a)}))}))}}),M=I,P=(n("1f81"),Object(m["a"])(M,k,$,!1,null,"1f787dd6",null)),T=P.exports,S={mounted:function(){},data:function(){return{common:s["a"],faCopyright:x["o"],faEnvelope:x["p"],faMapMarker:x["q"],faPhoneAlt:x["r"],places:[{longitude:123.913968,latitude:10.321886,route:"Mezzo Hotel",locality:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",country:"Philippines"}],propStyle:{"margin-top":"10vh !important;"},menus:[{title:"Mezzo",subMenu:[{title:"Home",type:"scroll",route:"#top-view"}]},{title:"Links",subMenu:[{title:"Privacy Notice",type:"redirect",route:"/privacy-policy"},{title:"Inquiry Form",type:"inquire",route:"#packages"},{title:"Press Room",type:"redirect",route:"/press-room"}]}]}},components:{Logo:c["a"],GoogleMapModal:T,Subscribe:C,Certificate:f},props:["property"],methods:{openExternal:function(t){window.open(t,"_BLANK")},showModal:function(){this.$analytics.fbq.event("FindLocation",{content_name:"Checking location"}),this.$refs.mapModal.showModal()},contact:function(t){this.$analytics.fbq.event("Contact",{content_name:t})},redirect:function(t){switch(t.type){case"scroll":"scroll"===this.property?this.$parent.scrollToByParams(t.route):i["a"].push("/");break;case"modal":"scroll"===this.property?b()(t.route).modal("show"):i["a"].push("/");break;case"inquire":this.$analytics.fbq.event("ViewContent",{content_name:"General Inquiry"}),this.$parent.onGroupBooking("others","General Inquiry");break;case"redirect":window.scrollTo(0,0),i["a"].push(t.route);break}}}},E=S,q=(n("bd5e"),Object(m["a"])(E,a,o,!1,null,"9dfa18ac",null));e["a"]=q.exports},"4d71":function(t,e,n){},"55e7":function(t,e,n){},"57da":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-view"}},[n("Header",{ref:"header",attrs:{id:"header-menu"}}),n("span",{staticClass:"banner-bottom",on:{click:function(e){return t.redirect("/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols")}}},[t._v(" Check our Health and Safety Protocol "),t._m(0)]),n("booking"),n("about-page"),n("Rooms"),n("Packages",{ref:"inquire"}),!0===t.common.load.restaurants?n("Restaurant"):t._e(),!0===t.common.load.testimonials?n("testimonials"):t._e(),n("gallery"),n("faq"),n("MyFooter",{attrs:{property:"scroll"}}),n("span",{staticClass:"return-to-top",on:{click:function(e){return t.scrollTo()}}},[n("font-awesome-icon",{staticClass:"icon",staticStyle:{"font-size":"24px"},attrs:{icon:t.faChevronUp}})],1),n("image-view",{ref:"imageView",attrs:{propStyle:{width:"700px"},data:t.common.gallery,customId:"galleryViewer"}}),t.common.announcements.length>0?n("image-view",{ref:"imageViewAnnouncements",attrs:{propStyle:{width:"700px"},data:t.common.announcements,customId:"announcementViewer"}}):t._e(),n("privacy")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("img",{attrs:{src:n("55c7"),height:"60px",width:"auto"}}),a("img",{attrs:{src:n("6fc9"),height:"60px",width:"auto"}})])}],s=(n("a4d3"),n("e01a"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("9911"),n("96cf"),n("1da1")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",attrs:{id:"home"}},[n("img",{staticClass:"mobile-menu-icon",staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}}),n("logo",{staticClass:"hide-on-mobile"}),n("font-awesome-icon",{staticClass:"mobile-menu-icon",attrs:{icon:!1===t.flag?t.faBars:t.faTimes},on:{click:function(e){return t.toggle()}}}),n("ul",{staticClass:"mobile-menu"},t._l(t.common.menus,(function(e,a){return n("li",{key:a,class:{"active-menu":t.common.activeMenu===e.redirect},attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(n){return t.scrollTo(e.redirect)}}},[n("a",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"}},[t._v(t._s(e.title))])])})),0),n("div",{staticClass:"menu"},[n("ul",[n("li",{staticClass:"view-on-scroll",on:{click:function(e){return t.scrollTo("#top-view")}}},[n("img",{staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}})]),t._l(t.common.menus,(function(e,a){return n("li",{key:a,staticClass:"basic-menu",class:{"active-menu":t.common.activeMenu===e.redirect},on:{click:function(n){return t.scrollTo(e.redirect)}}},[t._v(t._s(e.title))])}))],2),n("span",{staticClass:"social-icons-holder"},t._l(t.common.socialIcons,(function(e,a){return n("font-awesome-icon",{key:a,staticClass:"social-icons",attrs:{icon:e.icon},on:{click:function(n){return t.openExternalSites(e.url)}}})})),1),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.openExternal(t.common.booking_link,!1)}}},[t._v("BOOK A ROOM")])])],1)},c=[],r=n("69d9"),l=n("a18c"),u=n("1157"),d=n.n(u),m=n("296f"),p=n("c074"),f=n("1d3d"),h={mounted:function(){},data:function(){return{common:r["a"],faBars:p["c"],faTimes:p["x"],flag:!1}},components:{Logo:m["a"]},methods:{redirect:function(t){l["a"].push(t)},scrollTo:function(t){var e=this;this.$analytics.fbq.event("ViewContent",{content_name:t}),r["a"].setLoad(t),this.common.activeMenu=t,setTimeout((function(){if("/"===t.charAt(0))e.redirect(t);else{var n=d()(window).height();d()("html, body").animate({scrollTop:d()(t).offset().top-parseInt(.07*n)},400)}}),100),this.flag=!1,d()(".mobile-menu").css({display:"none"})},openExternal:function(t,e){0==e?f["a"].methods.inquireRoom(null):(this.$analytics.fbq.event("InitialCheckout",{content_name:"Direct Booking"}),window.open(t,"_BLANK"))},openExternalSites:function(t){this.$analytics.fbq.event("ViewContent",{content_name:t}),window.open(t,"_BLANK")},toggle:function(){!1===this.flag?(this.flag=!0,d()(".mobile-menu").css({display:"block"})):(this.flag=!1,d()(".mobile-menu").css({display:"none"}))}}},g=h,v=(n("b05a"),n("2877")),b=Object(v["a"])(g,i,c,!1,null,"547e070a",null),y=b.exports,_=n("451a"),w=n("1580"),C=n("3458"),x=n("9233"),k=n("a6dc"),$=n("7e0e"),I=n("7ece"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length>0?n("div",{staticClass:"img-modal",attrs:{id:t.customId}},[n("div",{staticClass:"img-holder",style:t.getHeight()},[n("font-awesome-icon",{staticClass:"close-icon icon",attrs:{icon:t.faTimesCircle},on:{click:function(e){return t.close()}}}),t.activeIndex>0?n("font-awesome-icon",{staticClass:"icon-prev icon",attrs:{icon:t.faChevronLeft},on:{click:function(e){return t.setPrev()}}}):t._e(),t.activeIndex<t.data.length-1?n("font-awesome-icon",{staticClass:"icon-next icon",attrs:{icon:t.faChevronRight},on:{click:function(e){return t.setNext()}}}):t._e(),n("span",{staticClass:"loading"},[n("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1),n("img",{key:t.activeIndex,staticClass:"image-viewer gallery-image-viewer",attrs:{src:t.data[t.activeIndex].url,id:"image-view"}}),"order_now"===t.data[t.activeIndex].type?n("div",{key:"a"+t.activeIndex,staticClass:"actions"},[n("span",{staticClass:"text"},[n("label",{staticClass:"title pull-left"},[n("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),n("button",{staticClass:"btn btn-warning pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("ORDER NOW")])]):t._e(),"redirect_link"===t.data[t.activeIndex].type?n("div",{key:"a"+t.activeIndex,staticClass:"actions actions-secondary"},[n("span",{staticClass:"text"},[n("label",{staticClass:"title pull-left"},[n("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),n("button",{staticClass:"btn btn-primary pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("PURCHASE NOW")])]):t._e()],1)]):t._e()},P=[],T={mounted:function(){this.onLoaded()},data:function(){return{activeIndex:0,faTimesCircle:p["y"],faChevronLeft:p["e"],faChevronRight:p["f"],loading:!0,faCircleNotch:p["l"]}},props:["propStyle","data","customId"],methods:{close:function(){this.activeIndex=0,d()("#"+this.customId).css({display:"none"})},getHeight:function(){var t=d()(window).height(),e=d()(window).width();if(e>t){var n=parseInt(t-.05*t);return{height:n+"px !important",width:n+"px !important",top:parseInt(t-.975*t)+"px !important",left:parseInt((e-n)/2)+"px"}}var a=parseInt(e-.1*e);return{height:a+"px !important",width:a+"px !important",left:parseInt(.05*e)+"px !important",top:parseInt((t-a)/2)+"px"}},setLoading:function(t){d()(".loading").css({display:t})},setNext:function(){this.activeIndex++,this.onLoaded()},setPrev:function(){this.activeIndex--,this.onLoaded()},onLoaded:function(){this.setLoading("block"),d()("#image-view").on("load",(function(){d()(".loading").css({display:"none"})})),d()("#image-view").on("error",(function(){d()(".loading").css({display:"block"})}))},redirectExternal:function(t){window.open(t,"_BLANK")},setImage:function(t){this.activeIndex=t,d()("#"+this.customId).css({display:"block"})}}},S=T,E=(n("017b"),Object(v["a"])(S,M,P,!1,null,"41b63c9e",null)),q=E.exports,A=n("d8b0"),O=n("c28c"),L=n("db49"),R={name:"HelloWorld",mounted:function(){r["a"].getBasic(),window.addEventListener("scroll",this.onScroll),this.$analytics.fbq.event("ViewContent",{content_name:"Home Page"}),this.retreiveApiV4()},data:function(){return{faChevronUp:p["j"],scrollValue:0,common:r["a"],mode:"package",doc:null}},props:{msg:String},components:{Header:y,MyFooter:_["a"],Restaurant:w["a"],Rooms:C["a"],Packages:f["a"],Booking:x["a"],Testimonials:k["a"],Faq:$["a"],Gallery:I["a"],ImageView:q,Privacy:A["a"],AboutPage:O["a"]},methods:{redirect:function(t){d()("html, body").animate({scrollTop:d()("#top-view").offset().top},500),l["a"].push(t)},scrollTo:function(){d()("html, body").animate({scrollTop:d()("#top-view").offset().top},500)},loadPage:function(t,e){var n=e/t;n>5.5?r["a"].setLoad("#faq"):n>4.5?r["a"].setLoad("#gallery"):n>3.5?r["a"].setLoad("#testimonials"):n>2.5?r["a"].setLoad("#restaurants"):n>1.5?r["a"].setLoad("#packages"):n>.5&&r["a"].setLoad("#rooms")},onScroll:function(){var t=d()(window).height(),e=d()(window).scrollTop();this.loadPage(t,e);var n=parseInt(e/t*100);n>=20?(d()(".menu").css({position:"fixed","z-index":1e4,top:"0%",bottom:"auto"}),d()(".view-on-scroll").css({display:"block"})):(d()(".menu").css({position:"absolute","z-index":0,bottom:"0%",top:"auto"}),d()(".view-on-scroll").css({display:"none"})),this.setActiveOnScroll()},setActiveOnScroll:function(){var t=this;this.common.menus.length>0&&this.common.menus.map((function(e){var n=d()(e.redirect).offset().top,a=n+d()(e.redirect).outerHeight(),o=d()(window).scrollTop(),s=d()(window).height(),i=parseInt(.1*s);o>=n-i&&o<=a-i?t.common.activeMenu=e.redirect:o<=0&&(t.common.activeMenu="#top-view")}))},scrollToByParams:function(t){this.$refs.header.scrollTo(t)},onGroupBooking:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$refs.inquire.mode=t,this.$refs.inquire.activeStep=1,this.$refs.inquire.type=e,this.$refs.header.scrollTo("#packages")},showImage:function(t){this.$refs.imageView.setImage(t)},retreiveApiV4:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,o,s,i,c,l,u,d,m,p,f,h,g,v,b,y,_,w,C,x,k,$,I,M,P,T,S,E,q;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r["a"].faq=[],r["a"].menus=[],r["a"].packages=null,r["a"].testimonials=[],r["a"].rooms=[],r["a"].restaurants=[],r["a"].gallery=[],r["a"].addOns=[],r["a"].announcements=[],a=n("d340"),o=a.GoogleSpreadsheet,t.doc=new o(L["a"].googleSheetId),e.next=13,t.doc.useServiceAccountAuth({client_email:L["a"].google.client_email,private_key:L["a"].google.private_key});case 13:return e.next=15,t.doc.loadInfo();case 15:return s=t.doc.sheetsByIndex[0],e.next=18,s.getRows();case 18:return i=e.sent,r["a"].faq=i.map((function(t){return{question:t.question,answer:t.answer,flag:!1}})),c=t.doc.sheetsByIndex[1],e.next=23,c.getRows();case 23:return l=e.sent,r["a"].menus=l.map((function(t){return{title:t.title,redirect:t.redirect}})),u=t.doc.sheetsByIndex[3],e.next=28,u.getRows();case 28:for(d=e.sent,m=0;m<d.length;m++)p=d[m],f=p.types,h=null!==f?f.split(","):null,g=p.images,v=null!==g?g.split(","):null,b=v.map((function(t){return{url:r["a"].host+"img/"+t}})),y=h.map((function(t){return{title:t}})),_={types:y,images:b},r["a"].packages=_;return w=t.doc.sheetsByIndex[7],e.next=33,w.getRows();case 33:return C=e.sent,r["a"].testimonials=C.map((function(t){return{message:t.message,name:t.name,country:t.country,position:t.position,country_code:t.country_code}})),x=t.doc.sheetsByIndex[4],e.next=38,x.getRows();case 38:return k=e.sent,r["a"].rooms=k.map((function(t){var e=t.inclusions,n=null!==e?e.split(","):null,a=t.image,o=null!==a?a.split(","):null,s=o.map((function(t){return{url:r["a"].host+"img/"+t}})),i=n.map((function(t){return{title:t}})),c={abbreviation:t.abbreviation,title:t.title,description:t.description,inclusions:i,price:t.price,priceType:t.type,priceInclusions:t.price_inclusions,images:s,type:t.redirect_type};return c})),$=t.doc.sheetsByIndex[5],e.next=43,$.getRows();case 43:return I=e.sent,r["a"].restaurants=I.map((function(t){var e=t.inclusions,n=null!==e?e.split(","):null,a=t.images,o=null!==a?a.split(","):null,s=o.map((function(t){return{url:r["a"].host+"img/"+t}})),i=n.map((function(t){return{title:t}})),c={abbreviation:t.abbreviation,title:t.title,description:t.description,inclusions:i,images:s};return c})),M=t.doc.sheetsByIndex[6],e.next=48,M.getRows();case 48:return P=e.sent,r["a"].gallery=P.map((function(t){var e=t.filename,n={url:r["a"].host+"img/"+e,caption:t.caption};return n})),T=t.doc.sheetsByIndex[8],e.next=53,T.getRows();case 53:return S=e.sent,r["a"].addOns=S.map((function(t,e){return{type:t.type,title:t.title,id:e,flag:!1}})),E=t.doc.sheetsByIndex[11],e.next=58,E.getRows();case 58:q=e.sent,r["a"].announcements=q.map((function(t){var e={type:t.type,text:t.caption,url:r["a"].host+"img/"+t.image,link:t.link};return e})),setTimeout((function(){t.$refs.imageViewAnnouncements.setImage(0)}),1e3);case 61:case"end":return e.stop()}}),e)})))()},retrieve:function(){var t=this;r["a"].faq=[],r["a"].menus=[],r["a"].packages=null,r["a"].testimonials=[],r["a"].rooms=[],r["a"].restaurants=[],r["a"].gallery=[],r["a"].addOns=[],r["a"].announcements=[],d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/1/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a={question:e[n].content.$t,answer:e[n+1].content.$t,flag:!1};r["a"].faq.push(a)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/2/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a={title:e[n].content.$t,redirect:e[n+1].content.$t};r["a"].menus.push(a)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/4/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a=e[n].content.$t,o=null!==a?a.split(","):null,s=e[n+1].content.$t,i=null!==s?s.split(","):null,c=i.map((function(t){return{url:r["a"].host+"img/"+t}})),l=o.map((function(t){return{title:t}})),u={types:l,images:c};r["a"].packages=u}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/8/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=5)if(n>4){var a={message:e[n].content.$t,name:e[n+1].content.$t,country:e[n+2].content.$t,position:e[n+3].content.$t,country_code:e[n+4].content.$t};r["a"].testimonials.push(a)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/5/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=9)if(n>8){var a=e[n+3].content.$t,o=null!==a?a.split(","):null,s=e[n+7].content.$t,i=null!==s?s.split(","):null,c=i.map((function(t){return{url:r["a"].host+"img/"+t}})),l=o.map((function(t){return{title:t}})),u={abbreviation:e[n].content.$t,title:e[n+1].content.$t,description:e[n+2].content.$t,inclusions:l,price:e[n+4].content.$t,priceType:e[n+5].content.$t,priceInclusions:e[n+6].content.$t,images:c,type:e[n+8].content.$t};r["a"].rooms.push(u)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/6/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=5)if(n>4){var a=e[n+3].content.$t,o=null!==a?a.split(","):null,s=e[n+4].content.$t,i=null!==s?s.split(","):null,c=i.map((function(t){return{url:r["a"].host+"img/"+t}})),l=o.map((function(t){return{title:t}})),u={abbreviation:e[n].content.$t,title:e[n+1].content.$t,description:e[n+2].content.$t,inclusions:l,images:c};r["a"].restaurants.push(u)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/7/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a=e[n].content.$t,o={url:r["a"].host+"img/"+a,caption:e[n+1].content.$t};r["a"].gallery.push(o)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/9/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0,a=0;a<e.length;a+=2)if(a>1){var o={type:e[a].content.$t,title:e[a+1].content.$t,id:n++,flag:!1};r["a"].addOns.push(o)}})),d.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/12/public/values?alt=json",(function(e){for(var n=e.feed.entry,a=0;a<n.length;a+=4)if(a>3){var o={type:n[a].content.$t,text:n[a+1].content.$t,url:r["a"].host+"img/"+n[a+2].content.$t,link:n[a+3].content.$t};r["a"].announcements.push(o),setTimeout((function(){t.$refs.imageViewAnnouncements.setImage(0)}),1e3)}}))}}},B=R,j=(n("a103"),Object(v["a"])(B,a,o,!1,null,"24fb8207",null));e["default"]=j.exports},"5d17":function(t,e,n){"use strict";var a=n("c420"),o=n.n(a);o.a},"82cd":function(t,e,n){},"8bd6":function(t,e,n){},"91e8":function(t,e,n){"use strict";var a=n("3317"),o=n.n(a);o.a},a103:function(t,e,n){"use strict";var a=n("14c9"),o=n.n(a);o.a},a46b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.selected&&void 0!==t.selected?n("div",[n("span",{staticClass:"page-holder"},[n("logo",{staticClass:"hide-on-mobile"})],1),n("span",[n("div",{staticClass:"blog-tiles"},[n("p",[n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")]),n("button",{staticClass:"btn btn-warning",staticStyle:{"margin-left":"10px","margin-right":"10px"},on:{click:function(e){return t.redirect("/press-room")}}},[t._v("Press Room")]),t._v(" "+t._s(t.selected.title)+" ")]),n("span",{staticClass:"blog-item"},["internal"===t.selected.type?n("span",{staticClass:"image-holder"},[n("img",{attrs:{src:t.selected.image}})]):t._e(),"internal_video"===t.selected.type?n("span",{staticClass:"video-holder",domProps:{innerHTML:t._s(t.selected.image)}}):t._e(),n("span",{staticClass:"details"},[n("h3",{staticStyle:{"margin-top":"25px"}},[t._v(" "+t._s(t.selected.title)+" ")]),t._v(" Published by "),n("b",[t._v(t._s(t.selected.author))]),t._v(" on "+t._s(t.selected.date)+" "),n("br"),n("label",{domProps:{innerHTML:t._s(t.selected.content)}})])])])]),n("MyFooter",{attrs:{property:"redirect"}})],1):!0===t.loading?n("span",{staticClass:"loading text-center"},[n("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1):n("NotFound")},o=[],s=(n("4de4"),n("caad"),n("a15b"),n("ac1f"),n("2532"),n("1276"),n("96cf"),n("1da1")),i=n("69d9"),c=n("296f"),r=n("451a"),l=n("f5de"),u=n("c074"),d=n("a18c"),m=(n("1157"),n("db49")),p={mounted:function(){i["a"].getBasic(),this.getBlog()},data:function(){return{common:i["a"],loading:!1,faCircleNotch:u["l"],selected:null}},components:{Logo:c["a"],MyFooter:r["a"],NotFound:l["a"]},methods:{redirect:function(t){d["a"].push(t)},getBlog:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,o,s,i,c,r,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.$analytics.fbq.event("ViewContent",{content_name:t.$route.params.title.split("_").join(" ")}),a=n("d340"),o=a.GoogleSpreadsheet,s=new o(m["a"].googleSheetId),e.next=6,s.useServiceAccountAuth({client_email:m["a"].google.client_email,private_key:m["a"].google.private_key});case 6:return e.next=8,s.loadInfo();case 8:return i=s.sheetsByIndex[10],e.next=11,i.getRows();case 11:c=e.sent,r=0;case 13:if(!(r<c.length)){e.next=23;break}if(l=c[r],u={type:l.type,title:l.title,image:"internal_video"===l.type?l.featured_image:t.common.host+"img/"+l.featured_image,date:l.date,author:l.author,introduction:l.introduction,content:l.content},!u.title.includes(t.$route.params.title.split("_").join(" "))){e.next=20;break}return t.selected=u,t.loading=!1,e.abrupt("break",23);case 20:r++,e.next=13;break;case 23:null==t.selected&&(t.loading=!1);case 24:case"end":return e.stop()}}),e)})))()},manageSearch:function(){var t=this,e=i["a"].blogs;i["a"].blogs.length>0&&(e=i["a"].blogs.filter((function(e){return e.title.includes(t.$route.params.title.split("_").join(" "))}))),this.selected=e?e[0]:null,this.loading=!1}}},f=p,h=(n("91e8"),n("2877")),g=Object(h["a"])(f,a,o,!1,null,"20d783bc",null);e["a"]=g.exports},b05a:function(t,e,n){"use strict";var a=n("e17f"),o=n.n(a);o.a},bd5e:function(t,e,n){"use strict";var a=n("8bd6"),o=n.n(a);o.a},c192:function(t,e,n){},c420:function(t,e,n){},c567:function(t,e,n){"use strict";var a=n("0ae0"),o=n.n(a);o.a},cf42:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-view"}},[n("span",{staticClass:"page-holder"},[n("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),n("div",{staticClass:"blog-tiles"},[n("p",[n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")])]),t._l(t.common.blogs,(function(e,a){return n("span",{key:a,staticClass:"blog-item",on:{click:function(n){return t.checkRoute(e)}}},["internal_video"!==e.type?n("span",{staticClass:"image-holder"},[n("img",{attrs:{src:e.image}})]):t._e(),"internal_video"===e.type?n("span",{staticClass:"image-holder"},[n("span",{domProps:{innerHTML:t._s(e.image)}})]):t._e(),n("span",{staticClass:"details"},[n("h3",[t._v(" "+t._s(e.title)+" ")]),t._v(" Published by "),n("b",[t._v(t._s(e.author))]),t._v(" on "+t._s(e.date)+" "),n("br"),n("label",{domProps:{innerHTML:t._s(e.introduction)}})])])}))],2),n("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"page-details text-center"},[n("p",{staticClass:"text-white display-4"},[t._v(" Press Room ")])])}],s=(n("a15b"),n("ac1f"),n("1276"),n("69d9")),i=n("296f"),c=n("a18c"),r=n("451a"),l=n("1157"),u=n.n(l),d={mounted:function(){this.retrieve()},data:function(){return{common:s["a"]}},components:{Logo:i["a"],MyFooter:r["a"]},methods:{redirect:function(t){u()("html, body").animate({scrollTop:u()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){s["a"].getBlog(),s["a"].getBasic()},checkRoute:function(t){"external"===t.type?(this.$analytics.fbq.event("ViewContent",{content_name:t.title}),window.open(t.content)):this.redirect("/press-room/page/"+t.title.split(" ").join("_"))}}},m=d,p=(n("c567"),n("2877")),f=Object(p["a"])(m,a,o,!1,null,"1c2dd65c",null);e["a"]=f.exports},e17f:function(t,e,n){},e98d:function(t,e,n){"use strict";var a=n("4d71"),o=n.n(a);o.a},f5de:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-view"}},[n("span",{staticClass:"page-holder"},[n("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),n("div",{staticClass:"blog-tiles"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"text-center text-danger"},[n("font-awesome-icon",{staticClass:"plus-icon",attrs:{icon:t.faSadTear}})],1),n("h1",{staticClass:"text-center"},[t._v(" Page not found. ")])])]),n("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"page-details text-center"},[n("p",{staticClass:"text-white display-4"},[t._v(" Error 404 ")])])}],s=n("69d9"),i=n("296f"),c=n("a18c"),r=n("451a"),l=n("1157"),u=n.n(l),d=n("c074"),m={mounted:function(){this.retrieve()},data:function(){return{common:s["a"],faSadTear:d["u"]}},components:{Logo:i["a"],MyFooter:r["a"]},methods:{redirect:function(t){u()("html, body").animate({scrollTop:u()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){s["a"].getBasic()}}},p=m,f=(n("e98d"),n("2877")),h=Object(f["a"])(p,a,o,!1,null,"48d77441",null);e["a"]=h.exports}}]);
//# sourceMappingURL=app~32ab1a8b.2a8e69ae.js.map