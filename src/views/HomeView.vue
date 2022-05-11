<template>
  <Search />
  <div class="result grid justify-content-center ml-auto">
    <PictureCard class="w-25rem md:w-20rem"></PictureCard>
    <PictureCard class="w-25rem md:w-20rem"></PictureCard>
  </div>
  footer
</template>

<script setup lang="ts">
import Search from '../components/Search.vue';
import PictureCard from '../components/PictureCard.vue';
</script>

<style scoped></style>
