<script setup>
import {ref, computed, onMounted} from 'vue';

// Данные курсов с теорией и задачами
const courses = {
  frontend: [
    {
      title: 'Основы HTML и CSS',
      description: 'Научитесь создавать простые страницы, стилизовать элементы.',
      type: 'theory',
      content: {title: 'Статья: Введение в HTML и CSS', link: '/courses/1'},
      status: 'completed',
    },
    {
      title: 'Верстка лендинга',
      description: 'Практика создания адаптивного лендинга.',
      type: 'task',
      tasks: [{title: 'Создать лендинг', link: '/tasks/1'}],
      status: 'in-progress',
    },
    {
      title: 'JavaScript: базовый уровень',
      description: 'Изучите переменные, функции, работу с DOM.',
      type: 'theory',
      content: {title: 'Видео: Основы JavaScript', link: '/courses/2'},
      status: 'locked',
    },
    {
      title: 'ToDo приложение',
      description: 'Создайте интерактивное приложение ToDo.',
      type: 'task',
      tasks: [{title: 'Разработать ToDo', link: '/tasks/2'}],
      status: 'locked',
    },
  ],
  backend: [
    {
      title: 'Введение в Node.js',
      description: 'Основы работы с сервером, npm, модули.',
      type: 'theory',
      content: {title: 'Статья: Что такое Node.js', link: '/courses/3'},
      status: 'completed',
    },
    {
      title: 'Сервер на Express',
      description: 'Создание простого REST API.',
      type: 'task',
      tasks: [{title: 'Настроить сервер', link: '/tasks/3'}],
      status: 'in-progress',
    },
    {
      title: 'Работа с базой данных',
      description: 'Основы SQL и взаимодействия с БД.',
      type: 'theory',
      content: {title: 'Видео: Введение в SQL', link: '/courses/4'},
      status: 'locked',
    },
    {
      title: 'CRUD API',
      description: 'Создание API с операциями CRUD.',
      type: 'task',
      tasks: [{title: 'Разработать CRUD', link: '/tasks/4'}],
      status: 'locked',
    },
  ],
};

const activeCourse = ref('frontend');

const progress = ref({});
onMounted(() => {
  ['frontend', 'backend'].forEach((courseType) => {
    if (!progress.value[courseType]) {
      progress.value[courseType] = courses[courseType].map((step) => ({
        title: step.title,
        status: step.status,
      }));
    }
  });
});
const courseSteps = computed(() => {
  return progress.value[activeCourse.value] || courses[activeCourse.value];
});
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
            v-for="(step, index) in courseSteps"
            :key="index"
            :class="['step', `step--${step.status}`, `step--${courses[activeCourse][index].type}`]"
        >
          <div class="step__header">
            <span class="step__status-icon">
              <span v-if="step.status === 'completed'" class="step__icon step__icon--completed">✔</span>
              <span v-else-if="step.status === 'in-progress'" class="step__icon step__icon--in-progress">●</span>
              <span v-else class="step__icon step__icon--locked">🔒</span>
            </span>
            <h3 class="step__title">{{ step.title }}</h3>
          </div>
          <p class="step__description">{{ courses[activeCourse][index].description }}</p>
          <div v-if="courses[activeCourse][index].type === 'theory'" class="step__content">
            <RouterLink
                :to="courses[activeCourse][index].content.link"
                :class="{ 'step__content--disabled': step.status === 'locked' }"
            >
              {{ courses[activeCourse][index].content.title }}
            </RouterLink>
          </div>
          <ul v-else class="step__tasks">
            <li v-for="task in courses[activeCourse][index].tasks" :key="task.link" class="step__task">
              <RouterLink :to="task.link" :class="{ 'step__task--disabled': step.status === 'locked' }">
                {{ task.title }}
              </RouterLink>
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
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &--completed {
    border-color: #28a745;
    background-color: #1e2a1e;
  }

  &--in-progress {
    border-color: #ffc107;
    background-color: #2a2a1e;
  }

  &--locked {
    border-color: #dc3545;
    background-color: #2a1e1e;
    opacity: 0.7;
  }

  &--theory {
    .step__title::before {
      content: '📖 ';
      font-size: 16px;
    }
  }

  &--task {
    .step__title::before {
      content: '💻 ';
      font-size: 16px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }

  &__status-icon,
  &__type-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font-size: 16px;
  }

  &__icon {
    &--completed {
      color: #28a745;
    }

    &--in-progress {
      color: #ffc107;
    }

    &--locked {
      color: #dc3545;
    }

    &--theory {
      color: #17a2b8;
    }

    &--task {
      color: #fd7e14;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }

  &__description {
    font-size: 15px;
    margin-bottom: 12px;
    color: #cccccc;
  }

  &__content {
    a {
      color: #0d6efd;
      text-decoration: underline;
      font-size: 14px;

      &:hover {
        color: #69b4ff;
      }

      &.step__content--disabled {
        color: #6c757d;
        pointer-events: none;
        text-decoration: none;
      }
    }
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

      &.step__task--disabled {
        color: #6c757d;
        pointer-events: none;
        text-decoration: none;
      }
    }
  }
}
</style>