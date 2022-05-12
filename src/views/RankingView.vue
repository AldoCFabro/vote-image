<template>
  <div>
    <DataTable
      :value="competitorsSort"
      responsiveLayout="scroll"
      sortMode="single"
      sortField="point"
      :sortOrder="-1"
    >
      <Column field="name" header="Nombre"></Column>
      <Column field="point" header="Puntos"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { storeToRefs } from 'pinia';
import { useGameStore } from './../stores/gameStore';
import { reactive, computed } from 'vue';

const gameStore = useGameStore();
const { getSortCompetitors } = storeToRefs(gameStore);
const competitorsSort = reactive(getSortCompetitors);
</script>

<style lang="scss" scoped></style>
