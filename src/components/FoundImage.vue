<template>
  <div v-for="item in images" :key="item.id">
    <PictureCard class="w-25rem md:w-20rem" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PictureCard from '../components/PictureCard.vue';
import { usePixabayStore } from '../stores/pixabayStore';

const PixabayStore = usePixabayStore();
const { getImage: images } = storeToRefs(PixabayStore);
</script>

<style scoped></style>
