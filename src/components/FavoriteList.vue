<template>
    <div class="profile">
        <div class="profile-top" v-if="cartStore.favoriteList.length">
            <img 
                class="profile-top__img" 
                src="/exit.svg" 
                alt="profile top image"
                @click="router.push('/')"
            >
            <h2 class="profile-top__title">Мои закладки</h2>
        </div>
        <div class="profile-list" v-if="cartStore.favoriteList.length">
            <CartItem
                v-for="cart in cartStore.favoriteList"
                :key="cart.id"
                :cart="cart"
            />
        </div>
        <div class="profile-clear" v-else>
            <div class="profile-clear__inner">
                <img class="profile-clear__img" src="/emo1.png" alt="profile clear image">
                <h4 class="profile-clear__title">Закладок нет :(</h4>
                <p class="profile-clear__text">Вы ничего не добавляли в закладки</p>
                <button class="profile-clear__btn" @click="router.push('/')">Вернуться назад</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { useCartStore } from '@/store/cartStore';
import { useRouter } from 'vue-router';

const router = useRouter()

const cartStore = useCartStore()
</script>

<style scoped lang="scss">
@import '/src/assets/profile.scss';
</style>