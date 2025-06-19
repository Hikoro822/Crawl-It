
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img src="/logo_new.png" alt="logo" class="header__img"/>
        <h1 class="header__title">Crawl It</h1>
      </div>
      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item">
            <RouterLink to="/home" class="header__menu-link header__menu-link--active">Главная страница</RouterLink>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/more" class="header__menu-link">О нас</RouterLink>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/tasks" class="header__menu-link">Задачи</RouterLink>
          </li>
          <li class="header__menu-item">
            <RouterLink to="/courses" class="header__menu-link">Курсы</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="header__actions">
        <RouterLink to="/auth?form=login" class="header__button">Войти</RouterLink>
        <RouterLink to="/auth?form=register" class="header__button">Создать</RouterLink>
      </div>
    </div>
  </header>

</template>

<style scoped lang="scss">
.header {
  z-index: 10;
  border-bottom: 1px solid #333;
  color: #E4E4E4;
  height: 82px;
  backdrop-filter: blur(2.5px);
  &__container {
    max-width: 1440px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  &__logo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 170px;
  }

  &__img{
    position: relative;
    width: 40px;
    height: 40px;
  }
  &__title{
    font-size: 22px;
    white-space: nowrap;
  }

  &__nav{
    width: 100%;
    max-width: 600px;
  }

  &__menu {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  &__menu-link {
    color: #E4E4E4;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    display: block;
    transition: transform 0.55s;

    &:hover {
      transform: scale(1.1);
    }

    &--active {
      color: #ffffff;
    }
  }

  &__actions{
    display: flex;
    gap: 10px;
    width: 170px;
  }

  &__button {
    padding: 8px 10px;
    border: 1px solid #E4E4E4;
    color: #E4E4E4;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.6s;
    &:hover {
      color: #111111;
      background-color: #E4E4E4;
      border-color: #111111;
    }
  }
}

</style>
