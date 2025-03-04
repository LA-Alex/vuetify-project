<template>
  <v-container>
    <v-row>
      <!-- 顯示每一筆塔羅紀錄 -->
      <v-col v-for="record in savedRecords" :key="record._id" cols="12" md="6" lg="4">
        <v-card class="tarot-card">
          <v-card-title class="tarot-title">
            <span>🔮 {{ $t('tarot.save') }} {{ record.question }}</span>
            <!-- 刪除按鈕 -->
            <v-btn @click="deleteRecord(record._id)"> {{ $t('tarot.delete') }} </v-btn>
          </v-card-title>
          <v-card-subtitle class="tarot-subtitle">
            <div class="tarot-images">
              <img
                v-for="(card, index) in record.selectedCards"
                :key="index"
                :src="card.image"
                alt=""
                class="tarot-img"
              />
            </div>
          </v-card-subtitle>
          <v-card-text class="tarot-text">
            <strong>📝 {{ $t('tarot.aiResponse') }}:</strong>
            <p>{{ record.aiResponse }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAxios } from '@/composables/axios'

const savedRecords = ref([])
const { apiAuth } = useAxios()

// 獲取塔羅紀錄
const getSavedRecords = async () => {
  try {
    const { data } = await apiAuth.get('/ai/save')
    savedRecords.value = data.result
  } catch (error) {
    console.error('❌ 獲取保存資料失敗:', error)
    alert('無法獲取保存資料，請稍後再試')
  }
}

// 刪除紀錄
const deleteRecord = async (id) => {
  if (!confirm('確定要刪除這筆紀錄嗎？')) return

  try {
    await apiAuth.delete(`/ai/save/${id}`)
    // 刪除成功後，從前端移除該筆資料
    savedRecords.value = savedRecords.value.filter((record) => record._id !== id)
  } catch (error) {
    console.error('❌ 刪除失敗:', error)
    alert('刪除失敗，請稍後再試')
  }
}

onMounted(() => {
  getSavedRecords()
})
</script>

<style scoped>
/* 卡片樣式 */
.tarot-card {
  padding: 16px;
  border-radius: 12px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;
}

.tarot-card:hover {
  transform: scale(1.02);
}

/* 刪除按鈕 */
.tarot-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.v-btn {
  font-size: 20px;
  cursor: pointer;
}

/* 塔羅牌圖片排列 */
.tarot-images {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.tarot-img {
  width: 80px;
  height: 130px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
