<template>
  <v-app>
    <v-main>
      <v-container>
        <v-col cols="12">
          <div>
            <img v-for="(img, index) in starSigns" :key="index" :src="img.src" class="starSigns" />
          </div>
        </v-col>
        <v-row class="h-screen">
          <div ref="stars"></div>
          <!-- <Meteor /> -->
          <v-col cols="12">
            <h1 class="text-center">{{ $t('tarot.index') }}</h1>
          </v-col>
          <v-col cols="12">
            <div class="card-wrapper">
              <img src="../assets/index.png" alt="Tarot Image" />
            </div>
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn size="x-large" color="orange-lighten-1" @click="open">{{
              $t('index.start')
            }}</v-btn>
          </v-col>
        </v-row>

        <v-container>
          <v-row class="d-flex justify-center align-center">
            <v-col cols="12" lg="8" class="box1 text-center">
              <img src="../assets/sun-4.png" alt="Sun Image" />
              <h2>{{ $t('index.discover') }}</h2>
              <p class="color-dark">
                {{ $t('index.curious') }}
              </p>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="box2 text-center">
            <v-col cols="12" lg="2" class="v-col">
              <h2>{{ $t('index.one') }}</h2>
              <p>{{ $t('index.oneText') }}</p>
              <img class="img" ref="tiltElements" src="../assets//Option 1B (3).png" alt="" />
            </v-col>
            <v-col cols="12" lg="2" class="v-col">
              <h2>{{ $t('index.two') }}</h2>
              <p>{{ $t('index.twoText') }}</p>

              <img class="img" ref="tiltElements" src="../assets//Option 1B (4).png" alt="" />
            </v-col>
            <v-col cols="12" lg="2" class="v-col">
              <h2>{{ $t('index.three') }}</h2>
              <p>{{ $t('index.threeText') }}</p>

              <img class="img" ref="tiltElements" src="../assets//Option 1B (1).png" alt="" />
            </v-col>

            <v-col cols="12" lg="2" class="v-col">
              <h2>{{ $t('index.four') }}</h2>
              <p>{{ $t('index.fourText') }}</p>

              <img
                class="img"
                ref="tiltElements"
                src="../assets//Option 1B (2).png"
                alt=""
                style="width: 200px"
              />
            </v-col>
            <v-col cols="12" lg="2" class="v-col">
              <h2>{{ $t('index.five') }}</h2>
              <p>{{ $t('index.fiveText') }}</p>

              <img
                class="img"
                ref="tiltElements"
                src="../assets//Option 1B (5).png"
                alt=""
                style="width: 300px"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row class="box3 text-center">
            <v-col cols="12"
              ><h1>{{ $t('index.help') }}</h1>
              <p>{{ $t('index.helpText') }}</p></v-col
            >
            <v-col cols="12" class="d-flex justify-center btn">
              <v-btn class="btn" color="orange-lighten-1" size="x-large">
                {{ $t('index.date') }}
              </v-btn></v-col
            >
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import Meteor from '@/components/Meteor.vue'

const router = useRouter()
const open = () => {
  router.push('/choice')
}

const stars = ref(null)
onMounted(() => {
  console.log('Mounted')
  const tiltElements = document.querySelectorAll('.img')
  console.log('Found elements:', tiltElements)

  if (tiltElements.length > 0) {
    tiltElements.forEach((element) => {
      VanillaTilt.init(element, {
        max: 65,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      })
    })
  } else {
    console.log('1111' + error)
  }
})

const createStar = () => {
  if (!stars.value) {
    console.error('❌ stars.value 为空，无法添加星星')
    return
  }
  onMounted(() => {
    nextTick(() => {
      console.log('Mounted and DOM ready') // 確保在 DOM 渲染後執行
      const tiltElements = document.querySelectorAll('.img')
      console.log('Found elements:', tiltElements) // 確認是否找到任何元素

      if (tiltElements.length > 0) {
        tiltElements.forEach((element) => {
          VanillaTilt.init(element, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5,
          })
        })
      } else {
        console.log('No tilt-box elements found.')
      }
    })
  })

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

