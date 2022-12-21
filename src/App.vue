<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TicketList from './components/TicketList.vue'
import CompanyFilter from './components/CompanyFilter.vue'

onMounted(() => {
  readJSON()
})
const dataAirlines = ref()
const dataFlights = ref()

const readJSON = () => {
  fetch("../../results.json")
    .then((response) =>
      response.json()
    ).then((data) => {
      dataAirlines.value = data.airlines
      dataFlights.value = data.flights
    }
    )
}
</script>

<template>
  <div class="flex gap-x-5">
    <div class="flex flex-col"></div>
    <TicketList msg="Vite + Vue" />
    <CompanyFilter :airlines="dataAirlines"/>
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
