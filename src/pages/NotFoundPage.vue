<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  console.log('NotFoundPage mounted')
})
</script>

<template>
  <div class="not-found">
    <div class="not-found__error">
      404
    </div>
    <div class="not-found__img">
      <img src="/cat.png" alt="cat">
      <h1 class="not-found__title">ОКАК</h1>
    </div>
  </div>

</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  font-size: 18px;

  &__img {
    max-width: 100%;
    animation: catAnim 1.5s ease forwards;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  @keyframes catAnim {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }


  &__title {
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%); // Изменено с translate на transform
    font-weight: 900;
    font-size: 115px;
  }

  &__error {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 750px;
    font-weight: 900;
    transform: translate(-50%, 800px);
    animation: errorAnim 1.5s ease forwards;

    @keyframes errorAnim {
      100% {
        transform: translate(-50%, -400px);
      }
    }
  }
}

</style>