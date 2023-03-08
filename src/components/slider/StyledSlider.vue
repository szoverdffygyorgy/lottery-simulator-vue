<script setup lang="ts">
import { useStore } from 'vuex';
import { MAX_DRAW_SPEED, MIN_DRAW_SPEED } from '../../constants';
import { State } from '../../store/types';

const store = useStore<State>();

const onChange = (event: Event) => {
  console.log((event.target as HTMLInputElement).value);

  store.dispatch('setDrawSpeed', {
    drawSpeed: parseInt((event.target as HTMLInputElement).value),
  });
};
</script>

<template>
  <div class="container">
    <input
      class="styled-slider"
      type="range"
      :min="MIN_DRAW_SPEED"
      :max="MAX_DRAW_SPEED"
      :value="store.state.drawSpeed || MIN_DRAW_SPEED"
      @input="onChange"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 100%;
}

.styled-slider {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  width: 100%;
  height: 8px;
  margin: 0;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 4px;
    background: var(--slider-track);
    border-radius: 3px;
  }

  &::-moz-range-track {
    height: 4px;
    background: var(--slider-track);
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    height: 8px;
    width: 8px;
    margin-top: -2px; /* Centers thumb on the track */
    border: 1px solid var(--slider-thumb-border);
    border-radius: 50%;
    background: var(--slider-thumb);
  }

  &::-moz-range-thumb {
    height: 8px;
    width: 8px;
    border: 1px solid var(--slider-thumb-border);
    border-radius: 50%;
    background: var(--slider-thumb);
  }
}
</style>
