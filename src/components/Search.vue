<template>
  <div class="p-fluid grid justify-content-center mt-2 z-5 shadow-6 z-2">
    <div class="field col-10 md:col-8">
      <span class="p-float-label p-input-icon-right">
        <i class="pi pi-search" />
        <InputText
          id="inputtext-right"
          type="text"
          v-model="searchValue"
          @keyup.enter="searchImage"
          @click="clear"
        />
        <label for="inputtext-right">{{ showLabel }}</label>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import { ref, computed, watch } from 'vue';
import { usePixabayStore } from '../stores/pixabayStore';
const emit = defineEmits(['InputEmpty']);
const searchValue = ref('');

const clear = () => (searchValue.value = '');

const imgStore = usePixabayStore();
const searchImage = () => {
  if (searchValue.value === '') return;
  emit('InputEmpty', false);
  imgStore.getImagesFromServer(searchValue.value);
};

watch(searchValue, () => {
  if (searchValue.value === '') {
    emit('InputEmpty', true);
    imgStore.$reset();
  }
});

const showLabel = computed(() =>
  searchValue.value === '' ? 'Buscar Imágenes' : `Buscando imágenes para ${searchValue.value} `
);
</script>

<style scoped></style>
