<template>
  <div class="layout bg-white">
    <Header></Header>
    <div class="relative">
      <!-- <ProgressSpinner /> -->
      <router-view></router-view>
      <Menu class="fixed bottom-0 left-0 p-4 font-bold text-white w-full md:hidden"></Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import ProgressSpinner from 'primevue/progressspinner';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useSellersStore } from './stores/sellerStore';
const sellerStore = useSellersStore();

onMounted(async () => {
  sellerStore.searchSellerFromApi();
});
const { activeSellers } = storeToRefs(sellerStore);
</script>

<style>
@import 'primevue/resources/themes/tailwind-light/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';
@import '/node_modules/primeflex/primeflex.css';

html,
body,
.app {
  font-family: Arial, Helvetica, sans-serif;
  overflow: hidden;
  min-width: 320px;
  max-width: 1800px;
  margin: 0;
  padding: 0;
  margin: auto;
}
html {
  background-color: rgba(44, 58, 66, 0.85);
}
</style>
