import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, numberChange: 0 }),
  actions: {
    increment(value: number) {
      this.count += value;
      this.numberChange++;
    },
    decrement(value: number) {
      this.count -= value;
      this.numberChange++;
    },
  },
});
