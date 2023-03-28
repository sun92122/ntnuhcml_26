<template>
  <div class="warn">
    <div class="close">
      <button @click="$emit('warn-close')">x</button>
    </div>
    <div class="warntextdiv">
      <div class="warntext">
        <h1>歡迎光臨2023竹苗文化週</h1>
        <h2>本網站為僅有訂購功能，竹苗週的唯一收款方式為預購及正式週攤位</h2>
        <h2>若有任何問題，請洽詢竹苗文化週官方</h2>
        <text>防詐騙公告、資料使用說明...</text>
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0.5px solid #e5e5e5;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fed18dbb;
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

    .warntext {
      font-size: 1rem;
      font-weight: 500;
      color: #000;
      margin-left: 3rem;
      margin-right: 3rem;
      text-align: left;
    }
  }
}

.close {
  background-color: initial;
  position: relative;
  align-self: flex-end;

  button {
    border: white;
    width: 50px;
    height: 50px;
    background-color: initial;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: black;
  }
}
</style>
