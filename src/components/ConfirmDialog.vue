<template>
  <h5>Confirmation</h5>
  <Button label="Confirm" icon="pi pi-external-link" @click="openConfirmation" />
  <Dialog
    header="Confirmation"
    v-model:visible="displayConfirmation"
    :style="{ width: '350px' }"
    :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>Are you sure you want to proceed?</span>
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" @click="closeConfirmation" class="p-button-text" />
      <Button
        label="Yes"
        icon="pi pi-check"
        @click="closeConfirmation"
        class="p-button-text"
        autofocus
      />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { ref } from 'vue';
const displayConfirmation = ref(false);
const openConfirmation = () => {
  displayConfirmation.value = true;
};
const closeConfirmation = () => {
  displayConfirmation.value = false;
};
</script>

<style scoped></style>
