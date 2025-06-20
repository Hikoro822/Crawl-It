<script setup lang="ts">
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {authService} from '@/services/auth.js';

const email = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

async function handleForgotPassword(event) {
  event.preventDefault();
  errorMessage.value = '';
  successMessage.value = '';

  try {
    await authService.requestPasswordReset(email.value);
    successMessage.value = 'Код для сброса пароля отправлен на ваш email';
    setTimeout(() => {
      router.push(`/reset-password?email=${encodeURIComponent(email.value)}`);
    }, 2000);
  } catch (error) {
    errorMessage.value = error.message || 'Ошибка сервера. Попробуйте позже.';
    console.error('Forgot password error:', error);
  }
}
</script>

<template>
  <form class="forgot-password" @submit="handleForgotPassword">
    <div class="forgot-password__header">
      <h2 class="forgot-password__title">Восстановление пароля</h2>
      <div class="forgot-password__divider"></div>
    </div>

    <p class="forgot-password__description">
      Введите email, указанный при регистрации. Мы отправим на него код для сброса пароля.
    </p>

    <div v-if="errorMessage" class="forgot-password__error">
      {{ errorMessage }}
    </div>

    <div v-if="successMessage" class="forgot-password__success">
      {{ successMessage }}
    </div>

    <div class="forgot-password__group">
      <input
          id="forgot-password-email"
          v-model="email"
          type="email"
          required
          class="forgot-password__input"
          placeholder=" "
      />
      <label for="forgot-password-email" class="forgot-password__label">
        Email
      </label>
    </div>

    <button type="submit" class="forgot-password__button">
      Отправить код
    </button>

    <router-link to="/auth" class="forgot-password__back">
      Вернуться к авторизации
    </router-link>
  </form>
</template>

<style scoped lang="scss">
.forgot-password {
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  &__header {
    margin-bottom: 32px;
  }

  &__title {
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  &__divider {
    height: 2px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
    width: 100%;
  }

  &__description {
    color: #e4e4e4;
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 1.5;
  }

  &__error {
    background-color: rgba(255, 87, 87, 0.2);
    color: #ff5757;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  &__success {
    background-color: rgba(87, 255, 87, 0.2);
    color: #57ff57;
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  &__group {
    position: relative;
    margin-bottom: 24px;
  }

  &__input {
    width: 100%;
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
    }

    &:focus + .forgot-password__label,
    &:not(:placeholder-shown) + .forgot-password__label {
      transform: translateY(-24px) scale(0.8);
      color: #fff;
    }
  }

  &__label {
    position: absolute;
    left: 16px;
    top: 16px;
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
    transition: transform 0.3s, color 0.3s;
    transform-origin: left top;
  }

  &__button {
    background: linear-gradient(90deg, #ff6b6b, #ff9f43);
    border: none;
    padding: 16px;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.3s;
    margin-bottom: 16px;

    &:hover {
      opacity: 0.9;
    }
  }

  &__back {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
}
</style>