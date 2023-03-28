(function(){"use strict";var e={2557:function(e,n,t){var o=t(9242),r=t(3396);function i(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var s=t(89);const c={},a=(0,s.Z)(c,[["render",i]]);var l=a,u=t(2483);const p={key:1,class:"warn_info"},d={key:3,class:"product_info"},m={class:"screen"},h={key:0,class:"left_screen"},g={class:"medium_screen"},f={key:0,class:"shop"},v=["hidden"],b={class:"spring"},y={class:"spring"},w={class:"right_screen"};function _(e,n,t,i,s,c){const a=(0,r.up)("Warn"),l=(0,r.up)("Info"),u=(0,r.up)("Type"),_=(0,r.up)("Header"),k=(0,r.up)("Product"),I=(0,r.up)("Cart"),T=(0,r.up)("Subscriber"),C=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s.isShowWarn?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"warn_blank",onClick:n[0]||(n[0]=e=>s.isShowWarn=!1)})):(0,r.kq)("",!0),s.isShowWarn?((0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(a,{onWarnClose:n[1]||(n[1]=e=>s.isShowWarn=!1)})])):(0,r.kq)("",!0),s.isShowInfo?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"product_info_blank",onClick:n[2]||(n[2]=e=>s.isShowInfo=!1)})):(0,r.kq)("",!0),s.isShowInfo?((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(l,{name:s.products[s.infoProductKey].name,price:s.products[s.infoProductKey].price,img:s.products[s.infoProductKey].img,info:s.products[s.infoProductKey].info,onInfoClose:n[3]||(n[3]=e=>s.isShowInfo=!1)},null,8,["name","price","img","info"])])):(0,r.kq)("",!0),(0,r._)("div",m,[s.shoppingDone?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(u,{types:s.types,showType:s.showType,showOtherType:!0,onTypeClick:n[4]||(n[4]=e=>c.typeClick(e)),class:"left_type"},null,8,["types","showType"])])),(0,r._)("div",g,[(0,r.Wm)(_),s.shoppingDone?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(u,{types:s.types,showType:s.showType,showOtherType:s.showOtherType,onTypeClick:n[5]||(n[5]=e=>c.typeClick(e,s.showOtherType)),class:"top_type"},null,8,["types","showType","showOtherType"]),(0,r._)("ul",{hidden:!s.showProduct},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.products,((e,n)=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(k,{key:n,name:e.name,price:e.price,img:e.img,count:e.count,onMinusClick:n=>--e.count,onAddClick:n=>++e.count,onInfoClick:e=>c.showInfo(n),onInputChange:n=>e.count=n,onInputInput:n=>e.count=n},null,8,["name","price","img","count","onMinusClick","onAddClick","onInfoClick","onInputChange","onInputInput"])),[[o.F8,e.type.includes(s.showType)||"所有商品"===s.showType]]))),128)),(0,r.wy)((0,r._)("div",b,null,512),[[o.F8,s.types[s.showType]%3]]),(0,r.wy)((0,r._)("div",y,null,512),[[o.F8,s.types[s.showType]%3==1]])],8,v),(0,r.Wm)(I,{products:Object.values(s.products),price:c.price,isShowImg:0,onNextButton:n[6]||(n[6]=e=>s.shoppingDone=!0),class:"bottom_cart"},null,8,["products","price"])])),s.shoppingDone?((0,r.wg)(),(0,r.j4)(T,{key:1,details:c.orderDetails,price:c.price,subscriber:s.subscriberInfo,onInfoChange:n[7]||(n[7]=(e,n)=>s.subscriberInfo[e]=n),onSuubmitOrder:c.submitOrder,onSubscriberClose:n[8]||(n[8]=e=>s.shoppingDone=!1)},null,8,["details","price","subscriber","onSuubmitOrder"])):(0,r.kq)("",!0),(0,r.Wm)(C)]),(0,r._)("div",w,[(0,r.wy)((0,r.Wm)(I,{products:Object.values(s.products),price:c.price,isShowImg:s.products.length,onNextButton:n[9]||(n[9]=e=>s.shoppingDone=!0),class:"right_cart"},null,8,["products","price","isShowImg"]),[[o.F8,!s.shoppingDone]])])])],64)}const k={class:"header"},I=["src"];function T(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("img",{class:"headerimg",src:e.headerimg},null,8,I)])}var C=t.p+"img/HeaderImage.237d1627.jpg",S={name:"HeaderView",props:{msg:String},data:function(){return{headerimg:C}}};const D=(0,s.Z)(S,[["render",T],["__scopeId","data-v-f36d8374"]]);var O=D,x=t(7139);const j=e=>((0,r.dD)("data-v-3583bd66"),e=e(),(0,r.Cn)(),e),P={class:"product"},H=["src","alt","onerror"],W=["innerHTML"],K=j((()=>(0,r._)("br",null,null,-1))),N={class:"price"},Z={class:"count"},L=["disabled"],M=j((()=>(0,r._)("div",null,"-",-1))),V=[M],$=["value"],F=j((()=>(0,r._)("div",null,"+",-1))),z=[F];function q(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("a",null,[(0,r._)("div",{class:"productimgdiv",onClick:n[0]||(n[0]=n=>e.$emit("info-click"))},[(0,r._)("img",{class:"productimg",src:t.img?t.img:"/img/404.png",alt:t.name+"的圖片，來攤位上看看吧",onerror:s.defaultImg},null,8,H)]),(0,r._)("div",null,[(0,r._)("text",{class:"name",onClick:n[1]||(n[1]=n=>e.$emit("info-click")),innerHTML:t.name},null,8,W),K,(0,r._)("text",N,"NT "+(0,x.zw)(t.price),1)]),(0,r._)("div",Z,[(0,r._)("button",{class:"countbutton",onClick:n[2]||(n[2]=n=>e.$emit("minus-click")),disabled:t.count<=0},V,8,L),(0,r._)("input",{class:"countinput",type:"number",min:"0",onChange:n[3]||(n[3]=n=>e.$emit("input-change",s.changeCheck(n))),onInput:n[4]||(n[4]=n=>e.$emit("input-input",s.inputCheck(n))),value:t.count},null,40,$),(0,r._)("button",{class:"countbutton",onClick:n[5]||(n[5]=n=>e.$emit("add-click"))},z)])])])}var A=t.p+"img/404.25dbc0ab.png",X={name:"ProductView",props:{msg:String,productKey:String,name:String,count:[Number,String],price:Number,sale:String,img:null},emits:["minus-click","add-click","info-click","input-change","input-input"],methods:{inputCheck(e){var n=e.target.value;try{if(n>=0)return n}catch(t){if(n>="0")return n}return 0},changeCheck(e){var n=e.target.value;return n?parseInt(n):0}},computed:{defaultImg(){return'this.src="'+A+'"'}}};const Y=(0,s.Z)(X,[["render",q],["__scopeId","data-v-3583bd66"]]);var E=Y;const R=e=>((0,r.dD)("data-v-89c62a0c"),e=e(),(0,r.Cn)(),e),B={class:"cart"},U=R((()=>(0,r._)("p",{class:"hr"},null,-1))),G=R((()=>(0,r._)("h1",null,"購物車～～",-1))),J={class:"buyproducts"},Q=["hidden"],ee=["src","onerror"],ne={class:"buyproductdata"},te=["hidden"],oe=R((()=>(0,r._)("p",{class:"hr"},null,-1))),re={class:"price"},ie=["disabled"],se=R((()=>(0,r._)("br",null,null,-1)));function ce(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)("div",B,[U,G,(0,r._)("div",J,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.products,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"buyproduct",key:e.name,hidden:0==e.count},[(0,r._)("img",{src:e.img,onerror:s.defaultImg,class:(0,x.C_)({imgresizeto10:t.showImg>5})},null,10,ee),(0,r._)("div",ne,[(0,r._)("div",null,(0,x.zw)(e.name),1),(0,r._)("div",null,(0,x.zw)(e.count+"  ×  NT "+e.price),1)])],8,Q)))),128))]),(0,r._)("div",{class:"emptymsg",hidden:0!=t.price},"這裡空空如也",8,te),oe,(0,r._)("div",re,[(0,r._)("div",null,(0,x.zw)("總金額："+t.price),1),(0,r._)("button",{class:"nextbutton",role:"button",onClick:n[0]||(n[0]=n=>e.$emit("next-button")),disabled:0==t.price},[(0,r.Uk)(" 下一步"),se,(0,r.Uk)("填寫訂購人資訊 ")],8,ie)])])}var ae={name:"CartView",props:{msg:String,products:Array,price:Number,showImg:Number},computed:{defaultImg(){return'this.src="'+A+'"'}}};const le=(0,s.Z)(ae,[["render",ce],["__scopeId","data-v-89c62a0c"]]);var ue=le;const pe=["onClick"];function de(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)("div",{class:(0,x.C_)(["type",t.showOtherType?"":"hide"])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.types,((n,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o,class:(0,x.C_)(["type_item",{is_active:o===t.showType,hide:!t.showOtherType&&o!==t.showType&&"所有商品"!==o}]),onClick:n=>e.$emit("typeClick",o)},(0,x.zw)(o),11,pe)))),128))],2)}var me={name:"TypeView",props:{msg:String,types:Object,showType:String,showOtherType:Boolean}};const he=(0,s.Z)(me,[["render",de],["__scopeId","data-v-31b08766"]]);var ge=he;const fe=e=>((0,r.dD)("data-v-19039667"),e=e(),(0,r.Cn)(),e),ve=["src"],be=fe((()=>(0,r._)("div",{class:"footer"},[(0,r._)("div",{class:"copyrightdiv"},[(0,r._)("p",{class:"copyright"}," 本網站著作由國立臺灣師範大學竹苗地區同鄉校友會擁有 ")])],-1)));function ye(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("img",{class:"footerimg",src:e.footerimg},null,8,ve),be],64)}var we=t.p+"img/FooterImage.840b2689.jpg",_e={name:"FooterView",props:{msg:String},data:function(){return{footerimg:we}}};const ke=(0,s.Z)(_e,[["render",ye],["__scopeId","data-v-19039667"]]);var Ie=ke;const Te={class:"info"},Ce={class:"close"},Se={class:"product"},De={class:"productimgdiv"},Oe=["src","onerror"],xe={class:"nameandprice"},je={class:"name"},Pe={class:"price"},He={class:"infotextdiv"},We=["innerHTML"];function Ke(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)("div",Te,[(0,r._)("div",Ce,[(0,r._)("button",{onClick:n[0]||(n[0]=n=>e.$emit("info-close"))},"x")]),(0,r._)("div",Se,[(0,r._)("div",De,[(0,r._)("img",{class:"productimg",src:t.img,onerror:s.defaultImg},null,8,Oe)]),(0,r._)("div",xe,[(0,r._)("text",je,(0,x.zw)(t.name),1),(0,r._)("text",Pe,"NT "+(0,x.zw)(t.price),1)])]),(0,r._)("div",He,[(0,r._)("div",{class:"infotext",innerHTML:t.info},null,8,We)])])}var Ne={name:"InfoView",props:{msg:String,productKey:String,name:String,price:Number,info:String,img:null},emits:["info-close"],computed:{defaultImg(){return'this.src="'+A+'"'}}};const Ze=(0,s.Z)(Ne,[["render",Ke],["__scopeId","data-v-277a3049"]]);var Le=Ze;const Me=e=>((0,r.dD)("data-v-2b6576ae"),e=e(),(0,r.Cn)(),e),Ve={class:"warn"},$e={class:"close"},Fe=Me((()=>(0,r._)("div",{class:"warntextdiv"},[(0,r._)("div",{class:"warntext"},[(0,r._)("h1",null,"歡迎光臨2023竹苗文化週"),(0,r._)("h2",null,"本網站為僅有訂購功能，竹苗週的唯一收款方式為預購及正式週攤位"),(0,r._)("h2",null,"若有任何問題，請洽詢竹苗文化週官方"),(0,r._)("text",null,"防詐騙公告、資料使用說明...")])],-1)));function ze(e,n,t,o,i,s){return(0,r.wg)(),(0,r.iD)("div",Ve,[(0,r._)("div",$e,[(0,r._)("button",{onClick:n[0]||(n[0]=n=>e.$emit("warn-close"))},"x")]),Fe])}var qe={name:"WarnView",props:{msg:String},emits:["warn-close"]};const Ae=(0,s.Z)(qe,[["render",ze],["__scopeId","data-v-2b6576ae"]]);var Xe=Ae;const Ye=e=>((0,r.dD)("data-v-5e56e720"),e=e(),(0,r.Cn)(),e),Ee={class:"subscriber"},Re={class:"details"},Be=Ye((()=>(0,r._)("div",{class:"title"},"訂單明細",-1))),Ue=["innerHTML"],Ge={class:"totalprice"},Je=Ye((()=>(0,r._)("div",{class:"title"},"總計",-1))),Qe={class:"price"},en=["type","name","placeholder","autocomplete","onUpdate:modelValue"];function nn(e,n,t,i,s,c){return(0,r.wg)(),(0,r.iD)("div",Ee,[(0,r._)("div",Re,[Be,(0,r._)("div",{innerHTML:t.details.replace(/\r?\n/g,"<br />")},null,8,Ue),(0,r._)("div",Ge,[Je,(0,r._)("div",Qe,(0,x.zw)(t.price),1)])]),(0,r._)("form",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.subscriberInfo,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r._)("label",null,(0,x.zw)(e.label),1),(0,r.wy)((0,r._)("input",{type:e.type,name:e.name,placeholder:e.placeholder,autocomplete:e.autocomplete,"onUpdate:modelValue":n=>e.value=n,onChange:n[0]||(n[0]=e=>c.changeInfo(e)),onInput:n[1]||(n[1]=e=>c.changeInfo(e)),required:""},null,40,en),[[o.YZ,e.value]])])))),128))])])}var tn={name:"SubscriberView",props:{details:String,price:Number,subscriber:Object},data(){return{subscriberInfo:{name:{label:"姓名",type:"text",placeholder:"請輸入您的姓名",autocomplete:"name",value:this.subscriber.name,name:"name"},office:{label:"寢室/處室",type:"text",placeholder:"請輸入您的寢室/處室",autocomplete:"office",value:this.subscriber.office,name:"office"},phone:{label:"手機",type:"tel",placeholder:"09XXXXXXXX",autocomplete:"tel",value:this.subscriber.phone,name:"phone"},email:{label:"電子信箱",type:"email",placeholder:"請輸入您的電子信箱",autocomplete:"email",value:this.subscriber.email,name:"email"}}}},emits:["subscriber-close","info-change","submitOrder"],methods:{close(){this.$emit("subscriber-close")},changeInfo(e){var n=e.target.name,t=e.target.value;this.$emit("info-change",n,t)}}};const on=(0,s.Z)(tn,[["render",nn],["__scopeId","data-v-5e56e720"]]);var rn=on,sn=t(6943);const cn="https://script.google.com/macros/s/AKfycbwAVnnb5sIg8ktg-UlSr5lPPyjT-D66fMKRN1hICnL7ggwPuC1uHLdRKGeC_uLTgiA9/exec",an="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2RNZnR_1BkeLJ6LSglLfhY_HO3TkvRWSeBnfyGHfGn7aF4w/formResponse";var ln={name:"ShopView",data(){return{products:{},showProduct:!0,isShowWarn:!0,isShowInfo:!1,showType:"所有商品",showOtherType:!0,shoppingDone:!1,types:{"所有商品":0},infoProductKey:"",subscriberInfo:{name:"",office:"",phone:"",email:""}}},components:{Header:O,Product:E,Cart:ue,Footer:Ie,Info:Le,Type:ge,Warn:Xe,Subscriber:rn},computed:{price(){var e=0;for(var n of Object.values(this.products)){var t=parseInt(n.count);t>0&&(e+=t*n.price)}return e},orderDetails(){var e="";for(var n of Object.values(this.products))n.count>0&&(""!=e&&(e+="\n"),e+=n.name+"（NT "+n.price+") "+String(n.count)+"份");return e},summitDataToEmail(){var e={"entry.1385998788":this.orderDetails,"entry.500665397":this.price,"entry.187237367":"無",emailAddress:this.subscriberInfo.email};return e}},methods:{showInfo(e){this.infoProductKey=e,console.info(this.infoProduct),this.isShowInfo=!0},typeClick(e,n=!1){this.showType=e,this.showOtherType=!n},summitToEmail(){sn.Z.post(an,this.summitDataToEmail).then((e=>{console.log(e),this.shoppingDone=!0})).catch((e=>{console.log(e)}))},submitOrder(){this.summitToEmail(),sn.Z.post(cn,this.summitDataToEmail).then((e=>{console.log(e),this.shoppingDone=!0})).catch((e=>{console.log(e)}))}},created(){sn.Z.get(cn).then((e=>{const n=e.data;for(var t=1;t<n.length;t++){const e=n[t];var o=e[4].split(/\r?\n/g);this.products[e[0]]={name:e[1],price:Number(e[2]),img:"/img/"+e[3],type:o,info:e[5].replace(/\r?\n/g,"<br />"),sale:e[6].replace(/\r?\n/g,"<br />"),count:0},this.types.所有商品++;for(var r=0;r<o.length;r++)o[r]&&(void 0==this.types[o[r]]?this.types[o[r]]=1:this.types[o[r]]++)}}))}};const un=(0,s.Z)(ln,[["render",_],["__scopeId","data-v-39fbbc86"]]);var pn=un;const dn=[{path:"/",name:"shop",component:pn}],mn=(0,u.p7)({history:(0,u.PO)("/"),routes:dn});var hn=mn,gn=t(65),fn=(0,gn.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});t(1923);(0,o.ri)(l).use(fn).use(hn).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(c=!1,i<s&&(s=i));if(c){e.splice(u--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,s=o[0],c=o[1],a=o[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var u=a(t)}for(n&&n(o);l<s.length;l++)i=s[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self["webpackChunkhcml"]=self["webpackChunkhcml"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2557)}));o=t.O(o)})();
//# sourceMappingURL=app.179d5764.js.map