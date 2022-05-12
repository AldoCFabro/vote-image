<template>
  <Dialog header="Ganador" v-model:visible="open" :style="{ width: '50vw' }" :modal="true">
    <p class="m-0">
      <h2 class="">Felicitaciones!! {{getWinner?.name}} eres el ganador con {{getWinner?.point}} puntos</h2>
    </p>
    <template #footer>
      <Button label="volver a jugar" icon="pi pi-check" @click="closeModal" autofocus />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { storeToRefs } from 'pinia';
import { computed} from 'vue';
import { useGameStore } from "./../stores/gameStore";
import { useSellersStore } from "./../stores/sellerStore";

const gameStore = useGameStore()
const sellersStore = useSellersStore()
const {getWinner} = storeToRefs(gameStore)

let open =  computed(()=>getWinner.value != null)

const closeModal = () => {
  sellersStore.createInvoice()
 gameStore.reset()
};
</script>

<style scoped></style>
