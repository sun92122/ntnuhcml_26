<template>
  <div class="type">
    <div
      v-for="(type, key) in types"
      :key="key"
      class="type_item"
      :class="type === showType ? 'is_active' : ''"
      @click="$emit('typeClick', type)"
    >
      {{ type }}
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
  },
};
</script>

<style scoped lang="scss">
.type {
  float: left;
  z-index: 101;
  width: 100%;
  min-height: 150px;
  text-align: center;

  .type_item {
    display: inline-block;
    width: 95%;
    font-size: 1.5rem;
    justify-items: center;
    vertical-align: bottom;
    min-height: 2rem;
    padding: 10px;
    cursor: pointer;
    background-color: #0000000c;
  }

  .is_active {
    background-color: #00000031;
  }
}
</style>
