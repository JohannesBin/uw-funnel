<template>
  <div class="min-h-screen bg-white text-black">
    <ClientOnly>
      <DynamicMeta />
    </ClientOnly>
    <Navbar />
    <main>
      <Hero />
      <StudiosVision />
      <Studios />
      <AboutFounders />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
// Import styles first
import './assets/css/main.css'

// Import components in specific order
import DynamicMeta from '~/components/DynamicMeta.vue'
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
import StudiosVision from '~/components/StudiosVision.vue'
import Studios from '~/components/Studios.vue'
import AboutFounders from '~/components/AboutFounders.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
</script>
