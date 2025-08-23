<template>
  <div class="w-full">
    <BaseModal
      v-model="showBasicModal"
      :id="id"
      title="Confirma tu asistencia"
      @close="(value) => { if (value) showAlert() }"
    />
    <AlertModal v-model="openAlert" />
    <div class="w-full card"
      :style="`background-image: url(${img}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f0f0f0;`">
      <h2 class="text-2xl lg:text-3xl font-bold py-4 text-center">Confirma tu asistencia</h2>
      <p class="text-center text-lg lg:text-xl inline-block bg-white/80 px-2 py-1 rounded">
        Nos llena de alegría que quieras acompañarnos en este día tan especial.
        Si por alguna razón no pudieras estar presente, lo comprenderemos y
        te llevaremos en el corazón.
      </p>

      <div class="w-full py-4 flex items-center justify-center">
        <button
          class="boda-verde text-white py-2 px-4 lg:text-xl rounded-full gidole-regular outfit text-xl"
          style="cursor: pointer;"
          @click="showBasicModal = true"
        >
          Confirmar Asistencia
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import bkConfirm from '@/assets/images/confirm.jpg';
import BaseModal from '@/components/home/ConfirmModal.vue';
import AlertModal from '@/components/home/AlertModal.vue';

export default {
  name: "ConfirmInvitation",
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    BaseModal,
    AlertModal
  },
  data() {
    return {
      img: bkConfirm,
      showBasicModal: false,
      openAlert: false
    };
  },
  methods: {
    async showAlert () {
      this.openAlert = true
      setTimeout(() => {
        this.openAlert = false
      }, 5000)
    }
  }
}
</script>
