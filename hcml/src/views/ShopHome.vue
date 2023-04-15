<template>
  <div class="warn_blank" v-if="isShowWarn" @click="isShowWarn = false"></div>
  <div class="warn_info" v-if="isShowWarn">
    <Warn @warn-close="isShowWarn = false"></Warn>
  </div>
  <div
    class="product_info_blank"
    v-if="isShowInfo"
    @click="isShowInfo = false"
  ></div>
  <div class="product_info" v-if="isShowInfo">
    <Info
      :name="products[infoProductKey].name"
      :price="products[infoProductKey].price"
      :img="products[infoProductKey].img"
      :info="products[infoProductKey].info"
      @info-close="isShowInfo = false"
    ></Info>
  </div>
  <div class="screen">
    <div class="left_screen" v-if="!shoppingDone">
      <Type
        :types="types"
        :showType="showType"
        :showOtherType="true"
        @type-click="(type) => typeClick(type)"
        class="left_type"
      ></Type>
    </div>
    <div class="medium_screen">
      <Header></Header>
      <div class="shop" v-if="!shoppingDone">
        <Type
          :types="types"
          :showType="showType"
          :showOtherType="showOtherType"
          @type-click="(type) => typeClick(type, showOtherType)"
          class="top_type"
        ></Type>
        <div class="wait" v-if="types.所有商品 == 0">努力載入中...</div>
        <!--list-->
        <ul :hidden="!showProduct">
          <Product
            v-for="(product, key) in products"
            :key="key"
            :name="product.name"
            :price="product.price"
            :img="product.img"
            :sale="product.sale"
            :other="product.other"
            :count="product.count"
            @minus-click="--product.count"
            @add-click="++product.count"
            @info-click="showInfo(key)"
            @input-change="(count) => (product.count = count)"
            @input-input="(count) => (product.count = count)"
            v-show="product.type.includes(showType) || showType === '所有商品'"
          ></Product>
          <div class="spring" v-show="types[showType] % 3"></div>
          <div class="spring" v-show="types[showType] % 3 == 1"></div>
        </ul>
        <Cart
          :products="Object.values(products)"
          :price="price"
          :isShowImg="0"
          @next-button="
            shoppingDone = true;
            sendFood();
          "
          class="bottom_cart"
        ></Cart>
      </div>
      <Subscriber
        v-if="shoppingDone && !shoppingAllDone"
        :details="orderDetails"
        :price="price"
        :subscriber="subscriberInfo"
        :food="food"
        :foodorder="foodOrder"
        @info-change="
          (change, changeInfo) => (subscriberInfo[change] = changeInfo)
        "
        @submit-order="submitOrder()"
        @subscriber-close="shoppingDone = false"
      ></Subscriber>
      <Done v-if="shoppingAllDone"></Done>
      <Footer></Footer>
    </div>
    <div class="right_screen">
      <Cart
        :products="Object.values(products)"
        :price="price"
        :isShowImg="products.length"
        @next-button="
          shoppingDone = true;
          sendFood();
        "
        class="right_cart"
        v-show="!shoppingDone"
      ></Cart>
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderView.vue";
import Product from "@/components/ProductView.vue";
import Cart from "@/components/CartView.vue";
import Type from "@/components/TypeView.vue";
import Footer from "@/components/FooterView.vue";
import Info from "@/components/InfoView.vue";
import Warn from "@/components/WarnView.vue";
import Subscriber from "@/components/SubscriberView.vue";
import Done from "@/components/DoneView.vue";
import axios from "axios";

const AppScriptUrl =
  "https://script.google.com/macros/s/AKfycbxSyHs_eRLlyVlwrly2bVWITAuxWtopITwunb665jauh3x4IN-toRpcL0H8VpnhUDDR/exec";

const BackgroundUrl =
  "https://script.google.com/macros/s/AKfycbxrcM0zkKSvzm_s0hJJWJssOkfSaMQ-XY-Iq7pv_y9yy56UamDbTypqD7uJeI7JbDCy6g/exec";

