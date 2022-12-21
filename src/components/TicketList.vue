<script setup lang="ts">
import { ref } from 'vue'
import Ticket from './Ticket.vue'

defineProps<{ tickets: any }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <Ticket v-for="ticket in tickets"/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
}
</style>
