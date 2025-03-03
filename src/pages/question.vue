<template>
  <v-container style="position: relative">
    <v-row class="text-center justify-center align-center">
      <v-col cols="12">
        <div>
          <img v-for="(img, index) in starSigns" :key="index" :src="img.src" class="starSigns" />
        </div>
      </v-col>

      <div ref="stars"></div>
      <v-col cols="12">
        <h1 class="text-center" style="font-size: 50px">{{ $t('tarot.question') }}</h1>
        <h1 class="text-center" style="font-size: 60px; color: #cccc99">
          {{ $t('tarot.question2') }}
        </h1>
      </v-col>

      <!-- 增加間距 -->

      <v-col cols="12" class="pa-10"></v-col>

      <v-col cols="12" class="d-flex justify-center">
        <v-textarea
          @keydown.enter.prevent="nextpage"
          v-model="question"
          bg-color="grey-lighten-2"
          color="cyan"
          :label="$t('choice.label')"
          outlined
          class="pa-3"
          style="max-width: 700px; width: 100%; height: 400px"
        ></v-textarea>
      </v-col>

      <!-- 按鈕 -->
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="#d89e31" :disabled="!question" @click="nextpage">{{
          $t('choice.yes')
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const cardCount = route.query.cards
const question = ref('')
const stars = ref(null)

// 路由器
const router = useRouter()
const nextpage = () => {
  router.push({
    path: '/draw',
    query: { cards: cardCount, question: question.value },
  })
}

// 星星
const createStar = () => {
  if (!stars.value) {
    console.error('❌ stars.value 为空，无法添加星星')
    return
  }

  const starEl = document.createElement('span')
  starEl.className = 'star'
  const minSize = 1
  const maxSize = 2
  const size = Math.random() * (maxSize - minSize) + minSize
  starEl.style.width = `${size}px`
  starEl.style.height = `${size}px`
  starEl.style.left = `${Math.random() * 100}%`
  starEl.style.top = `${Math.random() * 100}%`
  starEl.style.animationDelay = `${Math.random() * 10}s`

  stars.value.appendChild(starEl)
}

onMounted(() => {
  console.log('✅ Vue 组件已加载')
  console.log('🌟 stars.value:', stars.value) // 检查 stars.value 是否正确
  for (let i = 0; i < 500; i++) {
    createStar()
  }
  console.log('⭐ 星星数量:', stars.value.children.length) // 检查星星是否生成
})

// 星座
const starSigns = [
  { src: new URL('../assets/8-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/9-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/10-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/11-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/12-removebg-preview.png', import.meta.url).href },

  { src: new URL('../assets/14-removebg-preview.png', import.meta.url).href },
]
</script>

<style>
.star {
  position: absolute;
  display: block;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.2);
  opacity: 0;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0% {
    opacity: 0;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}

.starSigns {
  position: absolute;
  width: 250px; /* 可自行調整大小 */

  transition: transform 0.5s ease-in-out;
}

.starSigns:hover {
  transform: scale(1.2);
  transition: transform 0.1s ease;
}

/* 讓圖片散落到隨機位置 */
.starSigns:nth-child(1) {
  top: -10%;
  left: 15%;
}
.starSigns:nth-child(2) {
  top: 20%;
  left: 10%;
}
.starSigns:nth-child(3) {
  top: 50%;
  left: 0%;
}
.starSigns:nth-child(4) {
  top: 40%;
  left: 80%;
}
.starSigns:nth-child(5) {
  top: 0%;
  left: 70%;
}
.starSigns:nth-child(6) {
  top: 20%;
  right: 0%;
}
@media (max-width: 1024px) {
  .starSigns {
    display: none;
  }
}
</style>
