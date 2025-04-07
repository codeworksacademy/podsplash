<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const account = computed(() => AppState.account)
</script>


<template>
  <div>
    <div class="px-3">
      <div class="text-center">
        <img :src="account.picture" alt="It's a picture of you!" class="account-picture border border-primary mb-3">
      </div>
      <div class="text-center">
        <b class="lobster-font fs-4">{{ account.name }}</b>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.account-picture {
  width: 9em;
  max-width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>