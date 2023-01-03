<template>
  <div class="footer">
    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <!--footer畫面左區-->
        <div class="col-sm-12 col-md-7">
          <h3>Find Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button
            @click="gostores"
            class="btn custom-btn btn-outline-primary mr-4"
          >
            Stores Information
          </button>
        </div>
        <!--footer畫面右區-->
        <div class="col-sm-12 col-md-4 m-3">
          <img src="/img/layout/footer.jpg" alt="" width="300" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterView",
  props: {
    msg: String,
  },
  methods: {
    gostores() {
      this.$router.replace("stores");
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  padding-top: 7rem;
  width: 100%;
  min-height: 500px;
  text-align: left;
  color: #ffffff;
  background-color: darkslategray;
}
</style>
