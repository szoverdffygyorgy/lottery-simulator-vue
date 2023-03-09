<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { NUMBER_OF_NUMBERS_TO_DRAW } from '../../constants';
import { NUMBER_MAP } from '../../store/constants';
import { State } from '../../store/types';
import { InputFriendlyNumber } from '../../types';
import drawNumbers from '../../utils/draw-numbers/draw-numbers';
import AggregatedResults from '../aggergated-resutls/AggergatedResults.vue';
import LotterySpeed from '../lottery-speed/LotterySpeed.vue';
import LotterySuccess from '../lottery-success/LotterySuccess.vue';
import UserNumberRandomizer from '../user-number-randomizer/UserNumberRandomizer.vue';
import UserNumbers from '../user-numbers/UserNumbers.vue';
import WinningNumbers from '../winning-numbers/WinningNumbers.vue';

const store = useStore<State>();

const interval = ref<number>();

const getLotteryNumbers = () => {
  const numbers: InputFriendlyNumber[] = Array.from(
    {
      length: NUMBER_OF_NUMBERS_TO_DRAW,
    },
    () => ''
  );

  store.dispatch('setDrawnNumbers', { drawnNumbers: drawNumbers(numbers) });

  if (
    store.getters.numbersInPlay.every(
      (value: InputFriendlyNumber) => value !== ''
    ) &&
    store.getters.drawnNumbers.every(
      (value: InputFriendlyNumber) => value !== ''
    )
  ) {
    store.dispatch('incrementAttempts');
  }
};

store.watch(
  (_, getters) => getters.drawSpeed,
  (newInterval: number) => {
    if (interval.value) {
      window.clearInterval(interval.value);
    }

    if (!store.getters.isDrawing) {
      return;
    }

    interval.value = window.setInterval(() => getLotteryNumbers(), newInterval);
  },
  { immediate: true }
);

store.watch(
  (_, getters) => getters.isDrawing,
  (isDrawing: boolean) => {
    if (!isDrawing) {
      window.clearInterval(interval.value);
    }
  }
);

store.watch(
  (_, getters) => getters.drawnNumbers,
  (drawnNumbers: InputFriendlyNumber[]) => {
    if (
      store.getters.numbersInPlay.some(
        (value: InputFriendlyNumber) => value === ''
      ) ||
      drawnNumbers.some((value: InputFriendlyNumber) => value === '')
    ) {
      return;
    }

    const result = drawnNumbers.reduce<number>(
      (acc: number, curr: InputFriendlyNumber) =>
        store.getters.numbersInPlay.includes(curr) ? acc + 1 : acc,
      0
    );

    const [key] =
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(NUMBER_MAP).find(([_, number]) => number === result) ?? [];

    if (!key) {
      return;
    }

    store.dispatch('setResults', {
      ...store.getters.results,
      [key]: store.getters.results[key] + 1,
    });

    if (result === 5) {
      store.dispatch('stopDraw');
    }
  }
);
</script>

<template>
  <div class="main-container">
    <h2 class="title">Result</h2>
    <AggregatedResults />
    <LotterySuccess />
    <WinningNumbers />
    <UserNumbers />
    <UserNumberRandomizer />
    <LotterySpeed />
  </div>
</template>

<style scoped lang="scss">
.main-container {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 792px;
  max-height: 642px;
  margin: 40px auto 32px auto;
  padding: 48px 78px;
  border-radius: 24px;
  background-color: var(--main-container-background);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 425px) {
    max-width: 320px;
    max-height: 572px;
    padding: 16px 16px 32px 16px;
    border-radius: 2px;
  }
}

.title {
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-text);

  @media (max-width: 425px) {
    margin-bottom: 24px;
    font-size: 32px;
  }
}
</style>
