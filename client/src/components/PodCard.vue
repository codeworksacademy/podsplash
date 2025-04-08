<script setup>
import { Pod } from '@/models/Pod.js';

defineProps({
  pod: { type: Pod, required: true }
})
</script>


<template>
  <div class="pod-card rounded-pill bg-light mb-3 d-flex" role="button">
    <img :src="pod.coverImg" :alt="'Cover image for ' + pod.name" class="pod-img">
    <div class="p-3">
      <b>{{ pod.name }}</b>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.pod-card {
  overflow: hidden;
  box-shadow: 0 6px 8px #9d9d9d;
  transition: box-shadow .5s ease-in-out;
}

.pod-card:hover {
  box-shadow: 0 6px 6px #6ae1ff;
}

.pod-img {
  width: 8em;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>