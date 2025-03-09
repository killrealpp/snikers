<template>
  <main class="main">
    <div class="container">
      <Header />
      <Slider />
      <CartList />
      <Drawer v-if="cartStore.visible" />
    </div>
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Slider from '@/components/Slider.vue';
import CartList from '@/components/CartList.vue';
import Drawer from '@/components/Drawer.vue';
import { useCartStore } from '@/store/cartStore';

const cartStore = useCartStore()

</script>

<style lang="scss">
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  border-radius: 20px;

}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
}
</style>