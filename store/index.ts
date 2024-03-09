import { defineStore, createPinia } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    cart: {
      carts: [],
    },
    isLoading: false,
    tmp: 0,
  }),
  actions: {
    getCart() {},
    addCart() {},
    removeCart() {},
    removeAllCart() {},
    loading() {},
    add() {
      this.tmp++;
    },
    reset() {
      this.tmp = 0;
    },
    minus() {
      this.tmp--;
    },
  },
  getters: {
    getIsLoading: (state) => state.isLoading,
    getCarts: (state) => state.cart,
    getTmp: (state) => state.tmp,
  },
});
