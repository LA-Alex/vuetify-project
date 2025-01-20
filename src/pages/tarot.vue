<template>
  <v-container class="container">
    <v-row justify="center" align="center" style="min-height: 100vh">
      <v-col cols="12">
        <h1 class="text-center" style="font-size: 50px">{{ $t('tarot.index') }}</h1>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <div class="card-wrapper">
          <img src="../assets/index.png" class="card" alt="Tarot Image" />
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn density="comfortable" @click="open">點我進入下一頁</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.container {
  background-image: url(''); /* 替换为你的背景图片路径 */
  background-size: cover;
  background-position: center;
}
.card-wrapper {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 300px;
  transform-style: preserve-3d;
  animation: rotate 5s infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg); /* 旋轉角度改為 rotateY */
  }
  50% {
    transform: rotateY(180deg); /* 180度翻轉 */
  }
  100% {
    transform: rotateY(360deg); /* 完成 360度旋轉 */
  }
}
</style>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const open = () => {
  router.push('/choice')
}
</script>

<route lang="yaml">
meta:
  title: 'nav.tarot'
</route>
