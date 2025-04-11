<template>
  <!-- This is a client-side only component that adds dynamic meta tags -->
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useHead } from '#imports'

// Function to add and remove dynamic meta tags based on current URL
const setupDynamicMeta = () => {
  const currentUrl = window.location.href

  useHead({
    meta: [
      { property: 'og:url', content: currentUrl },
      { name: 'twitter:url', content: currentUrl }
    ]
  })
}

onMounted(() => {
  // Only run on client-side
  if (process.client) {
    setupDynamicMeta()
    
    // Update meta tags if URL changes (for SPA navigation)
    window.addEventListener('popstate', setupDynamicMeta)
  }
})

onUnmounted(() => {
  // Clean up event listener
  if (process.client) {
    window.removeEventListener('popstate', setupDynamicMeta)
  }
})
</script> 