<script setup lang="ts">
import { useStore } from 'vuex';
import StyledInput from '../../components/input/StyledInput.vue';
import { State } from '../../store/types';

const store = useStore<State>();
</script>

<template>
  <div class="container">
    <h3 class="title">Winning numbers:</h3>
    <div class="input-container">
      <StyledInput
        v-for="(value, index) in store.getters.drawnNumbers"
        :key="index"
        :disabled="true"
        :value="value"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }
}

.title {
  margin: 0 27px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--primary-text);

  @media (max-width: 425px) {
    margin: 0 19px 0 0;
    font-size: 12px;
    font-weight: 600;
  }
}

.input-container {
  display: flex;
  align-items: center;
}
</style>
