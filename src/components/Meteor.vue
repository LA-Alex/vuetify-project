<template>
  <div class="meteor-container">
    <div
      v-for="(meteor, index) in meteors"
      :key="index"
      :style="getMeteorStyle(meteor)"
      class="meteor"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const meteorCount = 15
const meteors = ref(
  Array.from({ length: meteorCount }, () => ({
    left: Math.random() * 100 + '%',
    top: Math.random() * 250 + 50 + 'px',
    duration: Math.random() * 5 + 3 + 's',
  })),
)

const getMeteorStyle = (meteor) => ({
  left: meteor.left,
  top: meteor.top,
  animationDuration: meteor.duration,
})
</script>

<style scoped>
.meteor {
  position: absolute;
  width: 300px;
  height: 1px;
  transform: rotate(-45deg);
  background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  animation: meteor linear infinite;
}

.meteor::before {
  content: '';
  position: absolute;
  width: 4px;
  height: 5px;
  border-radius: 50%;
  margin-top: -2px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px 3px #fff;
}

@keyframes meteor {
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
