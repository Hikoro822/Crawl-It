<script setup lang="ts">
import { ref } from 'vue';

const courses = {
  frontend: [
    {
      title: "Основы HTML и CSS",
      description: "Научитесь создавать простые страницы, стилизовать элементы.",
      tasks: [{ title: "Верстка лендинга", link: "/tasks/landing" }],
    },
    {
      title: "JavaScript: базовый уровень",
      description: "Изучите переменные, функции, работу с DOM.",
      tasks: [{ title: "ToDo приложение", link: "/tasks/todo" }],
    },
  ],
  backend: [
    {
      title: "Введение в Node.js",
      description: "Основы работы с сервером, npm, модули.",
      tasks: [{ title: "Сервер на Express", link: "/tasks/express-server" }],
    },
    {
      title: "Работа с базой данных",
      description: "Основы SQL и взаимодействие с БД.",
      tasks: [{ title: "CRUD API", link: "/tasks/crud-api" }],
    },
  ],
};

const activeCourse = ref<'frontend' | 'backend'>('frontend');
</script>

<template>
  <div class="courses-page">
    <h1 class="courses-page__title">Курсы</h1>

    <div class="courses-page__tabs">
      <button
          :class="['courses-page__tab', { 'courses-page__tab--active': activeCourse === 'frontend' }]"
          @click="activeCourse = 'frontend'"
      >
        Frontend
      </button>
      <button
          :class="['courses-page__tab', { 'courses-page__tab--active': activeCourse === 'backend' }]"
          @click="activeCourse = 'backend'"
      >
        Backend
      </button>
    </div>

    <section class="course">
      <h2 class="course__title">{{ activeCourse === 'frontend' ? 'Frontend' : 'Backend' }}</h2>
      <ul class="course__steps">
        <li
            v-for="(step, index) in courses[activeCourse]"
            :key="index"
            class="step"
        >
          <h3 class="step__title">{{ step.title }}</h3>
          <p class="step__description">{{ step.description }}</p>
          <ul class="step__tasks">
            <li v-for="task in step.tasks" :key="task.link" class="step__task">
              <RouterLink :to="task.link">{{ task.title }}</RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.courses-page {
  max-width: 1440px;
  width: 100%;
  color: #f0f0f0;

  &__title {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 32px;
  }

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 40px;
  }

  &__tab {
    background: none;
    border: 1px solid #444;
    border-radius: 6px;
    padding: 10px 24px;
    font-size: 15px;
    color: #ccc;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: #333;
    }

    &--active {
      background-color: #0d6efd;
      color: #fff;
      border-color: #0d6efd;
      cursor: default;
    }
  }
}

.course {
  background-color: #2a2a2a;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #333;
  max-width: 900px;
  margin: 0 auto;

  &__title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #66b2ff;
  }

  &__steps {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.step {
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #444;

  &__title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 15px;
    margin-bottom: 12px;
    color: #cccccc;
  }

  &__tasks {
    list-style: none;
    padding-left: 0;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;

    .step__task a {
      color: #0d6efd;
      text-decoration: underline;
      font-size: 14px;

      &:hover {
        color: #69b4ff;
      }
    }
  }
}
</style>
