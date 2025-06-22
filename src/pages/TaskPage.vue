<script setup>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';

const courses = {
  frontend: [
    {
      id: '1',
      title: 'Верстка лендинга',
      description: 'Практика создания адаптивного лендинга.',
      type: 'task',
      tasks: [{
        title: 'Создать лендинг',
        link: '/tasks/landing',
        instructions: 'Создайте адаптивный лендинг с использованием HTML и CSS.'
      }],
      status: 'in-progress',
    },
    {
      id: '2',
      title: 'ToDo приложение',
      description: 'Создайте интерактивное приложение ToDo.',
      type: 'task',
      tasks: [{
        title: 'Разработать ToDo',
        link: '/tasks/todo',
        instructions: 'Создайте приложение ToDo с добавлением и удалением задач.'
      }],
      status: 'locked',
    },
  ],
  backend: [
    {
      id: '3',
      title: 'Сервер на Express',
      description: 'Создание простого REST API.',
      type: 'task',
      tasks: [{
        title: 'Настроить сервер',
        link: '/tasks/express-server',
        instructions: 'Настройте сервер на Express с маршрутом GET /api.'
      }],
      status: 'in-progress',
    },
    {
      id: '4',
      title: 'CRUD API',
      description: 'Создание API с операциями CRUD.',
      type: 'task',
      tasks: [{
        title: 'Разработать CRUD',
        link: '/tasks/crud-api',
        instructions: 'Создайте API с операциями Create, Read, Update, Delete.'
      }],
      status: 'locked',
    },
  ],
};

const route = useRoute();
const taskId = route.params.id;

const task = computed(() => {
  for (const courseType in courses) {
    const found = courses[courseType].find((step) => step.id === taskId && step.type === 'task');
    if (found) return found.tasks[0]; // Возвращаем первую задачу
  }
  return null;
});

const progress = ref({});
const loadProgress = () => {
  const saved = localStorage.getItem('courseProgress');
  if (saved) progress.value = JSON.parse(saved);
};

const saveProgress = () => {
  localStorage.setItem('courseProgress', JSON.stringify(progress.value));
};

onMounted(() => {
  loadProgress();
});

const markAsCompleted = () => {
  for (const courseType in courses) {
    const stepIndex = courses[courseType].findIndex((step) => step.id === taskId);
    if (stepIndex !== -1) {
      if (!progress.value[courseType]) progress.value[courseType] = [];
      progress.value[courseType][stepIndex] = {
        title: courses[courseType][stepIndex].title,
        status: 'completed',
      };
      saveProgress();
      break;
    }
  }
};

const solution = ref('');
</script>

<template>
  <div v-if="task" class="task-page">
    <h1 class="task-page__title">{{ task.title }}</h1>
    <p class="task-page__description">{{
        courses[Object.keys(courses).find(type => courses[type].some(step => step.id === taskId))].find(step => step.id === taskId).description
      }}</p>
    <div class="task-page__instructions">
      <h3 class="task-page__subtitle">Инструкции</h3>
      <p>{{ task.instructions }}</p>
    </div>
    <div class="task-page__solution">
      <h3 class="task-page__subtitle">Ваше решение</h3>
      <textarea v-model="solution" placeholder="Введите ваше решение..." class="task-page__textarea"></textarea>
    </div>
    <button
        v-if="courses[Object.keys(courses).find(type => courses[type].some(step => step.id === taskId))].find(step => step.id === taskId).status !== 'completed'"
        class="task-page__button"
        @click="markAsCompleted"
    >
      Отметить как завершённое
    </button>
    <div v-else class="task-page__completed">✔ Завершено</div>
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
}
</style>