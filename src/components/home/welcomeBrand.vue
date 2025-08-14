<template>
  <div class="">
    <div class="md:min-h-[10vh] lg:min-h-[30vh] flex flex-col items-center justify-center w-full lg:p-2 text-center text-gray-800">
      <h1 class="edu-nsw-act-cursive text-2xl lg:text-4xl p-4">¡Faltan para nuestra boda!</h1>
      <div class="grid grid-cols-4 lg:grid-cols-4 gap-4 text-center text-2xl font-bold py-3">
        <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow text-center">
          <div>{{ time.days }}</div>
          <span class="hidden lg:block text-[20px] font-normal gidole-regular">Días</span>
          <span class="block lg:hidden text-[20px] font-normal gidole-regular">D</span>
        </div>
        <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow gidole-regular text-center">
          <div>{{ time.hours }}</div>
          <span class="hidden lg:block text-[20px] font-normal gidole-regular">Horas</span>
          <span class="block lg:hidden text-[20px] font-normal gidole-regular">H</span>
        </div>
        <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow gidole-regular text-center">
          <div>{{ time.minutes }}</div>
          <span class="hidden lg:block text-[20px] font-normal gidole-regular">Minutos</span>
          <span class="block lg:hidden text-[20px] font-normal gidole-regular">M</span>
        </div>
        <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow gidole-regular text-center">
          <div>{{ time.seconds }}</div>
          <span class="hidden lg:block text-[20px] font-normal gidole-regular">Segundos</span>
          <span class="block lg:hidden text-[20px] font-normal gidole-regular">S</span>
        </div>
      </div>
      <button
          class="boda-verde text-white py-2 px-4 rounded-full gidole-regular text-xl"
          style="cursor: pointer;"
          @click="sendConfirmation"
        >
          Enviar confirmación
        </button>
    </div>
  </div>
</template>

<script lang="ts">
import fondoFlores from '@/assets/fondoplantas.jpg'

export default {
  name: 'WelcomeBrand',
  data() {
    return {
      targetDate: new Date('2025-12-26T21:00:00'),
      background: fondoFlores,
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      intervalTime: null as number | null
    }
  },
  mounted() {
    this.updateDate()
    this.intervalTime = setInterval(this.updateDate, 1000)
  },
  methods: {
    updateDate() {
      const now = new Date()
      const diff = this.targetDate.getTime() - now.getTime()

      if (diff > 0) {
        const seconds = Math.floor((diff / 1000) % 60)
        const minutes = Math.floor((diff / 1000 / 60) % 60)
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24)
        const days = Math.floor(diff / 1000 / 60 / 60 / 24)

        this.time = { days, hours, minutes, seconds }
      } else {
        this.time = { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    },
    sendConfirmation () {
      console.log("Hola mundo")
    }
  }
}
</script>
