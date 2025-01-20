<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ $t('tarot.question') }}</h1>
      </v-col>
      <v-col cols="6" class="textarea"><img src="../assets/未命名-5.png" alt="" /></v-col>
      <v-col cols="6" class="textarea">
        <v-textarea
          bg-color="grey-lighten-2"
          color="cyan"
          label="輸入您的問題"
          style="height: 500px; width: 700px; top: 500px"
        ></v-textarea>
        <v-btn>yes</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
.textarea {
  position: relative;
  top: 200px;
}
</style>
