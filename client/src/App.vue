<script setup>
import { computed } from 'vue';
import { AppState } from './AppState.js';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import AccountSidebar from './components/AccountSidebar.vue';
const account = computed(() => AppState.account)
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row justify-content-end">
        <div class="px-0" :class="account ? 'col-md-10' : 'col-12'">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
  <main class="container-fluid">
    <div class="row flex-grow-1">
      <div v-if="account" class="col-md-2 px-0">
        <aside class="h-100 border-end border-primary">
          <AccountSidebar />
        </aside>
      </div>
      <div class="px-0" :class="account ? 'col-md-10' : 'col-12'">
        <RouterView />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
