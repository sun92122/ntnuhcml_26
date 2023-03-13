<template>
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
    <div class="left_screen">
      <Type
        :types="types"
        @type-click="(type) => typeClick(type)"
        class="left_type"
      ></Type>
    </div>
    <div class="medium_screen">
      <Header></Header>
      <div class="shop">
        <!--list-->
        <ul :hidden="!showProduct">
          <Product
            v-for="(product, key) in products"
            :key="key"
            :name="product.name"
            :price="product.price"
            :img="product.img"
            :count="product.count"
            @minus-click="--product.count"
            @add-click="++product.count"
            @info-click="showInfo(key)"
            @input-change="(count) => (product.count = count)"
            @input-input="(count) => (product.count = count)"
          ></Product>
        </ul>
        <Cart
          :products="Object.values(products)"
          :price="price"
          @next-button="next"
          class="bottom_cart"
        ></Cart>
      </div>
    </div>
    <div class="right_screen">
      <Cart
        :products="Object.values(products)"
        :price="price"
        @next-button="next"
        class="right_cart"
      ></Cart>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HeaderView.vue";
import Product from "@/components/ProductView.vue";
import Cart from "@/components/CartView.vue";
import Type from "@/components/TypeView.vue";
import Footer from "@/components/FooterView.vue";
import Info from "@/components/InfoView.vue";
import axios from "axios";

const AppScriptUrl =
  "https://script.google.com/macros/s/AKfycbwAVnnb5sIg8ktg-UlSr5lPPyjT-D66fMKRN1hICnL7ggwPuC1uHLdRKGeC_uLTgiA9/exec";

export default {
  name: "ShopView",
  data() {
    return {
      products: {},
      showProduct: true,
      isShowInfo: false,
      showType: "所有商品",
      types: { 所有商品: "所有商品" },
      infoProductKey: "", //"一起搖擺1",
    };
  },
  components: {
    Header,
    Product,
    Cart,
    Footer,
    Info,
    Type,
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
    summitData() {
      var data = "";
      for (var product of Object.values(this.products)) {
        if (product.count > 0) {
          if (data != "") data += "&";
          data += product.id + "=" + String(product.count);
        }
      }
      console.info(data);
      return data;
    },
  },
  methods: {
    summit() {
      axios.post(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdT5bgMRA_5ux-ry_oV-J043JzTjvnxeki1CuKIvwZMTb8alw/formResponse",
        this.summitData
      );
    },
    next() {
      this.showProduct = false;
      this.summit(); //test
      this.showProduct = true;
      // for (var product of this.products) {
      //   product.count = 0;
      // }
      return;
    },
    showInfo(productKey) {
      this.infoProductKey = productKey;
      console.info(this.infoProduct);
      this.isShowInfo = true;
    },
    typeClick(type) {
      this.showType = type;
    },
  },
  created() {
    axios.get(AppScriptUrl).then((res) => {
      const tempDatas = res.data;
      for (var i = 1; i < tempDatas.length; i++) {
        const tempdata = tempDatas[i];
        var tempType = tempdata[4].split(/\r?\n/g);
        this.products[tempdata[0]] = {
          name: tempdata[1],
          price: tempdata[2],
          img: "/img/" + tempdata[3],
          type: tempType,
          info: tempdata[5].replace(/\r?\n/g, "<br />"),
          count: 0,
        };
        for (var j = 0; j < tempType.length; j++) {
          if (!this.types[tempType[j]]) {
            this.types[tempType[j]] = tempType[j];
          }
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
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
  background: #00000099;
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
  background: linear-gradient(to bottom, #6f7a7499, #8eb09a99, #fed18d99);
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  padding: none;

  div {
    position: relative;
  }
  .medium_screen {
    max-width: 700px;
    margin: 0 auto;
  }
  .left_screen {
    width: calc(50% - 350px - 3rem);
    float: right;
    position: fixed;
    z-index: 990;
    left: 1%;
    top: 3%;
    .left_type {
      background: none;
    }
  }
  .right_screen {
    width: calc(50% - 350px - 3rem);
    float: right;
    position: fixed;
    z-index: 990;
    right: 1%;
    top: 3%;
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
  background: linear-gradient(to bottom, #6f7a74, #8eb09a, #fed18d);
}

.bottom_cart {
  display: block;
}
.right_cart {
  display: none;
}

@media only screen and (min-width: 1150px) {
  .bottom_cart {
    display: none;
  }
  .right_cart {
    display: block;
  }
}

ul {
  padding: 0 1rem;
  text-align: center;
  float: left;
  width: 100%;
  column-count: 2;
  column-gap: normal;
}

@media only screen and (min-width: 680px) {
  ul {
    column-count: auto;
    column-width: 200px;
    column-gap: normal;
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

/* product image */
.productimgdiv {
  width: 98%;
  padding: 0;
  max-height: 80%;
}

.productimg {
  width: 100%;
  height: auto;
  align-content: center;
}

/* count input */
.count {
  margin: auto;
  min-width: none;
  max-width: 75%;
}

.countinput {
  text-align: center;
  width: 50%;
}

.countbutton {
  width: 25%;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

text.name {
  color: white;
}

text.price {
  color: white;
}
</style>
