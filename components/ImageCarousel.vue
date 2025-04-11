<template>
  <div class="relative overflow-hidden border-brutalist">
    <!-- Carousel with transition -->
    <div class="relative w-full h-[400px]">
      <transition-group name="slide" tag="div" class="h-full">
        <img 
          v-for="(src, index) in images" 
          :key="src"
          v-show="index === currentSlide"
          :src="src" 
          :alt="`UWM Studio bilde ${index + 1}`" 
          class="absolute top-0 left-0 w-full h-full object-cover"
        >
      </transition-group>
    </div>
    
    <!-- Navigation arrows - larger and more visible -->
    <button 
      type="button"
      @click="prevSlide" 
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 border-2 border-black text-black hover:bg-gray-100 cursor-pointer transition-transform duration-150 active:scale-95"
      aria-label="Previous image"
    >
      <span class="text-2xl font-bold">❮</span>
    </button>
    <button 
      type="button"
      @click="nextSlide" 
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 border-2 border-black text-black hover:bg-gray-100 cursor-pointer transition-transform duration-150 active:scale-95"
      aria-label="Next image"
    >
      <span class="text-2xl font-bold">❯</span>
    </button>
    
    <!-- Indicator of current image position -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center">
      <span class="bg-white px-3 py-1 text-sm font-bold border-2 border-black">
        {{ currentSlide + 1 }} / {{ images.length }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// All images from public/bilder - preload images for faster display
const images = [
  '/bilder/715_56516894-64c8-4454-915f-fb7bd26d8fa3.jpg.webp',
  '/bilder/715_e5ed3344-921c-42d9-8a08-e6831aadf041.jpg.webp',
  '/bilder/715_14db2a73-73e9-403d-9408-11aa2ecd770a.jpg.webp',
  '/bilder/715_2fe7a99f-26f1-45f5-8728-8514bb6a5cb0.jpg.webp',
  '/bilder/715_2371ad8d-2c41-4097-9fc2-4f7fe3e6ca3a.jpg.webp',
  '/bilder/715_8dccf367-aed3-42ad-81a8-ad9e6cb47ea5.jpg.webp',
  '/bilder/715_30468d54-c367-444f-b676-b8dae3812f41.jpg.webp',
  '/bilder/715_ea023c8d-b960-4c8b-861a-1751371e41b6.jpg.webp'
]

const currentSlide = ref(0)
const autoplayInterval = ref<null | number>(null)

// Preload all images on component mount for instant display
onMounted(() => {
  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
})

// Navigate to previous slide - optimized with debounce
let isTransitioning = false
const prevSlide = () => {
  if (isTransitioning) return
  isTransitioning = true
  currentSlide.value = (currentSlide.value === 0) ? images.length - 1 : currentSlide.value - 1
  setTimeout(() => { isTransitioning = false }, 200) // Prevent rapid clicks
}

// Navigate to next slide - optimized with debounce
const nextSlide = () => {
  if (isTransitioning) return
  isTransitioning = true
  currentSlide.value = (currentSlide.value === images.length - 1) ? 0 : currentSlide.value + 1
  setTimeout(() => { isTransitioning = false }, 200) // Prevent rapid clicks
}

// Setup autoplay (commented out to avoid auto-changing)
// onMounted(() => {
//   autoplayInterval.value = window.setInterval(() => {
//     nextSlide()
//   }, 5000) // Change slide every 5 seconds
// })

// // Clean up interval on component unmount
// onBeforeUnmount(() => {
//   if (autoplayInterval.value) {
//     clearInterval(autoplayInterval.value)
//   }
// })
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style> 