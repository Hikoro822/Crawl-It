<script setup lang="ts">
import {ref, watchEffect} from "vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import { useI18n } from "vue-i18n";
import {useRoute} from "vue-router";

const isShowPanel = ref("");
const route = useRoute();
const { t } = useI18n();

const setPanelFromQuery = () => {
  const form = route.query.form;
  isShowPanel.value = form === "register" ? "active" : "";
};

watchEffect(() => {
  setPanelFromQuery();
});

const handleClickSignIn =  () => {
  isShowPanel.value = "";
};

const handleClickRegister =  () => {
  isShowPanel.value = "active";
};

</script>

<template>
  <div class="auth-wrapper">
    <div
        :class="['auth-container', isShowPanel]"
        :style="{ backgroundImage: 'url(/login.png)' }"
    >
      <LoginForm class="login" />
      <RegisterForm class="register" />

      <div class="auth-container__overlay">
        <div class="auth-overlay">
          <div class="auth-panel auth-panel--left">
            <h1 class="auth-panel__title" style="margin-top: 150px;">
              {{ t("auth.overlay.registerTitle") }}<br /><br />
              {{ t("auth.overlay.registerWelcome") }}
              <span class="auth-panel__text">{{ t("auth.overlay.registerText") }}</span>
            </h1>
            <button
                class="auth-button"
                @click="handleClickSignIn"
                style="margin-top: 24px; position: absolute; bottom: 12%;"
                type="button"
            >
              {{ t("auth.overlay.loginTitle") }}
            </button>
          </div>

          <div class="auth-panel auth-panel--right">
            <h1 class="auth-panel__title" style="margin-top: 150px;">
              {{ t("auth.overlay.loginWelcome") }}<br /><br />
              {{ t("auth.overlay.loginText") }}
            </h1>
            <button
                class="auth-button"
                @click="handleClickRegister"
                style="margin-top: 24px; position: absolute; bottom: 12%;"
                type="button"
            >
              {{ t("auth.overlay.registerTitle") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  min-width: 800px;
  position: relative;
}

.auth-container {
  position: relative;
  width: 100%;
  height: 550px;
  box-shadow: 0 0 20px rgb(132, 132, 132);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.95;
  .login,
  .register {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    transition: 0.6s;
  }

  .login {
    left: 0;
    z-index: 2;
    transform: translateX(0);
    opacity: 1;
    
  }

  .register {
    right: 0;
    z-index: 1;
    transform: translateX(100%);
    opacity: 0;
  }

  &.active {
    .login {
      transform: translateX(-100%);
      opacity: 0;
      z-index: 1;
    }

    .register {
      transform: translateX(0);
      opacity: 1;
      z-index: 2;
    }

    .auth-container__overlay {
      transform: translateX(-100%);
    }

    .auth-overlay {
      transform: translateX(50%);
    }

    .auth-panel--left {
      transform: translateX(0);
    }

    .auth-panel--right {
      transform: translateX(20%);
    }
  }
}

.auth-container__overlay {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 3;
}

.auth-overlay {
  position: relative;
  width: 200%;
  height: 100%;
  left: -100%;
  transform: translateX(0);
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.auth-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  padding: 20px;
  background-color: #3a3a3a;
  color: #e4e4e4;
  box-sizing: border-box;
  transition: transform 0.6s ease-in-out;

  &--left {
    left: 0;
    transform: translateX(-20%);
  }

  &--right {
    right: 0;
    transform: translateX(0);
  }

  &__title {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
  }

  &__text {
    font-size: 1rem;
    display: block;
    margin-top: 10px;
    color: #ffc107;
    font-weight: 500;
  }
}

.auth-button {
  background-color: #ffc107;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 12px 24px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6ac00;
  }
}

@media (max-width: 700px) {
  .auth-container {
    box-shadow: none;
    overflow: visible;
    display: flex;
    height: auto;
    max-width: none;
    border-radius: 0;
    background-color: transparent;

    &.active {
      .login {
        transform: translateX(0);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .register {
        transform: translateX(0);
        opacity: 1;
        z-index: 5;
        transition: opacity 0.3s ease-in-out;
      }
      .auth-container__overlay {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
    }
  }

  .auth-wrapper {
    min-width: 0;
    height: auto;
  }

  .auth-panel {
    position: relative;
    width: 100%;
    background-color: transparent;
    padding: 20px 0;

    &--left,
    &--right {
      position: relative;
      transform: none !important;
      width: 100%;
    }
  }

  .auth-button {
    position: relative !important;
    bottom: auto !important;
    margin-top: 24px !important;
  }
}

</style>