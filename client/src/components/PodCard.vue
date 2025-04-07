<script setup>
import { Pod } from '@/models/Pod.js';

defineProps({
  pod: { type: Pod, required: true }
})
</script>


<template>
  <div class="bg-light rounded-pill shadow-lg mb-3 d-flex">
    <img :src="pod.coverImg" :alt="'Cover image for ' + pod.name" class="pod-img">
    <div class="p-3">
      <b>{{ pod.name }}</b>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.rounded-pill {
  overflow: hidden;
}

.pod-img {
  width: 8em;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>