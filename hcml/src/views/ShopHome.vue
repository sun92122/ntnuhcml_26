<template>
  <Header></Header>
  <!--tab-->
  <div class="shop">
    <!--list-->
    <!-- <ul>
      <li v-for="product in products" :key="product.order">
        <a>
          <div class="productimgdiv">
            <img class="productimg" :src="product.img" />
          </div>
          <div>
            <text class="name">{{ product.name }}</text>
            <br />
            <text class="price">NT {{ product.price }}</text>
          </div>
          <div class="count">
            <button
              class="countbutton"
              @click="--product.count"
              :disabled="product.count <= 0 ? true : false"
            >
              -
            </button>
            <input
              class="countinput"
              type="number"
              min="0"
              @change="(event) => (product.count = changeCheck(event))"
              @input="(event) => (product.count = inputCheck(event))"
              :value="product.count"
            />
            <button class="countbutton" @click="++product.count">+</button>
          </div>
        </a>
      </li>
    </ul> -->
    <ul>
      <Product
        v-for="product in products"
        :key="product.order"
        :name="product.name"
        :price="product.price"
        :img="product.img"
        :count="product.count"
        @minus-click="--product.count"
        @add-click="++product.count"
        @input-change="(count) => (product.count = count)"
        @input-input="(count) => (product.count = count)"
      ></Product>
    </ul>
  </div>
  <Cart></Cart>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/HeaderView.vue";
import Product from "@/components/ProductView.vue";
import Cart from "@/components/CartView.vue";
import Footer from "@/components/FooterView.vue";

import 一起搖擺 from "@/assets/一起搖擺.jpg";
import 小鹿亂撞 from "@/assets/小鹿亂撞.jpg";
import 勿擾模式 from "@/assets/勿擾模式.jpg";
import 天鵝湖 from "@/assets/天鵝湖.jpg";
import 成雙成對 from "@/assets/成雙成對.jpg";
import 海洋之星 from "@/assets/海洋之星.jpg";
import 海洋精靈 from "@/assets/海洋精靈.jpg";
import 乾啦乾啦 from "@/assets/乾啦乾啦.jpg";
import 陪你咪咪 from "@/assets/陪你咪咪.jpg";
import 熊熊魚見你 from "@/assets/熊熊魚見你.jpg";
import 鋼琴兔 from "@/assets/鋼琴兔.jpg";
import 鯨生今世 from "@/assets/鯨生今世.jpg";

export default {
  name: "ShopView",
  data() {
    return {
      products: [
        {
          order: 101,
          name: "一起搖擺",
          count: 0,
          price: 95,
          img: 一起搖擺,
        },
        {
          order: 102,
          name: "小鹿亂撞",
          count: 0,
          price: 95,
          img: 小鹿亂撞,
        },
        {
          order: 103,
          name: "勿擾模式",
          count: 0,
          price: 100,
          img: 勿擾模式,
        },
        {
          order: 104,
          name: "天鵝湖",
          count: 0,
          price: 100,
          img: 天鵝湖,
        },
        {
          order: 105,
          name: "成雙成對",
          count: 0,
          price: 100,
          img: 成雙成對,
        },
        {
          order: 106,
          name: "海洋之星",
          count: 0,
          price: 100,
          img: 海洋之星,
        },
        {
          order: 201,
          name: "海洋精靈",
          count: 0,
          price: 95,
          img: 海洋精靈,
        },
        {
          order: 202,
          name: "乾啦乾啦",
          count: 0,
          price: 95,
          img: 乾啦乾啦,
        },
        {
          order: 203,
          name: "陪你咪咪",
          count: 0,
          price: 100,
          img: 陪你咪咪,
        },
        {
          order: 204,
          name: "熊熊魚見你",
          count: 0,
          price: 100,
          img: 熊熊魚見你,
        },
        {
          order: 205,
          name: "鋼琴兔",
          count: 0,
          price: 100,
          img: 鋼琴兔,
        },
        {
          order: 206,
          name: "鯨生今世",
          count: 0,
          price: 100,
          img: 鯨生今世,
        },
      ],
      order: 0,
    };
  },
  methods: {
    countCheck(count) {
      if (!count) return 0;
      if (count >= 0) return parseInt(count);
      return 0;
    },
  },
  components: {
    Header,
    Product,
    Cart,
    Footer,
  },
  provide() {
    return {
      products: this.products,
    };
  },
};
</script>

<style lang="scss" scoped>
.shop {
  float: left;
  width: 100%;
  position: relative;
  z-index: 100;
  background: linear-gradient(to bottom, #101010, #2a4a80, #c291bb);
}

ul {
  padding: 0 1rem;
  text-align: center;
  float: left;
  width: 100%;
  column-count: 2;
  column-gap: normal;
  column-fill: auto;
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

@media only screen and (min-width: 600px) {
  ul {
    column-count: auto;
    column-width: 200px;
    column-gap: normal;
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

@media only screen and (max-width: 350px) {
  li {
    min-height: 15rem;
  }
}
</style>
