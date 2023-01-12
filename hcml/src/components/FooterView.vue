<template>
  <div class="footer">
    <img class="footerimg" :src="footerimg" />
    <div class="copyrightdiv">
      <p class="copyright">
        本網站著作由國立臺灣師範大學竹苗地區同鄉校友會擁有
      </p>
    </div>
  </div>
</template>

<script>
import footerimg from "@/assets/FooterImage.jpg";

export default {
  name: "FooterView",
  props: {
    msg: String,
  },
  data: function () {
    return {
      footerimg,
    };
  },
};
</script>

<style scoped lang="scss">
.footer {
  float: left;
  width: 100%;
  color: black;
  height: auto;
  min-height: 100px;
  position: relative;
}

.footerimg {
  z-index: 0;
  width: 100%;
  position: relative;
}
.copyrightdiv {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 0;
  width: 100%;
  min-height: 100%;
  opacity: 80%;
  background-color: lightgray;
}
.copyright {
  text-align: center;
  color: black;
  font-size: smaller;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
