<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{ date: any }>()

onMounted(() => {
    const dateValue = new Date(props.date)
    dateData.value = dateValue.getDate() + " " + monthNames[dateValue.getMonth()] + ", " + dayNames[dateValue.getDay()]
    timeData.value = props.date.split(" ")[1]
})

const dateData = ref()
const timeData = ref()
const monthNames = ["янв", "фев", "мар", "апр", "мая", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"
]
const dayNames = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
</script>

<template>
    <div class="flex flex-col items-center text-deep-dark">
        <div class="text-xs">{{ dateData }}</div>
        <div class="text-2xl font-semibold">{{ timeData }}</div>
    </div>
</template>

<style scoped>

</style>
