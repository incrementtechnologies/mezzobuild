(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~748942c6"],{0:function(e,t){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t,o){e.exports=o("56d7")},2:function(e,t){},3:function(e,t){},3725:function(e,t,o){},"3dfd":function(e,t,o){"use strict";var a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("transition",[t("router-view")],1)],1)},n=[],i={name:"App",components:{}},s=i,r=(o("75ce"),o("2877")),c=Object(r["a"])(s,a,n,!1,null,null,null);t["a"]=c.exports},4:function(e,t){},5:function(e,t){},"55c7":function(e,t,o){e.exports=o.p+"img/TC-Winner-2021.6d7977e0.gif"},6:function(e,t){},"69d9":function(e,t,o){"use strict";var a=o("c7eb"),n=o("1da1"),i=(o("d81d"),o("f2d1")),s=(o("1157"),o("db49"));t["a"]={APP_NAME:"Mezzo Hotel",APP_TAGLINE:"LUXURY HOTEL",APP_EMAIL:"info@mezzohotel.com",APP_MESSENGER:"https://m.me/cafemezzobymezzohotel",APP_COPYRIGHT:"Mezzo Hotel "+(new Date).getFullYear(),APP_DEVELOPER:"Increment Technologies",APP_DEVELOPER_URL:"http://increment.ltd",APP_PHONE_NUMBER:"0912345678",APP_HEADER_BACKGROUND:[{url:o("c6aa")}],APP_HEADER_MOBILE_BACKGROUND:[{url:"https://mezzohotel.com/img/mainm1.png"}],address:"F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu",api:"https://mezzohotel.com/img/",certificate:"https://mezzohotel.com/img/mezzo_iso_light.jpg",host:"https://mezzohotel.com/",booking_link:"https://mezzohotel.com/managebooking.php",socialMedia:{facebook:"https://www.facebook.com/mezzohotelcebu"},socialIcons:[{icon:i["a"],url:"https://www.facebook.com/mezzohotelcebu"},{icon:i["d"],url:"https://twitter.com/hashtag/mezzohotel"},{icon:i["c"],url:"https://www.instagram.com/mezzohotelcebu"}],delay:15e3,menus:[],packages:null,testimonials:[],rooms:[],restaurants:[],faq:[],gallery:[],addOns:[],announcements:[],blogs:[],activeMenu:"#top-view",load:{rooms:!1,inquire:!1,restaurants:!1,testimonials:!1,gallery:!1,faq:!1,protocol:!1,footer:!1},setLoad:function(e){switch(e){case"/press-room/page/Mezzo_Hotel_Health_and_Safety_Protocols":this.load.protocol=!0,this.load.faq=!0,this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#faq":this.load.faq=!0,this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#gallery":this.load.gallery=!0,this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#testimonials":this.load.testimonials=!0,this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#restaurants":this.load.restaurants=!0,this.load.inquire=!0,this.load.rooms=!0;break;case"#packages":this.load.inquire=!0,this.load.rooms=!0;break;case"#rooms":this.load.rooms=!0;break}},getBlog:function(){var e=this;return Object(n["a"])(Object(a["a"])().mark((function t(){var n,i,r,c,l;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.blogs=[],n=o("d340"),i=n.GoogleSpreadsheet,r=new i(s["a"].googleSheetId),t.next=5,r.useServiceAccountAuth({client_email:s["a"].google.client_email,private_key:s["a"].google.private_key});case 5:return t.next=7,r.loadInfo();case 7:return c=r.sheetsByIndex[10],t.next=10,c.getRows();case 10:l=t.sent,e.blogs=l.map((function(t,o){return{type:t.type,title:t.title,image:"internal_video"===t.type?t.featured_image:e.host+"img/"+t.featured_image,date:t.date,author:t.author,introduction:t.introduction,content:t.content}}));case 12:case"end":return t.stop()}}),t)})))()},getBasic:function(){var e=this;return Object(n["a"])(Object(a["a"])().mark((function t(){var n,i,r,c,l;return Object(a["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=o("d340"),i=n.GoogleSpreadsheet,r=new i(s["a"].googleSheetId),t.next=4,r.useServiceAccountAuth({client_email:s["a"].google.client_email,private_key:s["a"].google.private_key});case 4:return t.next=6,r.loadInfo();case 6:return c=r.sheetsByIndex[2],t.next=9,c.getRows();case 9:l=t.sent,l.map((function(t){switch(t.variable){case"app_name":e.APP_NAME=t.value;break;case"app_tagline":e.APP_TAGLINE=t.value;break;case"app_email":e.APP_EMAIL=t.value;break;case"app_phone_number":e.APP_PHONE_NUMBER=t.value;break;case"app_header_background":var o=t.value,a=null!==o?o.split(","):null,n=a.map((function(t){return{url:e.host+"img/"+t}}));e.APP_HEADER_BACKGROUND=n;break;case"app_header_mobile_background":var i=t.value,s=null!==i?i.split(","):null,r=s.map((function(t){return{url:e.host+"img/"+t}}));e.APP_HEADER_MOBILE_BACKGROUND=r;break}}));case 11:case"end":return t.stop()}}),t)})))()}}},"6fc9":function(e,t,o){e.exports=o.p+"img/safe-travels.285fbcff.png"},7:function(e,t){},"75ce":function(e,t,o){"use strict";o("3725")},"7cde":function(e,t,o){e.exports=o.p+"img/recognition-excellence-2019.bb0fe2e7.png"},8:function(e,t){},9:function(e,t){},"9a8f":function(e,t,o){e.exports=o.p+"img/agoda.c8b05cd5.png"},c6aa:function(e,t,o){e.exports=o.p+"img/mezzolobby.76a4fb8d.jpg"},e542:function(e,t,o){e.exports=o.p+"img/safety-seal-covid.ae783788.png"},ed7d:function(e,t,o){e.exports=o.p+"img/travellers-choice-2021.8762d47c.png"},f9cd:function(e,t,o){e.exports=o.p+"img/tuvrheinland.ec753e38.png"}}]);
//# sourceMappingURL=app~748942c6.db277f2d.js.map