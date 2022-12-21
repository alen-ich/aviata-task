<script setup lang="ts">
import TicketDate from './TicketDate.vue'

defineProps<{ ticketData: any }>()
</script>

<template>
    <div class="flex justify-between rounded shadow-[0_2px_4px_rgba(0,0,0,0.15)] bg-white w-[880px]">
        <div class="flex flex-col gap-y-[46px] pt-10 pb-4 pl-11">
            <div>
                <div class="flex items-center">
                    <div class="flex gap-x-3 items-center">
                        <img src="https://aviata.kz/static/airline-logos/80x80/KC.png" alt="" width="16" height="20">
                        <div class="text-deep-dark font-semibold text-sm w-[100px]">
                            Air Astana
                        </div>
                    </div>
                    <div class="flex gap-x-8">
                        <TicketDate />
                        <TicketDate />
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="flex">
                    <div>Детали перелета</div>
                    <div>Условия тарифа</div>
                </div>
                <div>невозвратный</div>
            </div>
        </div>
        <div class="flex flex-col items-center pt-3 px-5 pb-[15px] bg-beige rounded-r">
            <div class="text-2xl leading-7 text-deep-dark mb-3">{{ ticketData.price }} ₸</div>
            <button type="button"
                class="rounded bg-bright-green w-[200px] h-10 text-white font-bold text-lg leading-[25px] flex justify-center items-center mb-2">Выбрать</button>
            <div class="text-dark flex justify-center items-center text-xs mb-3">
                Цена за всех пассажиров
            </div>
            <div class="flex w-full items-center gap-x-3 justify-center">
                <div v-if="ticketData.services.hasOwnProperty('0PC')" class="text-deep-dark text-xs">Нет багажа</div>
                <div v-else-if="ticketData.services.hasOwnProperty('20KG')"  class="text-deep-dark text-xs">{{ ticketData.services['20KG'].alt_text }}</div>
                <div v-else-if="ticketData.services.hasOwnProperty('1PC')"  class="text-deep-dark text-xs">{{ ticketData.services['1PC'].alt_text }}</div>
                <div
                    class="flex justify-center items-center rounded-sm bg-light-blue text-deep-blue font-semibold text-xs px-2 py-[3px]">
                    + Добавить багаж</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
