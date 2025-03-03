<template>
  <v-container class="container">
    <v-row>
      <Star />
      <v-col cols="12">
        <h1 class="text-center" style="font-size: 60px">
          {{ $t('tarot.draw_cards', { count: count }) }}
        </h1>
      </v-col>
      <v-col cols="12">
        <p class="text-center" style="font-size: 28px; color: #cccc99">{{ $t('tarot.text') }}</p>
      </v-col>

      <v-col cols="12" class="d-flex justify-center mb-10 mt-10 btns" style="gap: 10px">
        <v-btn
          size="large"
          color="orange-lighten-1"
          @click="flipCardsAction"
          v-if="selectedCards.length === cardCount"
          >{{ $t('tarot.open') }}</v-btn
        >
        <v-btn
          size="large"
          color="orange-lighten-1"
          v-if="selectedCards.length === cardCount"
          @click="open"
          >{{ $t('tarot.gotoaipage') }}</v-btn
        >
      </v-col>

      <v-col cols="12">
        <ul class="card-list">
          <li
            v-for="(card, index) in allCards"
            :key="card.id"
            :style="getCardStyle(index)"
            @click="onCardClick(index)"
            :class="{ selected: selectedCards.includes(index), flipped: flipCards.includes(index) }"
          >
            <div class="card-inner">
              <div class="card-front"></div>
              <div class="card-back">
                <img :src="card.image" :alt="card.name" />
              </div>
            </div>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { tarotCards } from '@/data/tarot.js'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const selectedCards = ref([]) // 儲存已選擇的卡片索引
const allCards = ref([]) // 儲存洗牌後的卡片
const flipCards = ref([])
const { t } = useI18n

const open = () => {
  router.push({
    path: '/openai',
    query: {
      selected: JSON.stringify(selectedCards.value.map((index) => allCards.value[index])),
      question: question.value,
    },
  })
}
const count = computed(() => {
  const remainingCount = cardCount.value - selectedCards.value.length

  return remainingCount
})

onMounted(() => {
  const shuffled = shuffleArray([...tarotCards])
  allCards.value = shuffled.slice(0, 45)
})

// 洗牌函數
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const cardCount = computed(() => parseInt(route.query.cards) || 3)
const question = computed(() => route.query.question || '')

// 計算每張卡片的旋轉角度
const getCardRotation = (index) => {
  return (100 * (index - (45 - 1) / 2)) / 30 + 'deg'
}

const getCardStyle = (index) => {
  const isFlipped = flipCards.value.includes(index)
  return {
    animation: `rotateAnimation 0.6s ease forwards`,
    transform: isFlipped
      ? `rotate(${getCardRotation(index)}) translateY(-80%) scale(0.6)` // 翻面後，卡片上升並放大
      : `rotate(${getCardRotation(index)}) translateY(-180%)`, // 初始狀態的transform
  }
}

// 點擊卡片的邏輯
const onCardClick = (index) => {
  // 如果卡片已經被翻轉，則不能再選擇
  if (flipCards.value.includes(index)) {
    return
  }

  // 如果已經選擇了指定數量的卡片，且點擊的不是已選中的卡片，則不執行任何操作
  if (selectedCards.value.length >= cardCount.value && !selectedCards.value.includes(index)) {
    return
  }

  // 選擇或取消選擇卡片
  if (!selectedCards.value.includes(index)) {
    selectedCards.value.push(index)
  } else {
    selectedCards.value.splice(selectedCards.value.indexOf(index), 1)
  }
}

const flipCardsAction = () => {
  if (selectedCards.value.length === cardCount.value) {
    flipCards.value = [...selectedCards.value] // 記錄哪些卡片需要翻轉
  }
  // 禁止選擇卡片
  selectedCards.value = [...selectedCards.value] // 強制讓選擇的卡片固定，避免再次修改
}
</script>

<style scoped lang="scss">
.container {
  height: 150vh;
}
.card-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  position: relative;
  height: 300px;
  top: 500px;
}

.card-list li {
  position: absolute;
  width: 150px;
  height: 250px;
  transform-origin: 50% 100%;
  cursor: pointer;
  background: url(../assets/card-1.png) no-repeat center;
  background-size: contain;
  border-radius: 4px;
  transition: transform 1s ease; /* 增加動畫過渡 */
}

.card-list li.selected {
  box-shadow: 0 0 10px 5px rgba(202, 235, 18, 0.8); /* 被選中時的陰影效果 */
}

.card-list li.flipped .card-inner {
  transform: rotateY(180deg);
}
.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 4px;
}

.card-front {
  background: url('../assets/card-1.png') no-repeat center;
  background-size: cover;
}
.card-back {
  transform: rotateY(180deg);
}
.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
@media (max-width: 600px) {
  .container {
    height: auto;
  }
  .card-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    position: relative;
    height: 300px;
    top: 200px;
    li {
      position: absolute;
      width: 60px;
      height: 100px;
      cursor: pointer;
      background: url(../assets/card-1.png) no-repeat center;
      background-size: contain;
      border-radius: 4px;
      transition: transform 1s ease; /* 增加動畫過渡 */
    }
  }
}
</style>
