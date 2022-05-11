<template>
  <Card class="mt-5 z-1 shadow-6 border-round-bottom flex flex-column mx-3">
    <template #header>
      <picture>
        <img
          style="height: 330px; object-fit: cover; padding: 1rem"
          srcset="https://cdn.pixabay.com/photo/2022/02/11/04/46/darter-7006544_960_720.jpg"
          alt="Image Text"
        />
      </picture>
    </template>
    <template #title>Advanced Card</template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
    </template>
    <template #footer class="p-0">
      <i
        class="pi font-bold text-4xl md:text-6x"
        :class="{ 'pi-heart': !classHeart, 'pi-heart-fill': classHeart }"
        @click="like"
      ></i>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { ref, computed } from 'vue';
const heartFill = ref(false);
const classHeart = computed(() => heartFill.value === true);
const like = () => (heartFill.value = !heartFill.value);
</script>

<style scoped>
div > .p-card-body {
  padding: 0;
}
div .p-card-footer i {
  color: red;
  padding: 10px;
}
</style>
