<script setup lang="ts">
import { ref, watch } from 'vue'

interface Option {
    name: string;
    value: string;
}

const optionsArr = ref<Array<Option>>([
    {
        name: "Только прямые",
        value: "filterByDirect"
    },
    {
        name: "Только с багажом",
        value: "filterByBaggage"
    },
    {
        name: "Только возвратные",
        value: "filterByRefund"
    }
])

const airlineFilter = ref([] as Array<string>)
const optionsFilter = ref([] as Array<string>)

const resetFilters = () => {
    airlineFilter.value = [] as Array<string>
    optionsFilter.value = [] as Array<string>
}

const props = defineProps<{ airlines?: any, filtersResetStatus: boolean, mode: string }>()
const emit = defineEmits<{
    (e: 'filterByAirline', airlines: Array<string>): void,
    (e: 'filterByOption', options: Array<string>): void
}>()

watch(() => props.filtersResetStatus, () => {
    if (props.filtersResetStatus) {
        airlineFilter.value = ['']
    }
})

watch(airlineFilter, () => {
    const resultOptions = Array.from(airlineFilter.value)
    emit('filterByAirline', resultOptions)
})

watch(() => props.filtersResetStatus, () => {
    if (props.filtersResetStatus) {
        optionsFilter.value = [] as Array<string>
    }
})

watch(optionsFilter, () => {
    const resultOptions = Array.from(optionsFilter.value)
    emit('filterByOption', resultOptions)
})
</script>

<template>
    <div class="flex flex-col bg-beige text-deep-dark pt-3 pr-1 pb-4 gap-y-5 w-72 xl:w-60 rounded" :class="{'h-80': mode === 'airline'}">
        <div class="flex justify-between items-center pl-3 pr-2">
            <h4 v-if="mode === 'airline'" class="text-sm font-bold">Авиакомпании</h4>
            <h4 v-else class="text-sm font-bold">Опции тарифа</h4>
            <button type="button" id="close-filter" @click="resetFilters" class="tooltip">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="close-filter-icon" fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z"
                        fill="#B9B9B9" />
                </svg>
                <span class="tooltiptext text-deep-dark text-xs bg-white py-3">Сбросить выбор</span>
            </button>

        </div>
        <div v-if="mode === 'airline'" class="flex flex-col overflow-y-auto h-full filter-option-list">
            <label
                class="flex gap-x-3 items-center cursor-pointer custom-label text-deep-dark text-xs hover:bg-deep-beige py-[10px] pl-3"
                v-for="(airline, code) in airlines">
                <span class="w-3 h-3 bg-white rounded-sm border-[1px] border-solid border-grey relative checkbox-custom"
                    :class="{ 'bg-bright-green border-bright-green checkbox-custom-checked': airlineFilter.includes(code.toString()) }"></span>
                <input type="checkbox" class="hidden" v-model="airlineFilter" :value="code">
                {{ airline }}
            </label>
        </div>
        <div v-else>
            <label
                class="flex gap-x-3 items-center cursor-pointer custom-label text-deep-dark text-xs pl-3 py-[10px] hover:bg-deep-beige"
                v-for="option in optionsArr">
                <span class="w-3 h-3 bg-white rounded-sm border-[1px] border-solid border-grey relative checkbox-custom"
                    :class="{ 'bg-bright-green border-bright-green checkbox-custom-checked': optionsFilter.includes(option.value) }"></span>
                <input type="checkbox" class="hidden" v-model="optionsFilter" :value="option.value">
                {{ option.name }}
            </label>
        </div>
    </div>
</template>

<style scoped>
#close-filter:hover .close-filter-icon {
    fill: #7284e4;
}

.custom-label:hover .checkbox-custom::before {
    content: url("../assets/mark-icon.svg");
    width: 8px;
    height: 8px;
    position: absolute;
    top: -9px;
    left: 1px;
}

.checkbox-custom-checked::before {
    content: url("../assets/mark-white.svg");
    width: 8px;
    height: 8px;
    position: absolute;
    top: -9px;
    left: 1px;
}

.custom-label:hover .checkbox-custom-checked::before {
    content: url("../assets/mark-white.svg");
    width: 8px;
    height: 8px;
    position: absolute;
    top: -9px;
    left: 1px;
}

.filter-option-list::-webkit-scrollbar {
    width: 2px;
}

.filter-option-list::-webkit-scrollbar-thumb {
    background: #e1e1e1;
}
</style>
