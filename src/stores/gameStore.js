// stores/counter.js
import { defineStore } from "pinia";

export const useGameStore = defineStore("game-store", {
  state: () => {
    return { win: false };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    winGame() {
      this.win = true;
    },
  },
});
