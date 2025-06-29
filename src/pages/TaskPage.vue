<script lang="ts" setup>
import {useRoute} from 'vue-router';
import {useUsers} from "@/composables/useUsers";
import {onMounted} from "vue";
import {useTasks} from "@/composables/useTasks";

const route = useRoute();
const taskId = route.params.id;
const {task, loadTask} = useTasks();
const {users, loadUsersByTask} = useUsers()
onMounted(() => {
  loadTask(taskId);
  loadUsersByTask(taskId);
})
</script>

<template>
  <div v-if="task" class="task-page">
    <h1 class="task-page__title">{{ task.title }}</h1>
    <p class="task-page__description">{{ task.description }}</p>
    <div class="task-page__instructions">
      <h3 class="task-page__subtitle">Инструкции</h3>
      <p>{{ task.instructions }}</p>
    </div>
    <div class="task-page__solution">
      <h3 class="task-page__subtitle">Ваше решение</h3>
      <textarea placeholder="Введите ваше решение..." class="task-page__textarea"></textarea>
    </div>
    <button
        class="task-page__button"
        @click="markAsCompleted"
    >
      Отметить как завершённое
    </button>
    <div v-if="users.length" class="task-page__users">
      <h3 class="task-page__subtitle">Пользователи, завершившие задачу</h3>
      <ul>
        <li v-for="user in users" :key="user.id">
          <RouterLink :to="`/users/${user.id}`">
            👤 {{ user.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="task-page">
    <h1 class="task-page__title">Задача не найдена</h1>
  </div>
</template>

<style scoped lang="scss">
.task-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  color: #f0f0f0;
  background-color: #2a2a2a;
  border-radius: 8px;
  border: 1px solid #333;

  &__title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #66b2ff;
  }

  &__description {
    font-size: 16px;
    color: #cccccc;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #f0f0f0;
  }

  &__instructions {
    margin-bottom: 24px;

    p {
      font-size: 15px;
      line-height: 1.6;
      color: #f0f0f0;
    }
  }

  &__solution {
    margin-bottom: 24px;
  }

  &__textarea {
    width: 100%;
    min-height: 150px;
    padding: 12px;
    font-size: 14px;
    color: #f0f0f0;
    background-color: #1e1e1e;
    border: 1px solid #444;
    border-radius: 6px;
    resize: vertical;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #0d6efd;
      outline: none;
    }
  }

  &__button {
    background-color: #0d6efd;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 24px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0b5ed7;
    }
  }

  &__completed {
    color: #28a745;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__users {
    margin-top: 24px;

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      padding: 4px 0;
      font-size: 15px;
      color: #d0d0d0;
    }
  }

}
</style>