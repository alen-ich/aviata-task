<script setup lang="ts">
import { ref } from 'vue'
import Ticket from './Ticket.vue'

interface Props {
  tickets?: any,
  airlines?: any
}

const props = withDefaults(defineProps<Props>(), { tickets: [], airlines: [] })

const count = ref(0)
</script>

<template>
  <div v-if="tickets.length" class="flex flex-col gap-y-3 w-72 xl:w-[880px]">
    <Ticket v-for="ticket in tickets" :ticket-data="ticket" :id="ticket.id" :airlines="airlines" />
  </div>
  <div v-else class="xl:w-[880px] flex justify-center items-center font-bold text-xl">Билеты не найдены</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}
</style>
