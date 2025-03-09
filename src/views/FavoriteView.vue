<template>
    <main class="main">
        <div class="container">
            <Header />
            <FavoriteList />
            <Drawer v-if="cartStore.visible" />
        </div>
    </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import FavoriteList from '@/components/FavoriteList.vue';
import Drawer from '@/components/Drawer.vue';
import { useCartStore } from '@/store/cartStore';

const cartStore = useCartStore()
</script>

<style scoped lang="scss"></style>