(function(t){function e(e){for(var a,s,c=e[0],l=e[1],r=e[2],m=0,d=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cd8":function(t,e,n){"use strict";var a=n("d560"),o=n.n(a);o.a},"0ecb":function(t,e,n){"use strict";var a=n("9cc4"),o=n.n(a);o.a},"14e5":function(t,e,n){"use strict";var a=n("21ea"),o=n.n(a);o.a},"18da":function(t,e,n){"use strict";var a=n("eff1"),o=n.n(a);o.a},"21ea":function(t,e,n){},"243f":function(t,e,n){"use strict";var a=n("79d1"),o=n.n(a);o.a},"3c57":function(t,e,n){},"3e4e":function(t,e,n){},"4cfc":function(t,e,n){"use strict";var a=n("d17b"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-view"}},[n("Header",{attrs:{id:"header-menu"}}),n("booking"),n("Rooms"),n("Packages"),n("Restaurant"),n("testimonials"),n("gallery"),n("faq"),n("Footer"),n("span",{staticClass:"return-to-top",on:{click:function(e){return t.scrollTo()}}},[n("font-awesome-icon",{staticClass:"icon",staticStyle:{"font-size":"24px"},attrs:{icon:t.faChevronUp}})],1),n("image-view",{ref:"imageView",attrs:{propStyle:{width:"800px"},data:t.common.gallery}})],1)},c=[],l=(n("d81d"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",attrs:{id:"home"}},[n("img",{staticClass:"mobile-menu-icon",staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}}),n("logo",{staticClass:"hide-on-mobile"}),n("font-awesome-icon",{staticClass:"mobile-menu-icon",attrs:{icon:!1===t.flag?t.faBars:t.faTimes},on:{click:function(e){return t.toggle()}}}),n("ul",{staticClass:"mobile-menu"},t._l(t.common.menus,(function(e,a){return n("li",{key:a,class:{"active-menu":t.common.activeMenu===e.redirect}},[n("a",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(n){return t.scrollTo(e.redirect)}}},[t._v(t._s(e.title))])])})),0),n("ul",{staticClass:"mobile-social-icon"},t._l(t.common.socialIcons,(function(e,a){return n("li",{key:a,on:{click:function(n){return t.openExternal(e.url)}}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:e.icon}})],1)})),0),n("div",{staticClass:"menu"},[n("ul",t._l(t.common.menus,(function(e,a){return n("li",{key:a,staticClass:"basic-menu",class:{"active-menu":t.common.activeMenu===e.redirect},on:{click:function(n){return t.scrollTo(e.redirect)}}},[t._v(t._s(e.title))])})),0),n("span",{staticClass:"social-icons-holder"},t._l(t.common.socialIcons,(function(e,a){return n("font-awesome-icon",{key:a,staticClass:"social-icons",attrs:{icon:e.icon},on:{click:function(n){return t.openExternal(e.url)}}})})),1),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.openExternal(t.common.booking_link)}}},[t._v("BOOK A ROOM")])])],1)}),r=[],u=n("f2d1"),m={APP_NAME:"Mezzo Hotel",APP_TAGLINE:"LUXURY HOTEL",APP_EMAIL:"admin@mezzohotel.com",APP_COPYRIGHT:"Mezzo Hotel "+(new Date).getFullYear(),APP_DEVELOPER:"Increment Technologies",APP_DEVELOPER_URL:"http://increment.ltd",APP_PHONE_NUMBER:"0912345678",APP_HEADER_BACKGROUND:n("c6aa"),address:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",api:"http://revamp.mezzohotel.com/img/",host:"http://revamp.mezzohotel.com/",booking_link:"https://mezzohotel.com/managebooking.php",socialMedia:{facebook:"https://www.facebook.com/mezzohotelcebu"},socialIcons:[{icon:u["a"],url:"https://www.facebook.com/mezzohotelcebu"},{icon:u["d"],url:"https://twitter.com/hashtag/mezzohotel"},{icon:u["c"],url:"https://www.instagram.com/mezzohotelcebu"}],menus:[],packages:[],testimonials:[],rooms:[],restaurants:[],faq:[],gallery:[],activeMenu:"#top-view"},d=n("1157"),f=n.n(d),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"holder"},[n("img",{attrs:{src:t.common.api+"logo.png"}})])])},v=[],h={mounted:function(){},data:function(){return{common:m}},methods:{}},g=h,_=(n("0cd8"),n("2877")),b=Object(_["a"])(g,p,v,!1,null,"de58f596",null),C=b.exports,w=n("c074"),k={mounted:function(){},data:function(){return{common:m,faBars:w["c"],faTimes:w["q"],flag:!1}},components:{Logo:C},methods:{scrollTo:function(t){this.common.activeMenu=t;var e=f()(window).height();f()("html, body").animate({scrollTop:f()(t).offset().top-parseInt(.07*e)},500),this.flag=!1,f()(".mobile-menu").css({display:"none"})},openExternal:function(t){window.open(t,"_BLANK")},toggle:function(){!1===this.flag?(this.flag=!0,f()(".mobile-menu").css({display:"block"})):(this.flag=!1,f()(".mobile-menu").css({display:"none"}))}}},y=k,x=(n("18da"),Object(_["a"])(y,l,r,!1,null,"63cb2600",null)),P=x.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("logo",{staticStyle:{width:"100%",float:"left","margin-bottom":"50px"}}),n("ul",[n("li",[n("span",[t._v("Phone")]),n("b",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"tel:"+t.common.APP_PHONE_NUMBER}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faPhoneAlt}}),t._v(" "+t._s(t.common.APP_PHONE_NUMBER)+" ")],1)])]),n("li",[n("span",[t._v("Address")]),n("span",{staticClass:"action-link",on:{click:function(e){return t.$refs.mapModal.showModal()}}},[n("b",[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faMapMarker}}),t._v(" "+t._s(t.common.address)+" ")],1)])]),n("li",[n("span",[t._v("E-mail")]),n("span",[n("b",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"mailto:"+t.common.APP_EMAIL+"?Subject=INQUIRE",target:"_top"}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faEnvelope}}),t._v(" "+t._s(t.common.APP_EMAIL)+" ")],1)])])])]),n("span",{staticClass:"copyright"},[n("label",[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faCopyright}}),t._v(" "+t._s(t.common.APP_COPYRIGHT)+". All rights reserved. This site was made by "),n("b",{on:{click:function(e){return t.openExternal(t.common.APP_DEVELOPER_URL)}}},[t._v(t._s(t.common.APP_DEVELOPER))])],1)])],1),n("GoogleMapModal",{ref:"mapModal",attrs:{place_data:t.places,propStyle:t.propStyle}})],1)},A=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"mapmodal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-full",attrs:{role:"document"}},[n("div",{staticClass:"modal-content",style:t.propStyle},[n("div",{staticClass:"modal-header bg-warning"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Map Viewer")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hideModal()}}},[n("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"modal-body",attrs:{id:"result"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-lg-12"},[n("div",{ref:"map",attrs:{id:"map"}})])])])])])])])},O=[],M=(n("99af"),n("4160"),n("a9e3"),n("159b"),{props:["place_data","propStyle"],data:function(){return{map:null}},components:{},methods:{showModal:function(){f()("#mapmodal").modal("show")},hideModal:function(){f()("#mapmodal").modal("hide")},getMap:function(t){var e=this;function n(){e.map?t(e.map):setTimeout(n,200)}n()}},mounted:function(){var t=this;this.map=new window.google.maps.Map(this.$refs["map"],{center:{lat:Number(this.place_data[0].latitude),lng:Number(this.place_data[0].longitude)},zoom:11}),this.place_data.forEach((function(e){var n=new window.google.maps.InfoWindow({content:"<b>".concat(e.route,", ").concat(e.locality,", ").concat(e.country,"</b>")}),a=new window.google.maps.Marker({position:{lat:Number(e.latitude),lng:Number(e.longitude)},map:t.map,icon:{url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}});a.addListener("click",(function(){n.open(this.map,a)}))}))}}),S=M,$=(n("243f"),Object(_["a"])(S,E,O,!1,null,"2a1a499e",null)),N=$.exports,z={mounted:function(){},data:function(){return{common:m,faCopyright:w["j"],faEnvelope:w["k"],faMapMarker:w["l"],faPhoneAlt:w["m"],places:[{longitude:123.913968,latitude:10.321886,route:"Mezzo Hotel",locality:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",country:"Philippines"}],propStyle:{"margin-top":"10vh !important;"}}},components:{Logo:C,GoogleMapModal:N},methods:{openExternal:function(t){window.open(t,"_BLANK")}}},T=z,B=(n("8715"),Object(_["a"])(T,I,A,!1,null,"16d369a9",null)),j=B.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.activeItem?n("div",{staticClass:"holder",attrs:{id:"restaurants"}},[n("div",{staticClass:"item"},[n("div",{staticClass:"item-content"},[null!==t.activeItem.images?n("div",{staticClass:"image-holder image-holder-sm"},[t._l(t.activeItem.images,(function(e,a){return n("span",{key:a},[a===t.activeImage?n("img",{attrs:{src:e.url}}):t._e()])})),n("span",{staticClass:"circle-icon"},t._l(t.activeItem.images,(function(e,a){return n("span",{key:a,staticClass:"image-menu-holder",on:{click:function(e){t.activeImage=a}}},[n("img",{class:{"active-image":t.activeImage===a},attrs:{src:e.url}})])})),0)],2):t._e(),n("div",{staticClass:"details"},[n("span",{staticClass:"item-menu"},t._l(t.common.restaurants,(function(e,a){return n("label",{key:a,class:{"bg-warning":t.active===a},on:{click:function(e){return t.setActive(a)}}},[t._v(t._s(e.abbreviation))])})),0),n("h5",{staticStyle:{"margin-bottom":"25px"}},[t._v(t._s(t.activeItem.title))]),n("p",[t._v(t._s(t.activeItem.description))]),null!==t.activeItem.inclusions?n("ul",t._l(t.activeItem.inclusions,(function(e,a){return n("li",{key:a},[n("font-awesome-icon",{staticClass:"text-warning check-icon",attrs:{icon:t.faCheck}}),n("label",[t._v(t._s(e.title))])],1)})),0):t._e(),n("button",{staticClass:"btn btn-warning"},[t._v("INQUIRE NOW")])]),null!==t.activeItem.images?n("div",{staticClass:"image-holder image-holder-lg"},[t._l(t.activeItem.images,(function(e,a){return n("span",{key:a},[a===t.activeImage?n("img",{attrs:{src:e.url}}):t._e()])})),n("span",{staticClass:"circle-icon"},t._l(t.activeItem.images,(function(e,a){return n("span",{key:a,staticClass:"image-menu-holder",on:{click:function(e){t.activeImage=a}}},[n("img",{class:{"active-image":t.activeImage===a},attrs:{src:e.url}})])})),0)],2):t._e()])])]):t._e()},Q=[],R={mounted:function(){var t=this;setInterval((function(){t.active<m.rooms.length?t.active++:t.active=0}),6e3)},data:function(){return{common:m,faCheck:w["d"],faCircle:w["i"],active:0,activeImage:0}},computed:{activeItem:function(){return m.restaurants.length>0?m.restaurants[this.active]:null}},methods:{openExternal:function(t){window.open(t,"_BLANK")},setActive:function(t){this.active=t,this.activeImage=0}}},K=R,q=(n("e273"),Object(_["a"])(K,L,Q,!1,null,"275fe3e0",null)),D=q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.activeItem?n("div",{staticClass:"holder",attrs:{id:"rooms"}},[n("div",{staticClass:"item"},[n("div",{staticClass:"item-content"},[null!==t.activeItem.images?n("div",{staticClass:"image-holder"},[t._l(t.activeItem.images,(function(e,a){return n("span",{key:a},[a===t.activeImage?n("img",{attrs:{src:e.url}}):t._e()])})),n("span",{staticClass:"circle-icon"},t._l(t.activeItem.images,(function(e,a){return n("span",{key:a,staticClass:"image-menu-holder",on:{click:function(e){t.activeImage=a}}},[n("img",{class:{"active-image":t.activeImage===a},attrs:{src:e.url}})])})),0)],2):t._e(),n("div",{staticClass:"details"},[n("span",{staticClass:"item-menu"},t._l(t.common.rooms,(function(e,a){return n("label",{key:a,class:{"bg-primary":t.active===a},on:{click:function(e){return t.setActive(a)}}},[t._v(t._s(e.abbreviation))])})),0),n("h5",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px"}},[t._v(" "+t._s(t.activeItem.title)+" ")]),n("p",[t._v(t._s(t.activeItem.description))]),null!==t.activeItem.inclusions?n("ul",t._l(t.activeItem.inclusions,(function(e,a){return n("li",{key:a},[n("font-awesome-icon",{staticClass:"text-warning check-icon",attrs:{icon:t.faCheck}}),n("label",[t._v(t._s(e.title))])],1)})),0):t._e(),n("h5",[n("b",{staticClass:"text-warning price"},[t._v(t._s(t.activeItem.price))]),t._v(" / Night")]),n("p",[t._v(t._s(t.activeItem.priceInclusions))]),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.openExternal(t.common.booking_link)}}},[t._v("BOOK NOW")])])])])]):t._e()},Y=[],H={mounted:function(){var t=this;setInterval((function(){t.active<m.rooms.length?t.active++:t.active=0}),6e3)},data:function(){return{common:m,faCheck:w["d"],faCircle:w["i"],active:0,activeImage:0}},computed:{activeItem:function(){return m.rooms.length>0?m.rooms[this.active]:null}},methods:{openExternal:function(t){window.open(t,"_BLANK")},setActive:function(t){this.active=t,this.activeImage=0}}},U=H,V=(n("71a9"),Object(_["a"])(U,W,Y,!1,null,"29c5cf88",null)),F=V.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.common.packages.length>1?n("div",{staticClass:"holder",attrs:{id:"packages"}},[t.previousPackBtn?n("div",{staticClass:"previous",style:{width:t.nextPackBtn?"11%":"10%"},on:{click:function(e){return t.previousMethod()}}},[n("span",{staticClass:"details"},["inquire_now"===t.currentPrevPackBtn.action?n("button",{staticClass:"btn btn-warning"},[n("font-awesome-icon",{attrs:{icon:t.faAngleLeft}})],1):t._e()]),n("img",{attrs:{src:t.currentPrevPackBtn.image}})]):t._e(),t._l(3,(function(e,a){return n("div",{key:a,staticClass:"item",style:{width:t.nextPackBtn&&t.previousPackBtn?"26%":"30%"}},[n("span",{staticClass:"details"},[n("label",{staticClass:"title"},[t._v(t._s(t.common.packages[t.activeStep+a].title))]),"inquire_now"===t.common.packages[t.activeStep+a].action?n("button",{staticClass:"btn btn-warning"},[t._v("MAKE AN INQUIRY")]):t._e()]),n("img",{attrs:{src:t.common.packages[t.activeStep+a].image}})])})),t.nextPackBtn?n("div",{staticClass:"next",style:{width:t.previousPackBtn?"11%":"10%"},on:{click:function(e){return t.nextMethod()}}},[n("span",{staticClass:"details"},["inquire_now"===t.currentNextPackBtn.action?n("button",{staticClass:"btn btn-warning"},[n("font-awesome-icon",{attrs:{icon:t.faAngleRight}})],1):t._e()]),n("img",{attrs:{src:t.currentNextPackBtn.image}})]):t._e()],2):t._e()},G=[],Z={data:function(){return{common:m,activeStep:0,numberOfViews:3,size:m.packages.length,previous:null,next:null,faAngleLeft:w["a"],faAngleRight:w["b"]}},computed:{nextPackBtn:function(){return this.activeStep+this.numberOfViews<m.packages.length},previousPackBtn:function(){return this.activeStep>0},currentPrevPackBtn:function(){return m.packages[this.activeStep-1]},currentNextPackBtn:function(){return m.packages[this.activeStep+this.numberOfViews]}},methods:{openExternal:function(t){window.open(t,"_BLANK")},nextMethod:function(){this.activeStep++},previousMethod:function(){this.activeStep--}}},X=Z,tt=(n("950b"),Object(_["a"])(X,J,G,!1,null,"7c63caba",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"incre-container"},[n("subscribe",{staticClass:"subscribe"}),n("div",{staticClass:"form-container"},[n("span",{staticClass:"margin-div"}),n("date-picker",{attrs:{type:"date","disabled-date":t.beforeToday,placeholder:"Check in","value-type":"format","default-value":new Date},model:{value:t.checkInDate,callback:function(e){t.checkInDate=e},expression:"checkInDate"}}),n("date-picker",{attrs:{type:"date","disabled-date":t.beforeToday,placeholder:"Check out","value-type":"format","default-value":new Date},model:{value:t.checkOutDate,callback:function(e){t.checkOutDate=e},expression:"checkOutDate"}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.adult,expression:"adult"}],staticClass:"form-control",attrs:{placeholder:"Select Adult"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.adult=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("Select Adult")]),t._l(20,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}))],2),n("select",{directives:[{name:"model",rawName:"v-model",value:t.children,expression:"children"}],staticClass:"form-control",attrs:{placeholder:"Select Adult"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.children=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("Select Children")]),t._l(20,(function(e,a){return n("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}))],2),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.openExternal(t.common.booking_link)}}},[t._v("BOOK A ROOM")])],1),n("img",{attrs:{src:t.common.APP_HEADER_BACKGROUND,align:"right"}})],1)},at=[],ot=n("ec45"),it=(n("411c"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!1===t.successFlag?n("div",{staticClass:"form-container"},[n("h4",{staticClass:"text-primary"},[t._v("Want to know more about our latest offers?")]),null!==t.errorMessage?n("label",{staticClass:"text-danger",staticStyle:{width:"100%","padding-left":"10px"}},[n("b",[t._v("Opps! "+t._s(t.errorMessage))])]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.subscribe()}}},[t._v("SUBSCRIBE")])]):n("div",{staticClass:"form-container"},[n("h2",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px"}},[t._v("Thank you for subscribing!")])])])}),st=[],ct={mounted:function(){},data:function(){return{common:m,email:null,errorMessage:null,successFlag:!1}},components:{},methods:{validateEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/,n=/\s/;return!n.test(t)&&!1!==e.test(t)},subscribe:function(){var t=this;null!==this.email&&""!==this.email?!1!==this.validateEmail(this.email)?(f.a.ajaxSetup({headers:{"Access-Control-Allow-Origin":"*"}}),f.a.get(this.common.host+"php/mailchimp.php?email="+this.email,(function(){t.email=null,t.errorMessage=null,t.successFlag=!0}))):this.errorMessage="Invalid e-mail address":this.errorMessage="Please enter your e-mail address."}}},lt=ct,rt=(n("14e5"),Object(_["a"])(lt,it,st,!1,null,"3c579568",null)),ut=rt.exports,mt={mounted:function(){},data:function(){return{common:m,checkInDate:null,checkOutDate:null,adult:"",children:""}},components:{DatePicker:ot["a"],Subscribe:ut},methods:{beforeToday:function(t){return t<new Date},openExternal:function(t){window.open(t,"_BLANK")}}},dt=mt,ft=(n("f7d2"),Object(_["a"])(dt,nt,at,!1,null,"24ff7e50",null)),pt=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"holder",attrs:{id:"testimonials"}},[n("div",{staticClass:"platform-container"},[n("div",{staticClass:"carousel slide",attrs:{id:"testimonialsCarousel","data-ride":"carousel"}},[n("div",{staticClass:"carousel-inner"},t._l(t.dotCirleCount,(function(e,a){return n("div",{key:a,staticClass:"carousel-item",class:{active:0===a}},t._l(t.common.testimonials,(function(e,o){return n("div",{key:o},[o>=3*a&&o<=3*a+2?n("span",{class:{"text-center message-holder":(o+1)%3!=1,"text-center message-holder1":(o+1)%3==1}},[n("h1",[n("font-awesome-icon",{staticClass:"text-warning qoute-left-icon",attrs:{icon:t.faQuoteLeft}})],1),n("p",[n("i",[t._v(t._s(e.message))])]),n("label",{staticClass:"gray"},[n("b",[t._v(t._s(e.name))])]),n("label",{directives:[{name:"show",rawName:"v-show",value:e.position!=t.quote,expression:"item.position != quote"}],staticClass:"gray"},[t._v(t._s(e.position))]),n("label",{directives:[{name:"show",rawName:"v-show",value:e.country!=t.quote,expression:"item.country != quote"}],staticClass:"gray"},[t._v(t._s(e.country))])]):t._e()])})),0)})),0),n("div",{staticClass:"text-center carousel-indicators"},t._l(t.dotCirleCount,(function(e,a){return n("font-awesome-icon",{key:a,staticClass:"circle-icon-inActive",class:{active:0===a},attrs:{icon:t.faCircle},on:{click:function(e){return t.setActive(a)}}})})),1)])])])},ht=[],gt={data:function(){return{common:m,faQuoteLeft:w["o"],faCircle:w["i"],activeIcon:0,reviewsBatchFrom:0,reviewsBatchThru:2,quote:"'"}},computed:{dotCirleCount:function(){return Math.ceil(m.testimonials.length/3)}},methods:{openExternal:function(t){window.open(t,"_BLANK")},setActive:function(t){f()("#testimonialsCarousel").carousel(t)}}};f()(document).ready((function(){f()("#testimonialsCarousel").carousel({interval:6e3})}));var _t=gt,bt=(n("0ecb"),Object(_["a"])(_t,vt,ht,!1,null,"f9af3646",null)),Ct=bt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"holder",attrs:{id:"faq"}},[n("div",{staticClass:"search"},[n("font-awesome-icon",{staticClass:"searchIcon",attrs:{icon:t.faSearch}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"form-control bg-warning text-white",staticStyle:{"font-size":"24px"},attrs:{type:"text",placeholder:"Type your question",results:"0"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})],1),n("ul",t._l(t.filteredQuestions,(function(e,a){return n("li",{key:a},[n("label",{staticClass:"title",on:{click:function(e){return t.setSelectedIndex(a)}}},[n("b",[t._v(t._s(e.question))]),n("font-awesome-icon",{staticClass:"text-primary icon",attrs:{icon:!0===e.flag?t.faChevronUp:t.faChevronDown}})],1),!0===e.flag?n("p",[t._v(" "+t._s(e.answer)+" ")]):t._e()])})),0)])},kt=[],yt=(n("4de4"),n("caad"),n("2532"),{data:function(){return{common:m,searchValue:null,faChevronUp:w["h"],faChevronDown:w["g"],faSearch:w["p"],selectedIndex:null}},computed:{filteredQuestions:function(){var t=this,e=m.faq;return this.searchValue&&(e=e.filter((function(e){return e.question.toLowerCase().includes(t.searchValue.toLowerCase())}))),e}},methods:{setSelectedIndex:function(t){this.filteredQuestions[t].flag=!this.filteredQuestions[t].flag}}}),xt=yt,Pt=(n("8ea1"),Object(_["a"])(xt,wt,kt,!1,null,"28522aaa",null)),It=Pt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.common.gallery.length>1?n("div",{staticClass:"custom-container"},[n("div",{staticClass:"holder",attrs:{id:"gallery"}},t._l(t.common.gallery,(function(e,a){return n("span",{key:a,staticClass:"item",on:{click:function(e){return t.showImage(a)}}},[n("img",{attrs:{src:e.url}}),n("div",{staticClass:"hover-holder"},[n("font-awesome-icon",{staticClass:"plus-icon",attrs:{icon:t.faPlusCircle}})],1)])})),0)]):t._e()},Et=[],Ot={data:function(){return{common:m,activeImage:0,faAngleLeft:w["a"],faAngleRight:w["b"],faPlusCircle:w["n"]}},components:{},methods:{showImage:function(t){this.$parent.showImage(t)}}},Mt=Ot,St=(n("4cfc"),Object(_["a"])(Mt,At,Et,!1,null,"c242e692",null)),$t=St.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length>0?n("div",{staticClass:"img-modal"},[n("div",{staticClass:"img-holder",style:t.propStyle},[n("font-awesome-icon",{staticClass:"close-icon icon",attrs:{icon:t.faTimesCircle},on:{click:function(e){return t.close()}}}),t.activeIndex>0?n("font-awesome-icon",{staticClass:"icon-prev icon",attrs:{icon:t.faChevronLeft},on:{click:function(e){return t.setPrev()}}}):t._e(),t.activeIndex<t.data.length-1?n("font-awesome-icon",{staticClass:"icon-next icon",attrs:{icon:t.faChevronRight},on:{click:function(e){return t.setNext()}}}):t._e(),n("img",{staticClass:"image-viewer",attrs:{src:t.data[t.activeIndex].url}})],1)]):t._e()},zt=[],Tt={mounted:function(){},data:function(){return{activeIndex:0,faTimesCircle:w["r"],faChevronLeft:w["e"],faChevronRight:w["f"]}},props:["propStyle","data"],methods:{close:function(){this.activeIndex=0,f()(".img-modal").css({display:"none"})},setNext:function(){this.activeIndex++},setPrev:function(){this.activeIndex--},setImage:function(t){this.activeIndex=t,f()(".img-modal").css({display:"block"})}}},Bt=Tt,jt=(n("dcb4"),Object(_["a"])(Bt,Nt,zt,!1,null,"073ef3e8",null)),Lt=jt.exports,Qt={name:"HelloWorld",mounted:function(){this.retrieve(),window.addEventListener("scroll",this.onScroll)},data:function(){return{faChevronUp:w["h"],scrollValue:0,common:m}},props:{msg:String},components:{Header:P,Footer:j,Restaurant:D,Rooms:F,Packages:et,Booking:pt,Testimonials:Ct,Faq:It,Gallery:$t,ImageView:Lt},methods:{scrollTo:function(){f()("html, body").animate({scrollTop:f()("#top-view").offset().top},500)},onScroll:function(){var t=f()(window).height(),e=f()(window).scrollTop(),n=parseInt(e/t*100);n>=20?f()(".menu").css({position:"fixed","z-index":1e4,top:"0%",bottom:"auto"}):f()(".menu").css({position:"absolute","z-index":0,bottom:"0%",top:"auto"}),this.setActiveOnScroll()},setActiveOnScroll:function(){var t=this;this.common.menus.length>0&&this.common.menus.map((function(e){var n=f()(e.redirect).offset().top,a=n+f()(e.redirect).outerHeight(),o=f()(window).scrollTop(),i=f()(window).height(),s=parseInt(.1*i);o>=n-s&&o<=a-s?t.common.activeMenu=e.redirect:o<=0&&(t.common.activeMenu="#top-view")}))},showImage:function(t){this.$refs.imageView.setImage(t)},retrieve:function(){m.faq=[],m.menus=[],m.packages=[],m.testimonials=[],m.rooms=[],m.restaurants=[],m.gallery=[],f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/1/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a={question:e[n].content.$t,answer:e[n+1].content.$t,flag:!1};m.faq.push(a)}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/2/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1){var a={title:e[n].content.$t,redirect:e[n+1].content.$t};m.menus.push(a)}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/3/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=2)if(n>1)switch(e[n].content.$t){case"app_name":m.APP_NAME=e[n+1].content.$t;break;case"app_tagline":m.APP_TAGLINE=e[n+1].content.$t;break;case"app_email":m.APP_EMAIL=e[n+1].content.$t;break;case"app_phone_number":m.APP_PHONE_NUMBER=e[n+1].content.$t;break;case"address":m.address=e[n+1].content.$t;break;case"app_hearder_background":m.APP_HEADER_BACKGROUND=e[n+1].content.$t;break}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/4/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=3)if(n>2){var a={title:e[n].content.$t,image:e[n+1].content.$t,action:e[n+2].content.$t};m.packages.push(a)}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/8/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=4)if(n>3){var a={message:e[n].content.$t,name:e[n+1].content.$t,country:e[n+2].content.$t,position:e[n+3].content.$t};m.testimonials.push(a)}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/5/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=7)if(n>6){var a=e[n+3].content.$t,o=null!==a?a.split(","):null,i=e[n+6].content.$t,s=null!==i?i.split(","):null,c=s.map((function(t){return{url:m.host+"img/"+t}})),l=o.map((function(t){return{title:t}})),r={abbreviation:e[n].content.$t,title:e[n+1].content.$t,description:e[n+2].content.$t,inclusions:l,price:e[n+4].content.$t,priceInclusions:e[n+5].content.$t,images:c};m.rooms.push(r)}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/6/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n+=5)if(n>4){var a=e[n+3].content.$t,o=null!==a?a.split(","):null,i=e[n+4].content.$t,s=null!==i?i.split(","):null,c=s.map((function(t){return{url:m.host+"img/"+t}})),l=o.map((function(t){return{title:t}})),r={abbreviation:e[n].content.$t,title:e[n+1].content.$t,description:e[n+2].content.$t,inclusions:l,images:c};m.restaurants.push(r)}})),f.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/7/public/values?alt=json",(function(t){for(var e=t.feed.entry,n=0;n<e.length;n++)if(n>1){var a=e[n].content.$t,o={url:m.host+"img/"+a};m.gallery.push(o)}}))}}},Rt=Qt,Kt=(n("b8ac"),Object(_["a"])(Rt,s,c,!1,null,"090a643e",null)),qt=Kt.exports,Dt={name:"App",components:{Home:qt}},Wt=Dt,Yt=(n("5c0b"),Object(_["a"])(Wt,o,i,!1,null,null,null)),Ht=Yt.exports,Ut=n("8c4f");a["a"].use(Ut["a"]);var Vt=new Ut["a"]({routes:[{path:"/",name:"Home",component:qt}]}),Ft=(n("4989"),n("ab8b"),n("ecee")),Jt=n("ad3d");Ft["c"].add(w["s"]),Ft["c"].add(u["b"]),a["a"].component("font-awesome-icon",Jt["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Vt,mode:"history",render:function(t){return t(Ht)}}).$mount("#app")},"595f":function(t,e,n){},"59c0":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"71a9":function(t,e,n){"use strict";var a=n("59c0"),o=n.n(a);o.a},"79d1":function(t,e,n){},8715:function(t,e,n){"use strict";var a=n("595f"),o=n.n(a);o.a},"8ea1":function(t,e,n){"use strict";var a=n("d6e1"),o=n.n(a);o.a},"8f59":function(t,e,n){},"950b":function(t,e,n){"use strict";var a=n("3e4e"),o=n.n(a);o.a},"9c0c":function(t,e,n){},"9cc4":function(t,e,n){},"9e9c":function(t,e,n){},b8ac:function(t,e,n){"use strict";var a=n("d71d"),o=n.n(a);o.a},c6aa:function(t,e,n){t.exports=n.p+"img/mezzolobby.76a4fb8d.jpg"},d17b:function(t,e,n){},d560:function(t,e,n){},d6e1:function(t,e,n){},d71d:function(t,e,n){},dcb4:function(t,e,n){"use strict";var a=n("8f59"),o=n.n(a);o.a},e273:function(t,e,n){"use strict";var a=n("9e9c"),o=n.n(a);o.a},eff1:function(t,e,n){},f7d2:function(t,e,n){"use strict";var a=n("3c57"),o=n.n(a);o.a}});
//# sourceMappingURL=app.fd4b9e80.js.map