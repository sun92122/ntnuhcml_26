<template>
  <div class="info">
    <div class="close">
      <button @click="$emit('info-close')">x</button>
    </div>
    <div class="product">
      <div class="productimgdiv">
        <img class="productimg" :src="img" :onerror="defaultImg" />
      </div>
      <div class="nameandprice">
        <text class="name">{{ name }}</text>
        <text class="price">NT {{ price }}</text>
      </div>
    </div>
    <div class="infotextdiv">
      <div class="infotext" v-html="info"></div>
    </div>
  </div>
</template>

<script>
import defaultImage from "@/assets/404.png";

export default {
  name: "InfoView",
  props: {
    msg: String,
    name: String,
    price: Number,
    info: String,
    img: null,
  },
  emits: ["info-close"],
  computed: {
    defaultImg() {
      return 'this.src="' + defaultImage + '"';
    },
  },
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
  background-color: #f8fce3dd;
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
    margin-left: 2rem;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-left: 1rem;
  }

  .infotextdiv {
    margin-left: 3rem;
    margin-right: 3rem;
    width: 100%;

    -ms-overflow-style: none;
    height: 100%;
    overflow: auto;
    -webkit-scrollbar {
      display: none;
    }

    .infotext {
      font-size: 1rem;
      font-weight: 500;
      color: #000;
      margin-left: 2rem;
      margin-right: 2rem;
      text-align: left;
      text-indent: 2rem;
    }
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

@media only screen and (min-width: 700px) {
  .info {
    .product {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      .productimgdiv {
        width: 50%;
      }

      .nameandprice {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        text {
          margin: 0;
        }
      }
    }
  }
}
</style>
