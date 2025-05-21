<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__section">
        <p class="footer__text">
          Создано <span class="footer__author footer__author--primary">Xa1nex</span> &
          <span class="footer__author footer__author--secondary">Ruben Voskanyan</span>
        </p>
      </div>
      <div class="footer__section">
        <p class="footer__copyright">
          <span>© 2025 Crawl It Community.</span>
          <span class="footer__rights">Все права защищены.</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 82px;
  color: #e0e0e0;
  width: 100%;
  border-top: 1px solid #333;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.5px);
  z-index: 10;

  &__content {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  &__text {
    font-size: 15px;
    font-weight: 300;
  }

  &__author {
    font-weight: 600;
    position: relative;

    &--primary {
      color: #aaa;

      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background: currentColor;
        opacity: 0.7;
      }
    }

    &--secondary {
      color: #bbb;
    }
  }

  &__copyright {
    font-size: 13px;
    color: #7a7a7a;
  }

  &__rights {
    font-size: 12px;
    opacity: 0.8;
  }
}

</style>