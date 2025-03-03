<template><div ref="stars"></div></template>
<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const stars = ref(null)

    const createStar = () => {
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

      if (stars.value) {
        stars.value.appendChild(starEl)
      }
    }

    onMounted(() => {
      console.log('✅ Vue 组件已加载')
      console.log('🌟 stars.value:', stars.value)
      for (let i = 0; i < 500; i++) {
        createStar()
      }
      console.log('⭐ 星星数量:', stars.value?.children.length)
    })

    return { stars }
  },
}
</script>
