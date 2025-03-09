<template>
    <div class="drawer" @click="cartStore.showDrawer">
        <div class="drawer__content" @click.stop>
            <div class="drawer__content-title">Корзина</div>
            <div class="drawer__inner" v-if="!cartStore.buyId">
                <div class="drawer-list" v-if="cartStore.drawerList.length">
                    <DrawerItem 
                        v-for="drawerItem in cartStore.drawerList" 
                        :key="drawerItem.id"
                        :drawerItem="drawerItem"
                    />
                </div>
                <div v-else class="drawer-clear" :class="{'top': !cartStore.drawerList.length}">
                    <div class="drawer-clear__inner">
                        <img class="drawer-clear__img" src="/box.png" alt="box image">
                        <h4 class="drawer-clear__title">Корзина пустая</h4>
                        <p class="drawer-clear__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button class="drawer-clear__btn" @click="cartStore.showDrawer">Вернуться назад</button>
                    </div>
                </div>
                
                <div class="drawer-result" v-if="cartStore.drawerList.length">
                    <div class="result">
                        <div class="result__item">
                            <p class="result__title">Итого: </p>
                            <b class="result__num">{{ cartStore.totalSum }} руб. </b>
                        </div>
                        <div class="result__item">
                            <p class="result__title">Налог 5%:  </p>
                            <b class="result__num">{{ (cartStore.totalSum * 0.05).toFixed(2) }} руб. </b>
                        </div>
                    </div>
                    <button class="result__btn" @click="cartStore.buyCart">Оформить заказ</button>
                </div>
            </div>
            <div class="drawer-order" v-if="cartStore.buyId" :class="{'top': cartStore.buyId}">
                <div class="drawer-order__inner">
                    <img class="drawer-order__img" src="/order.png" alt="order image">
                    <h4 class="drawer-order__title">Заказ оформлен!</h4>
                    <p class="drawer-clear__text">Ваш заказ #18 скоро будет передан курьерской доставке</p>
                    <button class="drawer-order__btn" @click="cartStore.showDrawer">Вернуться назад</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DrawerItem from './DrawerItem.vue';
import { useCartStore } from '@/store/cartStore';

const cartStore = useCartStore()

</script>

<style scoped lang="scss">
@import "/src/assets/drawer.scss";
</style>