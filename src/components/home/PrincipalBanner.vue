<template>
  <div class="card">
    <div class="columns-1 lg:columns-2">
      <div>
        <img style="border-radius: 15px;" width="100%" height="auto" :src="img" alt="imagen1" />
      </div>
      <div class="p-4 text-justify">
        <p class="gidole-regular text-xl">
          Nos sentimos profundamente agradecidos por contar con su presencia en uno de los días más importantes de nuestras vidas.
          Compartir este momento con ustedes, nuestras personas queridas, lo hace aún más especial e inolvidable.
        </p>
        <br>
        <p class="gidole-regular text-xl">
          Gracias por su cariño, por su compañía y por ser parte de nuestra historia.
          ¡Esperamos que disfruten esta celebración tanto como nosotros!
        </p>
        <br>
        <p class="edu-nsw-act-cursive">
          Con todo nuestro amor,
          Maria & Didier
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import banner from '@/assets/banner.png'

export default {
  name: "PrincipalBanner",
  data () {
    return {
      img: banner
    }
  }
}
</script>
