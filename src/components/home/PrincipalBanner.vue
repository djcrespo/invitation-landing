<template>
  <div class="card">
    <div class="w-full text-center p-4">
      <h1 class="text-3xl md:text-2xl lg:text-5xl edu-nsw-act-cursive">¡Nos casamos!</h1>
      <h2 class="text-xl gidole-regular">Y estás invitado(a)</h2>
    </div>
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="w-full py-3 flex items-center justify-center">
        <img class="lg:w-[80%]" style="border-radius: 15px;" height="auto" :src="img1" alt="imagen1" />
      </div>
      <div class="p-4 md:text-center text-center lg:text-justify flex flex-col justify-center">
        <p class="gidole-regular text-xl lg:text-2xl">
          Nos sentimos profundamente agradecidos por contar con su presencia en uno de los días más importantes de
          nuestras vidas.
          Compartir este momento con ustedes, nuestras personas queridas, lo hace aún más especial e inolvidable.
        </p>
        <br>
        <p class="gidole-regular text-xl lg:text-2xl">
          Gracias por su cariño, por su compañía y por ser parte de nuestra historia.
          ¡Esperamos que disfruten esta celebración tanto como nosotros!
        </p>
        <br>
        <p class="text-center edu-nsw-act-cursive lg:text-xl">
          Con todo nuestro amor,
          Maria & Didier
        </p>
      </div>
      <div class="w-full py-3 flex items-center justify-center">
        <img class="lg:w-[80%]" style="border-radius: 15px;" height="auto" :src="img2" alt="imagen1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import banner from '@/assets/banner.png'
import img2 from '@/assets/images/principal4.jpg'
import img3 from '@/assets/images/principal5.jpg'

export default {
  name: "PrincipalBanner",
  data() {
    return {
      img1: img2,
      img2: img3
    }
  }
}
</script>
