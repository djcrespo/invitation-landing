<template>
  <div class="app-container"
    :style="`background-image: url(${background}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f0f0f0;`">
    <navbar />
    <audio ref="audioElement" :src="audioSrc"></audio>
    <button class="music-button" @click="toggleAudio">
      {{ isPlaying ? '⏸️ Pausar' : '▶️ Reproducir' }}
    </button>
    <timecount class="animate-fade animate-delay-200" />
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from './components/navBar.vue';
import welcomeBrand from './components/home/welcomeBrand.vue';
import fondoFlores from '@/assets/fondoplantas.jpg'
import audioSrc from '@/assets/fondo.mp3'

export default {
  name: 'App',
  components: {
    navbar: NavBar,
    timecount: welcomeBrand
  },
  data() {
    return {
      background: fondoFlores,
      audioSrc: audioSrc,
      isPlaying: false,
    };
  },
  async mounted() {
    const audio = this.$refs.audioElement as HTMLAudioElement
    audio.volume = 0.2
    this.toggleAudio()
  },
  methods: {
    async toggleAudio() {
      const audio = this.$refs.audioElement as HTMLAudioElement
      if (this.isPlaying) {
        audio.pause()
        this.isPlaying = false
      } else {
        try {
          await audio.play()
          this.isPlaying = true
        } catch (error) {
          console.log('La reproducción automática fue prevenida:', error)
        }
      }
    }
  },
}
</script>

<style>
.app-container {
  margin: 40px auto;
  padding: 20px;
  border-radius: 16px;
  background-color: #F6F5F3;
  /* Fondo blanco para efecto de card */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #000;
}

/* Botón flotante */
.music-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #A3B18A;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s, background 0.2s;
  z-index: 9999;
}

.music-button:hover {
  transform: scale(1.05);
  background: #6D7D5D;
}
</style>
