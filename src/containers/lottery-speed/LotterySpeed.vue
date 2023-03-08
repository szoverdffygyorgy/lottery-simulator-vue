<script setup lang="ts">
import StyledSlider from '../../components/slider/StyledSlider.vue';
</script>

<template>
  <div class="container">
    <h3 class="title">Speed</h3>
    <StyledSlider />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 100%;
}

.title {
  margin: 0 0 3px 0;
  font-size: 16px;
  font-weight: 400;
  color: var(--primary-text);

  @media (max-width: 425px) {
    margin: 0 0 10px 0;
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
