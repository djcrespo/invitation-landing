<template>
  <div>
    <principal-banner class="animate-fade-up animate-delay-[500ms] animate-ease-in" />
    <info-card class="animate-fade-up animate-delay-[700ms] animate-ease-in" />
  </div>
</template>

<script lang="ts">
import PrincipalBanner from '@/components/home/PrincipalBanner.vue';
import InfoCard from '@/components/home/InfoCard.vue';

export default {
  name: 'HomeView',
  components: {
    PrincipalBanner,
    InfoCard
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
