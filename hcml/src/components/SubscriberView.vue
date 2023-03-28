<template>
  <div class="subscriber">
    <div class="details">
      <div class="detailstitle">訂單明細</div>
      <div v-html="details.replace(/\r?\n/g, '<br />')"></div>
      <div class="totalprice">
        <div class="totalpricetitle">總計</div>
        <div class="price">{{ price }}</div>
      </div>
    </div>
    <form>
      <div
        v-for="(data, key) in subscriberInfo"
        :key="key"
        class="subscriberInfo"
      >
        <label>{{ data.label }}</label>
        <input
          :type="data.type"
          :name="data.name"
          :placeholder="data.placeholder"
          :autocomplete="data.autocomplete"
          v-model="data.value"
          @change="(event) => changeInfo(event)"
          @input="(event) => changeInfo(event)"
          required
        />
      </div>
    </form>
    <div class="buttons">
      <button class="button" @click="$emit('subscriber-close')">
        返回上一步
      </button>
      <button class="button" @click="$emit('submitOrder')">送出預購</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriberView",
  props: {
    details: String,
    price: Number,
    subscriber: Object,
    // {
    //   name: "",
    //   office: "",
    //   phone: "",
    //   email: "",
    // }
  },
  data() {
    return {
      subscriberInfo: {
        name: {
          label: "姓名",
          type: "text",
          placeholder: "請輸入您的姓名",
          autocomplete: "name",
          value: this.subscriber.name,
          name: "name",
        },
        office: {
          label: "寢室/處室",
          type: "text",
          placeholder: "請輸入您的寢室/處室",
          autocomplete: "office",
          value: this.subscriber.office,
          name: "office",
        },
        phone: {
          label: "手機",
          type: "tel",
          placeholder: "09XXXXXXXX",
          autocomplete: "tel",
          value: this.subscriber.phone,
          name: "phone",
        },
        email: {
          label: "電子信箱",
          type: "email",
          placeholder: "請輸入您的電子信箱",
          autocomplete: "email",
          value: this.subscriber.email,
          name: "email",
        },
      },
    };
  },
  emits: ["subscriber-close", "info-change", "submitOrder"],
  methods: {
    changeInfo(event) {
      var key = event.target.name;
      var data = event.target.value;
      this.$emit("info-change", key, data);
    },
  },
};
</script>

<style lang="scss" scoped>
.subscriber {
  float: left;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  min-height: 70vh;
  position: relative;
  z-index: 100;
  background: #f8fce3;

  @media only screen and (min-width: 660px) {
    min-height: calc(100vh - 500px);
  }

  .details {
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .detailstitle {
      float: left;
      width: 100%;
      padding: 0.5rem 0;
      margin: 0.5rem 0;
      background: #0003;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    .totalprice {
      float: left;
      width: auto;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .totalpricetitle {
        float: left;
        font-size: 1.3rem;
        font-weight: 400;
      }
    }
  }

  .subscriberInfo {
    float: left;
    width: 100%;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      float: left;
      width: 50%;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: left;
    }

    input {
      float: left;
      width: 50%;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
      border: 1px solid #0003;
      border-radius: 0.5rem;
      outline: none;
      transition: all 0.2s ease-in-out;

      &:focus {
        border: 1px solid #000;
      }
    }
  }
}
</style>
