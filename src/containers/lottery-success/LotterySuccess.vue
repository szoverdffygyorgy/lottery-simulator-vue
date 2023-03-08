<script setup lang="ts">
import { useStore } from 'vuex';
import { State } from '../../store/types';
import { SUCCESS_ORDER } from './constants';
import { NUMBER_MAP } from '../../store/constants';

const {
  state: { results },
} = useStore<State>();
</script>

<template>
  <div class="container">
    <div class="cell" v-for="(key, index) in SUCCESS_ORDER" :key="index">
      <label class="cell-title">{{ `${NUMBER_MAP[key]} matches` }}</label>
      <label class="cell-value">{{ results[key] }}</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 510px;
  margin-bottom: 32px;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.cell {
  display: flex;
  flex-direction: column;
  width: 127px;
  height: 72px;
  padding: 12px 34px;
  color: var(--primary-text);
}

.cell:not(:last-of-type) {
  border-right: 1px solid var(--secondary);
}

.cell-title {
  margin-bottom: 9px;
  font-size: 12px;
  font-weight: 700;
}

.cell-value {
  font-size: 16px;
  font-weight: 700;
  text-align: center;
}

@media (max-width: 656px) {
  .container {
    width: 288px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1px;
    margin-bottom: 22px;
    background-color: var(--secondary);
  }

  .cell {
    width: 142px;
    padding: 12px 43px;
    background-color: var(--main-container-background);
  }

  .cell:not(:last-of-type) {
    border-right: none;
  }

  .cell:first-of-type {
    border-top-left-radius: 10px;
  }

  .cell:nth-of-type(2) {
    border-top-right-radius: 10px;
  }

  .cell:nth-of-type(3) {
    border-bottom-left-radius: 10px;
  }

  .cell:last-of-type {
    border-bottom-right-radius: 10px;
  }
}
</style>
