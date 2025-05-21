<script setup lang="ts">
</script>

<template>
  <form class="login">
    <div class="login__header">
      <h2 class="login__title">{{ $t('auth.login.title') }}</h2>
      <div class="login__divider"></div>
    </div>

    <div class="login__group">
      <input
          id="email"
          type="text"
          required
          class="login__input"
          placeholder=" "
      />
      <label for="email" class="login__label">
        {{ $t('auth.login.email') }}
      </label>
    </div>

    <div class="login__group">
      <input
          id="password"
          type="password"
          required
          class="login__input"
          placeholder=" "
      />
      <label for="password" class="login__label">
        {{ $t('auth.login.password') }}
      </label>
    </div>

    <span class="login__forget">
      {{ $t('auth.login.forget') }}
    </span>

    <button type="submit" class="login__button">
      {{ $t('auth.login.title') }}
    </button>
  </form>
</template>

<style scoped lang="scss">
.login {
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

  &__forget {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
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

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    &:active {
      transform: scale(0.98);
    }
  }
}

@media (max-width: 700px) {
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    border-radius: 12px;
    box-shadow:
        0 15px 27px #93c5fd,
        0 10px 10px #93c5fd;
    padding: 32px;
  }
}
</style>
