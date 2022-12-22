<script setup lang="ts">
import { computed } from 'vue'
import { TicketInterface } from '../interfaces/Ticket';

const props = defineProps<{ ticketData: TicketInterface }>()

const flightOrigin = computed(() => props.ticketData.itineraries[0][0].segments[0].origin_code)
const flightDest = computed(() => {
    const length = props?.ticketData?.itineraries[0][0].segments.length
    return props?.ticketData?.itineraries[0][0].segments[length - 1].dest_code
})

const flightDurHour = computed(() => getDurHour(props.ticketData.itineraries[0][0].traveltime))
const flightDurMinute = computed(() => getDurMinute(props.ticketData.itineraries[0][0].traveltime))

const getDurHour = (seconds: number) => Math.floor(seconds / 3600)
const getDurMinute = (seconds: number) => (seconds - Math.floor(seconds / 3600) * 3600) / 60

const flightLayovers = computed(() => props.ticketData.itineraries[0][0].layovers.slice(0, -1))
const flightTransits = computed(() => props.ticketData.itineraries[0][0].segments.slice(0, flightLayovers.value.length))
</script>

<template>
    <div class="flex flex-col items-center">
        <div class="flex justify-between w-full mb-5 xl:mb-[6px] gap-x-11">
            <div class="flex text-grey text-[10px] leading-3">{{
                    flightOrigin
            }}</div>
            <div class="text-deep-dark text-xs">{{ flightDurHour }} ч {{ flightDurMinute }} м</div>
            <div class="flex text-grey text-[10px] leading-3">{{
                    flightDest
            }}</div>
        </div>
        <div class="relative flex justify-between w-full mb-5 xl:mb-1">
            <div class="w-full h-[1px] bg-grey absolute top-[2px] z-0"></div>
            <div class="w-[5px] h-[5px] border-[1px] border-solid border-grey rounded-full bg-white z-10">
            </div>
            <div v-for="stop in ticketData.itineraries[0][0].stops"
                class="w-[5px] h-[5px] border-[1px] border-solid border-grey rounded-full bg-white z-10">
            </div>
            <div class="w-[5px] h-[5px] border-[1px] border-solid border-grey rounded-full bg-white z-10">
            </div>
        </div>
        <div v-if="ticketData.itineraries[0][0].stops > 0" class="flex flex-col justify-center text-orange-yellow">
            <div v-for="(layover, layoverIdx) in flightLayovers" class="text-xs">
                через {{ flightTransits[layoverIdx].dest }}, {{ getDurHour(layover) }} ч {{
        getDurMinute(layover)
                }} м
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
