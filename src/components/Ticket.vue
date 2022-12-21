<script setup lang="ts">
import { onMounted, ref, computed} from 'vue';
import TicketDate from './TicketDate.vue'

const props = defineProps<{ ticketData: any, airlines: any }>()

const airlineName = computed(()=>{
    return findAirline(props.ticketData.validating_carrier)
})
const airlineLogo = computed(()=>{
    return `https://aviata.kz/static/airline-logos/80x80/${props.ticketData.validating_carrier}.png`
})

const findAirline = (code: string) => {
    return props.airlines[code]
}
</script>

<template>
    <div class="flex justify-between rounded shadow-[0_2px_4px_rgba(0,0,0,0.15)] bg-white w-[880px]">
        <div class="flex flex-col gap-y-[46px] pt-10 pb-4 pl-11">
            <div>
                <div class="flex items-center">
                    <div class="flex gap-x-3 items-center">
                        <img :src="airlineLogo" alt="" width="16" height="20">
                        <div class="text-deep-dark font-semibold text-sm w-[100px]">
                            {{ airlineName }}
                        </div>
                    </div>
                    <div class="flex gap-x-8">
                        <TicketDate :date="ticketData.itineraries[0]['0'].dep_date"/>
                        <TicketDate :date="ticketData.itineraries[0]['0'].arr_date"/>
                    </div>
                </div>
            </div>
            <div class="flex gap-x-11">
                <div class="flex gap-x-3 items-center">
                    <div class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer">Детали перелета</div>
                    <div class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer">Условия тарифа</div>
                </div>
                <div v-if="!ticketData.refundable" class="flex gap-x-2 items-center text-dark text-xs">
                    <img src="../assets/non-ref.svg" alt="" width="16" height="16">
                    невозвратный
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center pt-3 px-5 pb-[15px] bg-beige rounded-r">
            <div class="text-2xl leading-7 text-deep-dark mb-3">{{ ticketData.price }} <span class="text-lg">₸</span></div>
            <button type="button"
                class="rounded bg-bright-green w-[200px] h-10 text-white font-bold text-lg leading-[25px] flex justify-center items-center mb-2">Выбрать</button>
            <div class="text-dark flex justify-center items-center text-xs mb-3">
                Цена за всех пассажиров
            </div>
            <div class="flex w-full items-center gap-x-3 justify-center">
                <div v-if="ticketData.services.hasOwnProperty('0PC')" class="text-deep-dark text-xs w-[66px] text-center">Нет багажа</div>
                <div v-else-if="ticketData.services.hasOwnProperty('20KG')"  class="text-deep-dark text-xs w-[66px] text-center">{{ ticketData.services['20KG'].alt_text }}</div>
                <div v-else-if="ticketData.services.hasOwnProperty('1PC')"  class="text-deep-dark text-xs w-[66px] text-center">{{ ticketData.services['1PC'].alt_text }}</div>
                <div
                    class="flex justify-center items-center rounded-sm bg-light-blue text-deep-blue font-semibold text-xs px-2 py-[3px]">
                    + Добавить багаж</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
