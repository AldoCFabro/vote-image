<template>
  <h1>Home View</h1>
  <h2>total count: {{ counterStore.count }}</h2>
  <h2>total change: {{ counterStore.numberChange }}</h2>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counterStore';
const counterStore = useCounterStore();
</script>

<style scoped></style>