const starSigns = [
  { src: new URL('../assets/8-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/9-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/10-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/11-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/12-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/14-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/15-removebg-preview.png', import.meta.url).href },
  { src: new URL('../assets/16-removebg-preview.png', import.meta.url).href },
]
</script>

<style scoped lang="scss">
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
h1 {
  color: #cccc99;
  font-size: 50px;
}
.img {
  transition: transform 1s ease-in-out; /* 让 transform 变换有过渡 */
}

.img:hover {
  transition: top 3s ease;
  filter: drop-shadow(8px 5px 50px rgb(215, 226, 174)) drop-shadow(8px 5px 50px rgb(214, 231, 60))
    drop-shadow(8px 5px 50px rgb(214, 231, 60)) drop-shadow(8px 5px 50px rgb(255, 255, 255));
}

.card-wrapper {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 300px;
    transform-style: preserve-3d;
    animation: card 5s infinite linear;
  }
}

@keyframes card {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}

.box1 {
  height: 250px;
  background-color: #cccc99;
  justify-content: center;
  display: flex;
  border-radius: 20px;
  position: relative;
  margin-top: 150px;
  img {
    position: absolute;
    top: -200px;
    left: 50px;
  }
  h2 {
    text-align: center;
    font-size: 28px;
    color: #003366;
  }
  p {
    position: absolute;
    text-align: center;
    margin-top: 100px;
    font-size: 20px;
    color: black;
  }
}
.box2 {
  margin-top: 200px;
  gap: 70px;

  .v-col:nth-child(odd) {
    border: 1px solid #cccc99;
    border-radius: 20px;

    h2 {
      color: #cccc99;
    }
    p {
      margin-top: 50px;
      font-size: 20px;
    }
    img {
      width: 200px;
    }
  }
  .v-col:nth-child(even) {
    border: 1px solid #cccc99;
    border-radius: 20px;

    h2 {
      color: #cccc99;
    }
    p {
      margin-top: 50px;
      font-size: 20px;
      color: #ffffff;
    }
    img {
      width: 200px;
    }
  }
}
.box3 {
  justify-content: center;
  display: flex;
  border-radius: 20px;
  position: relative;
  margin-top: 300px;

  h1 {
    text-align: center;
    color: #88b1db;
    font-size: 48px;
  }
  p {
    text-align: center;
    margin-top: 100px;
    font-size: 28px;
    color: rgb(255, 255, 255);
  }
  .btn {
    margin: 10px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 35px;
  }
  .card-wrapper {
    img {
      width: 200px;
    }
  }
  .box1 {
    margin: 0;

    img {
      display: none;
    }
    h2 {
      font-size: 22px;
      text-align: right;
      z-index: 1;
    }
    p {
      font-size: 15px;
    }
  }

  .box2 {
    gap: 10px;

    .v-col {
      padding: 10px;
    }

    .v-col {
      border-radius: 15px;
      width: 1500px;
      padding: 10px;
      h2 {
        font-size: 25px;
        color: #cccc99;
      }
      p {
        font-size: 16px;
      }
      img {
        width: 30px;
      }
    }
  }

  .box3 {
    margin-top: 150px;
    padding: 10px;
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 20px;
    }
    img {
      margin-top: 100px;
    }
  }

  .v-btn {
    font-size: 14px;
    padding: 12px 20px;
    width: 100%;
    height: 50px;
    background-color: #d89e31;
    border-radius: 30px;
    color: #ffffff;
  }
}

.starSigns:nth-child(3) {
  top: 15%;
  left: 5%;
}
.starSigns:nth-child(2) {
  top: 30%;
  left: 5%;
}

.starSigns:nth-child(7) {
  bottom: 0%;
  width: 320px;
  left: 15%;
}
.starSigns:nth-child(8) {
  bottom: 10%;
  right: 5%;
  width: 320px;
}
</style>

<route lang="yaml">
meta:
  title: 'nav.tarot'
</route>
