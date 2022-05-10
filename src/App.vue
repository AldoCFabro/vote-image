<template>
  <nav>
    <router-link to="/">Home</router-link>
    {{ ' ' }}
    <router-link to="/ranking">Ranking</router-link>
  </nav>
  <div class="container">
    {{ activeSellers }}
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
