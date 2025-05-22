<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <div class="layout">
    <AppHeader/>
    <main class="layout__main">
      <slot/>
    </main>
    <AppFooter/>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #2C2C2C, #1C1C1C);
  overflow: hidden;

  &__main {
    height: calc(100% - 164px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>