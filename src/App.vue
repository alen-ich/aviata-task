<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TicketList from './components/TicketList.vue'
import FiltersMain from './components/FiltersMain.vue'

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

const filtersMain = ref({
  options: [''],
  airlines: ['']
})
const filterHelper = {
  filterByDirect: (flights: Array<any>) => {
    return flights.filter((e: any) => !e.itineraries[0][0].layovers.length)
  },
  filterByBaggage: (flights: Array<any>) => {
    return flights.filter((e: any) => !e.services.hasOwnProperty('0PC'))
  },
  filterByRefund: (flights: Array<any>) => {
    return flights.filter((e: any) => e.refundable)
  },
  filterByAirline: (flights: Array<any>, airlines?: Array<string>) => {
    const result = []
    for (let i = 0; i < flights.length; i++) {
      if (airlines) {
        for (let j = 0; j < airlines?.length; j++) {
          if (flights[i].validating_carrier === airlines[j]) {
            result.push(flights[i])
          }
        }
      }
      console.log(result)
    }
    return result
  }
}

const filterDataFlights = (filters: any) => {
  filtersMain.value = filters
}

const displayFlights = computed(() => {
  let result = []
  if (filtersMain.value.airlines.length && filtersMain.value.airlines[0] !== '') {
    result = []
    const filtered = filterHelper['filterByAirline'](dataFlights.value, filtersMain.value.airlines)
    console.log(filtersMain.value.airlines)
    result.push(...filtered)
    
    if (filtersMain.value.options.length && filtersMain.value.options[0] !== '') {
      for (let i = 0; i < filtersMain.value.options.length; i++) {
        result = filterHelper[filtersMain.value.options[i] as keyof typeof filterHelper](result)
      }
    }
  } else {
    result = dataFlights.value
    if (filtersMain.value.options.length && filtersMain.value.options[0] !== '') {
      for (let i = 0; i < filtersMain.value.options.length; i++) {
        result = filterHelper[filtersMain.value.options[i] as keyof typeof filterHelper](result)
      }
    }
  }
  return result
})

onMounted(() => {
  readJSON()
})


</script>

<template>
  <div class="xl:flex xl:flex-row gap-x-5 relative">
    <div>
      <FiltersMain :airlines="dataAirlines" @filter-flights="filterDataFlights" />
    </div>
    {{ filtersMain.airlines }}
    <TicketList :tickets="displayFlights" :airlines="dataAirlines" />
  </div>
</template>