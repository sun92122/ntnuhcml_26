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
    <iframe class="iframe" name="iframe"></iframe>
    <form id="fooood" target="iframe" @submit="submit()">
      <div
        v-for="(data, key) in subscriberInfo"
        :key="key"
        class="subscriberInfo"
        @keydown.enter.prevent=""
      >
        <label :for="data.name">{{ data.label }}</label>
        <input
          :type="data.type"
          :name="data.name"
          :id="data.name"
          :placeholder="data.placeholder"
          :autocomplete="data.autocomplete"
          v-model="data.value"
          @change="(event) => changeInfo(event)"
          @input="(event) => changeInfo(event)"
          required
        />
      </div>
      <div v-if="foodorder.count" class="foodtime">
        <div class="foodtitle">
          現做食品取餐時間
          <div v-if="foodorder.count > 1">
            <label for="sametime">所有餐點同時</label>
            <input
              type="checkbox"
              id="sametime"
              name="sametime"
              v-model="foodToOrder.isSameTime"
              @change="changeFood"
            />
          </div>
        </div>
        <div class="w-100" v-if="!foodToOrder.isSameTime">
          <div class="fooddiv" v-for="name in foodorder.foods" :key="name">
            <div class="food">
              <div class="foodname">{{ name }}</div>
              <select
                v-model="foodToOrder.foods[name].date"
                @change="changeFood"
                required
              >
                <option value="">請選擇取餐時間</option>
                <option v-for="date in dates" :key="date">{{ date }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-100" v-if="foodToOrder.isSameTime">
          <div class="fooddiv">
            <div class="food">
              <div class="foodname">所有餐點</div>
              <select
                v-model="foodToOrder.所有餐點.date"
                @change="changeFood"
                required
              >
                <option value="">請選擇取餐時間</option>
                <option v-for="date in dates" :key="date">{{ date }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="buttons">
      <button class="button" @click="$emit('subscriber-close')">
        返回上一步
      </button>
      <button type="sumbit" form="fooood" class="button" @submit.prevent>
        送出預購
      </button>
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
    //   fooood: "",
    // }
    food: Object,
    // {
    //   [name]: {
    //     count: 0,
    //     date: "",
    //   },
    // }
    foodorder: Object,
    // {
    //   count: 0,
    //   foods: [
    //       [name],
    //   ],
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
          label: "系級或處室",
          type: "text",
          placeholder: "請輸入您的系級/處室",
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
      dates: [
        "4/17（一）12:10-12:30",
        "4/17（一）15:10-15:30",
        "4/18（二）12:10-12:30",
        "4/18（二）15:10-15:30",
        "4/19（三）12:10-12:30",
        "4/19（三）15:10-15:30",
        "4/20（四）12:10-12:30",
        "4/20（四）15:10-15:30",
        "4/21（五）12:10-12:30",
        "4/21（五）15:10-15:30",
      ],
      foodToOrder: this.food,
    };
  },
  emits: ["subscriber-close", "info-change", "submit-order"],
  methods: {
    changeInfo(event) {
      var key = event.target.name;
      var data = event.target.value;
      this.$emit("info-change", key, data);
    },
    changeFood() {
      this.$emit("info-change", "fooood", this.foodTime);
    },
    submit() {
      this.changeFood();
      this.$emit("submit-order");
    },
  },
  computed: {
    foodTime() {
      var foodTime = "";
      if (this.foodorder.count === 0) return foodTime;
      var name = "";
      var i = 0;
      if (this.foodToOrder.isSameTime) {
        for (i = 0; i < this.foodorder.count; i++) {
          name = this.foodorder.foods[i];
          foodTime += name + " " + this.food.foods[name].count + "份" + "\n";
        }
        foodTime =
          "所有餐點：" + this.foodToOrder.所有餐點.date + "\n" + foodTime;
        return foodTime;
      }
      for (i = 0; i < this.foodorder.count; i++) {
        name = this.foodorder.foods[i];
        foodTime +=
          name +
          " " +
          this.foodToOrder.foods[name].count +
          "份" +
          "：" +
          this.foodToOrder.foods[name].date +
          "\n";
      }
      return foodTime;
    },
  },
};
</script>

<style lang="scss" scoped>
.iframe {
  display: none;
}
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
      width: 80%;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: left;
    }

    input {
      float: left;
      width: 70%;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1rem;
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

  .buttons {
    float: left;
    width: 100%;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .button {
      float: left;
      width: 40%;
      padding: 0.5rem 0;
      margin: 0.5rem 0.5rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: center;
      background: #0003;
      color: #fff;
      border: none;
      border-radius: 0.5rem;
      outline: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: #000;
      }
    }
  }

  .foodtime {
    float: left;
    width: 100%;
    padding: 0.5rem 0;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .foodtitle {
      float: left;
      width: 80%;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: left;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      label {
        font-size: 1rem;
      }
    }

    .fooddiv {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .food {
      float: left;
      width: 70%;
      padding: 0.2rem 1rem;
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: 400;
      text-align: left;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media only screen and (max-width: 660px) {
        width: 85%;
      }
    }
  }
}
</style>
