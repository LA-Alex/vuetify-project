<template>
  <v-container>
  <v-row>
    <Star />
    <ad />


    <v-col cols="12">
      <h1 class="text-center">{{ $t('tarot.aipage') }}</h1></v-col
    >
    <v-col cols="12"
      ><h1 class="text-center" style="color: #cccc99">{{ question }}</h1></v-col
    >
   <v-col cols="12" class="text-center">
  <v-btn color="orange-lighten-1" @click="saveTarotRecord" width="100px">
    {{ $t('tarot.Keep') }} <!-- 翻譯: 保存 -->
  </v-btn>
</v-col>

    <v-col cols="6"
      ><ul class="list">
        <li v-for="(card, index) in cards" :key="card.id">
          <img :src="card.image" alt="" />
          <p class="text-center">{{ card.name }}</p>
        </li>
      </ul></v-col
    >
    <v-col cols="6"
      ><h2>{{ $t('tarot.gotoaipage') }}</h2>
      <div class="reading">{{ aiResponse }}</div class="reading">
      </v-col
    >

  </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useAxios } from '@/composables/axios'
import Star from '@/components/Star.vue'
import { useI18n } from 'vue-i18n'
import ad from '@/components/ad.vue'


const { t } = useI18n()
const { apiAuth } = useAxios()
const route = useRoute()
const cards = JSON.parse(route.query.selected)
const question = route.query.question
const selectedCards = ref([])
const aiResponse = ref('')

console.log('2222' + cards)
const aiAns = async () => {
  try {
    const { data } = await apiAuth.post( '/ai/openai', {
      question,
      selectedCards: cards,
    })
    aiResponse.value = data.result
  } catch (error) {
    console.log('1111' + error)
    aiResponse.value = t('api.aiResponse')
  }
}

const saveTarotRecord = async () => {
  // 假设我们用 localStorage 存储登录状态


  try {
    // 正确的 API 请求
    const response = await apiAuth.post('/ai/save', {
      question,
      selectedCards: cards,
      aiResponse: aiResponse.value
    })
    const data = response.data
    alert(t('api.succ'))
    console.log('✅ 儲存成功:', data)
  } catch (error) {
    console.error('❌ 儲存失敗:', error.response ? error.response.data : error)
    const errorMessage = error.response?.data?.error || error.message || 'error'
    alert(t('api.api'))
  }
}



aiAns()
</script>
<style scoped lang="scss">
.list {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  li {
    text-align: center;
    font-weight: 500;
           color: #cccc99;

    text-decoration: none;
  }
  img {
    width: 200px;
    height: 340px;
    object-fit: cover;
    border: 5px solid rgb(136, 105, 105);
  }
}
.reading{
  white-space: pre-line;
font-size: 18px;
}
</style>
