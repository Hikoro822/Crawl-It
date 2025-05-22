<script setup lang="ts">
import { ref } from "vue";
// Здесь позже можно подгрузить данные пользователя из API
const user = ref({
  name: "Иван Новичков",
  email: "ivan@example.com",
  role: "Ученик",
});
</script>

<template>
  <div class="profile">
    <div class="profile__container">
      <div class="profile__header">
        <h1 class="profile__title">{{ user.name }}</h1>
        <p class="profile__subtitle">{{ user.role }}</p>
      </div>

      <div class="profile__sections">
        <section class="profile__block">
          <h2 class="profile__block-title">Прогресс по курсам</h2>
          <div class="profile__progress">
            <div class="profile__course">
              <p class="profile__course-name">Фронтенд</p>
              <div class="profile__progress-bar">
                <div class="profile__progress-fill" style="width: 60%"></div>
              </div>
            </div>
            <div class="profile__course">
              <p class="profile__course-name">Бэкенд</p>
              <div class="profile__progress-bar">
                <div class="profile__progress-fill" style="width: 40%"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="profile__block">
          <h2 class="profile__block-title">Сданные задачи</h2>
          <ul class="profile__task-list">
            <li class="profile__task">Форма логина – принято</li>
            <li class="profile__task">Роутинг SPA – принято</li>
            <li class="profile__task">Простой REST API – на проверке</li>
          </ul>
        </section>

        <section class="profile__block">
          <h2 class="profile__block-title">Контакты</h2>
          <p class="profile__text">{{ user.email }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 100%;
  min-height: 100vh;
  background-color: #202020;
  color: #e4e4e4;
  padding: 80px 0;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  &__header {
    text-align: center;
  }

  &__title {
    font-size: 42px;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 20px;
    color: #aaa;
  }

  &__sections {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__block-title {
    font-size: 26px;
    font-weight: 600;
    color: #ffc107;
    margin-bottom: 20px;
  }

  &__progress {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__course {
    display: flex;
    flex-direction: column;
  }

  &__course-name {
    font-size: 18px;
    margin-bottom: 5px;
  }

  &__progress-bar {
    height: 14px;
    background-color: #444;
    border-radius: 8px;
    overflow: hidden;
  }

  &__progress-fill {
    height: 100%;
    background-color: #ffc107;
  }

  &__task-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__task {
    background-color: #2a2a2a;
    padding: 12px 20px;
    margin-bottom: 10px;
    border-radius: 6px;
  }

  &__text {
    font-size: 18px;
    font-weight: 300;
  }
}
</style>
