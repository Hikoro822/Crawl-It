<script lang="ts" setup>
import {useRoute} from 'vue-router';
import {useUsers} from "@/composables/useUsers";
import {onMounted} from "vue";

const route = useRoute();
const userId = Number(route.params.id);
const {user, loadUser} = useUsers();
onMounted(() => {
  loadUser(userId);
})
</script>

<template>
  <div class="user-page">
    <h1 class="user-page__title">Профиль пользователя</h1>

    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="user">
      <h2>{{ user.name }}</h2>
      <h3>Завершённые задачи:</h3>
      <ul>
        <li v-for="taskId in user.completedTasks" :key="taskId">
          <RouterLink :to="`/tasks/${taskId}`">Задача {{ taskId }}</RouterLink>
        </li>
      </ul>
    </div>
    <div v-else>
      Пользователь не найден.
    </div>
  </div>
</template>

<style scoped>
.user-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  color: #f0f0f0;
}

.user-page__title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #66b2ff;
}
</style>
