<template>
  <div class="">
    <div v-for="item in getImage" :key="item.id">
      <PictureCard class="w-25rem md:w-20rem" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PictureCard from '../components/PictureCard.vue';
import { usePixabayStore } from '../stores/pixabayStore';

const PixabayStore = usePixabayStore();
const { getImage } = storeToRefs(PixabayStore);
</script>

<style scoped></style>
