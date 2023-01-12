<template>
  <div class="cart">
    <div>123</div>
    <ul>
      <li v-for="product in products" :key="product.order">
        <text>{{ product.count }}</text>
        <text>\nHi\n</text>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CartView",
  props: {
    msg: String,
    products: [
      {
        order: Number,
        name: String,
        count: Number,
        price: Number,
        img: Image,
      },
    ],
  },
  emits: ["products"],
};
</script>

<style scoped lang="scss">
.cart {
  padding-top: 7rem;
  width: 100%;
  min-height: 500px;
  text-align: left;
  background-color: #c291bb;
}
</style>
