<script setup>
import {useRoadMapList} from "@/composables/useRoadMapList.ts";

const {roadmaps, activeCourse, roadMapSteps} = useRoadMapList()
</script>

<template>
  <div class="roadmaps-page">
    <h1 class="roadmaps-page__title">Курсы</h1>

    <div class="roadmaps-page__tabs">
      <button
          :class="['roadmaps-page__tab', { 'roadmaps-page__tab--active': activeCourse === 'frontend' }]"
          @click="activeCourse = 'frontend'"
      >
        Frontend
      </button>
      <button
          :class="['roadmaps-page__tab', { 'roadmaps-page__tab--active': activeCourse === 'backend' }]"
          @click="activeCourse = 'backend'"
      >
        Backend
      </button>
    </div>

    <section class="course">
      <h2 class="course__title">{{ activeCourse === 'frontend' ? 'Frontend' : 'Backend' }}</h2>
      <ul class="course__steps">
        <li
            v-for="(step, index) in roadMapSteps"
            :key="index"
            :class="['step', `step--${step.status}`, `step--${roadmaps[activeCourse][index].type}`]"
        >
          <div class="step__header">
            <span class="step__status-icon">
              <span v-if="step.status === 'completed'" class="step__icon step__icon--completed">✔</span>
              <span v-else-if="step.status === 'in-progress'" class="step__icon step__icon--in-progress">●</span>
              <span v-else class="step__icon step__icon--locked">🔒</span>
            </span>
            <h3 class="step__title">{{ step.title }}</h3>
          </div>
          <p class="step__description">{{ roadmaps[activeCourse][index].description }}</p>
          <div v-if="step.type === 'theory'" class="step__content">
            <RouterLink
                :to="`/courses/${step.id}`"
                :class="{ 'step__content--disabled': step.status === 'locked' }"
            >
              {{ step.contentTitle }}
            </RouterLink>
          </div>

          <div v-if="step.type === 'task'" class="step__content">
            <RouterLink
                :to="`/tasks/${step.id}`"
                :class="{ 'step__content--disabled': step.status === 'locked' }"
            >
              Задача: {{ step.title }}
            </RouterLink>
            <p class="step__instructions">{{ step.instructions }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.roadmaps-page {
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