<script setup>
const emit = defineEmits(['clickNumber', 'clickOperator', 'clickDel', 'clickClear'])
</script>

<template>
  <div class="pad">
    <div>
      <div>
        <button class="pad__button" @click="emit('clickNumber', 1)" :value="1">1</button>
        <button class="pad__button" @click="emit('clickNumber', 2)" :value="2">2</button>
        <button class="pad__button" @click="emit('clickNumber', 3)" :value="3">3</button>
      </div>
      <div>
        <button class="pad__button" @click="emit('clickNumber', 4)" :value="4">4</button>
        <button class="pad__button" @click="emit('clickNumber', 5)" :value="5">5</button>
        <button class="pad__button" @click="emit('clickNumber', 6)" :value="6">6</button>
      </div>
      <div>
        <button class="pad__button" @click="emit('clickNumber', 7)" :value="7">7</button>
        <button class="pad__button" @click="emit('clickNumber', 8)" :value="8">8</button>
        <button class="pad__button" @click="emit('clickNumber', 9)" :value="9">9</button>
      </div>
      <div>
        <button class="pad__button" @click="emit('clickNumber', 0)" :value="0">0</button>
      </div>
    </div>
    <div class="pad__operators">
      <button class="pad__button pad__operator_button" @click="emit('clickOperator', '+')">
        {{ $filters.operator('+') }}
      </button>
      <button class="pad__button pad__operator_button" @click="emit('clickOperator', '-')">
        {{ $filters.operator('-') }}
      </button>
      <button class="pad__button pad__operator_button" @click="emit('clickOperator', '*')">
        {{ $filters.operator('*') }}
      </button>
      <button class="pad__button pad__operator_button" @click="emit('clickOperator', '/')">
        {{ $filters.operator('/') }}
      </button>
      <button class="pad__button pad__del_button" @click="emit('clickDel')">del</button>
      <button class="pad__button pad__clear_button" @click="emit('clickClear')">clear</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pad {
  margin-top: 24px;
  display: flex;
  border-radius: 8px;

  &__button {
    min-width: 50px;
    height: 50px;

    font-size: 24px;

    margin-left: 8px;
    margin-top: 8px;
  }

  &__operators {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
}
</style>