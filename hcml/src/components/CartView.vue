<template>
  <div class="cart">
    <hr />
    <div v-for="product in products" :key="product.order">
      {{ product.count }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CartView",
  props: {
    msg: String,
    products: Array,
  },
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
