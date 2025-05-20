<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppHero from '@/components/AppHero.vue';
</script>


<template>
    <AppHeader/>
    <main class="default-layout__main">
        <slot />
    </main>
    <AppFooter/>
</template>

<style scoped lang="scss"></style>