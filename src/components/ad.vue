<template>
  <div>
    <!-- 彈跳廣告視窗 -->
    <v-dialog v-model="showDialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="headline">優惠廣告</v-card-title>
        <v-card-text>
          <p>點擊以下連結了解更多優惠！</p>
          <v-btn color="pink" @click="goToLink">前往優惠頁面</v-btn>
        </v-card-text>
        <v-card-actions>
          <!-- 顯示 5 秒後的關閉按鈕 -->
          <v-btn text @click="closeDialog" v-if="showCloseButton">關閉</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: true, // 彈跳視窗的顯示狀態
      showCloseButton: false, // 控制是否顯示關閉按鈕
    }
  },
  methods: {
    // 開始延遲顯示關閉按鈕
    openDialog() {
      setTimeout(() => {
        this.showCloseButton = true // 5 秒後顯示關閉按鈕
      }, 5000) // 延遲 5 秒
    },
    // 點擊關閉按鈕後關閉視窗
    closeDialog() {
      this.showDialog = false
    },
    // 在新分頁打開優惠連結
    goToLink() {
      window.open(
        'https://peggicl8612.github.io/vuetify-project/#/home',
        '_blank',
        'noopener,noreferrer',
      )
    },
  },
  created() {
    this.openDialog() // 當頁面加載後顯示彈跳廣告
  },
}
</script>

<style>
.v-dialog {
  z-index: 9999;
}

.v-btn {
  font-weight: 500;
}
</style>
