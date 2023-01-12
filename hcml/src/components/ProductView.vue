<template>
  <div class="product">
    <a>
      <div class="productimgdiv">
        <img class="productimg" :src="img" />
      </div>
      <div>
        <text class="name">{{ name }}</text>
        <br />
        <text class="price">NT {{ price }}</text>
      </div>
      <div class="count">
        <button
          class="countbutton"
          @click="$emit('minus-click')"
          :disabled="count <= 0 ? true : false"
        >
          -
        </button>
        <input
          class="countinput"
          type="number"
          min="0"
          @change="(event) => $emit('input-change', changeCheck(event))"
          @input="(event) => $emit('input-input', inputCheck(event))"
          :value="count"
        />
        <button class="countbutton" @click="$emit('add-click')">+</button>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    msg: String,
    name: String,
    count: [Number, String],
    price: Number,
    img: null,
  },
  emits: ["minus-click", "add-click", "input-change", "input-input"],
  methods: {
    inputCheck(event) {
      var value = event.target.value;
      try {
        if (value >= 0) return value;
      } catch (error) {
        if (value >= "0") return value;
      }
      return 0;
    },
    changeCheck(event) {
      var value = event.target.value;
      if (!value) return 0;
      return parseInt(value);
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  width: 100%;
  float: left;
  width: 100%;
  position: relative;
  z-index: 100;
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

@media only screen and (max-width: 550px) {
  .product {
    min-height: 19rem;
  }
}

@media only screen and (max-width: 450px) {
  .product {
    min-height: 17rem;
  }
}

@media only screen and (max-width: 350px) {
  .product {
    min-height: 15rem;
  }
}
</style>
