<template>
  <div class="layout z-0">
    <Header />
    <div class="relative bg-white mb-8">
      <div
        v-show="isLoading"
        class="w-full align-content-center min-h-screen"
        :class="{ 'flex': isLoading }"
      >
        <ProgressSpinner class="justify-content-center align-self-center" />
      </div>
      <div v-show="!isLoading">
        <router-view></router-view>
      </div>

      <Message
        v-show="hasError.length"
        severity="error"
        class="fixed top-0 right-0 font-bold z-6 align-content-center"
      >
        {{ hasError }}
      </Message>
      <Message
        v-show="message.length"
        severity="info"
        class="fixed top-0 right-0 font-bold z-6 align-content-center"
      >
        {{ message }}
      </Message>

      <WinnerModal />
      <Menu class="fixed bottom-0 font-bold text-white w-full md:hidden z-5"></Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';
import WinnerModal from './components/WinnerModal.vue';
import { onMounted } from 'vue';
import { useSellersStore } from './stores/sellerStore';
import { useAppStore } from './stores/appStore';
import { useGameStore } from './stores/gameStore';
import { storeToRefs } from 'pinia';
const sellerStore = useSellersStore();
const appStore = useAppStore();
const gameStore = useGameStore();
const { isLoading } = storeToRefs(appStore);
const { hasError, message } = storeToRefs(gameStore);

onMounted(async () => {
  await sellerStore.getSellerFromApi();
});
</script>

<style>
@import 'primevue/resources/themes/lara-light-teal/theme.css';
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
