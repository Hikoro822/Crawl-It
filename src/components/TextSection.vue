<script setup lang="ts">
defineProps<{
  title: string
  content: string[] | string
  type: 'text' | 'list'
}>()
</script>

<template>
  <section class="section">
    <h2 class="section__title">{{ title }}</h2>
    <p v-if="type === 'text'" class="section__text">{{ content }}</p>
    <ul v-if="type === 'list'" class="section__list">
      <li
          v-for="(item, j) in content"
          :key="j"
          class="section__list-item"
      >
        {{ item }}
      </li>
    </ul>
  </section>

</template>

<style scoped lang="scss">

.section {
  margin-bottom: 25px;

  &__title {
    color: #ffcc00;
    margin-bottom: 10px;
  }

  &__text {
    font-size: 14px;
    line-height: 1.5;
  }

  &__list {
    padding-left: 20px;

    &-item {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 8px;
    }
  }
}

</style>