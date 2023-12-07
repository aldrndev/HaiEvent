<script>
export default {
  name: 'Carousel',
  data() {
    return {
      currentSlide: 0,
      slides: [
        'https://haievent.aldrincloud.com/image/1690260495_PraZyu.jpg',
        'https://haievent.aldrincloud.com/image/1690530867_sahQv9.jpg',
        'https://haievent.aldrincloud.com/image/1701368043_KcJIds.jpg'
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length
    }
  },
  mounted() {
    setInterval(() => {
      this.nextSlide()
    }, 3000)
  }
}
</script>

<template>
  <!-- carousel -->
  <section class="mt-5 rounded-xl">
    <div id="default-carousel" class="relative w-full">
      <div class="relative h-56 overflow-hidden md:h-96">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ hidden: currentSlide !== index }"
          class="absolute duration-700 ease-in-out top-0 w-full h-full"
        >
          <img
            :src="slide"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-xl"
            alt="Carousel slide"
          />
        </div>
      </div>
    </div>
  </section>
</template>
