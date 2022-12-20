<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <div class="flex flex-col items-center pt-3 px-5 pb-[15px] bg-beige rounded-r">
        <div class="text-2xl leading-7 text-deep-dark mb-3">590 240 ₸</div>
        <button type="button"
            class="rounded bg-bright-green w-[200px] h-10 text-white font-bold text-lg leading-[25px] flex justify-center items-center mb-2">Выбрать</button>
        <div class="text-dark flex justify-center items-center text-xs mb-3">
            Цена за всех пассажиров
        </div>
        <div class="flex justify-between w-full items-center">
            <div class="text-deep-dark text-xs">Нет багажа</div>
            <div
                class="flex justify-center items-center rounded-sm bg-light-blue text-deep-blue font-semibold text-xs px-2 py-[3px]">
                + Добавить багаж</div>
        </div>
    </div>
</template>

<style scoped>

</style>
