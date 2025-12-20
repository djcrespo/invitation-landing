<template>
  <div>
    <principal-banner class="animate-fade-up animate-delay-[500ms] animate-ease-in" />
    <info-card class="animate-fade-up animate-delay-[700ms] animate-ease-in" />
    <gifts-information class="animate-fade-up animate-delay-[900ms] animate-ease-in" />
    <confirm-invitation v-if="showConfirmation" :id-invitation="id" class="animate-fade-up animate-delay-[1200ms] animate-ease-in" />
    <gallery-section v-if="showGallery" class="animate-fade-up animate-delay-[1200ms] animate-ease-in" />
  </div>
</template>

<script lang="ts">
import PrincipalBanner from '@/components/home/PrincipalBanner.vue';
import InfoCard from '@/components/home/InfoCard.vue';
import GiftsInformation from '@/components/home/GiftsInformation.vue';
import ConfirmInvitation from '@/components/home/ConfirmInvitation.vue';
import GallerySection from '@/components/gallery/GallerySection.vue';

export default {
  name: 'HomeView',
  components: {
    PrincipalBanner,
    InfoCard,
    GiftsInformation,
    ConfirmInvitation,
    GallerySection
  },
  data() {
    return {
      id: Array.isArray(this.$route.params.id) ? this.$route.params.id[0] || '' : this.$route.params.id || '',
      showGallery: false,
      showConfirmation: true
    }
  },
  mounted () {
    document.title = 'Didier & Mari - Invitación'
    const now = new Date()
    if (now.getDate() >= 19) {
      this.showConfirmation = false
      this.showGallery = true
    }
  },
  methods: {}
}
</script>
