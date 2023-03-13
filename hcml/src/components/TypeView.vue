<template>
  <div class="type">
    <ul>
      <div
        v-for="(type, key) in types"
        :key="key"
        class="type_item"
        @click="typeClick(type)"
      >
        {{ type }}
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TypeView",
  props: {
    msg: String,
    types: Object,
  },
};
</script>

<style scoped lang="scss">
.type {
  float: left;
  z-index: 101;
  width: 100%;
  min-height: 150px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