export default {
  name: "ShopView",
  data() {
    return {
      products: {},
      showProduct: true,
      isShowWarn: true,
      isShowInfo: false,
      showType: "所有商品",
      showOtherType: true,
      shoppingDone: false,
      shoppingAllDone: false,
      types: { 所有商品: 0 },
      infoProductKey: "",
      subscriberInfo: {
        name: "",
        office: "",
        phone: "",
        email: "",
        fooood: "",
      },
      food: {
        isSameTime: true,
        所有餐點: {
          count: 0,
          date: "",
        },
        foods: {},
      },
    };
  },
  components: {
    Header,
    Product,
    Cart,
    Footer,
    Info,
    Type,
    Warn,
    Subscriber,
    Done,
  },
  computed: {
    price() {
      var total = 0;
      for (var product of Object.values(this.products)) {
        var count = parseInt(product.count);
        if (count > 0) {
          total += count * product.price;
        }
      }
      return total;
    },
    orderDetails() {
      var details = "";
      for (var product of Object.values(this.products)) {
        if (product.count > 0) {
          if (details != "") details += "\n";
          details +=
            product.name +
            "（NT " +
            product.price +
            "）" +
            String(product.count) +
            "份";
        }
      }
      return details;
    },
    foodOrder() {
      var food = {
        count: 0,
        foods: [],
      };
      for (var foodname of Object.keys(this.food.foods)) {
        if (this.products[foodname].count > 0) {
          food.foods.push(foodname);
          food.count++;
        }
      }
      return food;
    },
    summitDataToAppScript() {
      var data =
        "?姓名=" +
        this.subscriberInfo.name +
        "&系級=" +
        this.subscriberInfo.office +
        "&訂單明細=" +
        this.orderDetails +
        "&總價=" +
        this.price +
        "&現做餐點=" +
        this.subscriberInfo.fooood +
        "&email=" +
        this.subscriberInfo.email +
        "&手機=" +
        this.subscriberInfo.phone;
      return data.replaceAll("\n", "<br />");
    },
    summitDataToBackground() {
      var data = "?";
      for (var product of Object.values(this.products)) {
        if (product.count > 0) {
          data += product.name + "=" + product.count + "&";
        }
      }
      return data;
    },
  },
  methods: {
    showInfo(productKey) {
      this.infoProductKey = productKey;
      this.isShowInfo = true;
    },
    typeClick(type, showOtherType = false) {
      this.showType = type;
      this.showOtherType = !showOtherType;
    },
    submitToBackground() {
      axios({
        method: "get",
        url: BackgroundUrl + this.summitDataToBackground,
        headers: { "Content-Type": "text/plain" },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submitOrder() {
      axios({
        method: "post",
        url: AppScriptUrl + this.summitDataToAppScript,
        headers: { "Content-Type": "text/plain" },
      })
        .then((res) => {
          console.log(res);
          this.shoppingAllDone = true;
        })
        .catch((err) => {
          console.log(err);
        });
      this.submitToBackground();
      this.shoppingAllDone = true;
    },
    sendFood() {
      for (var foodname of Object.keys(this.food.foods)) {
        this.food.foods[foodname].count = this.products[foodname].count;
      }
    },
  },
  created() {
    axios.get(AppScriptUrl).then((res) => {
      const tempDatas = res.data;
      var other = 0;
      for (var i = 1; i < tempDatas.length; i++) {
        const tempdata = tempDatas[i];
        var tempType = tempdata[4].split(/\r?\n/g);
        this.products[tempdata[0]] = {
          name: tempdata[1],
          price: Number(tempdata[2]),
          img: "/img/" + tempdata[3],
          type: tempType,
          info: tempdata[5].replace(/\r?\n/g, "<br />"),
          sale: tempdata[6].replace(/\r?\n/g, "<br />"),
          other: tempdata[7].split(/\r?\n/g),
          count: 0,
        };
        this.types.所有商品++;
        for (var j = 0; j < tempType.length; j++) {
          if (tempType[j]) {
            if (this.types[tempType[j]] == undefined)
              this.types[tempType[j]] = 1;
            else this.types[tempType[j]]++;
          }
        }
        if (tempType.length == 0 || tempType[0] == "") {
          other++;
          this.products[tempdata[0]].type = ["其他"];
        }
        if (this.products[tempdata[0]].other.includes("正式週取貨")) {
          this.food.foods[tempdata[0]] = {
            count: 0,
            date: "",
          };
        }
      }
      this.types.其他 = other;
    });
  },
  mounted() {
    if (this.shoppingAllDone) return;
    const returnValue = "表單將不會保存，確定要離開？";
    window.onbeforeunload = (e) => {
      e = e || window.event;
      if (e) e.returnValue = returnValue;

      return returnValue;
    };
  },
};
</script>

<style lang="scss" scoped>
.warn_blank {
  position: fixed;
  float: left;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  right: 0;
  left: 0;
  background: #ffffff99;
}

.warn_info {
  position: fixed;
  float: left;
  z-index: 1010;
  max-width: 515px;
  width: 80%;
  height: min-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.product_info_blank {
  position: fixed;
  float: left;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  right: 0;
  left: 0;
  background: #fdfff088;
}

.product_info {
  position: fixed;
  float: left;
  z-index: 1010;
  max-width: 600px;
  width: 80%;
  height: 80%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.screen {
  background-color: #fdfff0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
  padding: none;
  scroll-behavior: smooth;

  div {
    position: relative;
  }
  .medium_screen {
    min-height: 100vh;
    max-width: 700px;
    margin: 0 auto;
  }
  .left_screen {
    width: calc(50% - 350px - 2rem);
    float: right;
    position: fixed;
    z-index: 990;
    left: 1%;
    top: 0;
    bottom: 0;
    padding-top: 3%;
    overflow-y: auto;
    .left_type {
      background: none;
    }
  }
  .right_screen {
    width: calc(50% - 350px - 2rem);
    float: right;
    position: fixed;
    z-index: 990;
    right: 1%;
    top: 0;
    bottom: 0;
    padding-top: 3%;
    overflow-y: auto;
    .right_cart {
      background: none;
    }
  }
}

.shop {
  float: left;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 100;
  background: #f8fce3;

  .wait {
    font-size: 1.5rem;
  }
}

.bottom_cart,
.top_type {
  display: block;
}
.right_cart,
.left_type {
  display: none;
}

@media only screen and (min-width: 1200px) {
  .bottom_cart,
  .top_type {
    display: none;
  }
  .right_cart,
  .left_type {
    display: block;
  }
}

ul {
  padding: 0 1rem;
  text-align: center;
  float: left;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (min-width: 680px) {
    justify-content: space-around;
  }
}

li {
  list-style-type: none;
  position: relative;
  min-height: 22rem;
  text-align: center;
  break-inside: avoid;

  a {
    margin: 0 2%;
    max-width: 96%;
    height: auto;
  }
}

@media only screen and (max-width: 550px) {
  li {
    min-height: 19rem;
  }
}

@media only screen and (max-width: 450px) {
  li {
    min-height: 17rem;
  }
}

@media only screen and (max-width: 370px) {
  li {
    min-height: 15rem;
  }
}

.spring {
  width: 30%;
}
</style>
