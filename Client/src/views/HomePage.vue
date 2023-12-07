<script>
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import Footer from '../components/Footer.vue'
import EventPreview from '../components/EventPreview.vue'
import { mapActions, mapState } from 'pinia'
import { useOrganizerStore } from '../stores/organizer'
import { RouterLink } from 'vue-router'

export default {
  name: 'HomePage',
  components: {
    Navbar,
    Carousel,
    Footer,
    EventPreview
  },
  computed: {
    ...mapState(useOrganizerStore, ['dataEvent', 'eventDetail'])
  },
  methods: {
    ...mapActions(useOrganizerStore, ['showEvent', 'showEventDetail']),
    showEventHandler() {
      this.showEvent()
    },
    showEventDetailHandler(id) {
      this.showEventDetail(id)
      console.log(this.eventDetail.latitude, this.eventDetail.longitude)
    }
  },
  created() {
    this.showEventHandler()
  }
}
</script>

<template>
  <Navbar />
  <div class="container">
    <Carousel />

    <div class="mx-auto px-4 py-8 rounded-xl">
      <div>
        <h2 class="text-2xl font-bold mb-5 text-center">UPCOMING EVENT</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <EventPreview />
      </div>
      <div class="flex justify-center items-center mt-10">
        <RouterLink to="/explore">
          <button
            class="bg-blue-600 font-semibold hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Explore More Event
          </button></RouterLink
        >
      </div>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-lg mt-8 mb-20">
      <h2 class="text-2xl font-bold mb-15 text-center mt-10">HOW TO BUY TICKET</h2>

      <div class="grid grid-cols-4 gap-8 items-center mt-20 mb-20">
        <!-- Daftar Akun -->
        <div class="text-center">
          <i class="fas fa-user-plus text-4xl mb-2 text-blue-600"></i>
          <h3>Register Account</h3>
          <h4 class="text-gray-500">Create your account today</h4>
        </div>

        <!-- Pilih Event -->
        <div class="text-center">
          <i class="fas fa-plus text-4xl mb-2 text-blue-600"></i>
          <h3>Choose Event</h3>
          <h4 class="text-gray-500">Choose event you want to attend</h4>
        </div>

        <!-- Pembayaran -->
        <div class="text-center">
          <i class="fas fa-money-bill-wave text-4xl mb-2 text-blue-600"></i>
          <h3>Payment</h3>
          <h4 class="text-gray-500">Many payment method available</h4>
        </div>

        <!-- Pembelian Selesai -->
        <div class="text-center">
          <i class="fas fa-ticket-alt text-4xl mb-2 text-blue-600"></i>
          <h3>Transaction Success</h3>
          <h4 class="text-gray-500">Ticket will send to your email</h4>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
