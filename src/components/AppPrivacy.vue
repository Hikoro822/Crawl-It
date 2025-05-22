<template>
  <div class="privacy">
    <div class="privacy__container">
        <h1 class="privacy__title">Политика конфиденциальности</h1>
        <section v-for="(section, i) in sections" :key="i" class="privacy__section">
          <h2 class="privacy__subtitle">{{ section.title }}</h2>
          <p v-if="section.type === 'text'" class="privacy__text">{{ section.content }}</p>
          <ul v-else-if="section.type === 'list'" class="privacy__list">
            <li v-for="(item, j) in section.content" :key="j" class="privacy__item" v-html="item"></li>
          </ul>
        </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sections = ref([
      {
        title: "1. Общие положения",
        content: "Настоящая политика конфиденциальности (далее — «Политика») описывает порядок обработки и защиты информации, которую мы собираем на нашем сайте. Используя сайт, вы соглашаетесь с условиями этой Политики и даете согласие на обработку ваших данных.",
        type: "text"
      },
      {
        title: "2. Какие данные мы собираем",
        content: [
          "Личные данные: имя, электронная почта, телефон, при регистрации или обратной связи.",
          "Данные о использовании сайта: IP-адрес, браузер, операционная система, время посещения, страницы, которые вы просматривали.",
          "Технические данные: cookies, идентификаторы устройств, данные о сессиях и действиях на сайте."
        ],
        type: "list"
      },
      {
        title: "3. Цели сбора данных",
        content: [
          "Обеспечение работы сайта и его функциональности.",
          "Обработка ваших запросов и обратной связи.",
          "Улучшение качества сайта и пользовательского опыта.",
          "Проведение аналитики и статистики посещений.",
          "Соблюдение требований законодательства и нормативных актов."
        ],
        type: "list"
      },
      {
        title: "4. Использование данных",
        content: [
          "Обеспечение доступа к функционалу сайта.",
          "Персонализация контента и улучшение взаимодействия.",
          "Связь с вами по вопросам поддержки, обновлений и новостей.",
          "Проведение аналитических исследований для улучшения сервиса."
        ],
        type: "list"
      },
      {
        title: "5. Передача данных третьим лицам",
        content: "Мы не передаем ваши личные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом или по требованию государственных органов.",
        type: "text"
      },
      {
        title: "6. Права пользователя",
        content: [
          "Запрашивать доступ к своим данным и получать их копии.",
          "Требовать исправления или удаления своих данных.",
          "Отказаться от обработки данных для маркетинговых целей.",
          "Обращаться к нам с вопросами и запросами по обработке данных."
        ],
        type: "list"
      },
      {
        title: "7. Cookies и технологии отслеживания",
        content: "Наш сайт использует cookies для улучшения работы и анализа посещений. Вы можете управлять настройками cookies в браузере.",
        type: "text"
      },
    ]);
    return { sections };
  }
};
</script>

<style lang="scss" scoped>
.privacy {
  padding:  20px;
  background: #222;
  color: #fff;
  width: 100%;

  &__container{
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
  }

  &__title {
    margin-top: 20px;
    font-size: 2em;
    color: #ffcc00;
    margin-bottom: 20px;
    text-align: center;
  }

  &__section {
    margin-bottom: 25px;

    &-title {
      color: #ffcc00;
      margin-bottom: 10px;
    }
  }

  &__text {
    font-size: 14px;
    line-height: 1.5;
  }

  &__list {
    padding-left: 20px;

    &-item {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 8px;
    }
  }
}
</style>
