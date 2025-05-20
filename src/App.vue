<script setup>
// import AppHeader from './components/AppHeader.vue'
// import AppHero from './components/AppHero.vue'
// import AppFooter from './components/AppFooter.vue'
import Layout from '@/layouts/Layout.vue'
</script>

<template>
  <Layout> 
    <RouterView />
  </Layout>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
