<template>
  <div class="relative overflow-hidden border-brutalist">
    <!-- Main image display -->
    <img 
      :src="images[currentSlide]" 
      :alt="`UWM Studio bilde ${currentSlide + 1}`" 
      class="w-full h-[400px] object-cover"
    >
    
    <!-- Navigation arrows - larger and more visible -->
    <button 
      type="button"
      @click.prevent="prevSlide" 
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 border-2 border-black text-black hover:bg-gray-100 cursor-pointer"
    >
      <span class="text-2xl font-bold">❮</span>
    </button>
    <button 
      type="button"
      @click.prevent="nextSlide" 
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 border-2 border-black text-black hover:bg-gray-100 cursor-pointer"
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

// All images from public/bilder
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

// Navigate to previous slide
const prevSlide = () => {
  console.log('Previous slide clicked')
  currentSlide.value = (currentSlide.value === 0) ? images.length - 1 : currentSlide.value - 1
}

// Navigate to next slide
const nextSlide = () => {
  console.log('Next slide clicked')
  currentSlide.value = (currentSlide.value === images.length - 1) ? 0 : currentSlide.value + 1
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