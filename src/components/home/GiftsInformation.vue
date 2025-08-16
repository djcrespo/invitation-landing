<template>
  <div class="w-full">
    <div class="w-full card">
      <div>
        <p class="gidole-regular text-center text-xl lg:text-2xl">
          Estamos felices de poder compartir este momento contigo. Tu compañía es lo más importante para nosotros; si
          deseas obsequiarnos algo, puedes hacerlo a través de nuestra mesa de regalos o con un apoyo económico, siempre
          con todo nuestro agradecimiento.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="w-full h-full py-4 text-center">
          <h2 class="font-bold text-lg lg:text-xl">Mesa de regalos</h2>
          <div class="py-4 w-full flex items-center justify-center">
            <img class="h-35" :src="qr" />
          </div>
          <button class="boda-verde text-white py-2 px-4 lg:text-xl rounded-full gidole-regular outfit text-xl"
            style="cursor: pointer;" @click="openGiftsPage">
            Mesa de regalos
          </button>
        </div>
        <div class="w-full h-full py-4 text-center">
          <h2 class="font-bold text-lg lg:text-xl">Apoyo económico</h2>
          <div class="w-full py-2">
            <p class="gidole-regular text-lg lg:text-xl py-2">Datos de la cuenta:</p>
            <p>Nombre: Didier Jesús Crespo Castilla</p>
            <p>Banco: Mercado Pago</p>
          </div>
          <div class="w-full py-2">
            <p class="gidole-regular text-lg lg:text-xl">CLABE interbancaria:</p>
            <p>1234567890</p>
          </div>
          <button class="boda-verde text-white py-2 px-4 rounded-full gidole-regular outfit text-xl"
            style="cursor: pointer;" @click="copyData">
            Copiar datos
          </button>
        </div>
      </div>
    </div>
  </div>#F6F5F3
</template>

<script lang="ts">
import amazonQR from '@/assets/images/amazon-qr.png';

export default {
  name: "GiftsInformation",
  data() {
    return {
      qr: amazonQR
    }
  },
  methods: {
    openGiftsPage() {
      window.open("https://www.amazon.com.mx/wedding/registry/1CP8ZLIGCG8IB", "_blank")
    },
    copyData() {
      const text = "Nombre: Didier Jesús Crespo Castilla\nBanco: Mercado Pago\nCLABE interbancaria: 1234567890";
      navigator.clipboard.writeText(text)
    }
  }
}
</script>
