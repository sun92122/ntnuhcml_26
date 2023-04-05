<template>
  <div class="warn">
    <div class="close">
      <button @click="$emit('warn-close')">x</button>
    </div>
    <div class="warntextdiv">
      <h3 class="title">歡迎光臨2023竹苗文化週</h3>
      <div class="warntext">
        竹苗週的理念是想要推廣新竹苗栗地區的文化，
        透過文化的介紹與特色食物的推廣，
        希望能讓更多的人有機會接觸並認識新竹苗栗的景點與特產。
        而同樣來自竹苗地區的我們，相聚在此， 共同宣揚著家鄉的文化和美食，
        一起為了同個目標奮鬥， 一同築出那最燦爛的夢想。
        <p class="red">
          預購網站僅預購及展示，本次竹苗週唯一收款方式為週系列現場。
        </p>
        <p>
          表單商品除特別標示外皆於 4/26-4/28中午
          取貨，各商品介紹及資訊可點擊商品圖查看。
        </p>
        <div class="closeinfo">點擊空白處關閉</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WarnView",
  props: {
    msg: String,
  },
  emits: ["warn-close"],
};
</script>

<style scoped lang="scss">
.warn {
  max-width: 600px;
  width: 100%;
  min-height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0.5px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px 10px 20px;
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

  .warntextdiv {
    margin-left: 3rem;
    margin-right: 3rem;
    width: 100%;

    .title {
      font-weight: 500;
      color: #000;
      margin-left: 1rem;
      margin-right: 1rem;
      text-align: center;
    }

    .warntext {
      font-size: 1rem;
      font-weight: 500;
      color: #000;
      margin-left: 1rem;
      margin-right: 1rem;
      text-align: left;
      text-indent: 2rem;

      p {
        margin: 0 0 0.5rem;
      }

      .red {
        color: red;
      }

      .closeinfo {
        width: 100%;
        text-align: center;
        font-size: 0.8rem;
        text-indent: 0;
      }
    }
  }
}

.close {
  background-color: initial;
  position: relative;
  align-self: flex-end;

  button {
    border: white;
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: black;
  }
}
</style>
