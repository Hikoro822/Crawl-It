<script setup lang="ts">
import {ref} from 'vue';
import {authService} from '@/services/auth.js';

const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');

async function handleRegister(event) {
  event.preventDefault();
  errorMessage.value = '';
  successMessage.value = '';

  try {
    console.log(username.value, email.value, password.value)
    await authService.register(username.value, email.value, password.value);

    successMessage.value = 'Регистрация успешна! Теперь вы можете войти.';
    username.value = '';
    email.value = '';
    password.value = '';

  } catch (error) {
    errorMessage.value = error.message || 'Ошибка сервера. Попробуйте позже.';
    console.error('Registration error:', error);
  }
}
</script>
<template>
  <form class="register" @submit.prevent="handleRegister">
    <div class="register__header">
      <h2 class="register__title">Регистрация</h2>
      <div class="register__divider"></div>
    </div>

    <div v-if="errorMessage" class="register__error">
      {{ errorMessage }}
    </div>

    <div v-if="successMessage" class="register__success">
      {{ successMessage }}
    </div>


    <div class="register__group">
      <input
          id="username"
          v-model="username"
          type="text"
          required
          class="register__input"
          placeholder=" "
      />
      <label for="username" class="register__label">
        Имя
      </label>
    </div>

    <div class="register__group">
      <input
          id="email"
          v-model="email"
          type="email"
          required
          class="register__input"
          placeholder=" "
      />
      <label for="email" class="register__label">
        Почта
      </label>
    </div>

    <div class="register__group">
      <input
          id="password"
          v-model="password"
          type="password"
          required
          class="register__input"
          placeholder=" "
      />
      <label for="password" class="register__label">
        Пароль
      </label>
    </div>

    <button
        type="submit"
        class="register__button"
    >
      Зарегистрироваться
    </button>

    <div class="register__agreement">
      Документы:
      <div class="register__links">
        <RouterLink to="/agreement" class="register__link">
          Пользовательское соглашение
        </RouterLink>
        и
        <RouterLink to="/privacy" class="register__link">
          Политика конфиденциальности
        </RouterLink>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
.register {
  padding: 48px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &__header {
    margin-bottom: 32px;
    text-align: center;
  }

  &__title {
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 16px;
    opacity: 0.9;
  }

  &__divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    margin: 0 auto;
    width: 80%;
  }

  &__group {
    position: relative;
    margin-bottom: 24px;
  }

  &__input {
    width: 100%;
    padding: 16px 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 16px;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }

    &:focus + .register__label,
    &:not(:placeholder-shown) + .register__label {
      transform: translateY(-37px) translateX(-20px) scale(0.9);
      opacity: 0.7;
    }
  }

  &__error {
    background: rgba(220, 53, 69, 0.2);
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
    border-left: 3px solid rgba(220, 53, 69, 0.7);
  }

  &__label {
    position: absolute;
    left: 20px;
    top: 16px;
    color: #fff;
    opacity: 0.5;
    pointer-events: none;
    transition: all 0.3s ease;
    font-size: 16px;
  }

  &__button {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 8px;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  &__agreement {
    margin-top: 24px;
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }

  &__links {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 8px;
  }

  &__link {
    color: #dc3545;
    font-style: oblique;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
}
</style>
