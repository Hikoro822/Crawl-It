<script setup>
import Layout from '@/layouts/Layout.vue'
import BaseLayout from "@/layouts/BaseLayout.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const layout = computed(() => {
  const name = route.meta.layout || 'Layout'
  return layouts[name] || BaseLayout
})

const layouts = {
  BaseLayout,
  Layout
}
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>