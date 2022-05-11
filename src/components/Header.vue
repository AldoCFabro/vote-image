<template>
  <div class="header grid align-items-center justify-content-between bg-teal-300 shadow-3">
    <div class="col-12 md:col-6">
      <h1 class="md:ml-3 text-center md:text-left text-white">
        {{ title }}
      </h1>
    </div>
    <div class="hidden md:col-6 md:pr-3 md:block md:text-right">
      <Menu></Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from '../components/Menu.vue';
import { ref } from 'vue';
const title = ref('Imágenes del mundo');
</script>

<style lang="scss" scoped></style>
