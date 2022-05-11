<template>
  <nav class="bg-teal-300 grid justify-content-center ml-auto m-0">
    <router-link class="mx-2" to="/">
      <i class="pi pi-search font-bold md:mt-4 text-white text-4xl md:text-xl">
        <span class="pl-2 hidden md:inline">Home</span>
      </i>
    </router-link>

    <router-link class="mx-3" to="/ranking">
      <i class="pi pi-check font-bold md:mt-4 text-white text-4xl md:text-xl">
        <span class="pl-2 hidden md:inline">Ranking</span>
      </i>
    </router-link>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="css"></style>
