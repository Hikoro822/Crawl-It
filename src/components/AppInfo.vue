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
        <img src="/img.png" alt="Обложка сообщества" class="learnMore__img"/>

        <div class="learnMore__socials">
          <a
              href="https://t.me/crawl_it" target="_blank" rel="noopener noreferrer" class="learnMore__social"
              aria-label="Наш Telegram">
            <img class="learnMore__social-icon" src="/tg_logo.png" alt="Telegram"/>
            <span class="learnMore__social-text">Telegram</span>
          </a>
          <a
              href="https://discord.gg/8rhJRPHqRq" target="_blank" rel="noopener noreferrer" class="learnMore__social"
              aria-label="Наш Discord">
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
  height: 100%;
  padding: 20px;
  color: #e4e4e4;

  &__container {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  &__wrapper {
    max-height: 100%;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
  }

  &__img {
    max-height: 450px;
    height: 100%;
    object-fit: contain;
    scale: 1.2;
  }

  &__socials {
    display: flex;
    gap: 16px;
    justify-content: center;
    left: 10px;
  }

  &__social {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 150px;
    background-color: #2a2a2a;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    color: #e4e4e4;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ffc107;
      color: #1a1a1a;
      transform: translateY(-2px);
    }
  }

  &__social-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  &__social-text {
    font-size: 16px;
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
  }

  &__intro {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.6;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 600;
    color: #ffc107;
  }

  &__list {
    list-style: disc;
    padding-left: 20px;

    & > .learnMore__item {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 8px;

      strong {
        font-weight: 600;
        color: #ffc107;
      }
    }
  }

  &__quote {
    padding-left: 20px;
    border-left: 4px solid #e29500;
    font-style: italic;
    font-size: 18px;
    color: #ddd;
  }
}

</style>
