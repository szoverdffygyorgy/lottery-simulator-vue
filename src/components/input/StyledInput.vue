<script setup lang="ts">
import { useStore } from 'vuex';
import { MAX_NUMBER, MIN_NUMBER } from '../../constants';
import { State } from '../../store/types';

const props = defineProps(['disabled', 'index', 'value']);

const store = useStore<State>();

const onValueChange = (event: Event) => {
  const newValue = parseInt((event.target as HTMLInputElement).value);

  if (newValue < MIN_NUMBER || newValue > MAX_NUMBER) {
    return;
  }

  const newNumbers = [...store.getters.numbersInPlay];
  newNumbers[props.index] = newValue ?? '';

  store.dispatch('setNumbersInPlay', { numbersInPlay: newNumbers });
};
</script>

<template>
  <input
    class="styled-input"
    type="number"
    :disabled="disabled"
    :value="value"
    @input="onValueChange"
  />
</template>

<style scoped lang="scss">
.styled-input {
  -moz-appearance: textfield;
  width: 34px;
  height: 38px;
  outline: none;
  border: 1px solid var(--input-border);
  border-radius: 10px;
  background: var(--input-disabled-background);
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: var(--primary-text);
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.15));

  &:not(:last-of-type) {
    margin-right: 16px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 425px) {
    width: 22px;
    height: 25px;
    border-radius: 5px;
    font-size: 12px;

    &:not(:last-of-type) {
      margin-right: 12px;
    }
  }
}
</style>
