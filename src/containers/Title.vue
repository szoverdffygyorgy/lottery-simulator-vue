<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="logo-container">
      <img class="logo" src="/mito.svg" alt="mito" />
    </div>
    <h1 class="title">Lottery simulator</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 60px;
  background: linear-gradient(to right, #a5d9c8, 80.73%, #f6f0c6);

  @media (max-width: 425px) {
    background: linear-gradient(to right, #a5d9c8, 76.56%, #f6f0c6);
  }
}

.logo-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 32px 0 20px;

  @media (max-width: 425px) {
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
  color: #ffffff;

  @media (max-width: 425px) {
    font-size: 20px;
  }
}
</style>
