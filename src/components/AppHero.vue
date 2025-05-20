<script setup>

</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__wrapper">
        <h2 class="hero__subtitle">
          Новое IT комьюнити
        </h2>
        <h1 class="hero__title">
          Crawl IT
        </h1>
        <p class="hero__description">
          Crawl IT — это онлайн-сообщество для начинающих разработчиков и менторов. Менторы публикуют задачи по
          программированию, а новички решают их и получают обратную связь, развивая свои навыки.
        </p>
        <RouterLink to="/more" class="hero__link">
          Узнать больше
        </RouterLink>
      </div>
      <img src="/heroImg.png" alt="super img" class="hero__img">
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 100px;
    max-width: 1400px;
    margin: auto;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 550px;
    padding: 50px;
    z-index: 1;
  }

  &__title {
    font-size: 72px;
    margin-bottom: 40px;
    font-weight: 700;
    color: #E4E4E4;
  }

  &__subtitle {
    font-size: 32px;
    margin-bottom: 10px;
    font-weight: 700;
    color: #E4E4E4;
  }

  &__description {
    font-weight: 300;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0;
    color: #E4E4E4;
    margin-bottom: 20px;
  }

  &__link {
    width: 90%;
    margin-top: 50px;
    padding: 14px 40px;
    background: linear-gradient(135deg, #E2A300, #E29500);
    font-size: 18px;
    font-weight: 700;
    border-radius: 6px;
    transition: .55s;
    color: #1a1a1a;
    text-align: center;

    &:hover {
      box-shadow: 0 2px 19px #e29e00bd;
      font-size: 20px;
    }
  }

  &__img {
    width: 700px;
    height: 500px;
    scale: 1.4;
    z-index: 0;
  }
}


</style>