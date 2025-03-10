<template>
  <main class="main">
    <div class="container">
      <Header />
      <Slider class="slider__own" />
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

@media (max-width: 1000px){
  main{
    padding: 0 30px;  
  }
}


@media (max-width: 665px){
  .slider__own{
    display: none;
  }
}

@media (max-width: 450px){
  main{
    padding: 0 15px;  
  }
}
</style>