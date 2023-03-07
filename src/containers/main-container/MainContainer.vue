<script setup lang="ts">
import AggregatedResults from '../aggergated-resutls/AggergatedResults.vue';
</script>

<template>
  <div class="main-container">
    <h2 class="title">Result</h2>
    <AggregatedResults />
  </div>
</template>

<style scoped>
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

  @media (max-width: var(--breakpoints-mobile)) {
    max-width: 320px;
    max-height: 572px;
    padding: 16px 16px 32px 16px;
    border-radius: 0;
  }
}

.title {
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 40px;
  font-weight: 700;
  color: var(--primary-text);

  @media (max-width: var(--breakpoints-mobile)) {
    margin-bottom: 24px;
    font-size: 32px;
  }
}
</style>
