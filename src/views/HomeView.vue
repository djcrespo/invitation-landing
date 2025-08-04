<template>
  <div class="card w-full text-center">
    <principal-card />
  </div>
</template>

<script lang="ts">
import PrincipalCard from '@/components/home/PrincipalCard.vue';

export default {
  name: 'HomeView',
  components: {
    PrincipalCard
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
