<template>
  <nav class="w-full h-16">
    <div class="columns-3 h-full">
      <div class="text-center h-full flex items-center justify-center">
        <p class="text-black outfit text-2xl"></p>
      </div>
      <div class="text-center h-full flex items-center justify-center">
        <p class="text-black edu-nsw-act-cursive text-4xl">Didier & Mari</p>
      </div>
      <div class="text-center h-full flex items-center justify-center">
        <!-- <button
          class="boda-verde text-white py-2 px-4 rounded-full outfit text-xl"
          @click="sendConfirmation"
        >
          Enviar confirmación
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
    sendConfirmation () {
      console.log("Hola mundo")
    }
  },
}
</script>
