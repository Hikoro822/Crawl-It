<script setup>
import LandingLayout from '@/layouts/LandingLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import AppLayout from "@/layouts/AppLayout.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";
import BaseLayout from "@/layouts/BaseLayout.vue";

const route = useRoute()

const layout = computed(() => {
  const name = route.meta.layout || 'BaseLayout'
  return layouts[name] || BaseLayout
})

const layouts = {
  BaseLayout,
  LandingLayout,
  AppLayout,
  AdminLayout
}
</script>

<template>
  <component :is="layout">
    <RouterView/>
  </component>
</template>