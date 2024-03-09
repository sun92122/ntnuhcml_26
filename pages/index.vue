<template>
  <div>
    <p>Home page</p>
    <!-- product section -->
    <!-- <NuxtChild /> -->
  </div>
</template>

<script>
import { useStore } from "../store";
export default {
  name: "Home",
  layout: "default",
  data() {
    return {};
  },
  setup() {
    const store = useStore();
    // const count = computed(() => store.getTmp);
    // const add = store.add;
    // const minus = store.minus;
    // return { count, add, minus };
  },
};
</script>
