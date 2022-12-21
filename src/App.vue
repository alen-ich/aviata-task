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
const displayFlights = ref()

const readJSON = () => {
  fetch("../../results.json")
    .then((response) =>
      response.json()
    ).then((data) => {
      dataAirlines.value = data.airlines
      dataFlights.value = data.flights
      displayFlights.value = data.flights
    }
    )
}

const filtersResetStatus = ref(false)

const resetAllFilters = () => {
  filtersResetStatus.value = true
  readJSON()
  setTimeout(() => {
    filtersResetStatus.value = false
  }, 500)
}

const filterTickets = (filters: Array<any>) => {
  console.log(filters)
  if (filters.length) {
    let result = [] as any
    if (filters.includes('direct')) {
      result = result.concat(dataFlights.value.filter((e: any) => {
        return !e.itineraries[0][0].layovers.length
      }))
    }
    if (filters.includes('baggage')) {
      result = result.concat(dataFlights.value.filter((e: any) => {
        return !e.services.hasOwnProperty('0PC')
      }))
    }
    dataFlights.value = result
  } else readJSON()
}

const filterByDirect = (flights: Array<any>) => {
  return flights.filter((e: any) => !e.itineraries[0][0].layovers.length)
}

const filterByBaggage = (flights: Array<any>) => {
  return flights.filter((e: any) => !e.services.hasOwnProperty('0PC'))
}

const filterByRefundable = (flights: Array<any>) => {
  return flights.filter((e: any) => e.refundable)
}

const filterByAirline = (flights: Array<any>, airline: string) => {
  return flights.filter((e:any) => e.validating_carrier === airline)
}
</script>

<template>
  <div class="flex gap-x-5 relative">
    <div>
      <div class="flex flex-col gap-y-3 sticky top-3">
        <OptionsFilter :filters-reset-status="filtersResetStatus" @filter-by-option="filterTickets" />
        <CompanyFilter :airlines="dataAirlines" :filters-reset-status="filtersResetStatus" @filter-by-airline="filterTickets" />
        <button type="button" class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer"
          @click="resetAllFilters">Сбросить все
          фильтры</button>
      </div>
    </div>
    <TicketList :tickets="displayFlights" :airlines="dataAirlines" />
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
