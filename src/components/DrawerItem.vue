<template>
    <div class="drawItem">
        <img class="draw__img" :src="drawerItem.imageUrl" alt="drawer item image">
        <div class="draw__context">
            <h4 class="draw__title">{{drawerItem.title}}</h4>
            <b class="draw__sum">{{drawerItem.price}} руб.</b>
        </div>
        <img 
            class="draw__img-remove" 
            src="/close.svg" 
            alt="drawer image remove"
            @click="cartStore.removeDrawer(drawerItem.id)"
        >
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';

const cartStore = useCartStore()

defineProps({
    drawerItem: Object
})

</script>


<style scoped lang="scss">
@import '/src/assets/drawerItem.scss';
</style>
