<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <Footer></Footer>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/HeaderView.vue";
import Banner from "@/components/BannerView.vue";
import Footer from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Banner,
    Footer,
  },
};
</script>
