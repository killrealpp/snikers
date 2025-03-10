<template>
    <div class="content">
        <div class="content__top">
            <div class="content__title">Все кроссовки</div>
            <input
                class="content__input"
                type="text"
                placeholder="Поиск..."
                v-model="cartStore.searchQuery"
            />
            <my-select
                class="select"
                v-model="cartStore.selectedSort"
                :options="cartStore.sortOptions"
            ></my-select>
        </div>

        <div class="carts" v-if="!cartStore.loading">
            <CartItem
                v-for="cart in cartStore.paginatedCarts"
                :key="cart.id"
                :cart="cart"
            />
        </div>
        <p v-else>Loading...</p>

        <div class="page__wrapper" v-if="cartStore.totalPage > 1">
            <div
                v-for="pageNumber in cartStore.totalPage"
                :key="pageNumber"
                class="page"
                :class="{ 'current-page': cartStore.page === pageNumber }"
                @click="cartStore.changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div>
    </div>
</template>

<script setup>
import CartItem from "./CartItem.vue";
import MySelect from "@/components/UI/MySelect.vue"; 
import { useCartStore } from "@/store/cartStore";
import { onMounted, watch } from "vue";

const cartStore = useCartStore();

onMounted(() => {
    cartStore.fetchCarts();
});

watch([() => cartStore.searchQuery, () => cartStore.selectedSort], () => {
    cartStore.page = 1;
});
</script>

<style lang="scss" scoped>
@import "/src/assets/content.scss";
</style>
