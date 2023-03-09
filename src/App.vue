<script setup lang="ts">
import MainContainer from './containers/main-container/MainContainer.vue';
import AppTitle from './containers/app-title/AppTitle.vue';
import { useStore } from 'vuex';
import { State } from './store/types';
import storage from './utils/storage/storage';
import { DEFAULT_STATE } from './store/constants';

const store = useStore<State>();

const onResetClick = () => store.replaceState({ ...DEFAULT_STATE });

store.watch(
  (_, getters) => getters.attempts,
  (attempts) => storage.set('attempts', attempts)
);

store.watch(
  (_, getters) => getters.drawSpeed,
  (drawSpeed) => storage.set('draw-speed', drawSpeed)
);

store.watch(
  (_, getters) => getters.results,
  (results) => storage.set('results', results)
);
</script>

<template>
  <div class="app-container">
    <AppTitle />
    <MainContainer />
    <button class="reset-button" @click="onResetClick">Reset progress</button>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  color: var(--primary-text);

  @media (max-height: 823px) {
    height: 100%;
    padding-bottom: 32px;
  }
}

.reset-button {
  display: block;
  width: 160px;
  height: 50px;
  margin: 0 auto;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: var(--button-background);
  color: var(--button-text);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    background-color: var(--button-background--hover);
  }
}
</style>
