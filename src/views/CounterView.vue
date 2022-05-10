<template>
  <h1>counter View</h1>
  <h2>{{ showNumber }}</h2>
  <div class="actions">
    <input type="text" v-model="inputNumber" />
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useCounterStore } from '../stores/counterStore';
const counterStore = useCounterStore();
const inputNumber = ref(0);

const showNumber = computed(() => counterStore.count);
const parseNumber = computed(() => parseInt(inputNumber.value.toString()));

const increment = () => {
  counterStore.increment(parseNumber.value);
};

const decrement = () => {
  counterStore.decrement(parseNumber.value);
};
</script>

<style lang="scss" scoped></style>
