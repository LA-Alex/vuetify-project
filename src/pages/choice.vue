<template>
  <v-container>
    <v-row class="row">
      <v-col cols="12" class="text-center">
        <h1>{{ $t('choice.title') }}</h1>
      </v-col>
      <Meteor />
      <Star />

      <!-- 1 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.one') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped1 }"
              @mouseover="isFlipped1 = true"
              @mouseleave="isFlipped1 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/1.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center" style="font-size: 18px">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(1)">{{
              $t('choice.yes')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 3 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.three') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped2 }"
              @mouseover="isFlipped2 = true"
              @mouseleave="isFlipped2 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/2.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center" style="font-size: 18px">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(3)">{{
              $t('choice.yes')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 5 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.five') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped3 }"
              @mouseover="isFlipped3 = true"
              @mouseleave="isFlipped3 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/3.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center" style="font-size: 18px">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(5)">{{
              $t('choice.yes')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 7 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.seven') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped4 }"
              @mouseover="isFlipped4 = true"
              @mouseleave="isFlipped4 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/4.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center" style="font-size: 18px">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(7)">{{
              $t('choice.yes')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 9 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.nine') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped5 }"
              @mouseover="isFlipped5 = true"
              @mouseleave="isFlipped5 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/5.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center" style="font-size: 18px">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(7)">{{
              $t('choice.yes')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 11 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.mine') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped6 }"
              @mouseover="isFlipped6 = true"
              @mouseleave="isFlipped6 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/6.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(11)">{{
              $t('choice.mine')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 13 -->
      <v-col cols="12" sm="12" md="3" lg="4">
        <v-card class="text-center v-card">
          <v-card-title style="font-size: 20px">{{ $t('choice.years') }}</v-card-title>
          <div class="card-container mx-auto">
            <div
              class="tarot"
              :class="{ 'is-flipped': isFlipped7 }"
              @mouseover="isFlipped7 = true"
              @mouseleave="isFlipped7 = false"
            >
              <div class="card-face card-front">
                <img src="../assets/card-1.png" width="200" height="300" alt="Card Front" />
              </div>
              <div class="card-face card-back">
                <img src="../assets/7.jpg" width="200" height="300" alt="Card Back" />
              </div>
            </div>
          </div>
          <v-card-actions class="justify-center">
            <v-btn color="primary" style="font-size: 18px" @click="goToDrawPage(13)">{{
              $t('choice.yes')
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Star from '@/components/Star.vue'

const router = useRouter()
const { t } = useI18n()

const goToDrawPage = (cardCount) => {
  router.push({
    path: '/question',
    query: { cards: cardCount },
  })
}

const isFlipped1 = ref(false)
const isFlipped2 = ref(false)
const isFlipped3 = ref(false)
const isFlipped4 = ref(false)
const isFlipped5 = ref(false)
const isFlipped6 = ref(false)
const isFlipped7 = ref(false)
</script>

<style scoped>
.card-container {
  perspective: 1000px;
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tarot {
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-back {
  transform: rotateY(180deg);
}
.row {
  max-width: 60%;
  margin: 0 auto;
}
</style>
