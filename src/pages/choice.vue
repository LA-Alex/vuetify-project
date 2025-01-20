<template>
  <v-container>
    <h1>選擇牌陣</h1>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-title>單張牌</v-card-title>
          <v-card-actions>
            <v-btn color="primary" @click="goToDrawPage(1)">選擇</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-card-title>三張牌</v-card-title>
          <v-card-actions>
            <v-btn color="primary" @click="goToDrawPage(3)">選擇</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-card-title>六張牌</v-card-title>
          <v-card-actions>
            <v-btn color="primary" @click="goToDrawPage(6)">選擇</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 跳轉到抽牌頁面，並傳遞選擇的牌數
const goToDrawPage = (cardCount) => {
  router.push({
    path: '/question',
    query: { cards: cardCount },
  })
}
</script>
