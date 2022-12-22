<script setup lang="ts">
import { ref } from 'vue'
import FilterBox from './FilterBox.vue'

interface FilterMain {
    options: Array<string>,
    airlines: Array<string>
}

const props = defineProps<{airlines: any}>()
const emit = defineEmits<{
    (e: 'filterFlights', filters: FilterMain): void
}>()

const filtersResetStatus = ref(false)

const resetAllFilters = () => {
    filtersResetStatus.value = true
    airlinesFilters.value = []
    optionsFilters.value = []
    updateFilters()
}

const filtersAll = ref({
    options: [''],
    airlines: ['']
})
let airlinesFilters = ref([''])
let optionsFilters = ref([''])

const updateFilters = () => {
    filtersAll.value.options = optionsFilters.value
    filtersAll.value.airlines = airlinesFilters.value
    emit('filterFlights', filtersAll.value)
}

const updateOptionsFilters = (options: Array<string>) => {
    optionsFilters.value = options
    updateFilters()
}

const updateAirlinesFilters = (airlines: Array<string>) => {
    airlinesFilters.value =airlines
    updateFilters()
}

</script>

<template>
    <div class="flex flex-col gap-y-3 sticky top-12 mb-5">
        <FilterBox mode="option" :filters-reset-status="filtersResetStatus" @filter-by-option="updateOptionsFilters" />
        <FilterBox mode="airline" :airlines="airlines" :filters-reset-status="filtersResetStatus"
            @filter-by-airline="updateAirlinesFilters"/>
        <button type="button" class="text-blue text-xs border-dashed border-blue border-b-[1px] w-fit cursor-pointer hover:text-deep-blue"
            @click="resetAllFilters">Сбросить все
            фильтры</button>
    </div>
</template>