<template>
    <select :value="modelValue" @change="changeOptions">
        <option disabled value="">Выбери криптерий</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script setup>
import { defineOptions, defineProps } from 'vue'

const emit = defineEmits(['update:modelValue'])

defineOptions({
    name: 'my-select'
})

defineProps({
    modelValue: {
        type: String
    },
    options: {
        type: Array,
        default: () => []
    }
})

const changeOptions = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
select {
    width: 200px;
    padding: 10px;
    font-size: 14px;
    border: 2px solid #F3F3F3;
    border-radius: 8px;
    background-color: white;
    color: #C4C4C4;
    cursor: pointer;
    transition: 0.3s;
}

select:hover {
    border-color: #333;
}

select:focus {
    outline: none;
    border-color: #248c3e;
    box-shadow: 0 0 5px rgba(142, 144, 142, 0.5);
}

option {
    background: white;
    color: #C4C4C4;
    font-size: 14px;
}
</style>
