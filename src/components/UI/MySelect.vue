<template>
  <div class="custom-select" @click="toggleDropdown" ref="select">
      <div class="custom-select__selected">
          {{ selectedOption?.name || "Выбери криптерий" }}
          <span class="custom-select__arrow" :class="{ open: isOpen }">▼</span>
      </div>
      <ul v-if="isOpen" class="custom-select__list">
          <li v-for="option in options" 
              :key="option.value" 
              @click.stop="selectOption(option)"
              :class="{ active: option.value === modelValue }">
              {{ option.name }}
          </li>
      </ul>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    modelValue: String,
    options: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectedOption = ref(props.options.find(opt => opt.value === props.modelValue) || null)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    emit('update:modelValue', option.value)
    selectedOption.value = option
    isOpen.value = false
}

const closeOnClickOutside = (event) => {
    if (!event.target.closest('.custom-select')) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', closeOnClickOutside)
})
</script>


<style scoped lang="scss">
.custom-select {
  width: 220px;
  position: relative;
  cursor: pointer;
  font-size: 14px;
}

.custom-select__selected {
  padding: 12px;
  border: 2px solid #F3F3F3;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-select__arrow {
  transition: transform 0.3s;
}

.custom-select__arrow.open {
  transform: rotate(180deg);
}

.custom-select__list {
  position: absolute;
  top: 100%;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 5px 0;
}

.custom-select__list li {
  padding: 10px;
  cursor: pointer;
}

.custom-select__list li:hover {
  background: #248c3e;
  color: white;
}

.custom-select__list li.active {
  font-weight: bold;
}
</style>
