<script setup>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';

const courses = {
  frontend: [
    {
      id: '1',
      title: 'Основы HTML и CSS',
      description: 'Научитесь создавать простые страницы, стилизовать элементы.',
      type: 'course',
      content: {
        title: 'Статья: Введение в HTML и CSS',
        body: 'HTML (HyperText Markup Language) — это основа веб-страниц. CSS (Cascading Style Sheets) используется для стилизации. В этом уроке вы узнаете, как создавать структуру страницы и применять стили.',
      },
      status: 'completed',
    },
    {
      id: '2',
      title: 'JavaScript: базовый уровень',
      description: 'Изучите переменные, функции, работу с DOM.',
      type: 'course',
      content: {
        title: 'Видео: Основы JavaScript',
        body: 'JavaScript — это язык программирования для интерактивных веб-страниц. Вы изучите переменные, функции и работу с DOM.',
      },
      status: 'locked',
    },
  ],
  backend: [
    {
      id: '3',
      title: 'Введение в Node.js',
      description: 'Основы работы с сервером, npm, модули.',
      type: 'course',
      content: {
        title: 'Статья: Что такое Node.js',
        body: 'Node.js — это среда выполнения JavaScript на сервере. Узнайте, как настроить сервер и использовать npm.',
      },
      status: 'completed',
    },
    {
      id: '4',
      title: 'Работа с базой данных',
      description: 'Основы SQL и взаимодействия с БД.',
      type: 'course',
      content: {
        title: 'Видео: Введение в SQL',
        body: 'SQL — это язык запросов для работы с базами данных. Вы научитесь создавать таблицы и выполнять запросы.',
      },
      status: 'locked',
    },
  ],
};

const route = useRoute();
const courseId = route.params.id;

const course = computed(() => {
  for (const courseType in courses) {
    const found = courses[courseType].find((step) => step.id === courseId && step.type === 'course');
    if (found) return found;
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
    const stepIndex = courses[courseType].findIndex((step) => step.id === courseId);
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
</script>

<template>
  <div v-if="course" class="course-page">
    <h1 class="course-page__title">{{ course.content.title }}</h1>
    <p class="course-page__description">{{ course.description }}</p>
    <div class="course-page__content">
      <p>{{ course.content.body }}</p>
    </div>
    <button
        v-if="course.status !== 'completed'"
        class="course-page__button"
        @click="markAsCompleted"
    >
      Отметить как завершённое
    </button>
    <div v-else class="course-page__completed">✔ Завершено</div>
  </div>
  <div v-else class="course-page">
    <h1 class="course-page__title">Курс не найден</h1>
  </div>
</template>

<style scoped lang="scss">
.course-page {
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

  &__content {
    font-size: 15px;
    line-height: 1.6;
    color: #f0f0f0;
    margin-bottom: 24px;

    p {
      margin: 0 0 16px;
    }
  }

  &__video {
    width: 100%;
    max-width: 600px;
    border-radius: 6px;
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