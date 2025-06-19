<script setup>
import LandingLayout from '@/layouts/LandingLayout.vue'
import AppLayout from "@/layouts/AppLayout.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const layout = computed(() => {
  const name = route.meta.layout || 'LandingLayout'
  return layouts[name] || LandingLayout
})

const layouts = {
  LandingLayout,
  AppLayout
}
</script>

<template>
  <component :is="layout">
    <RouterView/>
  </component>
</template>