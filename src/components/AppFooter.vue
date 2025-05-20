<script setup>
// Логика компонента
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__signature">
        <div class="footer__credits">
          <span class="footer__text">Создано</span>
          <span class="footer__name footer__name--xai">Xa1nex</span>
          <span class="footer__amp">&</span>
          <span class="footer__name footer__name--ruben">Ruben Voskanyan</span>
        </div>
        <div class="footer__copyright">
          <span class="footer__copyright-symbol">©</span>
          <span>2025 Crawl It Community</span>
          <span class="footer__rights">Все права защищены</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: linear-gradient(135deg, #222222 0%, #1a1a1a 100%);
  color: #e0e0e0;
  padding: 40px 0;
  text-align: center;
  width: 100%;
  border-top: 1px solid #333333;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__signature {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__credits {
    font-size: 15px;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  &__divider {
    color: #555;
    margin-right: 8px;
  }

  &__text {
    font-weight: 300;
  }

  &__name {
    font-weight: 600;
    position: relative;

    &--xai {
      color: #8a8a8a;

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

    &--ruben {
      color: #a0a0a0;
    }
  }

  &__amp {
    color: #666;
    font-style: italic;
  }

  &__copyright {
    font-size: 13px;
    color: #7a7a7a;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
  }

  &__copyright-symbol {
    font-size: 14px;
  }

  &__rights {
    font-size: 12px;
    opacity: 0.8;
  }
}
</style>