<template>
  <div class="cart">
    <p class="hr"></p>
    <h1>購物車～～</h1>
    <div class="buyproducts">
      <div
        class="buyproduct"
        v-for="product in products"
        :key="product.order"
        :hidden="product.count === 0 ? true : false"
      >
        <img :src="product.img" />
        <div class="buyproductdata">
          <div>{{ product.name }}</div>
          <div>{{ product.count + "  ×  NT " + product.price }}</div>
        </div>
      </div>
    </div>
    <div class="emptymsg" :hidden="price === 0 ? false : true">
      這裡空空如也
    </div>
    <p class="hr"></p>
    <div class="price">
      {{ "總金額：" + price }}
      <button
        class="nextbutton"
        role="button"
        @click="$emit('next-button')"
        :disabled="price === 0 ? true : false"
      >
        下一步<br />填寫訂購人資訊
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  props: {
    msg: String,
    products: Array,
    price: Number,
  },
};
</script>

<style scoped lang="scss">
.cart {
  float: right;
  z-index: 101;
  width: 100%;
  min-height: 150px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.5);
}

h1 {
  padding: 0 1rem;
}

.hr {
  height: 2px;
  width: 99%;
  margin: 0 0.5% 2%;
  background-color: gray;
}

.buyproduct {
  padding: 1% 0;
  display: flex;
  align-items: center;
}

.buyproductdata {
  display: grid;
}

img {
  max-width: 20%;
  margin: 0 1rem;
}

.emptymsg {
  text-align: center;
  padding: 1rem;
}

.price {
  text-align: right;
  height: 4rem;
  position: relative;
  right: 1rem;
}

/* CSS */
.nextbutton {
  background: #ff4742;
  border: 1px solid #ff4742;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 10px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 120px;
}

.nextbutton:hover,
.nextbutton:active,
.nextbutton:disabled {
  background-color: initial;
  background-position: 0 0;
  color: #ff4742;
}

.nextbutton:active {
  opacity: 0.5;
}
</style>
