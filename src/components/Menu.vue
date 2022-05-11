<template>
  <nav class="bg-teal-300 grid justify-content-center ml-auto z-5">
    <router-link class="text-white mx-3 p-2 mx-2" to="/">
      <i class="pi pi-search font-bold text-white text-4xl md:text-xl">
        <span class="pl-2 hidden md:inline">Buscar</span>
      </i>
    </router-link>

    <router-link class="text-white mx-3 p-2" to="/ranking">
      <i class="pi pi-check font-bold text-4xl md:text-xl">
        <span class="pl-2 hidden md:inline">Ranking</span>
      </i>
    </router-link>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
nav a:hover {
  border: solid 1px white;
  border-radius: 10px;
}
</style>
