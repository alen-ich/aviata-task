<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TicketList from './components/TicketList.vue'
import CompanyFilter from './components/CompanyFilter.vue'
import OptionsFilter from './components/OptionsFilter.vue'

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
  <div class="flex gap-x-5 relative">
    <div>
      <div class="flex flex-col gap-y-3 sticky top-3">
        <OptionsFilter />
        <CompanyFilter :airlines="dataAirlines" />
        <button class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer">Сбросить все
          фильтры</button>
      </div>
    </div>
    <TicketList :tickets="dataFlights" />
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
