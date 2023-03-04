<template>
  <div class="header">
    <img class="headerimg" :src="headerimg" />
  </div>
</template>

<script>
import headerimg from "@/assets/HeaderImage.jpg";

export default {
  name: "HeaderView",
  props: {
    msg: String,
  },
  data: function () {
    return {
      headerimg,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: auto;
  min-height: 100px;
  text-align: left;
}

.headerimg {
  width: 100%;
}
</style>
