<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
    <div class="border-b-4 border-black">
      <div class="container py-6">
        <div class="flex items-center justify-between">
          <a href="/" class="text-4xl font-black tracking-tighter uppercase">UWM</a>
          
          <nav class="hidden md:flex space-x-8 items-center">
            <a href="#studios" class="text-lg font-bold uppercase hover:text-gray-600 transition-colors">Studios</a>
            <a href="#contact" class="text-lg font-bold uppercase hover:text-gray-600 transition-colors">Kontakt</a>
            <a href="#contact" class="btn btn-primary py-2 px-6">BLI MED</a>
          </nav>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-b-4 border-black bg-white">
      <div class="container py-4">
        <nav class="flex flex-col space-y-4">
          <a href="#studios" @click="mobileMenuOpen = false" class="text-lg font-bold uppercase hover:text-gray-600 py-2">Studios</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="text-lg font-bold uppercase hover:text-gray-600 py-2">Kontakt</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="btn btn-primary py-2 justify-center">BLI MED</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script> 