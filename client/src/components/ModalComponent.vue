<script setup>
defineProps({
  modalId: { type: String, required: true },
  modalTitle: { type: String, required: true },
  showFooter: { type: Boolean, default: false },
  modalSize: { type: String, default: '' }
})
</script>


<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalId + 'Label'" aria-hidden="true">
    <div class="modal-dialog" :class="modalSize">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="modalId + 'Label'">{{ modalTitle }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div v-if="showFooter" class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>