(function(){"use strict";var e={6538:function(e,o,t){var n=t(9242),r=t(3396);function i(e,o){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var s=t(89);const c={},a=(0,s.Z)(c,[["render",i]]);var d=a,l=t(2483);const u={key:1,class:"warn_info"},p={key:3,class:"product_info"},f={class:"screen"},m={key:0,class:"left_screen"},h={class:"medium_screen"},g={key:0,class:"shop"},v={key:0,class:"wait"},b=["hidden"],y={class:"spring"},w={class:"spring"},_={class:"right_screen"};function k(e,o,t,i,s,c){const a=(0,r.up)("Warn"),d=(0,r.up)("Info"),l=(0,r.up)("Type"),k=(0,r.up)("Header"),T=(0,r.up)("Product"),I=(0,r.up)("Cart"),D=(0,r.up)("Subscriber"),C=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[s.isShowWarn?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"warn_blank",onClick:o[0]||(o[0]=e=>s.isShowWarn=!1)})):(0,r.kq)("",!0),s.isShowWarn?((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(a,{onWarnClose:o[1]||(o[1]=e=>s.isShowWarn=!1)})])):(0,r.kq)("",!0),s.isShowInfo?((0,r.wg)(),(0,r.iD)("div",{key:2,class:"product_info_blank",onClick:o[2]||(o[2]=e=>s.isShowInfo=!1)})):(0,r.kq)("",!0),s.isShowInfo?((0,r.wg)(),(0,r.iD)("div",p,[(0,r.Wm)(d,{name:s.products[s.infoProductKey].name,price:s.products[s.infoProductKey].price,img:s.products[s.infoProductKey].img,info:s.products[s.infoProductKey].info,onInfoClose:o[3]||(o[3]=e=>s.isShowInfo=!1)},null,8,["name","price","img","info"])])):(0,r.kq)("",!0),(0,r._)("div",f,[s.shoppingDone?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",m,[(0,r.Wm)(l,{types:s.types,showType:s.showType,showOtherType:!0,onTypeClick:o[4]||(o[4]=e=>c.typeClick(e)),class:"left_type"},null,8,["types","showType"])])),(0,r._)("div",h,[(0,r.Wm)(k),s.shoppingDone?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(l,{types:s.types,showType:s.showType,showOtherType:s.showOtherType,onTypeClick:o[5]||(o[5]=e=>c.typeClick(e,s.showOtherType)),class:"top_type"},null,8,["types","showType","showOtherType"]),0==s.types.所有商品?((0,r.wg)(),(0,r.iD)("div",v,"努力載入中...")):(0,r.kq)("",!0),(0,r._)("ul",{hidden:!s.showProduct},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.products,((e,o)=>(0,r.wy)(((0,r.wg)(),(0,r.j4)(T,{key:o,name:e.name,price:e.price,img:e.img,sale:e.sale,other:e.other,count:e.count,onMinusClick:o=>--e.count,onAddClick:o=>++e.count,onInfoClick:e=>c.showInfo(o),onInputChange:o=>e.count=o,onInputInput:o=>e.count=o},null,8,["name","price","img","sale","other","count","onMinusClick","onAddClick","onInfoClick","onInputChange","onInputInput"])),[[n.F8,e.type.includes(s.showType)||"所有商品"===s.showType]]))),128)),(0,r.wy)((0,r._)("div",y,null,512),[[n.F8,s.types[s.showType]%3]]),(0,r.wy)((0,r._)("div",w,null,512),[[n.F8,s.types[s.showType]%3==1]])],8,b),(0,r.Wm)(I,{products:Object.values(s.products),price:c.price,isShowImg:0,onNextButton:o[6]||(o[6]=e=>{s.shoppingDone=!0,c.sendFood()}),class:"bottom_cart"},null,8,["products","price"])])),s.shoppingDone?((0,r.wg)(),(0,r.j4)(D,{key:1,details:c.orderDetails,price:c.price,subscriber:s.subscriberInfo,food:s.food,foodorder:c.foodOrder,onInfoChange:o[7]||(o[7]=(e,o)=>s.subscriberInfo[e]=o),onSubmitOrder:o[8]||(o[8]=e=>c.submitOrder()),onSubscriberClose:o[9]||(o[9]=e=>s.shoppingDone=!1)},null,8,["details","price","subscriber","food","foodorder"])):(0,r.kq)("",!0),(0,r.Wm)(C)]),(0,r._)("div",_,[(0,r.wy)((0,r.Wm)(I,{products:Object.values(s.products),price:c.price,isShowImg:s.products.length,onNextButton:o[10]||(o[10]=e=>{s.shoppingDone=!0,c.sendFood()}),class:"right_cart"},null,8,["products","price","isShowImg"]),[[n.F8,!s.shoppingDone]])])])],64)}t(7658);const T={class:"header"},I=["src"];function D(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("img",{class:"headerimg",src:e.headerimg},null,8,I)])}var C=t.p+"img/HeaderImage.237d1627.jpg",O={name:"HeaderView",props:{msg:String},data:function(){return{headerimg:C}}};const S=(0,s.Z)(O,[["render",D],["__scopeId","data-v-f36d8374"]]);var j=S,H=t(7139);const x=e=>((0,r.dD)("data-v-b953c358"),e=e(),(0,r.Cn)(),e),F={class:"product"},P=["src","alt","onerror"],M=["innerHTML"],W=x((()=>(0,r._)("br",null,null,-1))),q={class:"price"},K=x((()=>(0,r._)("br",null,null,-1))),V=["innerHTML"],L={key:0,class:"count"},N=["disabled"],Z=x((()=>(0,r._)("div",null,"-",-1))),A=[Z],$=["value"],z=x((()=>(0,r._)("div",null,"+",-1))),Y=[z];function U(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",F,[(0,r._)("a",null,[(0,r._)("div",{class:"productimgdiv",onClick:o[0]||(o[0]=o=>e.$emit("info-click"))},[(0,r._)("img",{class:"productimg",src:t.img?t.img:"/img/404.png",alt:t.name+"的圖片，來攤位上看看吧",onerror:s.defaultImg},null,8,P)]),(0,r._)("div",null,[(0,r._)("text",{class:"name",onClick:o[1]||(o[1]=o=>e.$emit("info-click")),innerHTML:t.name},null,8,M),W,(0,r._)("text",q,"NT "+(0,H.zw)(t.price),1),K,t.sale?((0,r.wg)(),(0,r.iD)("text",{key:0,class:"sale",innerHTML:t.sale},null,8,V)):(0,r.kq)("",!0)]),t.other.includes("正式週限定")?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("button",{class:"countbutton",onClick:o[2]||(o[2]=o=>e.$emit("minus-click")),disabled:t.count<=0},A,8,N),(0,r._)("input",{class:"countinput",type:"number",min:"0",onChange:o[3]||(o[3]=o=>e.$emit("input-change",s.changeCheck(o))),onInput:o[4]||(o[4]=o=>e.$emit("input-input",s.inputCheck(o))),value:t.count},null,40,$),(0,r._)("button",{class:"countbutton",onClick:o[5]||(o[5]=o=>e.$emit("add-click"))},Y)]))])])}var E=t.p+"img/404.25dbc0ab.png",R={name:"ProductView",props:{msg:String,name:String,count:[Number,String],price:Number,sale:String,other:Array,img:null},emits:["minus-click","add-click","info-click","input-change","input-input"],methods:{inputCheck(e){var o=e.target.value;try{if(o>=0)return o}catch(t){if(o>="0")return o}return 0},changeCheck(e){var o=e.target.value;return o?parseInt(o):0}},computed:{defaultImg(){return'this.src="'+E+'"'}}};const X=(0,s.Z)(R,[["render",U],["__scopeId","data-v-b953c358"]]);var B=X;const G=e=>((0,r.dD)("data-v-675bbcf0"),e=e(),(0,r.Cn)(),e),J={class:"cart"},Q=G((()=>(0,r._)("p",{class:"hr"},null,-1))),ee=G((()=>(0,r._)("h1",null,"購物車～～",-1))),oe={class:"buyproducts"},te=["hidden"],ne=["src","onerror"],re={class:"buyproductdata"},ie=["hidden"],se=G((()=>(0,r._)("p",{class:"hr"},null,-1))),ce={class:"price"},ae=["disabled"],de=G((()=>(0,r._)("br",null,null,-1)));function le(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",J,[Q,ee,(0,r._)("div",oe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.products,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"buyproduct",key:e.name,hidden:0==e.count},[(0,r._)("img",{src:e.img,onerror:s.defaultImg,class:(0,H.C_)({imgresizeto10:t.showImg>5})},null,10,ne),(0,r._)("div",re,[(0,r._)("div",null,(0,H.zw)(e.name),1),(0,r._)("div",null,(0,H.zw)(e.count+"  ×  NT "+e.price),1)])],8,te)))),128))]),(0,r._)("div",{class:"emptymsg",hidden:0!=t.price},"這裡空空如也",8,ie),se,(0,r._)("div",ce,[(0,r._)("div",null,(0,H.zw)("總金額："+t.price),1),(0,r._)("button",{class:"nextbutton",role:"button",onClick:o[0]||(o[0]=o=>e.$emit("next-button")),disabled:0==t.price},[(0,r.Uk)(" 下一步"),de,(0,r.Uk)("填寫訂購人資訊 ")],8,ae)])])}var ue={name:"CartView",props:{msg:String,products:Array,price:Number,showImg:Number},computed:{defaultImg(){return'this.src="'+E+'"'}}};const pe=(0,s.Z)(ue,[["render",le],["__scopeId","data-v-675bbcf0"]]);var fe=pe;const me=["onClick"];function he(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",{class:(0,H.C_)(["type",t.showOtherType?"":"hide"])},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.types,((o,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n,class:(0,H.C_)(["type_item",{is_active:n===t.showType,hide:!t.showOtherType&&n!==t.showType&&"所有商品"!==n}]),onClick:o=>e.$emit("typeClick",n)},(0,H.zw)(n),11,me)))),128))],2)}var ge={name:"TypeView",props:{msg:String,types:Object,showType:String,showOtherType:Boolean}};const ve=(0,s.Z)(ge,[["render",he],["__scopeId","data-v-31b08766"]]);var be=ve;const ye=e=>((0,r.dD)("data-v-19039667"),e=e(),(0,r.Cn)(),e),we=["src"],_e=ye((()=>(0,r._)("div",{class:"footer"},[(0,r._)("div",{class:"copyrightdiv"},[(0,r._)("p",{class:"copyright"}," 本網站著作由國立臺灣師範大學竹苗地區同鄉校友會擁有 ")])],-1)));function ke(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("img",{class:"footerimg",src:e.footerimg},null,8,we),_e],64)}var Te=t.p+"img/FooterImage.840b2689.jpg",Ie={name:"FooterView",props:{msg:String},data:function(){return{footerimg:Te}}};const De=(0,s.Z)(Ie,[["render",ke],["__scopeId","data-v-19039667"]]);var Ce=De;const Oe={class:"info"},Se={class:"close"},je={class:"product"},He={class:"productimgdiv"},xe=["src","onerror"],Fe={class:"nameandprice"},Pe={class:"name"},Me={class:"price"},We={class:"infotextdiv"},qe=["innerHTML"];function Ke(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",Oe,[(0,r._)("div",Se,[(0,r._)("button",{onClick:o[0]||(o[0]=o=>e.$emit("info-close"))},"x")]),(0,r._)("div",je,[(0,r._)("div",He,[(0,r._)("img",{class:"productimg",src:t.img,onerror:s.defaultImg},null,8,xe)]),(0,r._)("div",Fe,[(0,r._)("text",Pe,(0,H.zw)(t.name),1),(0,r._)("text",Me,"NT "+(0,H.zw)(t.price),1)])]),(0,r._)("div",We,[(0,r._)("div",{class:"infotext",innerHTML:t.info},null,8,qe)])])}var Ve={name:"InfoView",props:{msg:String,name:String,price:Number,info:String,img:null},emits:["info-close"],computed:{defaultImg(){return'this.src="'+E+'"'}}};const Le=(0,s.Z)(Ve,[["render",Ke],["__scopeId","data-v-0acac4f2"]]);var Ne=Le;const Ze={class:"warn"},Ae={class:"close"},$e=(0,r.uE)('<div class="warntextdiv" data-v-65527a2e><h3 class="title" data-v-65527a2e>歡迎光臨2023竹苗文化週</h3><div class="warntext" data-v-65527a2e> 竹苗週的理念是想要推廣新竹苗栗地區的文化， 透過文化的介紹與特色食物的推廣， 希望能讓更多的人有機會接觸並認識新竹苗栗的景點與特產。 而同樣來自竹苗地區的我們，相聚在此， 共同宣揚著家鄉的文化和美食， 一起為了同個目標奮鬥， 一同築出那最燦爛的夢想。 <p class="red" data-v-65527a2e> 預購網站僅預購及展示，本次竹苗週唯一收款方式為週系列現場。 </p><p data-v-65527a2e> 表單商品除特別標示外皆於 4/24-4/28 取貨，各商品介紹及資訊可點擊商品圖查看。 </p><div class="closeinfo" data-v-65527a2e>點擊空白處關閉</div></div></div>',1);function ze(e,o,t,n,i,s){return(0,r.wg)(),(0,r.iD)("div",Ze,[(0,r._)("div",Ae,[(0,r._)("button",{onClick:o[0]||(o[0]=o=>e.$emit("warn-close"))},"x")]),$e])}var Ye={name:"WarnView",props:{msg:String},emits:["warn-close"]};const Ue=(0,s.Z)(Ye,[["render",ze],["__scopeId","data-v-65527a2e"]]);var Ee=Ue;const Re=e=>((0,r.dD)("data-v-9ec66f90"),e=e(),(0,r.Cn)(),e),Xe={class:"subscriber"},Be={class:"details"},Ge=Re((()=>(0,r._)("div",{class:"detailstitle"},"訂單明細",-1))),Je=["innerHTML"],Qe={class:"totalprice"},eo=Re((()=>(0,r._)("div",{class:"totalpricetitle"},"總計",-1))),oo={class:"price"},to=Re((()=>(0,r._)("iframe",{class:"iframe",name:"iframe"},null,-1))),no={id:"fooood",target:"iframe"},ro=["for"],io=["type","name","id","placeholder","autocomplete","onUpdate:modelValue"],so={key:0,class:"foodtime"},co={class:"foodtitle"},ao={key:0},lo=Re((()=>(0,r._)("label",{for:"sametime"},"所有餐點同時",-1))),uo={key:0,class:"w-100"},po={class:"food"},fo={class:"foodname"},mo=["onUpdate:modelValue"],ho=Re((()=>(0,r._)("option",{value:""},"請選擇取餐時間",-1))),go={key:1,class:"w-100"},vo={class:"fooddiv"},bo={class:"food"},yo=Re((()=>(0,r._)("div",{class:"foodname"},"所有餐點",-1))),wo=Re((()=>(0,r._)("option",{value:""},"請選擇取餐時間",-1))),_o={class:"buttons"};function ko(e,o,t,i,s,c){return(0,r.wg)(),(0,r.iD)("div",Xe,[(0,r._)("div",Be,[Ge,(0,r._)("div",{innerHTML:t.details.replace(/\r?\n/g,"<br />")},null,8,Je),(0,r._)("div",Qe,[eo,(0,r._)("div",oo,(0,H.zw)(t.price),1)])]),to,(0,r._)("form",no,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.subscriberInfo,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"subscriberInfo"},[(0,r._)("label",{for:e.name},(0,H.zw)(e.label),9,ro),(0,r.wy)((0,r._)("input",{type:e.type,name:e.name,id:e.name,placeholder:e.placeholder,autocomplete:e.autocomplete,"onUpdate:modelValue":o=>e.value=o,onChange:o[0]||(o[0]=e=>c.changeInfo(e)),onInput:o[1]||(o[1]=e=>c.changeInfo(e)),required:""},null,40,io),[[n.YZ,e.value]])])))),128)),t.foodorder.count?((0,r.wg)(),(0,r.iD)("div",so,[(0,r._)("div",co,[(0,r.Uk)(" 現做食品取餐時間 "),t.foodorder.count>1?((0,r.wg)(),(0,r.iD)("div",ao,[lo,(0,r.wy)((0,r._)("input",{type:"checkbox",id:"sametime",name:"sametime","onUpdate:modelValue":o[2]||(o[2]=e=>s.foodToOrder.isSameTime=e),onChange:o[3]||(o[3]=(...e)=>c.changeFood&&c.changeFood(...e))},null,544),[[n.e8,s.foodToOrder.isSameTime]])])):(0,r.kq)("",!0)]),s.foodToOrder.isSameTime?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",uo,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.foodorder.foods,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"fooddiv",key:e},[(0,r._)("div",po,[(0,r._)("div",fo,(0,H.zw)(e),1),(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":o=>s.foodToOrder.foods[e].date=o,onChange:o[4]||(o[4]=(...e)=>c.changeFood&&c.changeFood(...e)),required:""},[ho,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.dates,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e},(0,H.zw)(e),1)))),128))],40,mo),[[n.bM,s.foodToOrder.foods[e].date]])])])))),128))])),s.foodToOrder.isSameTime?((0,r.wg)(),(0,r.iD)("div",go,[(0,r._)("div",vo,[(0,r._)("div",bo,[yo,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>s.foodToOrder.所有餐點.date=e),onChange:o[6]||(o[6]=(...e)=>c.changeFood&&c.changeFood(...e)),required:""},[wo,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.dates,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e},(0,H.zw)(e),1)))),128))],544),[[n.bM,s.foodToOrder.所有餐點.date]])])])])):(0,r.kq)("",!0)])):(0,r.kq)("",!0)]),(0,r._)("div",_o,[(0,r._)("button",{class:"button",onClick:o[7]||(o[7]=o=>e.$emit("subscriber-close"))}," 返回上一步 "),(0,r._)("button",{type:"sumbit",form:"fooood",class:"button",onClick:o[8]||(o[8]=o=>e.$emit("submit-order")),onSubmit:o[9]||(o[9]=(0,n.iM)((()=>{}),["prevent"]))}," 送出預購 ",32)])])}var To={name:"SubscriberView",props:{details:String,price:Number,subscriber:Object,food:Object,foodorder:Object},data(){return{subscriberInfo:{name:{label:"姓名",type:"text",placeholder:"請輸入您的姓名",autocomplete:"name",value:this.subscriber.name,name:"name"},office:{label:"系級或處室",type:"text",placeholder:"請輸入您的系級/處室",autocomplete:"office",value:this.subscriber.office,name:"office"},phone:{label:"手機",type:"tel",placeholder:"09XXXXXXXX",autocomplete:"tel",value:this.subscriber.phone,name:"phone"},email:{label:"電子信箱",type:"email",placeholder:"請輸入您的電子信箱",autocomplete:"email",value:this.subscriber.email,name:"email"}},dates:["4/17（一）12:10","4/17（一）15:30","4/18（二）12:10","4/18（二）15:30","4/19（三）12:10","4/19（三）15:30","4/20（四）12:10","4/20（四）15:30","4/21（五）12:10","4/21（五）15:30"],foodToOrder:this.food}},emits:["subscriber-close","info-change","submit-order"],methods:{changeInfo(e){var o=e.target.name,t=e.target.value;this.$emit("info-change",o,t)},changeFood(){this.$emit("info-change","fooood",this.foodTime)}},computed:{foodTime(){var e="",o="",t=0;if(this.foodToOrder.isSameTime){for(t=0;t<this.foodorder.count;t++)o=this.foodorder.foods[t],e+=o+" "+this.food.foods[o].count+"份\\n";return"所有餐點："+this.foodToOrder.所有餐點.date+"\\n"+e}for(t=0;t<this.foodorder.count;t++)o=this.foodorder.foods[t],e+=o+" "+this.foodToOrder.foods[o].count+"份："+this.foodToOrder.foods[o].date+"\\n";return e}}};const Io=(0,s.Z)(To,[["render",ko],["__scopeId","data-v-9ec66f90"]]);var Do=Io,Co=t(6943);const Oo="https://script.google.com/macros/s/AKfycbwAVnnb5sIg8ktg-UlSr5lPPyjT-D66fMKRN1hICnL7ggwPuC1uHLdRKGeC_uLTgiA9/exec",So="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2RNZnR_1BkeLJ6LSglLfhY_HO3TkvRWSeBnfyGHfGn7aF4w/formResponse";var jo={name:"ShopView",data(){return{products:{},showProduct:!0,isShowWarn:!0,isShowInfo:!1,showType:"所有商品",showOtherType:!0,shoppingDone:!1,shoppingAllDone:!1,types:{"所有商品":0},infoProductKey:"",subscriberInfo:{name:"",office:"",phone:"",email:"",fooood:""},food:{isSameTime:!0,"所有餐點":{count:0,date:""},foods:{}}}},components:{Header:j,Product:B,Cart:fe,Footer:Ce,Info:Ne,Type:be,Warn:Ee,Subscriber:Do},computed:{price(){var e=0;for(var o of Object.values(this.products)){var t=parseInt(o.count);t>0&&(e+=t*o.price)}return e},orderDetails(){var e="";for(var o of Object.values(this.products))o.count>0&&(""!=e&&(e+="\n"),e+=o.name+"（NT "+o.price+"）"+String(o.count)+"份");return e},foodOrder(){var e={count:0,foods:[]};for(var o of Object.keys(this.food.foods))this.products[o].count>0&&(e.foods.push(o),e.count++);return e},summitDataToEmail(){var e={"entry.287360390":this.subscriberInfo.name,"entry.1644295447":this.subscriberInfo.office,"entry.1385998788":this.orderDetails,"entry.500665397":this.price,"entry.187237367":this.subscriberInfo.fooood,emailAddress:this.subscriberInfo.email,emailReceipt:!0};return e="entry.287360390="+this.subscriberInfo.name+"&entry.1644295447="+this.subscriberInfo.office+"&entry.1385998788="+this.orderDetails+"&entry.500665397="+this.price+"&entry.187237367="+this.subscriberInfo.fooood+"&emailAddress="+this.subscriberInfo.email+"&emailReceipt=true",e},summitDataToAppScript(){var e={"姓名":this.subscriberInfo.name,"處室":this.subscriberInfo.office,phone:this.subscriberInfo.phone,email:this.subscriberInfo.email,food:this.subscriberInfo.fooood,order:this.orderDetails,price:this.price};return e}},methods:{showInfo(e){this.infoProductKey=e,this.isShowInfo=!0},typeClick(e,o=!1){this.showType=e,this.showOtherType=!o},summitToEmail(){Co.Z.post(So,this.summitDataToEmail).then((e=>{console.log(e),this.shoppingAllDone=!0})).catch((e=>{console.log(e)}))},submitOrder(){this.summitToEmail(),Co.Z.post(Oo,this.summitDataToEmail).then((e=>{console.log(e),this.shoppingAllDone=!0})).catch((e=>{console.log(e)}))},sendFood(){for(var e of Object.keys(this.food.foods))this.food.foods[e].count=this.products[e].count}},created(){Co.Z.get(Oo).then((e=>{const o=e.data;for(var t=1;t<o.length;t++){const e=o[t];var n=e[4].split(/\r?\n/g);this.products[e[0]]={name:e[1],price:Number(e[2]),img:"/img/"+e[3],type:n,info:e[5].replace(/\r?\n/g,"<br />"),sale:e[6].replace(/\r?\n/g,"<br />"),other:e[7].split(/\r?\n/g),count:0},this.types.所有商品++;for(var r=0;r<n.length;r++)n[r]&&(void 0==this.types[n[r]]?this.types[n[r]]=1:this.types[n[r]]++);this.products[e[0]].other.includes("正式週取貨")&&(this.food.foods[e[0]]={count:0,date:""})}}))}};const Ho=(0,s.Z)(jo,[["render",k],["__scopeId","data-v-9ec7e64a"]]);var xo=Ho;const Fo=[{path:"/",name:"shop",component:xo,meta:{title:"竹苗週預購"}}],Po=(0,l.p7)({history:(0,l.PO)("/"),routes:Fo});Po.beforeEach(((e,o,t)=>{window.document.title=e.meta.title,t()}));var Mo=Po,Wo=t(65),qo=(0,Wo.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});t(1923);(0,n.ri)(d).use(qo).use(Mo).mount("#app")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(o,n,r,i){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var c=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[a])}))?n.splice(a--,1):(c=!1,i<s&&(s=i));if(c){e.splice(l--,1);var d=r();void 0!==d&&(o=d)}}return o}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,i,s=n[0],c=n[1],a=n[2],d=0;if(s.some((function(o){return 0!==e[o]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(a)var l=a(t)}for(o&&o(n);d<s.length;d++)i=s[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},n=self["webpackChunkhcml"]=self["webpackChunkhcml"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6538)}));n=t.O(n)})();
//# sourceMappingURL=app.84d8243d.js.map