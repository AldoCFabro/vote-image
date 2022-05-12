<template>
  <div>
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
