<template>
  <div class="layout z-0">
    <Header></Header>
    <div class="relative bg-white">
      <!-- <ProgressSpinner /> -->
      <router-view></router-view>
      <Menu class="fixed bottom-0 left-0 font-bold text-white w-full md:hidden"></Menu>
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
  overflow-x: hidden;
  min-width: 320px;
  min-height: 100vh;
  max-width: 1800px;
  margin: 0;
  padding: 0;
  margin: auto;
}
</style>
