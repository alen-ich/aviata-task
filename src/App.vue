<script setup lang="ts">
import TicketList from './components/TicketList.vue'
import CompanyFilter from './components/CompanyFilter.vue'
</script>

<template>
  <div class="flex gap-x-5">
    <div class="flex flex-col"></div>
    <TicketList msg="Vite + Vue" />
    <CompanyFilter />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
