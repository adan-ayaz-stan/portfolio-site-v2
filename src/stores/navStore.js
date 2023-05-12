// stores/counter.js
import { defineStore } from "pinia";

export const useNavStore = defineStore("nav-store", {
  state: () => {
    return { activeElement: "_hello" };
  },
  actions: {
    setActiveElement(element) {
      this.activeElement = element;
    },
  },
});
