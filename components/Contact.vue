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

        <!-- Form with EmailJS -->
        <form 
          @submit.prevent="sendEmail" 
          class="space-y-6"
        >
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
              <option value="Ja, interessert i å betale 1 år forskudd">Ja, interessert i å betale 1 år forskudd</option>
              <option value="Kanskje, trenger mer info">Kanskje, trenger mer info</option>
              <option value="Nei, ikke interessert">Nei, ikke interessert</option>
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
import { ref, reactive, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

// Initialize EmailJS 
onMounted(() => {
  emailjs.init("yLnGriuJANa3G6DAe") // Your public key
})

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

const sendEmail = async () => {
  isSubmitting.value = true
  
  try {
    // Add current year for email template
    const templateParams = {
      ...form,
      year: new Date().getFullYear()
    }
    
    await emailjs.send(
      "service_d5vmsdg", // Your service ID
      "template_uwm_partner", // You'll need to create this template ID in EmailJS dashboard
      templateParams
    )
    
    // Reset form values
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