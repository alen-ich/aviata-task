<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{ date: any, dateDiff?: number }>()

onMounted(() => {
    const dateValue = new Date(props.date)
    dateData.value = dateValue.getDate() + " " + monthNames[dateValue.getMonth()] + ", " + dayNames[dateValue.getDay()]
    timeData.value = adjustTime()
})

const adjustTime = () => {
    return props.date.split(" ")[1].length === 4 ? ("0" + props.date.split(" ")[1]) : props.date.split(" ")[1]
}

const dateData = ref()
const timeData = ref()
const monthNames = ["янв", "фев", "мар", "апр", "мая", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"
]
const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
</script>

<template>
    <div class="flex items-start">
        <div class="flex flex-col items-center text-deep-dark">
            <div class="text-xs">{{ dateData }}</div>
            <div class="text-2xl font-semibold">{{ timeData }}</div>
        </div>
        <div v-if="dateDiff" class="text-bright-red text-[10px] leading-[14px] font-semibold h-4 mt-[2px] ml-[-2px]">+{{ dateDiff }}</div>
    </div>
</template>

<style scoped>

</style>
