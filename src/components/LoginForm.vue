<script setup>
const login = {
  title: 'Авторизация'
}
</script>

<template>
  <form action="#" class="login">
    <div class="login__header">
      <h2 class="login__title">{{login.title}}</h2>
      <div class="login__divider"></div>
    </div>

    <div class="login__group">
      <input type="email" id="email" class="login__input" required placeholder=" ">
      <label for="email" class="login__label">Логин</label>
    </div>

    <div class="login__group">
      <input type="password" id="password" class="login__input" required placeholder=" ">
      <label for="password" class="login__label">Пароль</label>
    </div>

    <button type="submit" class="login__button">
      Войти
    </button>

    <div class="login__footer">
      <a href="#" class="login__link">Забыли пароль?</a>
      <a href="#" class="login__link">Регистрация</a>
    </div>
  </form>
</template>

<style scoped lang="scss">
.login {
  margin-top: 40px;
  border-radius: 24px;
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

    &:focus + .login__label,
    &:not(:placeholder-shown) + .login__label {
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

  &__footer {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__link {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }
}
</style>