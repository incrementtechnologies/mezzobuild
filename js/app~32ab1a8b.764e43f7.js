(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~32ab1a8b"],{"0c65":function(t,e,n){},"12eb":function(t,e,n){},"182b":function(t,e,n){"use strict";n("aa02")},"1e11":function(t,e,n){"use strict";n("12eb")},"296f":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"holder"},[e("img",{attrs:{src:t.common.api+"logo.png"}})])])},o=[],s=n("69d9"),i={mounted:function(){},data:function(){return{common:s["a"]}},methods:{}},c=i,r=(n("ae39"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,"de58f596",null);e["a"]=l.exports},"451a":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"footer"},[e("logo",{staticClass:"logo"}),e("ul",[e("li",[e("b",[e("a",{staticStyle:{color:"#fff"},attrs:{href:"tel:"+t.common.APP_PHONE_NUMBER},on:{click:function(e){return t.contact("Click phone number")}}},[e("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faPhoneAlt}}),t._v(" "+t._s(t.common.APP_PHONE_NUMBER)+" ")],1)])]),e("li",[e("span",{staticClass:"action-link",on:{click:function(e){return t.showModal()}}},[e("b",[e("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faMapMarker}}),t._v(" "+t._s(t.common.address)+" ")],1)])]),e("li",[e("span",[e("b",[e("a",{staticStyle:{color:"#fff"},attrs:{href:"mailto:"+t.common.APP_EMAIL+"?Subject=INQUIRE",target:"_top"},on:{click:function(e){return t.contact("Click email")}}},[e("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faEnvelope}}),t._v(" "+t._s(t.common.APP_EMAIL)+" ")],1)])])])]),e("span",{staticClass:"menus"},[t._l(t.menus,(function(n,a){return e("span",{key:a,staticClass:"menu-holder"},[e("span",{staticClass:"title"},[t._v(t._s(n.title))]),t._l(n.subMenu,(function(n,a){return e("span",{key:a,staticClass:"item action-link",on:{click:function(e){return t.redirect(n)}}},[t._v(" "+t._s(n.title)+" ")])}))],2)})),"/booking"!=this.$route.path?e("span",{staticClass:"menu-holder subscribe"},[e("subscribe")],1):t._e()],2),"/booking"!=this.$route.path?e("span",{staticClass:"footer-content"},[e("Certificate")],1):t._e(),e("span",{staticClass:"copyright"},[e("label",[e("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faCopyright}}),t._v(" "+t._s(t.common.APP_COPYRIGHT)+". All rights reserved. ")],1)])],1),e("GoogleMapModal",{ref:"mapModal",attrs:{place_data:t.places,propStyle:t.propStyle}})],1)},o=[],s=(n("14d9"),n("69d9")),i=n("a18c"),c=n("296f"),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"image-holder"},[e("a",{attrs:{href:"https://m.certipedia.com/?id=9000010741",target:"_blank"}},[e("img",{attrs:{id:"rec",src:n("f9cd")}})]),e("img",{attrs:{src:n("7cde")}}),e("img",{attrs:{src:n("9a8f")}}),e("img",{attrs:{src:n("ed7d")}}),e("img",{attrs:{src:n("e542")}})])])},l=[],u={mounted:function(){},data:function(){return{common:s["a"]}},methods:{}},d=u,p=(n("53e2"),n("2877")),m=Object(p["a"])(d,r,l,!1,null,"c8f311b4",null),f=m.exports,h=function(){var t=this,e=t._self._c;return e("div",[!1===t.successFlag?e("div",{staticClass:"form-container"},[t._m(0),null!==t.errorMessage?e("label",{staticClass:"text-danger",staticStyle:{width:"100%","padding-left":"10px"}},[e("b",[t._v(t._s(t.errorMessage))])]):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),e("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.subscribe()}}},[t._v("SUBSCRIBE")])]):e("div",{staticClass:"form-container"},[e("h2",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px"}},[t._v("Thank you for subscribing!")])])])},g=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-white"},[e("b",[t._v("Want to know more about our latest offers?")])])}],v=(n("ac1f"),n("00b4"),n("1157")),b=n.n(v),y={mounted:function(){},data:function(){return{common:s["a"],email:null,errorMessage:null,successFlag:!1}},components:{},methods:{validateEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/,n=/\s/;return!n.test(t)&&!1!==e.test(t)},subscribe:function(){var t=this;null!==this.email&&""!==this.email?!1!==this.validateEmail(this.email)?(b.a.ajaxSetup({headers:{"Access-Control-Allow-Origin":"*"}}),b.a.get(this.common.host+"php/mailchimp.php?email="+this.email,(function(){t.email=null,t.errorMessage=null,t.successFlag=!0}))):this.errorMessage="Invalid e-mail address":this.errorMessage="Please enter your e-mail address."}}},_=y,w=(n("8596"),Object(p["a"])(_,h,g,!1,null,"74127e3c",null)),C=w.exports,x=n("c074"),k=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"mapmodal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-full",attrs:{role:"document"}},[e("div",{staticClass:"modal-content",style:t.propStyle},[e("div",{staticClass:"modal-header bg-warning"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Map Viewer")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hideModal()}}},[e("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body",attrs:{id:"result"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-lg-12"},[e("div",{ref:"map",attrs:{id:"map"}})])])])])])])])},I=[],$=(n("d81d"),n("a9e3"),n("d3b7"),n("159b"),n("99af"),{props:["place_data","propStyle"],data:function(){return{map:null}},components:{},methods:{showModal:function(){b()("#mapmodal").modal("show")},hideModal:function(){b()("#mapmodal").modal("hide")},getMap:function(t){var e=this;function n(){e.map?t(e.map):setTimeout(n,200)}n()}},mounted:function(){var t=this;this.map=new window.google.maps.Map(this.$refs["map"],{center:{lat:Number(this.place_data[0].latitude),lng:Number(this.place_data[0].longitude)},zoom:15}),this.place_data.forEach((function(e){var n=new window.google.maps.InfoWindow({content:"<b>".concat(e.route,", ").concat(e.locality,", ").concat(e.country,"</b>")}),a=new window.google.maps.Marker({position:{lat:Number(e.latitude),lng:Number(e.longitude)},map:t.map,icon:{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}});a.addListener("click",(function(){n.open(this.map,a)}))}))}}),M=$,P=(n("8423"),Object(p["a"])(M,k,I,!1,null,"2994eca7",null)),S=P.exports,T={mounted:function(){},data:function(){return{common:s["a"],faCopyright:x["o"],faEnvelope:x["p"],faMapMarker:x["q"],faPhoneAlt:x["r"],places:[{longitude:123.913968,latitude:10.321886,route:"Mezzo Hotel",locality:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",country:"Philippines"}],propStyle:{"margin-top":"10vh !important;"},menus:[{title:"Mezzo",subMenu:[{title:"Home",type:"scroll",route:"#top-view"}]},{title:"Links",subMenu:[{title:"Privacy Notice",type:"redirect",route:"/privacy-policy"},{title:"Inquiry Form",type:"redirect",route:"/booking"},{title:"Press Room",type:"redirect",route:"/press-room"}]}]}},components:{Logo:c["a"],GoogleMapModal:S,Subscribe:C,Certificate:f},props:["property"],methods:{openExternal:function(t){window.open(t,"_BLANK")},showModal:function(){this.$analytics.fbq.event("FindLocation",{content_name:"Checking location"}),this.$refs.mapModal.showModal()},contact:function(t){this.$analytics.fbq.event("Contact",{content_name:t})},redirect:function(t){switch(t.type){case"scroll":"scroll"===this.property?this.$parent.scrollToByParams(t.route):i["a"].push("/");break;case"modal":"scroll"===this.property?b()(t.route).modal("show"):i["a"].push("/");break;case"inquire":this.$analytics.fbq.event("ViewContent",{content_name:"General Inquiry"}),this.$parent.onGroupBooking("others","General Inquiry");break;case"redirect":window.scrollTo(0,0),i["a"].push(t.route);break}}}},O=T,A=(n("1e11"),Object(p["a"])(O,a,o,!1,null,"61612645",null));e["a"]=A.exports},"46c6":function(t,e,n){"use strict";n("c628")},"53e2":function(t,e,n){"use strict";n("0c65")},"540f":function(t,e,n){"use strict";n("6522")},"57da":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"top-view"}},[e("Header",{ref:"header",attrs:{id:"header-menu"}}),e("span",{staticClass:"banner-bottom",on:{click:function(e){return t.redirect("/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols")}}},[t._v(" Check our Health and Safety Protocol "),t._m(0)]),e("booking"),e("tlSearchFormMain"),e("about-page"),e("Rooms"),e("Packages",{ref:"inquire"}),!0===t.common.load.restaurants?e("Restaurant"):t._e(),!0===t.common.load.testimonials?e("testimonials"):t._e(),e("gallery"),e("faq"),e("MyFooter",{attrs:{property:"scroll"}}),e("span",{staticClass:"return-to-top",on:{click:function(e){return t.scrollTo()}}},[e("font-awesome-icon",{staticClass:"icon",staticStyle:{"font-size":"24px"},attrs:{icon:t.faChevronUp}})],1),e("image-view",{ref:"imageView",attrs:{propStyle:{width:"700px"},data:t.common.gallery,customId:"galleryViewer"}}),t.common.announcements.length>0?e("image-view",{ref:"imageViewAnnouncements",attrs:{propStyle:{width:"700px"},data:t.common.announcements,customId:"announcementViewer"}}):t._e(),e("privacy")],1)},o=[function(){var t=this,e=t._self._c;return e("span",[e("img",{attrs:{src:n("55c7"),height:"60px",width:"auto"}}),e("img",{attrs:{src:n("6fc9"),height:"60px",width:"auto"}})])}],s=n("c7eb"),i=n("1da1"),c=(n("14d9"),n("d81d"),n("b0c0"),n("a4d3"),n("e01a"),n("9911"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"header",attrs:{id:"home"}},[e("img",{staticClass:"mobile-menu-icon",staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}}),e("logo",{staticClass:"hide-on-mobile"}),e("font-awesome-icon",{staticClass:"mobile-menu-icon",attrs:{icon:!1===t.flag?t.faBars:t.faTimes},on:{click:function(e){return t.toggle()}}}),e("ul",{staticClass:"mobile-menu"},t._l(t.common.menus,(function(n,a){return e("li",{key:a,class:{"active-menu":t.common.activeMenu===n.redirect},attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(e){return t.scrollTo(n.redirect)}}},[e("a",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"}},[t._v(t._s(n.title))])])})),0),e("div",{staticClass:"menu"},[e("ul",[e("li",{staticClass:"view-on-scroll",on:{click:function(e){return t.scrollTo("#top-view")}}},[e("img",{staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}})]),t._l(t.common.menus,(function(n,a){return e("li",{key:a,staticClass:"basic-menu",class:{"active-menu":t.common.activeMenu===n.redirect},on:{click:function(e){return t.scrollTo(n.redirect)}}},[t._v(t._s(n.title))])}))],2),e("span",{staticClass:"social-icons-holder"},t._l(t.common.socialIcons,(function(n,a){return e("font-awesome-icon",{key:a,staticClass:"social-icons",attrs:{icon:n.icon},on:{click:function(e){return t.openExternalSites(n.url)}}})})),1),e("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/booking")}}},[t._v("BOOK A ROOM")])])],1)}),r=[],l=n("69d9"),u=n("a18c"),d=n("1157"),p=n.n(d),m=n("296f"),f=n("c074"),h=n("1d3d"),g={mounted:function(){},data:function(){return{common:l["a"],faBars:f["c"],faTimes:f["x"],flag:!1}},components:{Logo:m["a"]},methods:{redirect:function(t){u["a"].push(t)},scrollTo:function(t){var e=this;this.$analytics.fbq.event("ViewContent",{content_name:t}),l["a"].setLoad(t),this.common.activeMenu=t,setTimeout((function(){if("/"===t.charAt(0))e.redirect(t);else{var n=p()(window).height();p()("html, body").animate({scrollTop:p()(t).offset().top-parseInt(.07*n)},400)}}),100),this.flag=!1,p()(".mobile-menu").css({display:"none"})},openExternal:function(t,e){0==e?h["a"].methods.inquireRoom(null):(this.$analytics.fbq.event("InitialCheckout",{content_name:"Direct Booking"}),window.open(t,"_BLANK"))},openExternalSites:function(t){this.$analytics.fbq.event("ViewContent",{content_name:t}),window.open(t,"_BLANK")},toggle:function(){!1===this.flag?(this.flag=!0,p()(".mobile-menu").css({display:"block"})):(this.flag=!1,p()(".mobile-menu").css({display:"none"}))}}},v=g,b=(n("da1a"),n("2877")),y=Object(b["a"])(v,c,r,!1,null,"62170ce6",null),_=y.exports,w=n("451a"),C=n("1580"),x=n("3458"),k=n("9233"),I=n("a6dc"),$=n("7e0e"),M=n("7ece"),P=function(){var t=this,e=t._self._c;return t.data.length>0?e("div",{staticClass:"img-modal",attrs:{id:t.customId}},[e("div",{staticClass:"img-holder",style:t.getHeight()},[e("font-awesome-icon",{staticClass:"close-icon icon",attrs:{icon:t.faTimesCircle},on:{click:function(e){return t.close()}}}),t.activeIndex>0?e("font-awesome-icon",{staticClass:"icon-prev icon",attrs:{icon:t.faChevronLeft},on:{click:function(e){return t.setPrev()}}}):t._e(),t.activeIndex<t.data.length-1?e("font-awesome-icon",{staticClass:"icon-next icon",attrs:{icon:t.faChevronRight},on:{click:function(e){return t.setNext()}}}):t._e(),e("span",{staticClass:"loading"},[e("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1),e("img",{key:t.activeIndex,staticClass:"image-viewer gallery-image-viewer",attrs:{src:t.data[t.activeIndex].url,id:"image-view"}}),"order_now"===t.data[t.activeIndex].type?e("div",{key:"a"+t.activeIndex,staticClass:"actions"},[e("span",{staticClass:"text"},[e("label",{staticClass:"title pull-left"},[e("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),e("button",{staticClass:"btn btn-warning pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("ORDER NOW")])]):t._e(),"redirect_link"===t.data[t.activeIndex].type?e("div",{key:"a"+t.activeIndex,staticClass:"actions actions-secondary"},[e("span",{staticClass:"text"},[e("label",{staticClass:"title pull-left"},[e("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),e("button",{staticClass:"btn btn-primary pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("PURCHASE NOW")])]):t._e()],1)]):t._e()},S=[],T={mounted:function(){this.onLoaded()},data:function(){return{activeIndex:0,faTimesCircle:f["y"],faChevronLeft:f["e"],faChevronRight:f["f"],loading:!0,faCircleNotch:f["l"]}},props:["propStyle","data","customId"],methods:{close:function(){this.activeIndex=0,p()("#"+this.customId).css({display:"none"})},getHeight:function(){var t=p()(window).height(),e=p()(window).width();if(e>t){var n=parseInt(t-.05*t);return{height:n+"px !important",width:n+"px !important",top:parseInt(t-.975*t)+"px !important",left:parseInt((e-n)/2)+"px"}}var a=parseInt(e-.1*e);return{height:a+"px !important",width:a+"px !important",left:parseInt(.05*e)+"px !important",top:parseInt((t-a)/2)+"px"}},setLoading:function(t){p()(".loading").css({display:t})},setNext:function(){this.activeIndex++,this.onLoaded()},setPrev:function(){this.activeIndex--,this.onLoaded()},onLoaded:function(){this.setLoading("block"),p()("#image-view").on("load",(function(){p()(".loading").css({display:"none"})})),p()("#image-view").on("error",(function(){p()(".loading").css({display:"block"})}))},redirectExternal:function(t){window.open(t,"_BLANK")},setImage:function(t){this.activeIndex=t,p()("#"+this.customId).css({display:"block"})}}},O=T,A=(n("182b"),Object(b["a"])(O,P,S,!1,null,"52d5ebdb",null)),q=A.exports,L=n("d8b0"),B=n("c28c"),j=n("db49"),F=n("521f"),R={name:"HelloWorld",mounted:function(){l["a"].getBasic(),window.addEventListener("scroll",this.onScroll),this.$analytics.fbq.event("ViewContent",{content_name:"Home Page"}),this.retreiveApiV4()},data:function(){return{faChevronUp:f["j"],scrollValue:0,common:l["a"],mode:"package",doc:null}},props:{msg:String},components:{Header:_,MyFooter:w["a"],Restaurant:C["a"],Rooms:x["a"],Packages:h["a"],Booking:k["a"],Testimonials:I["a"],Faq:$["a"],Gallery:M["a"],ImageView:q,Privacy:L["a"],AboutPage:B["a"],tlSearchFormMain:F["a"]},methods:{redirect:function(t){p()("html, body").animate({scrollTop:p()("#top-view").offset().top},500),u["a"].push(t)},scrollTo:function(){p()("html, body").animate({scrollTop:p()("#top-view").offset().top},500)},loadPage:function(t,e){var n=e/t;n>5.5?l["a"].setLoad("#faq"):n>4.5?l["a"].setLoad("#gallery"):n>3.5?l["a"].setLoad("#testimonials"):n>2.5?l["a"].setLoad("#restaurants"):n>1.5?l["a"].setLoad("#packages"):n>.5&&l["a"].setLoad("#rooms")},onScroll:function(){var t=p()(window).height(),e=p()(window).scrollTop();this.loadPage(t,e);var n=parseInt(e/t*100);n>=20?(p()(".menu").css({position:"fixed","z-index":1e4,top:"0%",bottom:"auto"}),p()(".view-on-scroll").css({display:"block"})):(p()(".menu").css({position:"absolute","z-index":0,bottom:"0%",top:"auto"}),p()(".view-on-scroll").css({display:"none"})),this.setActiveOnScroll()},setActiveOnScroll:function(){var t=this;this.common.menus.length>0&&this.common.menus.map((function(e){var n=p()(e.redirect).offset().top,a=n+p()(e.redirect).outerHeight(),o=p()(window).scrollTop(),s=p()(window).height(),i=parseInt(.1*s);o>=n-i&&o<=a-i?t.common.activeMenu=e.redirect:o<=0&&(t.common.activeMenu="#top-view")}))},scrollToByParams:function(t){this.$refs.header.scrollTo(t)},onGroupBooking:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$refs.inquire.mode=t,this.$refs.inquire.activeStep=1,this.$refs.inquire.type=e,this.$refs.header.scrollTo("#packages")},showImage:function(t){this.$refs.imageView.setImage(t)},retreiveApiV4:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,o,i,c,r,u,d,p,m,f,h,g,v,b,y,_,w,C,x,k,I,$,M,P,S,T,O,A,q;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return l["a"].faq=[],l["a"].menus=[],l["a"].packages=null,l["a"].testimonials=[],l["a"].rooms=[],l["a"].restaurants=[],l["a"].gallery=[],l["a"].addOns=[],l["a"].announcements=[],a=n("d340"),o=a.GoogleSpreadsheet,t.doc=new o(j["a"].googleSheetId),e.next=13,t.doc.useServiceAccountAuth({client_email:j["a"].google.client_email,private_key:j["a"].google.private_key});case 13:return e.next=15,t.doc.loadInfo();case 15:return i=t.doc.sheetsByIndex[0],e.next=18,i.getRows();case 18:return c=e.sent,l["a"].faq=c.map((function(t){return{question:t.question,answer:t.answer,flag:!1}})),r=t.doc.sheetsByIndex[1],e.next=23,r.getRows();case 23:return u=e.sent,l["a"].menus=u.map((function(t){return{title:t.title,redirect:t.redirect}})),d=t.doc.sheetsByIndex[3],e.next=28,d.getRows();case 28:for(p=e.sent,m=0;m<p.length;m++)f=p[m],h=f.types,g=null!==h?h.split(","):null,v=f.images,b=null!==v?v.split(","):null,y=b.map((function(t){return{url:l["a"].api+t}})),_=g.map((function(t){return{title:t}})),w={types:_,images:y},l["a"].packages=w;return C=t.doc.sheetsByIndex[7],e.next=33,C.getRows();case 33:return x=e.sent,l["a"].testimonials=x.map((function(t){return{message:t.message,name:t.name,country:t.country,position:t.position,country_code:t.country_code}})),k=t.doc.sheetsByIndex[4],e.next=38,k.getRows();case 38:return I=e.sent,l["a"].rooms=I.map((function(t){var e=t.inclusions,n=null!==e?e.split(","):null,a=t.image,o=null!==a?a.split(","):null,s=o.map((function(t){return{url:l["a"].api+t}})),i=n.map((function(t){return{title:t}})),c={abbreviation:t.abbreviation,title:t.title,description:t.description,inclusions:i,price:t.price,priceType:t.type,priceInclusions:t.price_inclusions,images:s,type:t.redirect_type};return c})),$=t.doc.sheetsByIndex[5],e.next=43,$.getRows();case 43:return M=e.sent,l["a"].restaurants=M.map((function(t){var e=t.inclusions,n=null!==e?e.split(","):null,a=t.images,o=null!==a?a.split(","):null,s=o.map((function(t){return{url:l["a"].api+t}})),i=n.map((function(t){return{title:t}})),c={abbreviation:t.abbreviation,title:t.title,description:t.description,inclusions:i,images:s};return c})),P=t.doc.sheetsByIndex[6],e.next=48,P.getRows();case 48:return S=e.sent,l["a"].gallery=S.map((function(t){console.log({item:t});var e=t.filename,n={url:l["a"].api+e,caption:t.caption};return n})),T=t.doc.sheetsByIndex[8],e.next=53,T.getRows();case 53:return O=e.sent,l["a"].addOns=O.map((function(t,e){return{type:t.type,title:t.title,id:e,flag:!1}})),A=t.doc.sheetsByIndex[11],e.next=58,A.getRows();case 58:q=e.sent,l["a"].announcements=q.map((function(t){var e={type:t.type,text:t.caption,url:l["a"].api+t.image,link:t.link};return e})),setTimeout((function(){t.$refs.imageViewAnnouncements.setImage(0)}),1e3);case 61:case"end":return e.stop()}}),e)})))()},retrieve:function(){var t=this;l["a"].faq=[],l["a"].menus=[],l["a"].packages=null,l["a"].testimonials=[],l["a"].rooms=[],l["a"].restaurants=[],l["a"].gallery=[],l["a"].addOns=[],l["a"].announcements=[],p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/1/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a={question:e[n].content.$t,answer:e[n+1].content.$t,flag:!1};l["a"].faq.push(a)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/2/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a={title:e[n].content.$t,redirect:e[n+1].content.$t};l["a"].menus.push(a)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/4/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a=e[n].content.$t,o=null!==a?a.split(","):null,s=e[n+1].content.$t,i=null!==s?s.split(","):null,c=i.map((function(t){return{url:l["a"].api+t}})),r=o.map((function(t){return{title:t}})),u={types:r,images:c};l["a"].packages=u}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/8/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=5)if(n>4){var a={message:e[n].content.$t,name:e[n+1].content.$t,country:e[n+2].content.$t,position:e[n+3].content.$t,country_code:e[n+4].content.$t};l["a"].testimonials.push(a)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/5/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=9)if(n>8){var a=e[n+3].content.$t,o=null!==a?a.split(","):null,s=e[n+7].content.$t,i=null!==s?s.split(","):null,c=i.map((function(t){return{url:l["a"].api+t}})),r=o.map((function(t){return{title:t}})),u={abbreviation:e[n].content.$t,title:e[n+1].content.$t,description:e[n+2].content.$t,inclusions:r,price:e[n+4].content.$t,priceType:e[n+5].content.$t,priceInclusions:e[n+6].content.$t,images:c,type:e[n+8].content.$t};l["a"].rooms.push(u)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/6/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=5)if(n>4){var a=e[n+3].content.$t,o=null!==a?a.split(","):null,s=e[n+4].content.$t,i=null!==s?s.split(","):null,c=i.map((function(t){return{url:l["a"].api+t}})),r=o.map((function(t){return{title:t}})),u={abbreviation:e[n].content.$t,title:e[n+1].content.$t,description:e[n+2].content.$t,inclusions:r,images:c};l["a"].restaurants.push(u)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/7/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a=e[n].content.$t,o={url:l["a"].api+a,caption:e[n+1].content.$t};l["a"].gallery.push(o)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/9/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0,a=0;a<e.length;a+=2)if(a>1){var o={type:e[a].content.$t,title:e[a+1].content.$t,id:n++,flag:!1};l["a"].addOns.push(o)}})),p.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/12/public/values?alt=json",(function(e){for(var n=e.feed.entry,a=0;a<n.length;a+=4)if(a>3){var o={type:n[a].content.$t,text:n[a+1].content.$t,url:l["a"].api+n[a+2].content.$t,link:n[a+3].content.$t};l["a"].announcements.push(o),setTimeout((function(){t.$refs.imageViewAnnouncements.setImage(0)}),1e3)}}))}}},Q=R,N=(n("74f1"),Object(b["a"])(Q,a,o,!1,null,"b0dbf402",null));e["default"]=N.exports},6522:function(t,e,n){},"74f1":function(t,e,n){"use strict";n("ccfc")},"78d4":function(t,e,n){},8423:function(t,e,n){"use strict";n("da23")},8596:function(t,e,n){"use strict";n("c42b")},"91f8":function(t,e,n){},a46b:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return null!==t.selected&&void 0!==t.selected?e("div",[e("span",{staticClass:"page-holder"},[e("logo",{staticClass:"hide-on-mobile"})],1),e("tlSearchFormInner"),e("span",[e("div",{staticClass:"blog-tiles"},[e("p",[e("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")]),e("button",{staticClass:"btn btn-warning",staticStyle:{"margin-left":"10px","margin-right":"10px"},on:{click:function(e){return t.redirect("/press-room")}}},[t._v("Press Room")]),t._v(" "+t._s(t.selected.title)+" ")]),e("span",{staticClass:"blog-item"},["internal"===t.selected.type?e("span",{staticClass:"image-holder"},[e("img",{attrs:{src:t.selected.image}})]):t._e(),"internal_video"===t.selected.type?e("span",{staticClass:"video-holder",domProps:{innerHTML:t._s(t.selected.image)}}):t._e(),e("span",{staticClass:"details"},[e("h3",{staticStyle:{"margin-top":"25px"}},[t._v(" "+t._s(t.selected.title)+" ")]),t._v(" Published by "),e("b",[t._v(t._s(t.selected.author))]),t._v(" on "+t._s(t.selected.date)+" "),e("br"),e("label",{domProps:{innerHTML:t._s(t.selected.content)}})])])])]),e("MyFooter",{attrs:{property:"redirect"}})],1):!0===t.loading?e("span",{staticClass:"loading text-center"},[e("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1):e("NotFound")},o=[],s=n("c7eb"),i=n("1da1"),c=(n("14d9"),n("a15b"),n("caad"),n("2532"),n("4de4"),n("d3b7"),n("69d9")),r=n("296f"),l=n("451a"),u=n("f5de"),d=n("c074"),p=n("a18c"),m=(n("1157"),n("db49")),f=n("effa"),h={mounted:function(){c["a"].getBasic(),this.getBlog()},data:function(){return{common:c["a"],loading:!1,faCircleNotch:d["l"],selected:null}},components:{Logo:r["a"],MyFooter:l["a"],NotFound:u["a"],tlSearchFormInner:f["a"]},methods:{redirect:function(t){p["a"].push(t)},getBlog:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,o,i,c,r,l,u,d;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.$analytics.fbq.event("ViewContent",{content_name:t.$route.params.title.split("_").join(" ")}),a=n("d340"),o=a.GoogleSpreadsheet,i=new o(m["a"].googleSheetId),e.next=6,i.useServiceAccountAuth({client_email:m["a"].google.client_email,private_key:m["a"].google.private_key});case 6:return e.next=8,i.loadInfo();case 8:return c=i.sheetsByIndex[10],e.next=11,c.getRows();case 11:r=e.sent,l=0;case 13:if(!(l<r.length)){e.next=23;break}if(u=r[l],d={type:u.type,title:u.title,image:"internal_video"===u.type?u.featured_image:t.common.host+"img/"+u.featured_image,date:u.date,author:u.author,introduction:u.introduction,content:u.content},!d.title.includes(t.$route.params.title.split("_").join(" "))){e.next=20;break}return t.selected=d,t.loading=!1,e.abrupt("break",23);case 20:l++,e.next=13;break;case 23:null==t.selected&&(t.loading=!1);case 24:case"end":return e.stop()}}),e)})))()},manageSearch:function(){var t=this,e=c["a"].blogs;c["a"].blogs.length>0&&(e=c["a"].blogs.filter((function(e){return e.title.includes(t.$route.params.title.split("_").join(" "))}))),this.selected=e?e[0]:null,this.loading=!1}}},g=h,v=(n("46c6"),n("2877")),b=Object(v["a"])(g,a,o,!1,null,"59bc5a3e",null);e["a"]=b.exports},aa02:function(t,e,n){},ae39:function(t,e,n){"use strict";n("b6e2")},b6e2:function(t,e,n){},c42b:function(t,e,n){},c628:function(t,e,n){},ccfc:function(t,e,n){},cf42:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"top-view"}},[e("span",{staticClass:"page-holder"},[e("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),e("tlSearchFormInner"),e("div",{staticClass:"blog-tiles"},[e("p",[e("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")])]),t._l(t.common.blogs,(function(n,a){return e("span",{key:a,staticClass:"blog-item",on:{click:function(e){return t.checkRoute(n)}}},["internal_video"!==n.type?e("span",{staticClass:"image-holder"},[e("img",{attrs:{src:n.image}})]):t._e(),"internal_video"===n.type?e("span",{staticClass:"image-holder"},[e("span",{domProps:{innerHTML:t._s(n.image)}})]):t._e(),e("span",{staticClass:"details"},[e("h3",[t._v(" "+t._s(n.title)+" ")]),t._v(" Published by "),e("b",[t._v(t._s(n.author))]),t._v(" on "+t._s(n.date)+" "),e("br"),e("label",{domProps:{innerHTML:t._s(n.introduction)}})])])}))],2),e("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"page-details text-center"},[e("p",{staticClass:"text-white display-4"},[t._v("Press Room")])])}],s=(n("14d9"),n("a15b"),n("69d9")),i=n("296f"),c=n("a18c"),r=n("451a"),l=n("1157"),u=n.n(l),d=n("effa"),p={mounted:function(){this.retrieve()},data:function(){return{common:s["a"]}},components:{Logo:i["a"],MyFooter:r["a"],tlSearchFormInner:d["a"]},methods:{redirect:function(t){u()("html, body").animate({scrollTop:u()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){s["a"].getBlog(),s["a"].getBasic()},checkRoute:function(t){"external"===t.type?(this.$analytics.fbq.event("ViewContent",{content_name:t.title}),window.open(t.content)):this.redirect("/press-room/page/"+t.title.split(" ").join("_"))}}},m=p,f=(n("f09a"),n("2877")),h=Object(f["a"])(m,a,o,!1,null,"2e04fa36",null);e["a"]=h.exports},da1a:function(t,e,n){"use strict";n("91f8")},da23:function(t,e,n){},f09a:function(t,e,n){"use strict";n("78d4")},f5de:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"top-view"}},[e("span",{staticClass:"page-holder"},[e("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),e("div",{staticClass:"blog-tiles"},[e("div",{staticClass:"content"},[e("h1",{staticClass:"text-center text-danger"},[e("font-awesome-icon",{staticClass:"plus-icon",attrs:{icon:t.faSadTear}})],1),e("h1",{staticClass:"text-center"},[t._v(" Page not found. ")])])]),e("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"page-details text-center"},[e("p",{staticClass:"text-white display-4"},[t._v(" Error 404 ")])])}],s=(n("14d9"),n("69d9")),i=n("296f"),c=n("a18c"),r=n("451a"),l=n("1157"),u=n.n(l),d=n("c074"),p={mounted:function(){this.retrieve()},data:function(){return{common:s["a"],faSadTear:d["u"]}},components:{Logo:i["a"],MyFooter:r["a"]},methods:{redirect:function(t){u()("html, body").animate({scrollTop:u()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){s["a"].getBasic()}}},m=p,f=(n("540f"),n("2877")),h=Object(f["a"])(m,a,o,!1,null,"6a05b85e",null);e["a"]=h.exports}}]);
//# sourceMappingURL=app~32ab1a8b.764e43f7.js.map