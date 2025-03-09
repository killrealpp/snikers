<template>
    <div class="slider">
        <Swiper :modules="modules" :pagination="{ clickable: true }" :loop="true" class="mySwiper">
            <SwiperSlide>
                <div class="slider__item">
                    <div class="slider__context">
                        <div class="slider__text">
                            Stan Smith,
                            <span>Forever!</span>
                        </div>
                        <button class="slider__btn">Купить</button>
                    </div>
                    <img class="slider__img" src="/slider.png" alt="slider image" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="slider__item">
                    <div class="slider__context">
                        <div class="slider__text">
                            Stan Smith,
                            <span>Forever!</span>
                        </div>
                        <button class="slider__btn">Купить</button>
                    </div>
                    <img class="slider__img" src="/slider.png" alt="slider image" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="slider__item">
                    <div class="slider__context">
                        <div class="slider__text">
                            Stan Smith,
                            <span>Forever!</span>
                        </div>
                        <button class="slider__btn">Купить</button>
                    </div>
                    <img class="slider__img" src="/slider.png" alt="slider image" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules'; 

import 'swiper/css'; 
import 'swiper/css/pagination'; 

const modules = [Pagination];
</script>

<style scoped lang="scss">
@import '/src/assets/slider.scss';

.mySwiper {
    width: 100%;
    height: 300px;
}
</style>