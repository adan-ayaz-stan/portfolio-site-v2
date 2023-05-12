// stores/counter.js
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects-store", {
  state: () => {
    return { filters: [] };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    addFilter(filter) {
      this.filters.push(filter);
    },
    removeFilter(filter) {
      this.filters = this.filters.filter((ele) => ele != filter);
    },
    resetFilters() {
      this.filters = [];
    },
  },
});
