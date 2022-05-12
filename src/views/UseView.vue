<template>
  <div class="grid justify-content-center mt-6">
    <Card
      class="mt-5 z-1 shadow-6 border-round-bottom w-11 md:w-9 flex flex-column mx-3 bg-teal-300 py-5 text-300"
    >
      <template #header>
        <h2 class="m-3">Imágenes del mundo</h2>
      </template>
      <template #title>Bienvenidos!</template>
      <template #content>
        <p class="text-justify line-height-3 p-2 m-0 text-lg">
          En
          <strong>“Imágenes del mundo”</strong>
          te queremos invitar a participar de un concurso que consiste en buscar y votar la imagen
          que más te guste. Cada voto equivale a 3 puntos para el vendedor. El vendedor que complete
          20 puntos ganará la carrera y el codiciado premio es la posibilidad de crear una factura
          en Alegra con. ¡Empecemos!
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>

<style scoped></style>
