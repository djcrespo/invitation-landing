<template>
  <div class="w-full">
    <div class="w-full card"
      :style="`background-image: url(${img}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f0f0f0;`">
      <h2 class="text-2xl font-bold py-4 text-center">Confirma tu asistencia</h2>
      <p class="text-center text-lg inline-block bg-white/80 px-2 py-1 rounded">
        Nos llena de alegría que quieras acompañarnos en este día tan especial.
        Si por alguna razón no pudieras estar presente, lo comprenderemos y
        te llevaremos en el corazón.
      </p>
      
      <div class="w-full py-4 flex items-center justify-center">
        <button class="boda-verde text-white py-2 px-4 rounded-full gidole-regular outfit text-xl">
          Confirmar Asistencia
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import bkConfirm from '@/assets/images/confirm.jpg';

export default {
  name: "ConfirmInvitation",
  data() {
    return {
      img: bkConfirm
    };
  },
  methods: {
    // Methods can be added here if needed
  }
}
</script>
