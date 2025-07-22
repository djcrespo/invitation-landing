<template>
  <div class="flex flex-col items-center justify-center p-2 text-gray-800">
    <h1 class="edu-nsw-act-cursive text-4xl p-4">¡Faltan para nuestra boda!</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-2xl font-bold py-3">
      <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow">
        <div>{{ time.days }}</div>
        <span class="text-sm font-normal outfit">Días</span>
      </div>
      <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow outfit">
        <div>{{ time.hours }}</div>
        <span class="text-sm font-normal outfit">Horas</span>
      </div>
      <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow outfit">
        <div>{{ time.minutes }}</div>
        <span class="text-sm font-normal outfit">Minutos</span>
      </div>
      <div class="boda-verde text-boda-marfil px-4 py-2 rounded-2xl shadow outfit">
        <div>{{ time.seconds }}</div>
        <span class="text-sm font-normal outfit">Segundos</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WelcomeBrand',
  data() {
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
    }
  }
}
</script>
