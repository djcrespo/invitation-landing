<template>
  <div class="app-container">
    <navbar />
    <timecount />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from './components/navBar.vue';
import welcomeBrand from './components/home/welcomeBrand.vue';

export default {
  name: 'App',
  components: {
    navbar: NavBar,
    timecount: welcomeBrand
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
  margin: 40px auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #F6F5F3; /* Fondo blanco para efecto de card */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #000;
}

</style>
