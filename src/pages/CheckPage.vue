<script setup lang="ts">
import {onMounted} from 'vue';
import {tasks} from '@/services/tasks';
import {useAnswers} from '@/composables/useAnswers';

const tasksList = tasks;

const {
  selectedAnswer,
  loadAnswers,
  getUsersByTask,
  viewAnswer,
  clearSelectedAnswer
} = useAnswers();

onMounted(() => {
  loadAnswers(tasksList);
});
</script>


<template>
  <div class="admin-answers">
    <h1 class="admin-answers__title">Ответы на задачи</h1>

    <ul class="admin-answers__tasks">
      <li v-for="task in tasksList" :key="task.id" class="admin-task">
        <h2 class="admin-task__title">{{ task.title }}</h2>
        <ul class="admin-task__users">
          <li
              v-for="user in getUsersByTask(task.id)"
              :key="user.id"
              class="admin-task__user"
          >
            👤 {{ user.name }}
            <button
                class="admin-task__view-button"
                @click="viewAnswer(task.id, user.id)"
            >
              Посмотреть ответ
            </button>
          </li>
        </ul>
      </li>
    </ul>

    <div v-if="selectedAnswer" class="admin-modal">
      <div class="admin-modal__content">
        <h3 class="admin-modal__title">Решение от {{ selectedAnswer.user.name }}</h3>
        <pre class="admin-modal__solution">{{ selectedAnswer.solution }}</pre>
        <button class="admin-modal__close-button" @click="clearSelectedAnswer">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-answers {
  padding: 32px 24px;
  max-width: 1200px;
  margin: 0 auto;
  color: #f0f0f0;

  &__title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 32px;
    text-align: center;
  }

  &__tasks {
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    padding: 0;
  }
}

.admin-task {
  background-color: #2a2a2a;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #444;

  &__title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #66b2ff;
  }

  &__users {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__user {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #1e1e1e;
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #333;
    color: #d0d0d0;
  }

  &__view-button {
    background-color: #0d6efd;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0b5ed7;
    }
  }
}

.admin-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background-color: #1e1e1e;
    padding: 24px;
    border-radius: 10px;
    width: 80%;
    max-width: 600px;
    border: 1px solid #444;
  }

  &__title {
    font-size: 20px;
    margin-bottom: 16px;
    color: #ffffff;
  }

  &__solution {
    background-color: #2a2a2a;
    padding: 16px;
    border-radius: 6px;
    font-size: 14px;
    color: #f0f0f0;
    white-space: pre-wrap;
    margin-bottom: 20px;
    border: 1px solid #333;
  }

  &__close-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
}

</style>