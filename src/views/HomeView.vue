<template>
  <Search />
  <div class="result grid justify-content-center ml-auto">
    <FoundImage v-show="haveImageShow" />
    <NotFoundImage v-show="!haveImageShow" />
  </div>
</template>

<script setup lang="ts">
import Search from '../components/Search.vue';
import FoundImage from '../components/FoundImage.vue';
import NotFoundImage from '../components/NotFoundImage.vue';
import { useGameStore } from './../stores/gameStore';
import { storeToRefs } from 'pinia';

import { computed } from 'vue';
const gameStore = useGameStore();
const { showImagesCard } = storeToRefs(gameStore);
const haveImageShow = computed(() => showImagesCard.value.length > 0);
</script>

<style scoped></style>
