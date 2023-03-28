<template>
  <div class="type" :class="showOtherType ? '' : 'hide'">
    <div
      v-for="(type, key) in types"
      :key="key"
      class="type_item"
      :class="{
        is_active: key === showType,
        hide: !showOtherType && key !== showType && key !== '所有商品',
      }"
      @click="$emit('typeClick', key)"
    >
      {{ key }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeView",
  props: {
    msg: String,
    types: Object,
    showType: String,
    showOtherType: Boolean,
  },
};
</script>

<style scoped lang="scss">
.type {
  float: left;
  z-index: 101;
  width: 100%;
  text-align: center;
  max-height: 560px;
  transition: max-height 1s;

  .type_item {
    display: inline-block;
    width: 100%;
    font-size: 1.3rem;
    justify-items: center;
    vertical-align: bottom;
    padding: 0.3rem;
    cursor: pointer;
    background-color: #0000000c;
    transition: display 2s 0.5s;

    @media only screen and (min-width: 1200px) {
      width: 95%;
    }
  }
  .type_item.hide {
    display: none;
  }

  .is_active {
    background-color: #00000022;
  }
}

.type.hide {
  max-height: 10rem;
}
</style>
