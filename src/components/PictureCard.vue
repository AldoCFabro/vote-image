<template>
  <Card class="mt-5 z-1 shadow-6 border-round-bottom flex flex-column mx-3">
    <template #header>
      <picture>
        <img
          style="height: 330px; object-fit: cover; padding: 1rem"
          :src="item.webformatURL"
          alt="imagen a votar"
        />
      </picture>
    </template>
    <template #title>{{ item.name }}</template>
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
import { ref, defineProps, computed, reactive } from 'vue';
import { IShowInfoCard } from '../models/Game';
const props = defineProps(['item']);
const item: IShowInfoCard = reactive(props.item);
const firsName = computed(() => `${item.name.split(' ')[0]}`);
const vote = () => console.log(item.name, item.id);
</script>

<style scoped></style>
