<script setup lang="ts">
</script>

<template>
  <form class="register">
    <div class="register__header">
      <h2 class="register__title">Регистрация</h2>
      <div class="register__divider"></div>
    </div>

    <div class="register__group">
      <input
          id="username"
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
