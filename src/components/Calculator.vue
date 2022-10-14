<script setup>
import { ref, computed } from 'vue'

import CalculatorDisplay from './CalculatorDisplay.vue'
import CalculatorPad from './CalculatorPad.vue'

const firstOperand = ref(0)
const secondOperand = ref(0)
const result = ref(0)
const operator = ref('')
const history = ref([])

const recentHistory = computed(() => {
  return history.value.slice(-10)
})

function addToHistory() {
  history.value.push({
    key: new Date().getTime().toString(),
    firstOperand: firstOperand.value,
    secondOperand: secondOperand.value,
    operator: operator.value,
    result: result.value,
  })
}

function pushNumber(value) {
  const push = destination => {
    destination.value = parseInt(
      destination.value.toString() + value,
      10,
    )
  }
  push(operator.value === '' ? firstOperand : secondOperand)
}

function popNumber() {
  const pop = destination => {
    const v = destination.value.toString()
    if (v.length === 1) {
      destination.value = 0
      return
    }

    destination.value = parseInt(
      v.slice(0, -1),
      10,
    )
  }
  pop(operator.value === '' ? firstOperand : secondOperand)
}

function setOperator(o) {
  if (operator.value !== '') {
    return
  }
  operator.value = o
}

function clear() {
  firstOperand.value = 0
  secondOperand.value = 0
  operator.value = ''
}
</script>

<template>
  <div>
    <CalculatorDisplay :first-operand="firstOperand" :second-operand="secondOperand" :operator="operator"
      @result="result = $event" />
    <div>
      <button @click="addToHistory" :disabled="operator === ''">Add to History</button>
    </div>
  </div>
  <div>
    <CalculatorPad @click-number="pushNumber" @click-operator="setOperator" @click-clear="clear"
      @click-del="popNumber" />
  </div>
  <div>
    <h2>History</h2>
    <ul>
      <li v-for="h in recentHistory" :key="h.key">
        {{ h.firstOperand }} {{ h.operator }} {{ h.secondOperand }} = {{ h.result }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
