<script setup lang="ts">
import {useAvatar} from '@/composables/useAvatar';
import {User} from "@/types/user";

const props = defineProps<{
  user: User;
}>();

const emit = defineEmits<{
  (e: 'logout'): void;
  (e: 'updateAvatar', file: File): void;
}>();

const {avatarUrl, fileInput, error, handleAvatarClick, handleFileChange} = useAvatar(props.user.avatar);
</script>

<template>
  <div class="profile">
    <div class="profile__container">
      <div class="profile__header">
        <div class="profile__avatar-container" @click="handleAvatarClick">
          <img :src="avatarUrl" alt="Аватар пользователя" class="profile__avatar"/>
          <div class="profile__avatar-overlay">
            <span class="profile__avatar-text">Изменить</span>
          </div>
          <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="profile__file-input"
              @change="event => handleFileChange(event, file => emit('updateAvatar', file))"
          />
        </div>
        <h1 class="profile__title">{{ props.user.username }}</h1>
        <p class="profile__subtitle">Ученик</p>
        <p v-if="error" class="profile__error">{{ error }}</p>
        <button class="profile__logout-btn" @click="$emit('logout')">Выйти</button>
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  width: 100%;
  min-height: 100vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__avatar-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);

      .profile__avatar-overlay {
        opacity: 1;
      }
    }
  }

  &__avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__avatar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &__avatar-text {
    color: white;
    font-size: 16px;
    font-weight: 500;
  }

  &__file-input {
    display: none;
  }

  &__error {
    color: #e53935;
    font-size: 14px;
    margin-top: 10px;
  }

  &__logout-btn {
    margin-top: 15px;
    padding: 8px 20px;
    background-color: #e53935;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c62828;
    }
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
}
</style>