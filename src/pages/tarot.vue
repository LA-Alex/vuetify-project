<template>
  <v-container>
    <v-row>
      <v-col cols="12 " lg="12">
        <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide><img src="../assets/LI.jpg" /></swiper-slide>
          <swiper-slide><img src="../assets/LI (1).jpg" /></swiper-slide>
          <swiper-slide><img src="../assets/LI (2).jpg" /></swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>

  <v-container width="80%">
    <v-row class="">
      <v-col cols="12">
        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-col>
      <v-col v-for="product of filteredProducts" :key="product._id" cols="12" md="3" lg="3">
        <product-card v-bind="product" style="height: 500px"></product-card>
      </v-col>
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="totalPage"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref, computed } from 'vue'
import { useAxios } from '@/composables/axios'
import ProductCard from '@/components/ProductCard.vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const { api } = useAxios()

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination, Navigation]

const ITEMS_PER_PAGE = 6
const currentPage = ref(1)
const totalPage = computed(() => Math.ceil(products.value.length / ITEMS_PER_PAGE))
const products = ref([])
const search = ref('')
const filteredProducts = computed(() => {
  return (
    products.value
      .filter((product) => product.name.toLowerCase().includes(search.value.toLowerCase()))
      // 一頁 2 筆
      // 第 1 頁 = 0 ~ 1
      // 第 2 頁 = 2 ~ 3
      // 第 3 頁 = 4 ~ 5
      // .slice(開始索引, 結束索引)
      // 不包含結束索引
      .slice((currentPage.value - 1) * ITEMS_PER_PAGE, currentPage.value * ITEMS_PER_PAGE)
  )
})

const getProducts = async () => {
  try {
    const { data } = await api.get('/product')
    products.value.push(...data.result)
  } catch (error) {
    console.log(error)
  }
}
getProducts()
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 700px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<route lang="yaml">
meta:
  login: false
  admin: false
  title: 'nav.home'
</route>
