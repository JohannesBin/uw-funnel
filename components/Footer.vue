<template>
  <footer class="py-16 bg-white border-t-4 border-black">
    <div class="container">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 class="text-5xl font-black uppercase mb-8">UWM</h2>
            <p class="text-xl uppercase font-bold mb-4">KONGENS GATE 14</p>
            <p class="text-xl uppercase font-bold">OSLO, NORGE</p>
          </div>
          
          <div>
            <h3 class="text-2xl uppercase font-bold mb-8 border-b-4 border-black pb-4">KONTAKT</h3>
            <ul class="space-y-4 text-lg">
              <li class="uppercase">INFO@UWM.NO</li>
              <li class="uppercase">+47 XXX XX XXX</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl uppercase font-bold mb-8 border-b-4 border-black pb-4">ÅPNING</h3>
            <p class="text-xl uppercase font-bold">JUNI 2024</p>
          </div>
        </div>
        <div class="mt-16 pt-8 border-t-4 border-black text-center">
          <p class="mt-4 text-sm">
            &copy; {{ new Date().getFullYear() }} UWM AS. ALLE RETTIGHETER RESERVERT. | ORG.NR: 935121922
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic here if needed
</script> 