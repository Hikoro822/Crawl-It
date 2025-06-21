<script setup lang="ts">
import {ref} from 'vue'
import {Menu, Home, User, ListChecks, BookOpen, LogOut} from 'lucide-vue-next'
import {useAuth} from "@/composables/useAuth";

const isExpanded = ref(false)

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value
}

const navItems = [
  {icon: Home, label: 'Главная', to: '/'},
  {icon: User, label: 'Профиль', to: '/profile'},
  {icon: BookOpen, label: 'Курсы', to: '/courses'},
  {icon: ListChecks, label: 'Задачи', to: '/tasks'}
]

const {logout} = useAuth()

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
      <button class="layout__toggle" @click="logout">
        <LogOut :size="24"/>
      </button>
    </aside>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  display: flex;
  background: linear-gradient(135deg, #2c2c2c, #1c1c1c);
  overflow: hidden;
  position: relative;

  &__main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-left 0.4s cubic-bezier(0.4, 0, 0.2, 1); // Плавный сдвиг контента
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
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    z-index: 10;
    padding: 15px 0;
    transform: translateX(0);
    transition: 0.4s;

    &.expanded {
      width: 200px;
      align-items: flex-start;
      padding-left: 10px;
      transform: translateX(0);
    }

    &.expanded ~ .layout__main {
      margin-left: 200px;
    }
  }

  &__toggle {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    padding: 20px;

    &:hover {
      transform: scale(1.3);
    }

    svg {
      transition: opacity 0.3s ease;
    }
  }

  &__nav {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  &__nav-item {
    align-self: flex-start;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 18px;
    border-radius: 10px;
    color: #ffffff;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background-color: #2e2e2e;
      transform: translateX(4px);

      .layout__nav-label {
        opacity: 1;
        transform: translateX(0);
      }
    }

    svg {
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .layout__nav-label {
      opacity: 0;
      white-space: nowrap;
      overflow: hidden;
      transform: translateX(-10px);
      transition: 0.3s;
      padding-left: 8px;
    }

    .layout__nav-label.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

</style>
