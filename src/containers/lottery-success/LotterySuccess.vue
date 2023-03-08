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

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  width: 510px;
  margin-bottom: 32px;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 656px) {
    width: 288px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1px;
    margin-bottom: 22px;
    background-color: var(--secondary);
  }
}

.cell {
  display: flex;
  flex-direction: column;
  width: 127px;
  height: 72px;
  padding: 12px 34px;
  color: var(--primary-text);

  &:not(:last-of-type) {
    border-right: 1px solid var(--secondary);
  }

  @media (max-width: 656px) {
    width: 142px;
    padding: 12px 43px;
    background-color: var(--main-container-background);

    &:not(:last-of-type) {
      border-right: none;
    }

    &:first-of-type {
      border-top-left-radius: 10px;
    }

    &:nth-of-type(2) {
      border-top-right-radius: 10px;
    }

    &:nth-of-type(3) {
      border-bottom-left-radius: 10px;
    }

    &:last-of-type {
      border-bottom-right-radius: 10px;
    }
  }
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
</style>
