<template>
  <Header></Header>
  <!--tab-->
  <div class="shop">
    <!--list-->
    <ul>
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
    </ul>
  </div>
</template>

<script>
import Header from "@/components/HeaderView.vue";

export default {
  data: function () {
    return {
      products: {
        黑胡椒肉乾: {
          order: 101,
          name: "黑胡椒肉乾",
          count: 0,
          price: 100,
          img: "https://www.chuei-kun.com.tw/upload/201811/21/201811211620213942.jpg",
        },
        檸檬肉乾: {
          order: 201,
          name: "檸檬肉乾",
          count: 0,
          price: 100,
          img: "https://www.chuei-kun.com.tw/upload/201811/21/201811211621075973.jpg",
        },
        肉乾: {
          order: 102,
          name: "肉乾",
          count: 0,
          price: 100,
          img: "https://www.chuei-kun.com.tw/upload/201811/21/201811211621075973.jpg",
        },
        肉乾1: {
          order: 202,
          name: "肉乾1",
          count: 0,
          price: 100,
          img: "https://www.chuei-kun.com.tw/upload/201811/21/201811211621075973.jpg",
        },
        肉乾2: {
          order: 103,
          name: "肉乾2",
          count: 0,
          price: 100,
          img: "https://www.chuei-kun.com.tw/upload/201811/21/201811211621075973.jpg",
        },
      },
      order: 0,
    };
  },
  methods: {
    inputCheck(event) {
      if (event.target.value >= 0) return event.target.value;
      return 0;
    },
    changeCheck(event) {
      if (!event.target.value) return 0;
      return parseInt(event.target.value);
    },
  },
  components: {
    Header,
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
  min-height: 240px;
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
  padding: auto;
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

@media only screen and (min-width: 580px) {
  ul {
    column-count: 3;
    column-width: 260px;
  }
}
</style>
