<template>
  <div class="card">
    <div
      class="flex flex-wrap align-items-center justify-content-center card-container bg-teal-300 shadow-2"
    >
      <div class="w-auto min-h-full p-5 py-0 m-3">
        <h1 class="m-0 text-center text-white">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Imágenes del mundo');
</script>

<style lang="scss" scoped></style>
