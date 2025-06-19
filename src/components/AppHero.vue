<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__wrapper">
        <h2 class="hero__subtitle">Новое IT комьюнити</h2>
        <h1 class="hero__title">Crawl IT</h1>
        <p class="hero__description">
          Crawl IT — это онлайн-сообщество для начинающих разработчиков и менторов. Менторы публикуют задачи по
          программированию, а новички решают их и получают обратную связь, развивая свои навыки.
        </p>
        <RouterLink to="/more" class="hero__link">Узнать больше</RouterLink>
      </div>
      <img src="/heroImg.png" alt="super img" class="hero__img" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;

  &__container {
    max-width: 1440px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__wrapper {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 1;
  }

  &__subtitle {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 700;
    color: #E4E4E4;
  }

  &__title {
    font-size: 64px;
    margin-bottom: 30px;
    font-weight: 700;
    color: #E4E4E4;
    line-height: 1.1;
  }

  &__description {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
    color: #E4E4E4;
    margin-bottom: 30px;
  }

  &__link {
    display: inline-block;
    max-width: 300px;
    padding: 14px 32px;
    background: linear-gradient(135deg, #E2A300, #E29500);
    font-size: 18px;
    font-weight: 700;
    border-radius: 6px;
    color: #1a1a1a;
    text-align: center;
    transition: all 0.4s ease;

    &:hover {
      box-shadow: 0 2px 20px #e29e00bd;
      transform: scale(1.05);
    }
  }

  &__img {
    max-width: 50%;
    width: 100%;
    transform: scale(1.2);
  }
}

// Адаптив
@media (max-width: 1024px) {
  .hero__container {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }

  .hero__wrapper {
    padding: 10px;
  }

  .hero__title {
    font-size: 42px;
  }

  .hero__subtitle {
    font-size: 22px;
  }

  .hero__description {
    font-size: 16px;
  }

  .hero__link {
    margin: 0 auto;
  }

  .hero__img {
    transform: none;
    max-width: 80%;
  }
}

</style>