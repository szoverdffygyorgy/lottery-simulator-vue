<script setup lang="ts">
import { useStore } from 'vuex';
import { State } from '../../store/types';
import { PLAY_COST, WEEKS_IN_A_YEAR } from './constants';

const store = useStore<State>();
</script>

<template>
  <div class="container">
    <div class="grid">
      <label class="large-label">Number of tickets:</label>
      <label class="attempts-label">{{ store.getters.attempts }}</label>
      <label class="label">Years spent:</label>
      <label class="label" :class="{ highlighted: !store.getters.isDrawing }">{{
        Math.floor(store.getters.attempts / WEEKS_IN_A_YEAR)
      }}</label>
      <label v-if="!store.getters.isDrawing" class="label" />
      <label class="label">Cost of tickets:</label>
      <label class="label">{{
        new Intl.NumberFormat('hu-HU', {
          style: 'currency',
          currency: 'HUF',
        }).format(store.getters.attempts * PLAY_COST)
      }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  max-width: 325px;
  margin-bottom: 32px;
  padding: 18px 19px 11px 24px;
  background-color: var(--primary);
  border-radius: 10px;

  @media (max-width: 425px) {
    margin-bottom: 25px;
    padding: 12px 16px 15px 12px;
  }
}

.label {
  font-size: 14px;
  font-weight: 700;
  color: var(--secondary-text);

  &.highlighted {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary-text);
    font-size: 222px;
    transition: all 1s;
    z-index: 1;

    @media (max-width: 425px) {
      font-size: 184px;
    }
  }
}

.large-label {
  font-size: 16px;
  font-weight: 700;
  color: var(--secondary-text);

  @media (max-width: 425px) {
    font-size: 14px;
  }
}

.attempts-label {
  font-size: 16px;
  font-weight: 800;
  color: var(--secondary-text);

  @media (max-width: 425px) {
    font-size: 14px;
  }
}

.grid {
  display: grid;
  row-gap: 6px;
  grid-template-columns: 56.92% 43.08%;
  width: 100%;
  height: 100%;

  @media (max-width: 425px) {
    row-gap: 8px;
    grid-template-columns: 52.43% 47.57%;
  }
}
</style>
