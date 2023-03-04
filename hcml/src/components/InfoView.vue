<template>
  <div class="info">
    <div class="close">
      <button @click="$emit('info-close')">x</button>
    </div>
    <a>
      <div class="productimgdiv">
        <img class="productimg" :src="img" />
      </div>
      <div>
        <text class="name">{{ name }}</text>
        <text class="price">NT {{ price }}</text>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "InfoView",
  props: {
    msg: String,
    productKey: String,
    name: String,
    price: Number,
    img: null,
  },
  emits: ["info-close"],
};
</script>

<style scoped lang="scss">
.info {
  max-width: 600px;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #6f7a74dd;
  transition: all 0.3s ease-in-out;
  text-align: left;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .productimgdiv {
    width: 100%;
    margin: 0 0 1rem;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .productimg {
      width: 100%;
      object-fit: contain;
    }
  }

  .name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-left: 3rem;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-left: 1rem;
  }
}

.close {
  background-color: initial;
  position: relative;
  align-self: flex-end;

  button {
    border: white;
    width: 50px;
    height: 50px;
    background-color: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: black;
  }
}
</style>
