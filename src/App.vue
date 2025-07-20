<template>
  <div class="app-container">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from './components/navBar.vue';

export default {
  name: 'App',
  components: {
    navbar: NavBar,
  },
  data() {
    return {};
  },
  mounted() {
    console.log('App mounted')
  },
  methods: {},
}
</script>

<style>
.app-container {
  width: 100%;
  height: 100vh;
  color: #000;
  background-color: #d8d8d8; /* Light background color */
}
</style>
