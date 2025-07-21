<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
    <h1 class="text-3xl font-semibold mb-6">¡Faltan para nuestra boda!</h1>
    <div class="flex space-x-4 text-center text-2xl font-bold">
      <div class="bg-green-100 text-green-800 px-4 py-2 rounded-2xl shadow">
        <div>{{ time.days }}</div>
        <span class="text-sm font-normal">Días</span>
      </div>
      <div class="bg-green-100 text-green-800 px-4 py-2 rounded-2xl shadow">
        <div>{{ time.hours }}</div>
        <span class="text-sm font-normal">Horas</span>
      </div>
      <div class="bg-green-100 text-green-800 px-4 py-2 rounded-2xl shadow">
        <div>{{ time.minutes }}</div>
        <span class="text-sm font-normal">Minutos</span>
      </div>
      <div class="bg-green-100 text-green-800 px-4 py-2 rounded-2xl shadow">
        <div>{{ time.seconds }}</div>
        <span class="text-sm font-normal">Segundos</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WelcomeBrand',
  data () {
    return {
      targetDate: new Date('2025-12-26T21:00:00'),
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      intervalTime: null as number | null
    }
  },
  mounted () {
    this.updateDate()
    this.intervalTime = setInterval(this.updateDate, 1000)
  },
  methods: {
    updateDate () {
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
    }
  }
}
</script>
