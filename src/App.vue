<script setup lang="ts">
import Title from "./containers/title/Title.vue";
import MainContainer from "./containers/main-container/MainContainer.vue";
</script>

<template>
  <div class="app-container">
    <Title />
    <MainContainer />
    <button class="reset-button">Reset progress</button>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  color: var(--primary-text);
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
}

.reset-button:hover {
  cursor: pointer;
}
</style>
