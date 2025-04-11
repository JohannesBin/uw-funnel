<template>
  <section id="contact" class="py-20 bg-white border-t-4 border-black">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-6xl md:text-7xl mb-10 text-center">BLI MED FRA START</h2>
        
        <div class="p-8 border-brutalist mb-12 bg-black text-white">
          <p class="text-2xl md:text-3xl uppercase font-bold mb-4 text-center">
            VI TRENGER FIRE PARTNERE
          </p>
          <p class="text-xl uppercase text-center">
            DE 4 FØRSTE SOM SIGNERER INTENSJONSAVTALE<br>
            FÅR FØRSTEPRIORITET PÅ VALG AV STUDIO
          </p>
        </div>

        <!-- Hidden static HTML form that Netlify can find during build -->
        <form name="uwm-partner-contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <input type="number" name="squareMeters" />
          <input type="number" name="budget" />
          <select name="investmentInterest">
            <option value="yes">Ja</option>
            <option value="maybe">Kanskje</option>
            <option value="no">Nei</option>
          </select>
          <textarea name="message"></textarea>
        </form>

        <!-- Actual form that users interact with -->
        <form 
          name="uwm-partner-contact" 
          method="POST"
          data-netlify="true"
          @submit.prevent="handleSubmit" 
          class="space-y-6"
        >
          <input type="hidden" name="form-name" value="uwm-partner-contact" />
          <p class="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <!-- Personlig info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-lg font-bold uppercase mb-2">NAVN</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none"
                placeholder="Ditt navn"
              />
            </div>

            <div>
              <label for="email" class="block text-lg font-bold uppercase mb-2">E-POST</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none"
                placeholder="Din e-post"
              />
            </div>
          </div>

          <div>
            <label for="phone" class="block text-lg font-bold uppercase mb-2">TELEFON</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              v-model="form.phone"
              required
              class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none"
              placeholder="Ditt telefonnummer"
            />
          </div>
          
          <!-- Studio behov -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="squareMeters" class="block text-lg font-bold uppercase mb-2">ØNSKET KVM</label>
              <input
                type="number"
                id="squareMeters"
                name="squareMeters"
                v-model="form.squareMeters"
                required
                class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none"
                placeholder="Antall kvm"
              />
            </div>
            
            <div>
              <label for="budget" class="block text-lg font-bold uppercase mb-2">BUDSJETT (NOK/MND)</label>
              <input
                type="number"
                id="budget"
                name="budget"
                v-model="form.budget"
                required
                class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none"
                placeholder="Ditt budsjett"
              />
            </div>
          </div>
          
          <div>
            <label for="investmentInterest" class="block text-lg font-bold uppercase mb-2">INTERESSERT I INVESTERING?</label>
            <select
              id="investmentInterest"
              name="investmentInterest"
              v-model="form.investmentInterest"
              class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none appearance-none"
            >
              <option value="">Velg alternativ</option>
              <option value="yes">Ja, interessert i å betale 1 år forskudd</option>
              <option value="maybe">Kanskje, trenger mer info</option>
              <option value="no">Nei, ikke interessert</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-lg font-bold uppercase mb-2">FORTELL OM DEG/DERE</label>
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              rows="4"
              required
              class="w-full px-4 py-3 bg-white border-2 border-black text-lg focus:border-4 focus:outline-none"
              placeholder="Hva driver du med? Hva slags studio trenger du?"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full btn btn-primary text-xl py-4 mt-4"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'SENDER...' : 'BLI MED SOM PARTNER' }}
          </button>
          
          <p class="text-sm uppercase text-center text-gray-600 mt-2">
            Vi kontakter deg innen 24 timer
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const form = reactive({
  name: '',
  email: '',
  phone: '',
  squareMeters: '',
  budget: '',
  investmentInterest: '',
  message: ''
})

const handleSubmit = async (event: Event) => {
  isSubmitting.value = true
  
  try {
    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)
    
    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString()
    })
    
    // Reset form values using type-safe approach
    form.name = ''
    form.email = ''
    form.phone = ''
    form.squareMeters = ''
    form.budget = ''
    form.investmentInterest = ''
    form.message = ''
    
    alert('TAKK FOR DIN INTERESSE! VI KONTAKTER DEG SNART.')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('BEKLAGER, NOE GIKK GALT. VENNLIGST PRØV IGJEN SENERE.')
  } finally {
    isSubmitting.value = false
  }
}
</script> 