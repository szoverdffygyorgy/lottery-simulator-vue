<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="logo-container">
      <img class="logo" src="/mito.svg" alt="mito" />
    </div>
    <h1 class="title">Lottery Simulator</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 60px;
  background: linear-gradient(
    to right,
    var(--primary),
    80.73%,
    var(--secondary)
  );

  @media (max-width: var(--breakpoints-mobile)) {
    background: linear-gradient(
      to right,
      var(--primary),
      76.56%,
      var(--secondary)
    );
  }
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 32px 0 20px;

  @media (max-width: var(--breakpoints-mobile)) {
    padding: 0 16px 0 20px;
  }
}

.logo {
  width: 28px;
  height: 28px;
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: var(--secondary-text);

  @media (max-width: var(--breakpoints-mobile)) {
    font-size: 20px;
  }
}
</style>
