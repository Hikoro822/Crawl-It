<script setup lang="ts">
</script>

<template>
  <div class="tasks-page">
    <h1 class="tasks-page__title">Задачи для практики</h1>
    <div class="tasks-page__filters">
      <div class="tasks-filter">
        <span class="tasks-filter__label">Тип:</span>
        <div class="tasks-filter__options">
          <label class="tasks-filter__option">
            <input type="radio" name="type" checked/>
            Все
          </label>
          <label class="tasks-filter__option">
            <input type="radio" name="type"/>
            Фронтенд
          </label>
          <label class="tasks-filter__option">
            <input type="radio" name="type"/>
            Бэкенд
          </label>
        </div>
      </div>

      <div class="tasks-filter">
        <span class="tasks-filter__label">Уровень:</span>
        <div class="tasks-filter__options">
          <label class="tasks-filter__option">
            <input type="checkbox"/>
            Легкий
          </label>
          <label class="tasks-filter__option">
            <input type="checkbox"/>
            Средний
          </label>
          <label class="tasks-filter__option">
            <input type="checkbox"/>
            Сложный
          </label>
        </div>
      </div>

      <div class="tasks-filter">
        <span class="tasks-filter__label">Сортировать:</span>
        <select class="tasks-filter__select">
          <option>Сначала новые</option>
          <option>Сначала старые</option>
          <option>Популярные</option>
        </select>
      </div>
    </div>

    <ul class="tasks-list">
      <li class="task-card">
        <h2 class="task-card__title">Сделать форму регистрации</h2>
        <div class="task-card__meta">
          <span class="task-card__type task-card__type--frontend">Фронтенд</span>
          <span class="task-card__level task-card__level--easy">Легкий</span>
          <span class="task-card__date">22 мая 2025</span>
        </div>
      </li>

      <li class="task-card">
        <h2 class="task-card__title">Разработать API для задач</h2>
        <div class="task-card__meta">
          <span class="task-card__type task-card__type--backend">Бэкенд</span>
          <span class="task-card__level task-card__level--medium">Средний</span>
          <span class="task-card__date">21 мая 2025</span>
        </div>
      </li>

      <li class="task-card">
        <h2 class="task-card__title">Добавить лайки к задачам</h2>
        <div class="task-card__meta">
          <span class="task-card__type task-card__type--frontend">Фронтенд</span>
          <span class="task-card__level task-card__level--medium">Средний</span>
          <span class="task-card__date">20 мая 2025</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tasks-page {
  max-width: 1440px;
  width: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: #f0f0f0;

  &__title {
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
}

.tasks-filter {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__label {
    font-weight: 600;
    color: #e0e0e0;
  }

  &__options {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    color: #d0d0d0;

    input {
      accent-color: #0d6efd;
    }
  }

  &__select {
    padding: 8px 12px;
    border: 1px solid #444;
    border-radius: 6px;
    font-size: 15px;
    background-color: #2b2b2b;
    color: #f0f0f0;
  }
}

.tasks-list {
  display: grid;
  gap: 16px;
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
}

.task-card {
  background: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #333;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.08);
  }

  &__title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #ffffff;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 14px;
    color: #bbbbbb;
  }

  &__type--frontend {
    color: #66b2ff;
  }

  &__type--backend {
    color: #79d0b8;
  }

  &__level--easy {
    color: #9aff84;
  }

  &__level--medium {
    color: #ffd866;
  }

  &__level--hard {
    color: #ff6e6e;
  }

  &__date {
    margin-left: auto;
    font-style: italic;
    color: #888888;
  }
}

</style>
