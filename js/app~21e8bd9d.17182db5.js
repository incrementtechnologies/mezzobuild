(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~21e8bd9d"],{"017b":function(t,e,a){"use strict";var n=a("c192"),o=a.n(n);o.a},"0480":function(t,e,a){"use strict";var n=a("0b2b"),o=a.n(n);o.a},"05cf":function(t,e,a){"use strict";var n=a("af42"),o=a.n(n);o.a},"0ae0":function(t,e,a){},"0b2b":function(t,e,a){},"0f34":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data.length>0?a("div",{staticClass:"img-modal",attrs:{id:t.customId}},[a("div",{staticClass:"img-holder",style:t.getHeight()},[a("font-awesome-icon",{staticClass:"close-icon icon",attrs:{icon:t.faTimesCircle},on:{click:function(e){return t.close()}}}),t.activeIndex>0?a("font-awesome-icon",{staticClass:"icon-prev icon",attrs:{icon:t.faChevronLeft},on:{click:function(e){return t.setPrev()}}}):t._e(),t.activeIndex<t.data.length-1?a("font-awesome-icon",{staticClass:"icon-next icon",attrs:{icon:t.faChevronRight},on:{click:function(e){return t.setNext()}}}):t._e(),a("span",{staticClass:"loading"},[a("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1),a("img",{key:t.activeIndex,staticClass:"image-viewer gallery-image-viewer",attrs:{src:t.data[t.activeIndex].url,id:"image-view"}}),"order_now"===t.data[t.activeIndex].type?a("div",{key:"a"+t.activeIndex,staticClass:"actions"},[a("span",{staticClass:"text"},[a("label",{staticClass:"title pull-left"},[a("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),a("button",{staticClass:"btn btn-warning pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("ORDER NOW")])]):t._e(),"redirect_link"===t.data[t.activeIndex].type?a("div",{key:"a"+t.activeIndex,staticClass:"actions actions-secondary"},[a("span",{staticClass:"text"},[a("label",{staticClass:"title pull-left"},[a("b",[t._v(t._s(t.data[t.activeIndex].text))])])]),a("button",{staticClass:"btn btn-primary pull-right",on:{click:function(e){return t.redirectExternal(t.data[t.activeIndex].link)}}},[t._v("PURCHASE NOW")])]):t._e()],1)]):t._e()},o=[],i=a("1157"),s=a.n(i),c=a("c074"),l={mounted:function(){this.onLoaded()},data:function(){return{activeIndex:0,faTimesCircle:c["y"],faChevronLeft:c["e"],faChevronRight:c["f"],loading:!0,faCircleNotch:c["l"]}},props:["propStyle","data","customId"],methods:{close:function(){this.activeIndex=0,s()("#"+this.customId).css({display:"none"})},getHeight:function(){var t=s()(window).height(),e=s()(window).width();if(e>t){var a=parseInt(t-.05*t);return{height:a+"px !important",width:a+"px !important",top:parseInt(t-.975*t)+"px !important",left:parseInt((e-a)/2)+"px"}}var n=parseInt(e-.1*e);return{height:n+"px !important",width:n+"px !important",left:parseInt(.05*e)+"px !important",top:parseInt((t-n)/2)+"px"}},setLoading:function(t){s()(".loading").css({display:t})},setNext:function(){this.activeIndex++,this.onLoaded()},setPrev:function(){this.activeIndex--,this.onLoaded()},onLoaded:function(){this.setLoading("block"),s()("#image-view").on("load",(function(){s()(".loading").css({display:"none"})})),s()("#image-view").on("error",(function(){s()(".loading").css({display:"block"})}))},redirectExternal:function(t){window.open(t,"_BLANK")},setImage:function(t){this.activeIndex=t,s()("#"+this.customId).css({display:"block"})}}},r=l,d=(a("017b"),a("2877")),u=Object(d["a"])(r,n,o,!1,null,"41b63c9e",null);e["a"]=u.exports},"1f81":function(t,e,a){"use strict";var n=a("82cd"),o=a.n(n);o.a},"296f":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"holder"},[a("img",{attrs:{src:t.common.api+"logo.png"}})])])},o=[],i=a("69d9"),s={mounted:function(){},data:function(){return{common:i["a"]}},methods:{}},c=s,l=(a("0480"),a("2877")),r=Object(l["a"])(c,n,o,!1,null,"e3073bb2",null);e["a"]=r.exports},"451a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"footer"},[a("logo",{staticClass:"logo"}),a("ul",[a("li",[a("b",[a("a",{staticStyle:{color:"#fff"},attrs:{href:"tel:"+t.common.APP_PHONE_NUMBER},on:{click:function(e){return t.contact("Click phone number")}}},[a("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faPhoneAlt}}),t._v(" "+t._s(t.common.APP_PHONE_NUMBER)+" ")],1)])]),a("li",[a("span",{staticClass:"action-link",on:{click:function(e){return t.showModal()}}},[a("b",[a("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faMapMarker}}),t._v(" "+t._s(t.common.address)+" ")],1)])]),a("li",[a("span",[a("b",[a("a",{staticStyle:{color:"#fff"},attrs:{href:"mailto:"+t.common.APP_EMAIL+"?Subject=INQUIRE",target:"_top"},on:{click:function(e){return t.contact("Click email")}}},[a("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faEnvelope}}),t._v(" "+t._s(t.common.APP_EMAIL)+" ")],1)])])])]),a("span",{staticClass:"menus"},[t._l(t.menus,(function(e,n){return a("span",{key:n,staticClass:"menu-holder"},[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._l(e.subMenu,(function(e,n){return a("span",{key:n,staticClass:"item action-link",on:{click:function(a){return t.redirect(e)}}},[t._v(" "+t._s(e.title)+" ")])}))],2)})),a("span",{staticClass:"menu-holder subscribe"},[a("subscribe")],1)],2),a("span",{staticClass:"footer-content"},[a("Certificate")],1),a("span",{staticClass:"copyright"},[a("label",[a("font-awesome-icon",{staticClass:"social-icons",attrs:{icon:t.faCopyright}}),t._v(" "+t._s(t.common.APP_COPYRIGHT)+". All rights reserved. ")],1)])],1),a("GoogleMapModal",{ref:"mapModal",attrs:{place_data:t.places,propStyle:t.propStyle}})],1)},o=[],i=a("69d9"),s=a("a18c"),c=a("296f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"image-holder"},[n("img",{attrs:{src:a("7cde")}}),n("img",{attrs:{src:a("8ace")}}),n("img",{attrs:{src:a("f9cd")}}),n("img",{attrs:{src:a("ed7d")}}),n("img",{attrs:{src:a("e542")}})])])},r=[],d={mounted:function(){},data:function(){return{common:i["a"]}},methods:{}},u=d,m=(a("c28e"),a("2877")),p=Object(m["a"])(u,l,r,!1,null,"c9b8d208",null),f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!1===t.successFlag?a("div",{staticClass:"form-container"},[t._m(0),null!==t.errorMessage?a("label",{staticClass:"text-danger",staticStyle:{width:"100%","padding-left":"10px"}},[a("b",[t._v(t._s(t.errorMessage))])]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your e-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.subscribe()}}},[t._v("SUBSCRIBE")])]):a("div",{staticClass:"form-container"},[a("h2",{staticClass:"text-primary",staticStyle:{"margin-bottom":"25px"}},[t._v("Thank you for subscribing!")])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-white"},[a("b",[t._v("Want to know more about our latest offers?")])])}],v=a("1157"),b=a.n(v),_={mounted:function(){},data:function(){return{common:i["a"],email:null,errorMessage:null,successFlag:!1}},components:{},methods:{validateEmail:function(t){var e=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/,a=/\s/;return!a.test(t)&&!1!==e.test(t)},subscribe:function(){var t=this;null!==this.email&&""!==this.email?!1!==this.validateEmail(this.email)?(b.a.ajaxSetup({headers:{"Access-Control-Allow-Origin":"*"}}),b.a.get(this.common.host+"php/mailchimp.php?email="+this.email,(function(){t.email=null,t.errorMessage=null,t.successFlag=!0}))):this.errorMessage="Invalid e-mail address":this.errorMessage="Please enter your e-mail address."}}},C=_,y=(a("5d17"),Object(m["a"])(C,h,g,!1,null,"17923759",null)),w=y.exports,x=a("c074"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"mapmodal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-full",attrs:{role:"document"}},[a("div",{staticClass:"modal-content",style:t.propStyle},[a("div",{staticClass:"modal-header bg-warning"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Map Viewer")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hideModal()}}},[a("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body",attrs:{id:"result"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-lg-12"},[a("div",{ref:"map",attrs:{id:"map"}})])])])])])])])},M=[],I=(a("99af"),a("4160"),a("d81d"),a("a9e3"),a("159b"),{props:["place_data","propStyle"],data:function(){return{map:null}},components:{},methods:{showModal:function(){b()("#mapmodal").modal("show")},hideModal:function(){b()("#mapmodal").modal("hide")},getMap:function(t){var e=this;function a(){e.map?t(e.map):setTimeout(a,200)}a()}},mounted:function(){var t=this;this.map=new window.google.maps.Map(this.$refs["map"],{center:{lat:Number(this.place_data[0].latitude),lng:Number(this.place_data[0].longitude)},zoom:15}),this.place_data.forEach((function(e){var a=new window.google.maps.InfoWindow({content:"<b>".concat(e.route,", ").concat(e.locality,", ").concat(e.country,"</b>")}),n=new window.google.maps.Marker({position:{lat:Number(e.latitude),lng:Number(e.longitude)},map:t.map,icon:{url:"https://maps.google.com/mapfiles/ms/icons/red-dot.png"}});n.addListener("click",(function(){a.open(this.map,n)}))}))}}),P=I,$=(a("1f81"),Object(m["a"])(P,k,M,!1,null,"1f787dd6",null)),E=$.exports,N={mounted:function(){},data:function(){return{common:i["a"],faCopyright:x["o"],faEnvelope:x["p"],faMapMarker:x["q"],faPhoneAlt:x["r"],places:[{longitude:123.913968,latitude:10.321886,route:"Mezzo Hotel",locality:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",country:"Philippines"}],propStyle:{"margin-top":"10vh !important;"},menus:[{title:"Mezzo",subMenu:[{title:"Home",type:"scroll",route:"#top-view"}]},{title:"Links",subMenu:[{title:"Privacy Notice",type:"redirect",route:"/privacy-policy"},{title:"Inquiry Form",type:"inquire",route:"#packages"},{title:"Press Room",type:"redirect",route:"/press-room"}]}]}},components:{Logo:c["a"],GoogleMapModal:E,Subscribe:w,Certificate:f},props:["property"],methods:{openExternal:function(t){window.open(t,"_BLANK")},showModal:function(){this.$analytics.fbq.event("FindLocation",{content_name:"Checking location"}),this.$refs.mapModal.showModal()},contact:function(t){this.$analytics.fbq.event("Contact",{content_name:t})},redirect:function(t){switch(t.type){case"scroll":"scroll"===this.property?this.$parent.scrollToByParams(t.route):s["a"].push("/");break;case"modal":"scroll"===this.property?b()(t.route).modal("show"):s["a"].push("/");break;case"inquire":this.$analytics.fbq.event("ViewContent",{content_name:"General Inquiry"}),this.$parent.onGroupBooking("others","General Inquiry");break;case"redirect":window.scrollTo(0,0),s["a"].push(t.route);break}}}},S=N,L=(a("bd5e"),Object(m["a"])(S,n,o,!1,null,"9dfa18ac",null));e["a"]=L.exports},"4d71":function(t,e,a){},"4dfd":function(t,e,a){},"5d17":function(t,e,a){"use strict";var n=a("c420"),o=a.n(n);o.a},"82cd":function(t,e,a){},8556:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{id:"home"}},[a("img",{staticClass:"mobile-menu-icon",staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}}),a("logo",{staticClass:"hide-on-mobile"}),a("font-awesome-icon",{staticClass:"mobile-menu-icon",attrs:{icon:!1===t.flag?t.faBars:t.faTimes},on:{click:function(e){return t.toggle()}}}),a("ul",{staticClass:"mobile-menu"},[t._l(t.common.menus,(function(e,n){return a("li",{key:n,class:{"active-menu":t.common.activeMenu===e.redirect},attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(a){return t.scrollTo(e.redirect)}}},[a("a",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"}},[t._v(t._s(e.title))])])})),a("li",{staticClass:"safe-menu",attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(e){return t.redirect("/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols")}}},[a("a",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"}},[t._v("Safety Protocol")])])],2),a("div",{staticClass:"menu"},[a("ul",[a("li",{staticClass:"view-on-scroll",on:{click:function(e){return t.scrollTo("#top-view")}}},[a("img",{staticStyle:{height:"6vh",width:"auto",left:"10px",top:"2vh"},attrs:{src:t.common.api+"logo.png"}})]),t._l(t.common.menus,(function(e,n){return a("li",{key:n,staticClass:"basic-menu",class:{"active-menu":t.common.activeMenu===e.redirect},on:{click:function(a){return t.scrollTo(e.redirect)}}},[t._v(t._s(e.title))])})),a("li",{attrs:{"data-toggle":"collapse","data-target":"#myNavbar"},on:{click:function(e){return t.redirect("/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols")}}},[t._v("Safety Protocol")])],2),a("span",{staticClass:"social-icons-holder"},t._l(t.common.socialIcons,(function(e,n){return a("font-awesome-icon",{key:n,staticClass:"social-icons",attrs:{icon:e.icon},on:{click:function(a){return t.openExternalSites(e.url)}}})})),1),a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.openExternal(t.common.booking_link,!1)}}},[t._v("BOOK A ROOM")])])],1)},o=[],i=a("69d9"),s=a("a18c"),c=a("1157"),l=a.n(c),r=a("296f"),d=a("c074"),u=a("1d3d"),m={mounted:function(){},data:function(){return{common:i["a"],faBars:d["c"],faTimes:d["x"],flag:!1}},components:{Logo:r["a"]},methods:{redirect:function(t){s["a"].push(t)},scrollTo:function(t){this.$analytics.fbq.event("ViewContent",{content_name:t}),i["a"].setLoad(t),this.common.activeMenu=t,setTimeout((function(){var e=l()(window).height();l()("html, body").animate({scrollTop:l()(t).offset().top-parseInt(.07*e)},400)}),100),this.flag=!1,l()(".mobile-menu").css({display:"none"})},openExternal:function(t,e){0==e?u["a"].methods.inquireRoom(null):(this.$analytics.fbq.event("InitialCheckout",{content_name:"Direct Booking"}),window.open(t,"_BLANK"))},openExternalSites:function(t){this.$analytics.fbq.event("ViewContent",{content_name:t}),window.open(t,"_BLANK")},toggle:function(){!1===this.flag?(this.flag=!0,l()(".mobile-menu").css({display:"block"})):(this.flag=!1,l()(".mobile-menu").css({display:"none"}))}}},p=m,f=(a("05cf"),a("2877")),h=Object(f["a"])(p,n,o,!1,null,"1a610448",null);e["a"]=h.exports},"8bd6":function(t,e,a){},a46b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.selected&&void 0!==t.selected?a("div",[a("span",{staticClass:"page-holder"},[a("logo",{staticClass:"hide-on-mobile"})],1),a("span",[a("div",{staticClass:"blog-tiles"},[a("p",[a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")]),a("button",{staticClass:"btn btn-warning",staticStyle:{"margin-left":"10px","margin-right":"10px"},on:{click:function(e){return t.redirect("/press-room")}}},[t._v("Press Room")]),t._v(" "+t._s(t.selected.title)+" ")]),a("span",{staticClass:"blog-item"},["internal"===t.selected.type?a("span",{staticClass:"image-holder"},[a("img",{attrs:{src:t.selected.image}})]):t._e(),"internal_video"===t.selected.type?a("span",{staticClass:"video-holder",domProps:{innerHTML:t._s(t.selected.image)}}):t._e(),a("span",{staticClass:"details"},[a("h3",{staticStyle:{"margin-top":"25px"}},[t._v(" "+t._s(t.selected.title)+" ")]),t._v(" Published by "),a("b",[t._v(t._s(t.selected.author))]),t._v(" on "+t._s(t.selected.date)+" "),a("br"),a("label",{domProps:{innerHTML:t._s(t.selected.content)}})])])])]),a("MyFooter",{attrs:{property:"redirect"}})],1):!0===t.loading?a("span",{staticClass:"loading text-center"},[a("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:t.faCircleNotch}})],1):a("NotFound")},o=[],i=(a("4de4"),a("caad"),a("a15b"),a("ac1f"),a("2532"),a("1276"),a("69d9")),s=a("296f"),c=a("451a"),l=a("f5de"),r=a("c074"),d=a("a18c"),u=a("1157"),m=a.n(u),p={mounted:function(){i["a"].getBasic(),this.getBlog()},data:function(){return{common:i["a"],loading:!1,faCircleNotch:r["l"],selected:null}},components:{Logo:s["a"],MyFooter:c["a"],NotFound:l["a"]},methods:{redirect:function(t){d["a"].push(t)},getBlog:function(){var t=this;this.loading=!0,this.$analytics.fbq.event("ViewContent",{content_name:this.$route.params.title.split("_").join(" ")}),m.a.get("https://spreadsheets.google.com/feeds/cells/1luFOWuvQh7PlT5Jy6xY0181qdWsJhhoQt_kQ9YnpKKk/11/public/values?alt=json",(function(e){for(var a=e.feed.entry,n=0;n<a.length;n+=7)if(n>6){var o={type:a[n].content.$t,title:a[n+1].content.$t,image:"internal_video"===a[n].content.$t?a[n+2].content.$t:t.common.host+"img/"+a[n+2].content.$t,date:a[n+3].content.$t,author:a[n+4].content.$t,introduction:a[n+5].content.$t,content:a[n+6].content.$t};if(o.title.includes(t.$route.params.title.split("_").join(" "))){t.selected=o,t.loading=!1;break}}t.loading=!1}))},manageSearch:function(){var t=this,e=i["a"].blogs;i["a"].blogs.length>0&&(e=i["a"].blogs.filter((function(e){return e.title.includes(t.$route.params.title.split("_").join(" "))}))),this.selected=e?e[0]:null,this.loading=!1}}},f=p,h=(a("eb07"),a("2877")),g=Object(h["a"])(f,n,o,!1,null,"2ea67a5a",null);e["a"]=g.exports},af42:function(t,e,a){},bd5e:function(t,e,a){"use strict";var n=a("8bd6"),o=a.n(n);o.a},c192:function(t,e,a){},c28e:function(t,e,a){"use strict";var n=a("f685"),o=a.n(n);o.a},c420:function(t,e,a){},c567:function(t,e,a){"use strict";var n=a("0ae0"),o=a.n(n);o.a},cf42:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"top-view"}},[a("span",{staticClass:"page-holder"},[a("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),a("div",{staticClass:"blog-tiles"},[a("p",[a("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.redirect("/")}}},[t._v("Home")])]),t._l(t.common.blogs,(function(e,n){return a("span",{key:n,staticClass:"blog-item",on:{click:function(a){return t.checkRoute(e)}}},["internal_video"!==e.type?a("span",{staticClass:"image-holder"},[a("img",{attrs:{src:e.image}})]):t._e(),"internal_video"===e.type?a("span",{staticClass:"image-holder"},[a("span",{domProps:{innerHTML:t._s(e.image)}})]):t._e(),a("span",{staticClass:"details"},[a("h3",[t._v(" "+t._s(e.title)+" ")]),t._v(" Published by "),a("b",[t._v(t._s(e.author))]),t._v(" on "+t._s(e.date)+" "),a("br"),a("label",{domProps:{innerHTML:t._s(e.introduction)}})])])}))],2),a("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"page-details text-center"},[a("p",{staticClass:"text-white display-4"},[t._v(" Press Room ")])])}],i=(a("a15b"),a("ac1f"),a("1276"),a("69d9")),s=a("296f"),c=a("a18c"),l=a("451a"),r=a("1157"),d=a.n(r),u={mounted:function(){this.retrieve()},data:function(){return{common:i["a"]}},components:{Logo:s["a"],MyFooter:l["a"]},methods:{redirect:function(t){d()("html, body").animate({scrollTop:d()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){i["a"].getBlog(),i["a"].getBasic()},checkRoute:function(t){"external"===t.type?(this.$analytics.fbq.event("ViewContent",{content_name:t.title}),window.open(t.content)):this.redirect("/press-room/page/"+t.title.split(" ").join("_"))}}},m=u,p=(a("c567"),a("2877")),f=Object(p["a"])(m,n,o,!1,null,"1c2dd65c",null);e["a"]=f.exports},e98d:function(t,e,a){"use strict";var n=a("4d71"),o=a.n(n);o.a},eb07:function(t,e,a){"use strict";var n=a("4dfd"),o=a.n(n);o.a},f5de:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"top-view"}},[a("span",{staticClass:"page-holder"},[a("logo",{staticClass:"hide-on-mobile"}),t._m(0)],1),a("div",{staticClass:"blog-tiles"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"text-center text-danger"},[a("font-awesome-icon",{staticClass:"plus-icon",attrs:{icon:t.faSadTear}})],1),a("h1",{staticClass:"text-center"},[t._v(" Page not found. ")])])]),a("MyFooter",{attrs:{property:"redirect"}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"page-details text-center"},[a("p",{staticClass:"text-white display-4"},[t._v(" Error 404 ")])])}],i=a("69d9"),s=a("296f"),c=a("a18c"),l=a("451a"),r=a("1157"),d=a.n(r),u=a("c074"),m={mounted:function(){this.retrieve()},data:function(){return{common:i["a"],faSadTear:u["u"]}},components:{Logo:s["a"],MyFooter:l["a"]},methods:{redirect:function(t){d()("html, body").animate({scrollTop:d()("#top-view").offset().top},500),c["a"].push(t)},retrieve:function(){i["a"].getBasic()}}},p=m,f=(a("e98d"),a("2877")),h=Object(f["a"])(p,n,o,!1,null,"48d77441",null);e["a"]=h.exports},f685:function(t,e,a){}}]);
//# sourceMappingURL=app~21e8bd9d.17182db5.js.map