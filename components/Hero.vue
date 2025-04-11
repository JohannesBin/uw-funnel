<template>
  <section class="relative pt-32 bg-white text-black">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Left: Main heading and CTA -->
        <div class="flex flex-col justify-center border-brutalist p-6 md:p-8">
          <h1 class="text-4xl md:text-6xl xl:text-7xl font-black mb-4 tracking-tighter uppercase">
            12 PREMIUM STUDIOER
          </h1>
          <p class="text-xl md:text-2xl mb-6 uppercase font-bold">
            KONGENS GATE 14, OSLO<br>
            JUNI 2025
          </p>
          <div class="mb-6 border-t-4 border-black pt-4">
            <p class="text-lg mb-2"><span class="text-xl font-bold">FØRSTEKLASSES FASILITETER</span></p>
            <p class="text-lg mb-2"><span class="text-xl font-bold">PROFESJONELT NETTVERK</span></p>
            <p class="text-lg mb-2"><span class="text-xl font-bold">SENTRAL BELIGGENHET</span></p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn btn-primary text-lg">
              BLI MED SOM PARTNER
            </a>
            <a href="#studios" class="btn btn-secondary text-lg">
              SE STUDIOENE
            </a>
          </div>
        </div>
        
        <!-- Right: Image carousel of stripped locations -->
        <div>
          <div class="mb-4 border-brutalist p-0">
            <div class="bg-black text-white p-4 font-black uppercase text-lg text-center border-b-4 border-black">
              LOKALET I DAG - SLIK SER DET UT STRIPPET
            </div>
            <ImageCarousel />
          </div>
          <div class="bg-black text-white p-4 border-4 border-black">
            <p class="font-bold text-center text-sm">
              BILDENE VISER LOKALET FØR RENOVERING. STUDIOENE VIL BLI BYGGET ETTER HØYESTE STANDARD.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Quick stats - 3 column -->
    <div class="border-t-4 border-b-4 border-black bg-white text-black py-8">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          <div class="border-r-0 md:border-r-4 border-black p-4 text-center">
            <p class="text-3xl md:text-5xl font-black">12</p>
            <p class="text-xl uppercase font-bold">STUDIOER</p>
          </div>
          <div class="border-r-0 md:border-r-4 border-black p-4 text-center">
            <p class="text-3xl md:text-5xl font-black">2</p>
            <p class="text-xl uppercase font-bold">ETASJER</p>
          </div>
          <div class="p-4 text-center">
            <p class="text-3xl md:text-5xl font-black">4</p>
            <p class="text-xl uppercase font-bold">PARTNERE SØKES</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageCarousel from './ImageCarousel.vue'
</script> 