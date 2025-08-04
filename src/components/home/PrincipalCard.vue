<template>
  <div class="card">
    <img width="100%" height="auto" :src="img" alt="imagen1">
  </div>
</template>

<script lang="ts">
import banner from '@/assets/banner.png'

export default {
  name: "PrincipalCard",
  data () {
    return {
      img: banner
    }
  }
}
</script>
