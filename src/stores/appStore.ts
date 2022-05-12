import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({ isLoading: false }),
  actions: {
    setLoading() {
      this.isLoading = true;
    },
    setLoaded() {
      this.isLoading = false;
    },
  },
});
