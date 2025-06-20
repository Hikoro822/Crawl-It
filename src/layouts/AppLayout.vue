<script setup lang="ts">
import {ref} from 'vue'
import {Menu, Home, User, ListChecks, BookOpen} from 'lucide-vue-next'

const isExpanded = ref(false)

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}

const navItems = [
  {icon: Home, label: 'Главная', to: '/home'},
  {icon: User, label: 'Профиль', to: '/profile'},
  {icon: BookOpen, label: 'Курсы', to: '/courses'},
  {icon: ListChecks, label: 'Задачи', to: '/tasks'}
]

</script>

<template>
  <div class="layout">
    <main class="layout__main">
      <slot/>
    </main>
    <aside :class="['layout__sidebar', { expanded: isExpanded }]">
      <button class="layout__toggle" @click="toggleSidebar">
        <Menu :size="24"/>
      </button>

      <nav class="layout__nav">
        <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="layout__nav-item"
        >
          <component :is="item.icon" :size="24"/>
          <span :class="['layout__nav-label', { visible: isExpanded }]">
            {{ item.label }}
          </span>
        </RouterLink>
      </nav>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #2C2C2C, #1C1C1C);
  overflow: hidden;
  position: relative;

  &__main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__sidebar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #1f1f1f;
    color: #fff;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    z-index: 10;
    padding: 15px 0;

    &.expanded {
      width: 200px;
      align-items: flex-start;
      padding-left: 10px;
    }
  }

  &__toggle {
    background: none;
    border: none;
    color: inherit;
    margin-bottom: 32px;
    cursor: pointer;
    align-self: center;
  }

  &__nav {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
  }

  &__nav-item {
    align-self: flex-start;
    display: flex;
    cursor: pointer;
    padding: 8px;
    border-radius: 10px;
    color: #ffffff;

    &:hover {
      background-color: #2e2e2e;
    }

    svg {
      flex-shrink: 0;
    }

    .layout__nav-label {
      max-width: 0;
      opacity: 0;
      white-space: nowrap;
      overflow: hidden;
      transition: 0.6s;
    }

    .layout__nav-label.visible {
      padding-left: 8px;
      max-width: inherit;
      opacity: 1;
    }
  }
}

</style>
