<script setup lang="ts">
import { computed } from 'vue';
import TicketDate from './TicketDate.vue'
import TicketDestination from './TicketDestination.vue'

const props = defineProps<{ ticketData: any, airlines: any }>()

const airlineLogo = computed(() => {
    return `https://aviata.kz/static/airline-logos/80x80/${props.ticketData.validating_carrier}.png`
})

const depDate = props.ticketData.itineraries[0][0].dep_date
const arrDate = props.ticketData.itineraries[0][0].arr_date
const dateDiff = computed(() => {
    const depDateValue = new Date(depDate)
    const arrDateValue = new Date(arrDate)
    return (arrDateValue.getDate() - depDateValue.getDate())
})
</script>

<template>
    <div class="flex flex-col xl:flex-row justify-between rounded shadow-[0_2px_4px_rgba(0,0,0,0.15)] bg-white w-full">
        <div class="flex flex-col gap-y-[46px] pt-[18px] xl:pt-10 pb-7 xl:pb-4 px-5 xl:pl-11 xl:pr-0">
            <div class="hidden xl:flex flex-col xl:flex-row items-center">
                <div class="flex gap-x-3 items-center">
                    <img :src="airlineLogo" alt="" width="16" height="20">
                    <div class="text-deep-dark font-semibold text-sm w-[100px]">
                        {{ ticketData.itineraries[0][0].carrier_name }}
                    </div>
                </div>
                <div class="flex flex-col xl:flex-row xl:gap-x-8 relative">
                    <TicketDate :date="depDate" />
                    <TicketDestination :ticket-data="ticketData" />
                    <TicketDate :date="arrDate" :date-diff="dateDiff" />
                </div>
            </div>
            <div class="flex xl:hidden flex-col">
                <div class="flex justify-between mb-7">
                    <div class="flex gap-x-3 items-center">
                        <img :src="airlineLogo" alt="" width="16" height="20">
                        <div class="text-deep-dark font-semibold text-sm w-[100px]">
                            {{ ticketData.itineraries[0][0].carrier_name }}
                        </div>
                    </div>
                    <div class="flex w-full items-center justify-end">
                        <div v-if="ticketData.services.hasOwnProperty('0PC')"
                            class="text-deep-dark text-xs w-[66px] text-center">Нет багажа</div>
                        <div v-else-if="ticketData.services.hasOwnProperty('20KG')"
                            class="text-deep-dark text-xs w-[66px] text-center">{{ ticketData.services['20KG'].alt_text
                            }}</div>
                        <div v-else-if="ticketData.services.hasOwnProperty('1PC')"
                            class="text-deep-dark text-xs w-[66px] text-center">{{ ticketData.services['1PC'].alt_text
                            }}</div>
                    </div>
                </div>
                <div class="flex justify-between mb-8">
                    <TicketDate :date="depDate" />
                    <TicketDate :date="arrDate" :date-diff="dateDiff" />
                </div>
                <TicketDestination :ticket-data="ticketData" />
            </div>
            <div class="gap-x-11 hidden xl:flex">
                <div class="flex gap-x-3 items-center">
                    <div class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer">Детали
                        перелета</div>
                    <div class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer">Условия
                        тарифа</div>
                </div>
                <div v-if="!ticketData.refundable" class="flex gap-x-2 items-center text-dark text-xs">
                    <img src="../assets/non-ref.svg" alt="" width="16" height="16">
                    невозвратный
                </div>
            </div>
        </div>
        <div
            class="flex flex-col items-center pt-4 xl:pt-3 px-11 xl:px-5 pb-4 bg-beige rounded-b xl:rounded-r gap-y-3 xl:gap-y-0">
            <div class="text-2xl leading-7 text-deep-dark xl:mb-3">{{ ticketData.price }} <span class="text-lg">₸</span>
            </div>
            <button type="button"
                class="rounded bg-bright-green w-[200px] h-10 text-white font-bold text-lg leading-[25px] flex justify-center items-center xl:mb-2">Выбрать</button>
            <div class="text-dark flex justify-center items-center text-xs xl:mb-3">
                Цена за всех пассажиров
            </div>
            <div class="hidden xl:flex w-full items-center gap-x-3 justify-center">
                <div v-if="ticketData.services.hasOwnProperty('0PC')"
                    class="text-deep-dark text-xs w-[66px] text-center">Нет багажа</div>
                <div v-else-if="ticketData.services.hasOwnProperty('20KG')"
                    class="text-deep-dark text-xs w-[66px] text-center">{{ ticketData.services['20KG'].alt_text }}</div>
                <div v-else-if="ticketData.services.hasOwnProperty('1PC')"
                    class="text-deep-dark text-xs w-[66px] text-center">{{ ticketData.services['1PC'].alt_text }}</div>
                <div
                    class="flex justify-center items-center rounded-sm bg-light-blue text-deep-blue font-semibold text-xs px-2 py-[3px]">
                    + Добавить багаж</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
