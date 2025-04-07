<script setup>
import { AppState } from '@/AppState.js';
import PodCard from '@/components/PodCard.vue';
import { podsService } from '@/services/PodsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const pods = computed(() => AppState.pods)

onMounted(() => {
  getPods()
})

async function getPods() {
  try {
    await podsService.getPods()
  } catch (error) {
    Pop.error(error, 'Could not get pods')
    logger.error('COULD NOT GET PODS', error)
  }
}

</script>

<template>
  <div class="container-fluid">
    <div class="row ocean-bg">
      <div class="col-12">
        <h1 class="text-center lobster-font text-light">Podsplash</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="lobster-font my-3">Find your Pod</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="pod in pods" :key="pod.id" class="col-md-6">
        <PodCard :pod />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ocean-bg {
  background-image: url(https://images.unsplash.com/photo-1710744722644-2114b2624557?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  min-height: 60dvh;
  background-size: cover;

  .col-12 {
    place-content: center;
  }
}

h1 {
  text-shadow: 1px 4px 3px black;
}
</style>
