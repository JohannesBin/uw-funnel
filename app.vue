<template>
  <div class="min-h-screen bg-white text-black">
    <DynamicMeta />
    <Navbar />
    <Hero />
    <StudiosVision />
    <Studios />
    <AboutFounders />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import './assets/css/main.css'
import DynamicMeta from '~/components/DynamicMeta.vue'
</script>
