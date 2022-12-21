<script setup lang="ts">
import { ref } from 'vue'
import TicketDate from './TicketDate.vue'
import TicketPrice from './TicketPrice.vue'

const count = ref(0)
</script>

<template>
    <div class="flex rounded shadow-[0_2px_4px_rgba(0,0,0,0.15)] bg-white">
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
        <TicketPrice />
    </div>
</template>

<style scoped>

</style>
