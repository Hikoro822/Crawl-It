<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToAboutPage = () => {
    router.push('/LearnMore');
};
</script>

<template>
    <section class="hero">
        <div class="hero__container">
            <div class="hero__wrapper">
                <div class="hero__left">
                    <span>
                        Новое IT комьюнити
                    </span>
                    <h2 class="hero__title">
                        Crawl IT
                        Community
                    </h2>
                    <p class="hero__description">
                        Crawl IT — это веб-коммьюнити для начинающих айтишников и менторов. Менторы публикуют задачи по
                        программированию, ученики их выполняют и получают обратную связь, прокачивая навыки и опыт.
                    </p>
                    <button class="hero__button">
                            <RouterLink to="/more">Узнать больше</RouterLink>
                    </button>
                </div>
                <div class="hero__right">
                    <img src="/Gleb.png" alt="super img" class="hero__img">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.hero {
    color: #fff;
    font-size: 18px;

    span {
        font-size: 48px;
        font-weight: 700;
    }
}

.hero__container {
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
}

.hero__description {
    max-width: 430px;
    font-weight: 300;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0;
    color: #E4E4E4;
    margin-bottom: 20px;
}

.hero__button {
    padding: 14px 40px;
    background: linear-gradient(135deg, #E2A300, #E29500);
    box-shadow: 0px 2px 13px #E29E007A;
    color: #000;
    font-size: 18px;
    font-weight: 700;
    border-radius: 6px;
    transition: .55s;

    &:hover {
        box-shadow: 0px 2px 19px #e29e00bd;
    }

    &:active {
        scale: .9;
    }
}

.hero__wrapper {
    display: flex;
    // gap: 100px;
}

.hero__title {
    font-size: 72px;
    margin-bottom: 10px;
    font-weight: 700;
}

.hero__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

.hero__right {
    img {
        border-radius: 8px;
        max-width: 200%;
        position: relative;
        margin-left: 0px;
        top: 200px;
        width: 500px;
    }
}

.hero__left {
    position: relative;
    top: 100px;
}
</style>