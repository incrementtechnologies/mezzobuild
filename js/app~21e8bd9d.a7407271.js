(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={"app~21e8bd9d":0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors~14b916ce","chunk-vendors~ac0f77ce","chunk-vendors~82b88a00","chunk-vendors~4dff01e7","chunk-vendors~f0dd280a","chunk-vendors~987e6011","chunk-vendors~4e44fb25","chunk-vendors~00cb062a","chunk-vendors~4b106089","chunk-vendors~fdc6512a","chunk-vendors~205977d4","app~d0ae3f07","app~21833f8f"]),n()})({"05dc":function(t,e,n){"use strict";var a=n("bb1d"),o=n.n(a);o.a},"07cc":function(t,e,n){"use strict";var a=n("8b58"),o=n.n(a);o.a},"0cd8":function(t,e,n){"use strict";var a=n("d560"),o=n.n(a);o.a},"0ddd":function(t,e,n){"use strict";var a=n("6ab7"),o=n.n(a);o.a},"0f34":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length>0?n("div",{staticClass:"img-modal",attrs:{id:t.customId}},[n("div",{staticClass:"img-holder",style:t.getHeight()},[n("font-awesome-icon",{staticClass:"close-icon icon",attrs:{icon:t.faTimesCircle},on:{click:function(e){return t.close()}}}),t.activeIndex>0?n("font-awesome-icon",{staticClass:"icon-prev icon",attrs:{icon:t.faChevronLeft},on:{click:function(e){return t.setPrev()}}}):t._e(),t.activeIndex<t.data.length-1?n("font-awesome-icon",{staticClass:"icon-next icon",attrs:{icon:t.faChevronRight},on:{click:function(e){return t.setNext()}}}):t._e(),n("span",{staticClass:"loading"},[n("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1),n("img",{key:t.activeIndex,staticClass:"image-viewer gallery-image-viewer",attrs:{src:t.data[t.activeIndex].url,id:"image-view"}}),"order_now"===t.data[t.activeIndex].type?n("div",{key:"a"+t.activeIndex,staticClass:"actions"},[n("span",{staticClass:"text"},[n("label",{staticClass:"title pull-left"},[n("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),n("button",{staticClass:"btn btn-warning pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("ORDER NOW")])]):t._e()],1)]):t._e()},o=[],i=n("1157"),s=n.n(i),c=n("c074"),r={mounted:function(){this.onLoaded()},data:function(){return{activeIndex:0,faTimesCircle:c["y"],faChevronLeft:c["e"],faChevronRight:c["f"],loading:!0,faCircleNotch:c["l"]}},props:["propStyle","data","customId"],methods:{close:function(){this.activeIndex=0,s()("#"+this.customId).css({display:"none"})},getHeight:function(){var t=s()(window).height(),e=s()(window).width();if(e>t){var n=parseInt(t-.05*t);return{height:n+"px !important",width:n+"px !important",top:parseInt(t-.975*t)+"px !important",left:parseInt((e-n)/2)+"px"}}var a=parseInt(e-.1*e);return{height:a+"px !important",width:a+"px !important",left:parseInt(.05*e)+"px !important",top:parseInt((t-a)/2)+"px"}},setLoading:function(t){s()(".loading").css({display:t})},setNext:function(){this.activeIndex++,this.onLoaded()},setPrev:function(){this.activeIndex--,this.onLoaded()},onLoaded:function(){this.setLoading("block"),s()("#image-view").on("load",(function(){s()(".loading").css({display:"none"})})),s()("#image-view").on("error",(function(){s()(".loading").css({display:"block"})}))},redirectExternal:function(t){window.open(t,"_BLANK")},setImage:function(t){this.activeIndex=t,s()("#"+this.customId).css({display:"block"})}}},l=r,u=(n("acc3"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,"75a0d4bc",null);e["a"]=d.exports},"13cf":function(t,e,n){"use strict";var a=n("29a9"),o=n.n(a);o.a},2178:function(t,e,n){},"296f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"holder"},[n("img",{attrs:{src:t.common.api+"logo.png"}})])])},o=[],i=n("69d9"),s={mounted:function(){},data:function(){return{common:i["a"]}},methods:{}},c=s,r=(n("0cd8"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,"de58f596",null);e["a"]=l.exports},"29a9":function(t,e,n){},"29e6":function(t,e,n){},"2d49":function(t,e,n){"use strict";var a=n("2178"),o=n.n(a);o.a},"451a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("logo",{staticClass:"logo"}),n("ul",[n("li",[n("b",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"tel:"+t.common.APP_PHONE_NUMBER},on:{click:function(e){return t.contact("Click phone number")}}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faPhoneAlt}}),t._v(" "+t._s(t.common.APP_PHONE_NUMBER)+" ")],1)])]),n("li",[n("span",{staticClass:"action-link",on:{click:function(e){return t.showModal()}}},[n("b",[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faMapMarker}}),t._v(" "+t._s(t.common.address)+" ")],1)])]),n("li",[n("span",[n("b",[n("a",{staticStyle:{color:"#fff"},attrs:{href:"mailto:"+t.common.APP_EMAIL+"?Subject=INQUIRE",target:"_top"},on:{click:function(e){return t.contact("Click email")}}},[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faEnvelope}}),t._v(" "+t._s(t.common.APP_EMAIL)+" ")],1)])])])]),n("span",{staticClass:"menus"},[t._l(t.menus,(function(e,a){return n("span",{key:a,staticClass:"menu-holder"},[n("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._l(e.subMenu,(function(e,a){return n("span",{key:a,staticClass:"item action-link",on:{click:function(n){return t.redirect(e)}}},[t._v(" "+t._s(e.title)+" ")])}))],2)})),n("span",{staticClass:"menu-holder subscribe"},[n("subscribe")],1)],2),n("span",{staticClass:"footer-content"},[n("Certificate")],1),n("span",{staticClass:"copyright"},[n("label",[n("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faCopyright}}),t._v(" "+t._s(t.common.APP_COPYRIGHT)+". All rights reserved. ")],1)])],1),n("GoogleMapModal",{ref:"mapModal",attrs:{place_data:t.places,propStyle:t.propStyle}})],1)},o=[],i=n("69d9"),s=n("a18c"),c=n("296f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"image-holder"},[n("img",{attrs:{src:t.common.certificate}})])])},l=[],u={mounted:function(){},data:function(){return{common:i["a"]}},methods:{}},d=u,m=(n("07cc"),n("2877")),p=Object(m["a"])(d,r,l,!1,null,"155dadd8",null),f=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!1===t.successFlag?n("div",{staticClass:"form-container"},[t._m(0),null!==t.errorMessage?n("label",{staticClass:"text-danger",staticStyle:{width:"100%","padding-left":"10px"}},[n("b",[t._v(t._s(t.errorMessage))])]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.subscribe()}}},[t._v("SUBSCRIBE")])]):n("div",{staticClass:"form-container"},[n("h2",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px"}},[t._v("Thank you for subscribing!")])])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-white"},[n("b",[t._v("Want to know more about our latest offers?")])])}],g=n("1157"),b=n.n(g),_={mounted:function(){},data:function(){return{common:i["a"],email:null,errorMessage:null,successFlag:!1}},components:{},methods:{validateEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/,n=/\s/;return!n.test(t)&&!1!==e.test(t)},subscribe:function(){var t=this;null!==this.email&&""!==this.email?!1!==this.validateEmail(this.email)?(b.a.ajaxSetup({headers:{"Access-Control-Allow-Origin":"*"}}),b.a.get(this.common.host+"php/mailchimp.php?email="+this.email,(function(){t.email=null,t.errorMessage=null,t.successFlag=!0}))):this.errorMessage="Invalid e-mail address":this.errorMessage="Please enter your e-mail address."}}},y=_,C=(n("0ddd"),Object(m["a"])(y,h,v,!1,null,"74127e3c",null)),w=C.exports,x=n("c074"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"mapmodal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-full",attrs:{role:"document"}},[n("div",{staticClass:"modal-content",style:t.propStyle},[n("div",{staticClass:"modal-header bg-warning"},[n("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Map Viewer")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hideModal()}}},[n("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"modal-body",attrs:{id:"result"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 col-lg-12"},[n("div",{ref:"map",attrs:{id:"map"}})])])])])])])])},M=[],P=(n("99af"),n("4160"),n("d81d"),n("a9e3"),n("159b"),{props:["place_data","propStyle"],data:function(){return{map:null}},components:{},methods:{showModal:function(){b()("#mapmodal").modal("show")},hideModal:function(){b()("#mapmodal").modal("hide")},getMap:function(t){var e=this;function n(){e.map?t(e.map):setTimeout(n,200)}n()}},mounted:function(){var t=this;this.map=new window.google.maps.Map(this.$refs["map"],{center:{lat:Number(this.place_data[0].latitude),lng:Number(this.place_data[0].longitude)},zoom:15}),this.place_data.forEach((function(e){var n=new window.google.maps.InfoWindow({content:"<b>".concat(e.route,", ").concat(e.locality,", ").concat(e.country,"</b>")}),a=new window.google.maps.Marker({position:{lat:Number(e.latitude),lng:Number(e.longitude)},map:t.map,icon:{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}});a.addListener("click",(function(){n.open(this.map,a)}))}))}}),$=P,E=(n("4aa8"),Object(m["a"])($,k,M,!1,null,"2994eca7",null)),I=E.exports,S={mounted:function(){},data:function(){return{common:i["a"],faCopyright:x["o"],faEnvelope:x["p"],faMapMarker:x["q"],faPhoneAlt:x["r"],places:[{longitude:123.913968,latitude:10.321886,route:"Mezzo Hotel",locality:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",country:"Philippines"}],propStyle:{"margin-top":"10vh !important;"},menus:[{title:"Mezzo",subMenu:[{title:"Home",type:"scroll",route:"#top-view"}]},{title:"Links",subMenu:[{title:"Privacy Notice",type:"redirect",route:"/privacy-policy"},{title:"Inquiry Form",type:"inquire",route:"#packages"},{title:"Press Room",type:"redirect",route:"/press-room"}]}]}},components:{Logo:c["a"],GoogleMapModal:I,Subscribe:w,Certificate:f},props:["property"],methods:{openExternal:function(t){window.open(t,"_BLANK")},showModal:function(){this.$analytics.fbq.event("FindLocation",{content_name:"Checking location"}),this.$refs.mapModal.showModal()},contact:function(t){this.$analytics.fbq.event("Contact",{content_name:t})},redirect:function(t){switch(t.type){case"scroll":"scroll"===this.property?this.$parent.scrollToByParams(t.route):s["a"].push("/");break;case"modal":"scroll"===this.property?b()(t.route).modal("show"):s["a"].push("/");break;case"inquire":this.$analytics.fbq.event("ViewContent",{content_name:"General Inquiry"}),this.$parent.onGroupBooking("others","General Inquiry");break;case"redirect":window.scrollTo(0,0),s["a"].push(t.route);break}}}},A=S,O=(n("9d33"),Object(m["a"])(A,a,o,!1,null,"e4896f68",null));e["a"]=O.exports},"4aa8":function(t,e,n){"use strict";var a=n("d0b7"),o=n.n(a);o.a},6953:function(t,e,n){"use strict";var a=n("29e6"),o=n.n(a);o.a},"6ab7":function(t,e,n){},7826:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!1===t.successFlag?n("div",{staticClass:"form-container"},[n("h4",{staticClass:"text-primary"},[t._v("Want to know more about our latest offers?")]),null!==t.errorMessage?n("label",{staticClass:"text-danger",staticStyle:{width:"100%","padding-left":"10px"}},[n("b",[t._v(t._s(t.errorMessage))])]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.subscribe()}}},[t._v("SUBSCRIBE")])]):n("div",{staticClass:"form-container"},[n("h2",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px","line-height":"50px"}},[t._v("Thank you for subscribing!")])])])},o=[],i=n("69d9"),s=n("1157"),c=n.n(s),r={mounted:function(){},data:function(){return{common:i["a"],email:null,errorMessage:null,successFlag:!1}},components:{},methods:{validateEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/,n=/\s/;return!n.test(t)&&!1!==e.test(t)},subscribe:function(){var t=this;null!==this.email&&""!==this.email?!1!==this.validateEmail(this.email)?(c.a.ajaxSetup({headers:{"Access-Control-Allow-Origin":"*"}}),c.a.get(this.common.host+"php/mailchimp.php?email="+this.email,(function(){t.$analytics.fbq.event("Subscribe",{content_name:t.email+" is subscribing"}),t.email=null,t.errorMessage=null,t.successFlag=!0}))):this.errorMessage="Invalid e-mail address":this.errorMessage="Please enter your e-mail address."}}},l=r,u=(n("13cf"),n("2877")),d=Object(u["a"])(l,a,o,!1,null,"5ccb80cc",null);e["a"]=d.exports},8556:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",attrs:{id:"home"}},[n("img",{staticClass:"mobile-menu-icon",staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}}),n("logo",{staticClass:"hide-on-mobile"}),n("font-awesome-icon",{staticClass:"mobile-menu-icon",attrs:{icon:!1===t.flag?t.faBars:t.faTimes},on:{click:function(e){return t.toggle()}}}),n("ul",{staticClass:"mobile-menu"},t._l(t.common.menus,(function(e,a){return n("li",{key:a,class:{"active-menu":t.common.activeMenu===e.redirect},attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(n){return t.scrollTo(e.redirect)}}},[n("a",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"}},[t._v(t._s(e.title))])])})),0),n("div",{staticClass:"menu"},[n("ul",[n("li",{staticClass:"view-on-scroll",on:{click:function(e){return t.scrollTo("#top-view")}}},[n("img",{staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}})]),t._l(t.common.menus,(function(e,a){return n("li",{key:a,staticClass:"basic-menu",class:{"active-menu":t.common.activeMenu===e.redirect},on:{click:function(n){return t.scrollTo(e.redirect)}}},[t._v(t._s(e.title))])}))],2),n("span",{staticClass:"social-icons-holder"},t._l(t.common.socialIcons,(function(e,a){return n("font-awesome-icon",{key:a,staticClass:"social-icons",attrs:{icon:e.icon},on:{click:function(n){return t.openExternalSites(e.url)}}})})),1),n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.openExternal(t.common.booking_link,!1)}}},[t._v("BOOK A ROOM")])])],1)},o=[],i=n("69d9"),s=n("1157"),c=n.n(s),r=n("296f"),l=n("c074"),u=n("1d3d"),d={mounted:function(){},data:function(){return{common:i["a"],faBars:l["c"],faTimes:l["x"],flag:!1}},components:{Logo:r["a"]},methods:{scrollTo:function(t){this.$analytics.fbq.event("ViewContent",{content_name:t}),i["a"].setLoad(t),this.common.activeMenu=t,setTimeout((function(){var e=c()(window).height();c()("html, body").animate({scrollTop:c()(t).offset().top-parseInt(.07*e)},400)}),100),this.flag=!1,c()(".mobile-menu").css({display:"none"})},openExternal:function(t,e){0==e?u["a"].methods.inquireRoom(null):(this.$analytics.fbq.event("InitialCheckout",{content_name:"Direct Booking"}),window.open(t,"_BLANK"))},openExternalSites:function(t){this.$analytics.fbq.event("ViewContent",{content_name:t}),window.open(t,"_BLANK")},toggle:function(){!1===this.flag?(this.flag=!0,c()(".mobile-menu").css({display:"block"})):(this.flag=!1,c()(".mobile-menu").css({display:"none"}))}}},m=d,p=(n("6953"),n("2877")),f=Object(p["a"])(m,a,o,!1,null,"045aa890",null);e["a"]=f.exports},"8b58":function(t,e,n){},"9d33":function(t,e,n){"use strict";var a=n("9d8a"),o=n.n(a);o.a},"9d8a":function(t,e,n){},a46b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!==t.selected&&void 0!==t.selected?n("div",[n("span",{staticClass:"page-holder"},[n("logo",{staticClass:"hide-on-mobile"})],1),n("span",[n("div",{staticClass:"blog-tiles"},[n("p",[n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")]),n("button",{staticClass:"btn btn-warning",staticStyle:{"margin-left":"10px","margin-right":"10px"},on:{click:function(e){return t.redirect("/press-room")}}},[t._v("Press Room")]),t._v(" "+t._s(t.selected.title)+" ")]),n("span",{staticClass:"blog-item"},["internal"===t.selected.type?n("span",{staticClass:"image-holder"},[n("img",{attrs:{src:t.selected.image}})]):t._e(),"internal_video"===t.selected.type?n("span",{staticClass:"video-holder",domProps:{innerHTML:t._s(t.selected.image)}}):t._e(),n("span",{staticClass:"details"},[n("h3",{staticStyle:{"margin-top":"25px"}},[t._v(" "+t._s(t.selected.title)+" ")]),t._v(" Published by "),n("b",[t._v(t._s(t.selected.author))]),t._v(" on "+t._s(t.selected.date)+" "),n("br"),n("label",{domProps:{innerHTML:t._s(t.selected.content)}})])])])]),n("MyFooter",{attrs:{property:"redirect"}})],1):!0===t.loading?n("span",{staticClass:"loading text-center"},[n("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1):n("NotFound")},o=[],i=(n("4de4"),n("caad"),n("a15b"),n("ac1f"),n("2532"),n("1276"),n("69d9")),s=n("296f"),c=n("451a"),r=n("f5de"),l=n("c074"),u=n("a18c"),d=n("1157"),m=n.n(d),p={mounted:function(){i["a"].getBasic(),this.getBlog()},data:function(){return{common:i["a"],loading:!1,faCircleNotch:l["l"],selected:null}},components:{Logo:s["a"],MyFooter:c["a"],NotFound:r["a"]},methods:{redirect:function(t){u["a"].push(t)},getBlog:function(){var t=this;this.loading=!0,this.$analytics.fbq.event("ViewContent",{content_name:this.$route.params.title.split("_").join(" ")}),m.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json",(function(e){for(var n=e.feed.entry,a=0;a<n.length;a+=7)if(a>6){var o={type:n[a].content.$t,title:n[a+1].content.$t,image:"internal_video"===n[a].content.$t?n[a+2].content.$t:t.common.host+"img/"+n[a+2].content.$t,date:n[a+3].content.$t,author:n[a+4].content.$t,introduction:n[a+5].content.$t,content:n[a+6].content.$t};if(o.title.includes(t.$route.params.title.split("_").join(" "))){t.selected=o,t.loading=!1;break}}t.loading=!1}))},manageSearch:function(){var t=this,e=i["a"].blogs;i["a"].blogs.length>0&&(e=i["a"].blogs.filter((function(e){return e.title.includes(t.$route.params.title.split("_").join(" "))}))),this.selected=e?e[0]:null,this.loading=!1}}},f=p,h=(n("2d49"),n("2877")),v=Object(h["a"])(f,a,o,!1,null,"d3ffe504",null);e["a"]=v.exports},aac2:function(t,e,n){},acc3:function(t,e,n){"use strict";var a=n("aac2"),o=n.n(a);o.a},bb1d:function(t,e,n){},cf42:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-view"}},[n("span",{staticClass:"page-holder"},[n("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),n("div",{staticClass:"blog-tiles"},[n("p",[n("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")])]),t._l(t.common.blogs,(function(e,a){return n("span",{key:a,staticClass:"blog-item",on:{click:function(n){return t.checkRoute(e)}}},["internal_video"!==e.type?n("span",{staticClass:"image-holder"},[n("img",{attrs:{src:e.image}})]):t._e(),"internal_video"===e.type?n("span",{staticClass:"image-holder"},[n("span",{domProps:{innerHTML:t._s(e.image)}})]):t._e(),n("span",{staticClass:"details"},[n("h3",[t._v(" "+t._s(e.title)+" ")]),t._v(" Published by "),n("b",[t._v(t._s(e.author))]),t._v(" on "+t._s(e.date)+" "),n("br"),n("label",{domProps:{innerHTML:t._s(e.introduction)}})])])}))],2),n("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"page-details text-center"},[n("p",{staticClass:"text-white display-4"},[t._v(" Press Room ")])])}],i=(n("a15b"),n("ac1f"),n("1276"),n("69d9")),s=n("296f"),c=n("a18c"),r=n("451a"),l=n("1157"),u=n.n(l),d={mounted:function(){this.retrieve()},data:function(){return{common:i["a"]}},components:{Logo:s["a"],MyFooter:r["a"]},methods:{redirect:function(t){u()("html, body").animate({scrollTop:u()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){i["a"].getBlog(),i["a"].getBasic()},checkRoute:function(t){"external"===t.type?(this.$analytics.fbq.event("ViewContent",{content_name:t.title}),window.open(t.content)):this.redirect("/press-room/page/"+t.title.split(" ").join("_"))}}},m=d,p=(n("05dc"),n("2877")),f=Object(p["a"])(m,a,o,!1,null,"3fb89051",null);e["a"]=f.exports},d0b7:function(t,e,n){},d37d:function(t,e,n){"use strict";var a=n("fb56"),o=n.n(a);o.a},d560:function(t,e,n){},f5de:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-view"}},[n("span",{staticClass:"page-holder"},[n("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),n("div",{staticClass:"blog-tiles"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"text-center text-danger"},[n("font-awesome-icon",{staticClass:"plus-icon",attrs:{icon:t.faSadTear}})],1),n("h1",{staticClass:"text-center"},[t._v(" Page not found. ")])])]),n("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"page-details text-center"},[n("p",{staticClass:"text-white display-4"},[t._v(" Error 404 ")])])}],i=n("69d9"),s=n("296f"),c=n("a18c"),r=n("451a"),l=n("1157"),u=n.n(l),d=n("c074"),m={mounted:function(){this.retrieve()},data:function(){return{common:i["a"],faSadTear:d["u"]}},components:{Logo:s["a"],MyFooter:r["a"]},methods:{redirect:function(t){u()("html, body").animate({scrollTop:u()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){i["a"].getBasic()}}},p=m,f=(n("d37d"),n("2877")),h=Object(f["a"])(p,a,o,!1,null,"6a05b85e",null);e["a"]=h.exports},fb56:function(t,e,n){}});
//# sourceMappingURL=app~21e8bd9d.a7407271.js.map