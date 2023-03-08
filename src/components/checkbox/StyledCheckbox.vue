<script setup lang="ts">
import { useStore } from 'vuex';
import { State } from '../../store/types';

const store = useStore<State>();

const onChange = () => {
  store.dispatch('setIsUsingRandomValues', {
    isUsingRandomValues: !store.getters.isUsingRandomValues,
  });
};
</script>

<template>
  <input
    class="styled-checkbox"
    type="checkbox"
    :value="store.getters.isUsingRandomValues"
    @change="onChange"
  />
</template>

<style scoped lang="scss">
.styled-checkbox {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--checkbox-background);
  margin: 0;

  color: var(--checkbox-color);
  width: 32px;
  height: 32px;
  border: 1px solid var(--checkbox-border);
  border-radius: 5px;
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.15));

  &:hover {
    cursor: pointer;
  }

  &:checked::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: url('/check.svg') center center no-repeat;
  }

  @media (max-width: 425px) {
    width: 20px;
    height: 20px;

    &:checked::before {
      width: 100%;
      height: 100%;
      transform: scale(60%);
    }
  }
}
</style>
