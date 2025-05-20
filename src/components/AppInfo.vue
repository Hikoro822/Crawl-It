<script setup>
// никаких зависимостей — если нужно подключить FontAwesome или lucide, напиши, подскажу как
</script>

<template>
  <section class="learnMore">
    <div class="learnMore__container">
      <div class="learnMore__wrapper">
        <h2 class="learnMore__title">О сообществе</h2>

        <p class="learnMore__intro">
          <strong>Crawl IT Community</strong> — это образовательная платформа и сообщество для разработчиков,
          стремящихся
          расти, практиковаться и получать обратную связь от опытных менторов. Мы создаём пространство, где обучение
          происходит через практику: менторы публикуют реальные задачи, а ученики решают их, получая персональные
          рекомендации и код-ревью.
        </p>

        <div class="learnMore__block">
          <h3 class="learnMore__subtitle">Формат платформы</h3>
          <ul class="learnMore__list">
            <li class="learnMore__item">Менторы публикуют задачи (по уровням сложности и темам)</li>
            <li class="learnMore__item">Ученики отправляют решения через веб-приложение</li>
            <li class="learnMore__item">Менторы дают обратную связь, комментарии, советы по улучшению</li>
          </ul>
        </div>

        <div class="learnMore__block">
          <h3 class="learnMore__subtitle">Цель проекта</h3>
          <ul class="learnMore__list">
            <li class="learnMore__item"><strong>Новичкам:</strong> быстрее развиваться, решая практические задачи и
              формируя портфолио.
            </li>
            <li class="learnMore__item"><strong>Менторам:</strong> делиться опытом, помогать начинающим и укреплять
              личный бренд.
            </li>
          </ul>
        </div>

        <blockquote class="learnMore__quote">
          Мы верим, что обучение должно быть честным, практичным и со смыслом.
        </blockquote>
      </div>

      <div class="learnMore__right">
        <img src="/img.png" alt="super img" class="learnMore__img"/>

        <div class="learnMore__socials">
          <a href="https://t.me/your_username" target="_blank" class="learnMore__social">
            <img class="learnMore__social-icon" src="/tg_logo.png" alt="Telegram"/>
            <span class="learnMore__social-text">Telegram</span>
          </a>
          <a href="https://github.com/your_username" target="_blank" class="learnMore__social">
            <img class="learnMore__social-icon" src="/discord_logo.png" alt="Discord"/>
            <span class="learnMore__social-text">Discord</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.learnMore {
  width: 100%;
  color: #e4e4e4;
  padding: 100px 0;

  &__container {
    width: 100%;
    max-width: 1400px;
    margin: auto;
    padding-left: 100px;
    display: flex;
    align-items: flex-start;
    gap: 40px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 50%;
    z-index: 1;
  }

  &__right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  &__img {
    width: 100%;
    max-width: 700px;
    scale: 1.2;
  }

  &__socials {
    margin-top: 40px;
    display: flex;
    gap: 10px;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #2a2a2a;
    padding: 12px 20px;
    border-radius: 8px;
    color: #e4e4e4;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ffc107;
      color: #1a1a1a;
      transform: translateX(5px);
    }
  }

  &__social-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  &__social-text {
    height: 24px;
    font-size: 16px;
    line-height: 165%;
  }

  &__title {
    font-size: 48px;
    font-weight: 700;
  }

  &__intro {
    font-size: 20px;
    font-weight: 300;
    line-height: 1.6;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__subtitle {
    font-size: 28px;
    font-weight: 600;
    color: #ffc107;
  }

  &__list {
    list-style: disc;
    padding-left: 20px;

    & > .learnMore__item {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 8px;
      strong {
        font-weight: 600;
        color: #ffc107;
      }
    }
  }

  &__text {
    font-size: 18px;
    font-weight: 300;
  }

  &__quote {
    margin-top: 40px;
    font-style: italic;
    padding-left: 20px;
    border-left: 4px solid #e29500;
    color: #ddd;
    font-size: 20px;
  }
}
</style>
