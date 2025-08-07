<template>
  <div class="max-w-4xl mx-auto py-8">
    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      :autoplay="true"
      :transition="500"
      class="rounded-xl shadow-lg overflow-hidden"
    >
      <Slide v-for="(img, idx) in images" :key="idx">
        <img
          :src="img"
          :alt="`Slide ${idx + 1}`"
          class="w-full h-96 object-cover"
        />
      </Slide>
      <template #addons>
        <Navigation class="text-white" />
        <Pagination class="mt-2" />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

export default {
  name: 'GalleryComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
