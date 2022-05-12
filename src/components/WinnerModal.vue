<template>
  <Dialog header="Ganador" v-model:visible="open" :style="{ width: '50vw' }" :modal="true">
    <p class="m-0">
    <h2 class="">Felicitaciones!! {{ getWinner?.name }} eres el ganador con {{ getWinner?.point }} puntos</h2>
    </p>
    <div class="invoice" v-if="showInfoInvoice">
      <h2 class="mb-0">Datos de facturación:</h2>
      <h3>N°: {{ getInvoice.numberTemplate.fullNumber }}</h3>
      <p class="m-1"> <span class="font-medium">Cliente:</span> {{ getInvoice.client.name }}</p>
      <p class="m-1"> <span class="font-medium">Fecha:</span> {{ getInvoice.date }}</p>
      <p class="m-1"> <span class="font-medium">Vendedor:</span> {{ getInvoice.seller.name }}</p>

    </div>

    <template #footer>
      <Button  class="p-button-link mb-3 border-0" @click="showInvoice">{{switchShowInvoice}}</Button>
      <Button label="volver a jugar" class="w-full" @click="closeModal" autofocus />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { computed } from 'vue';
import { useGameStore } from "./../stores/gameStore";
import { useSellersStore } from "./../stores/sellerStore";

const gameStore = useGameStore()
const { getWinner } = storeToRefs(gameStore)
const sellersStore = useSellersStore()

const showInfoInvoice = ref(false)
const { getInvoice } = storeToRefs(sellersStore);

let open = computed(() => getWinner.value != null);

const closeModal = () => {
  gameStore.reset()
};
const showInvoice = async () => {

  if(!showInfoInvoice.value){
  
  showInfoInvoice.value = true;
  }else{
    showInfoInvoice.value = false;

  }
};

const switchShowInvoice = computed(()=> showInfoInvoice.value ?  "ocultar factura": "ver factura" )
</script>

<style scoped>
</style>
