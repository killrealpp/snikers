<template>
    <header class="header">
        <div class="header__inner">
            <div class="logo" @click="router.push('/')">
                <img class="logo__img" src="/logo.png" alt="logo image">
                <div class="logo__context">
                    <h2 class="logo__title">VUE SNEAKERS</h2>
                    <p class="logo__text">Магазин лучших кроссовок</p>
                </div>
            </div>
            <button class="burger__btn" :class="{'burger__btn--close': isMenuOpen}" @click="toggleMenu">
                {{ isMenuOpen ? '✖' : '☰' }}
            </button>
            <nav class="menu-burger" :class="{'menu-burger--open': isMenuOpen}">
                <ul class="menu-burger__list">
                    <li class="menu-burger__item cart" @click="cartStore.showDrawer(); toggleMenu()">
                        <a class="menu-burger__link">
                            <span v-if="!cartStore.drawerList.length">Корзина</span>
                            <span v-else style="font-weight: 700; color: #5C5C5C">{{ cartStore.totalSum }} руб</span>
                        </a>
                    </li>
                    <li class="menu-burger__item heart">
                        <a @click="router.push('/favorite'); toggleMenu()" class="menu-burger__link">Закладки</a>
                    </li>
                    <li class="menu-burger__item profile">
                        <a @click="router.push('/profile'); toggleMenu()" class="menu-burger__link">Профиль</a>
                    </li>
                </ul>
            </nav>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item cart" @click="cartStore.showDrawer()">
                        <a class="menu__item-link">
                            <span v-if="!cartStore.drawerList.length">Корзина</span>
                            <span v-else style="font-weight: 700; color: #5C5C5C">{{ cartStore.totalSum }} руб</span>
                        </a>
                    </li>
                    <li class="menu__item heart">
                        <a @click="router.push('/favorite')" class="menu__item-link">Закладки</a>
                    </li>
                    <li class="menu__item profile">
                        <a @click="router.push('/profile')" class="menu__item-link">Профиль</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const cartStore = useCartStore();
const isMenuOpen = ref(false);


const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};
</script>

<style scoped lang="scss">
@import '../assets/header.scss';
</style>
