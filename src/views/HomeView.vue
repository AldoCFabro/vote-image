<template>
  <Search @Input-Empty="InputSearchEmpty($event)" />
  <div class="result w-full flex flex-wrap justify-content-center">
    <FoundImage class="w-full flex flex-wrap justify-content-center" v-show="showResult" />
    <NotFoundImage v-show="!showResult && !emptyInput" />
  </div>
</template>

<script setup lang="ts">
import Search from '../components/Search.vue';
import FoundImage from '../components/FoundImage.vue';
import NotFoundImage from '../components/NotFoundImage.vue';
import { usePixabayStore } from './../stores/pixabayStore';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const emptyInput = ref(true);
const PixabayStore = usePixabayStore();
const { getImage } = storeToRefs(PixabayStore);
const showResult = computed(() => getImage.value.length > 0);
const InputSearchEmpty = (event: any) => {
  emptyInput.value = event;
};
</script>

<style scoped></style>
