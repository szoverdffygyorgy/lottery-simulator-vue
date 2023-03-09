<script setup lang="ts">
import { useStore } from 'vuex';
import StyledCheckbox from '../../components/checkbox/StyledCheckbox.vue';
import { NUMBER_OF_NUMBERS_TO_DRAW } from '../../constants';
import { State } from '../../store/types';
import { InputFriendlyNumber } from '../../types';
import drawNumbers from '../../utils/draw-numbers/draw-numbers';

const store = useStore<State>();

store.watch(
  () => store.getters.isUsingRandomValues,
  (isUsingRandomValues) => {
    const newNumbersInPlay: InputFriendlyNumber[] = Array.from(
      {
        length: NUMBER_OF_NUMBERS_TO_DRAW,
      },
      () => ''
    );

    store.dispatch('setNumbersInPlay', {
      numbersInPlay: isUsingRandomValues
        ? drawNumbers(newNumbersInPlay)
        : newNumbersInPlay,
    });
  }
);
</script>

<template>
  <div class="container">
    <h3 class="title">Play with random numbers:</h3>
    <StyledCheckbox />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  max-width: 100%;
  margin-bottom: 18px;

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
}

.title {
  margin: 0 57px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--primary-text);

  @media (max-width: 425px) {
    margin: 0 24px 0 0;
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
