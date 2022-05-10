<template>
  <Header></Header>
  <nav>
    <router-link to="/">Home</router-link>
    {{ ' ' }}
    <router-link to="/ranking">Ranking</router-link>
  </nav>
  <div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
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
@import 'primevue/resources/themes/saga-blue/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';
@import '/node_modules/primeflex/primeflex.css';

html,
body,
.app {
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
  background-color: #f4f5fb;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: #f4f5fb;
}
</style>
