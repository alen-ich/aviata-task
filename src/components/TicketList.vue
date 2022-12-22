<script setup lang="ts">
import { TicketInterface } from '../interfaces/Ticket';
import Ticket from './Ticket.vue'

interface Props {
  tickets?: Array<TicketInterface>,
  airlines?: any
}

const props = withDefaults(defineProps<Props>(), { tickets: () => [], airlines: [] })
</script>

<template>
  <div v-if="tickets.length" class="flex flex-col gap-y-3 w-72 xl:w-[880px]">
    <Ticket v-for="ticket in tickets" :ticket-data="ticket" :id="ticket.id" :airlines="airlines" />
  </div>
  <div v-else class="xl:w-[880px] flex justify-center items-center font-bold text-xl">Билеты не найдены</div>
</template>