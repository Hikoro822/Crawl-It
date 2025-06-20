<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { authService } from '@/services/auth.js';

const email = ref('');
const code = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();
const route = useRoute();

onMounted(() => {
  const queryEmail = route.query.email;
  if (queryEmail) {
    email.value = queryEmail.toString();
  }
});

async function handleResetPassword(event) {
  event.preventDefault();
  errorMessage.value = '';
  successMessage.value = '';

  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = 'Пароли не совпадают';
    return;
  }

  if (newPassword.value.length < 6) {
    errorMessage.value = 'Пароль должен содержать не менее 6 символов';
    return;
  }

  try {
    await authService.resetPassword(email.value, code.value, newPassword.value);
    successMessage.value = 'Пароль успешно изменен';
    setTimeout(() => {
      router.push('/auth');
    }, 2000);
  } catch (error) {
    errorMessage.value = error.message || 'Ошибка сервера. Попробуйте позже.';
    console.error('Reset password error:', error);
  }
}
</script>

<template>
  <form class="reset-password" @submit="handleResetPassword">
    <div class="reset-password__header">
      <h2 class="reset-password__title">Сброс пароля</h2>
      <div class="reset-password__divider"></div>
    </div>

    <p class="reset-password__description">
      Введите код, отправленный на ваш email, и новый пароль.
    </p>

    <div v-if="errorMessage" class="reset-password__error">
      {{ errorMessage }}
    </div>

    <div v-if="successMessage" class="reset-password__success">
      {{ successMessage }}
    </div>

    <div class="reset-password__group">
      <input
          id="reset-password-email"
          v-model="email"
          type="email"
          required
          class="reset-password__input"
          placeholder=" "
          :disabled="!!email"
      />
      <label for="reset-password-email" class="reset-password__label">
        Email
      </label>
    </div>

    <div class="reset-password__group">
      <input
          id="reset-password-code"
          v-model="code"
          type="text"
          required
          class="reset-password__input"
          placeholder=" "
      />
      <label for="reset-password-code" class="reset-password__label">
        Код подтверждения
      </label>
    </div>

    <div class="reset-password__group">
      <input
          id="reset-password-new"
          v-model="newPassword"
          type="password"
          required
          class="reset-password__input"
          placeholder=" "
      />
      <label for="reset-password-new" class="reset-password__label">
        Новый пароль
      </label>
    </div>

    <div class="reset-password__group">
      <input
          id="reset-password-confirm"
          v-model="confirmPassword"
          type="password"
          required
          class="reset-password__input"
          placeholder=" "
      />
      <label for="reset-password-confirm" class="reset-password__label">
        Подтвердите пароль
      </label>
    </div>

    <button type="submit" class="reset-password__button">
      Сбросить пароль
    </button>

    <router-link to="/auth" class="reset-password__back">
      Вернуться к авторизации
    </router-link>
  </form>
</template>

<style scoped lang="scss">
.reset-password {
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
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
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

    &:focus + .reset-password__label,
    &:not(:placeholder-shown) + .reset-password__label {
      transform: translateY(-24px) scale(0.8);
      color: #fff;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
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