<template>
  <Card class="mt-5 z-1 shadow-6 border-round-bottom flex flex-column mx-3">
    <template #header>
      <picture>
        <img
          style="height: 330px; object-fit: cover; padding: 1rem"
          :src="props.item.webformatURL"
          alt="imagen a votar"
        />
      </picture>
    </template>
    <template #title>Vendedor: {{ props.item.name }}</template>
    <template #footer>
      <Button class="w-full justify-content-center" @click="vote">
        Votar imagen de {{ firsName }}
      </Button>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import { computed, reactive, ref } from 'vue';
import { useGameStore } from '../stores/gameStore';

const gameStore = useGameStore();
const props = defineProps({ item: { type: Object, required: true, default: () => [] } });
const item = reactive(props.item);
const firsName = computed(() => (item.name ? `${item.name.split(' ')[0]}` : ''));
const vote = () => {
  gameStore.setPointCompetitor(props.item.id, props.item.webformatURL);
};
</script>

<style scoped></style>
