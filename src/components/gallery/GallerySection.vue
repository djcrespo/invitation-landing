<template>
  <div class="w-full">
    <UploadPhotoModal
      v-model="showBasicModal"
      title="¡Manos a la cámara!"
      @close="(value) => { if (value) showAlert() }"
    />
    <!-- <AlertModal v-model="openAlert" /> -->
    <div class="w-full card"
      :style="`background-image: url(${img}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f0f0f0;`">
      <h2 class="text-2xl lg:text-3xl font-bold py-4 text-center">Toma y sube aquí</h2>
      <p class="text-center text-lg lg:text-xl inline-block bg-white/80 px-2 py-1 rounded">
        Estamos seguros de que vivirán momentos inolvidables, y nos encantaría atesorar cada instante. Capturen todos los recuerdos que deseen y compártanlos con nosotros subiendo sus fotos aquí.
      </p>
      <div class="w-full py-4 flex items-center justify-center">
        <button
          class="boda-verde text-white py-2 px-4 lg:text-xl rounded-full gidole-regular outfit text-xl"
          style="cursor: pointer;"
          @click="showBasicModal = true"
        >
          Subir fotos
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import bkConfirm from '@/assets/images/confirm.jpg';
import BaseModal from '@/components/home/ConfirmModal.vue';
import AlertModal from '@/components/home/AlertModal.vue';

import UploadPhotoModal from '@/components/gallery/UploadPhotoModal.vue';

export default {
  name: "GallerySection",
  props: {
    idInvitation: {
      type: String,
      default: ''
    }
  },
  components: {
    BaseModal,
    AlertModal,
    UploadPhotoModal
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
