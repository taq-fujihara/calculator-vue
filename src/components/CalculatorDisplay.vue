<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  firstOperand: {
    type: Number,
    required: true,
  },
  secondOperand: {
    type: Number,
    required: true,
  },
  operator: {
    type: String,
  },
})

const emit = defineEmits(['result'])

const caluculations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => {
    if (b === 0) {
      return '0除算'
    }
    return a / b
  },
}

const result = computed(() => {
  const c = caluculations[props.operator] || (() => 0)
  return c(props.firstOperand, props.secondOperand)
})

watch(result, (value) => {
  emit('result', value)
})
</script>

<template>
  <div class="display">
    <div class="display__operand" :class="{'display__operand--active': operator === ''}">
      {{ $filters.number(firstOperand) }}</div>
    <div class="display__operator" :class="{'display__operator--undecided': operator === ''}">
      {{ $filters.operator(operator) }}
    </div>
    <div class="display__operand" :class="{'display__operand--active': operator !== ''}">
      {{ $filters.number(secondOperand) }}
    </div>
    <div>=</div>
    <div class="display__result" :class="{'display__result--error': isNaN(result)}">
      {{ $filters.number(result )}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.display {
  display: flex;
  align-items: baseline;

  div {
    margin-right: 16px;
  }

  &__operand,
  &__result {
    font-size: 32px;
  }

  &__operand {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;

    &--active {
      border: 3px solid orange;
      border-radius: 8px;
    }
  }

  &__operator {
    font-size: 24px;

    &--undecided {
      color: gainsboro;

      &::after {
        content: '＋';
      }
    }
  }

  &__result {
    &--error {
      color: red;
    }
  }
}
</style>
