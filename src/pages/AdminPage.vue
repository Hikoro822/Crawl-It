<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import {useAdminContent} from "@/composables/useAdminCRUD";

const mode = ref<'course' | 'task'>('course');
const {
  courses,
  tasks,
  loadContent,
  addCourse,
  addTask,
  removeCourse,
  removeTask,
} = useAdminContent();

const form = ref({
  title: '',
  description: '',
  track: 'frontend',
  type: 'theory',
  instructions: '',
});

onMounted(loadContent);

const currentItems = computed(() => (mode.value === 'course' ? courses.value : tasks.value));

const addItem = async () => {
  const payload = {...form.value};
  if (mode.value === 'course') await addCourse(payload);
  else await addTask(payload);
  resetForm();
};

const deleteItem = async (id: number) => {
  if (mode.value === 'course') await removeCourse(id);
  else await removeTask(id);
};

const resetForm = () => {
  form.value = {
    title: '',
    description: '',
    track: 'frontend',
    type: 'theory',
    instructions: '',
  };
};
</script>

<template>
  <div class="admin-manage">
    <h1 class="admin-manage__title">Управление курсами и задачами</h1>

    <div class="admin-manage__tabs">
      <button :class="{ active: mode === 'course' }" @click="mode = 'course'">Курсы</button>
      <button :class="{ active: mode === 'task' }" @click="mode = 'task'">Задачи</button>
    </div>

    <form class="admin-form" @submit.prevent="addItem">
      <input v-model="form.title" placeholder="Название" required/>
      <textarea v-model="form.description" placeholder="Описание" required></textarea>

      <select v-model="form.track">
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>

      <template v-if="mode === 'course'">
        <select v-model="form.type">
          <option value="theory">Теория</option>
          <option value="task">Практика</option>
        </select>
      </template>

      <template v-if="mode === 'task'">
        <textarea v-model="form.instructions" placeholder="Инструкции к задаче"></textarea>
      </template>

      <button type="submit">Создать</button>
    </form>

    <ul class="admin-list">
      <li v-for="item in currentItems" :key="item.id">
        <strong>{{ item.title }}</strong> — {{ item.track }}
        <button @click="deleteItem(item.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.admin-manage {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
  color: #f0f0f0;

  &__title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 24px;
    color: #66b2ff;
  }

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;

    button {
      padding: 8px 20px;
      background: #333;
      border: 1px solid #555;
      border-radius: 6px;
      color: #ccc;
      cursor: pointer;
      transition: 0.2s ease;

      &.active {
        background: #0d6efd;
        border-color: #0d6efd;
        color: #fff;
      }

      &:hover {
        background: #444;
      }
    }
  }
}

.admin-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;

  input,
  textarea,
  select {
    padding: 10px;
    border: 1px solid #444;
    background: #1e1e1e;
    color: #fff;
    border-radius: 6px;
    font-size: 14px;
  }

  button[type='submit'] {
    background: #28a745;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #218838;
    }
  }
}

.admin-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    background: #2a2a2a;
    border: 1px solid #333;
    padding: 12px 16px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 6px 10px;
      cursor: pointer;

      &:hover {
        background: #c82333;
      }
    }
  }
}
</style>
