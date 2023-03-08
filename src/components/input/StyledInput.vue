<script setup lang="ts">
import { useStore } from 'vuex';
import { State } from '../../store/types';

defineProps(['disabled', 'value']);

const {
  state: { numbersInPlay },
} = useStore<State>();

const onValueChange = (event: Event) => {
  console.log((event.target as HTMLInputElement).value);
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

<style scoped>
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
}

.styled-input:not(:last-of-type) {
  margin-right: 16px;
}

.styled-input::-webkit-outer-spin-button,
.styled-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 425px) {
  .styled-input {
    width: 22px;
    height: 25px;
    border-radius: 5px;
    font-size: 12px;
  }

  .styled-input:not(:last-of-type) {
    margin-right: 12px;
  }
}
</style>
