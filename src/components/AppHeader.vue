<script setup>

</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__top">
          <div class="logo">
            <a href="#"><img src="/logo.png" alt="logo" title="logo"></a>
          </div>

          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__item">
                <a href="#" class="menu__link  link link--active">Главная страница</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link link">Наши контакты</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link link">Войти</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link link">Зарегистрироваться</a>
              </li>
            </ul>
          </nav>
        </div>
        <slot/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 20px;
  background: linear-gradient(135deg, #2C2C2C, #1C1C1C);
  overflow: hidden;
  border-bottom: 1px solid #333333;

  &__container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}


.link {
  color: #FFFFFF;
  font-size: 18px;
  position: relative;
}

.menu {
  position: relative;
  &__list {
    display: flex;
    gap: 100px;
  }

  &__link {
    display: block;
    transition: .55s;
    font-weight: 500;
    color: #E4E4E4;

    &:hover {
      transform: scale(1.1);
    }
  }

}

.logo {
  font-size: 22px;
  color: #FFFFFF;
  width: 130px;
}

.header__button {
  padding: 8px 28px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.3s;
}


.secondary {
  background: #26252585;
  border: 1px solid #ffffff54;
  color: #495057;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.gradient {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(106, 17, 203, 0.3);
}

.button {
  transition: .55s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
