<template>
  <div class="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-5">
    <div class="w-full card">
      <div class="w-full">
        <h2 class="text-2xl font-bold py-4 text-center">Recepción</h2>
        <div class="py-5 grid grid-cols-1 lg:grid-cols-2">
          <div class="w-full px-4 py-2 lg:py-0 text-center">
            <p class="gidole-regular text-xl">Fecha: <span class="underline decoration-[#6D7D5D]">26 de diciembre del
                2025</span> - <span class="underline decoration-[#6D7D5D]">9:00 P.M.</span></p>
          </div>
          <div class="w-full px-4 py-2 lg:py-0 text-center">
            <p class="gidole-regular text-xl">Lugar: <span class="underline decoration-[#6D7D5D]">Villa Gabriela, calle
                24 entre 21-A y 23, Caucel.</span></p>
          </div>
        </div>
        <div class="w-full py-2 flex items-center justify-center">
          <button class="boda-verde text-white py-2 px-4 rounded-full gidole-regular outfit text-xl" style="cursor: pointer;" @click="crearCita">
            Agendar
          </button>
        </div>
      </div>
      <div class="w-full py-4">
        <h2 class="text-2xl font-bold py-4 text-center">Etiqueta</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="w-full py-3 lg:py-0 flex flex-col items-center justify-center">
            <h2 class="gidole-regular text-xl">Hombres</h2>
            <img :src="imgHombre" alt="Hombres" />
            <p class="lg:hidden w-full text-center">Traje o guayabera con pantalón de vestir</p>
          </div>
          <div class="w-full py-3 lg:py-0 flex flex-col items-center justify-center">
            <h2 class="gidole-regular text-xl">Mujeres</h2>
            <img :src="imgMujer" alt="Mujeres" />
            <p class="lg:hidden w-full text-center">Vestido de noche</p>
          </div>
        </div>
        <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2">
          <div class="w-full py-3">
            <p class="w-full text-center">Traje o guayabera con pantalón de vestir</p>
          </div>
          <div class="w-full py-3">
            <p class="w-full text-center">Vestido de noche</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full card">
      <h2 class="text-2xl font-bold py-4 text-center">Ubicación</h2>
      <iframe class="lg:w-full lg:h-[90%] w-full h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5666.198927378314!2d-89.71434359389895!3d21.013850814326076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f560b78b9af98bb%3A0x9ad85a7fa8d10f51!2sVilla%20Gabriela!5e0!3m2!1sen!2smx!4v1754878418743!5m2!1sen!2smx"
        style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </div>
  </div>
</template>

<script lang="ts">
import imgHombre from '@/assets/images/hombre.png'
import imgMujer from '@/assets/images/mujer.png'

export default {
  name: "InfoCard",
  data() {
    return {
      imgHombre: imgHombre,
      imgMujer: imgMujer
    }
  },
  methods: {
    crearCita() {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.hasOwnProperty("MSStream")
      const isAndroid = /Android/.test(navigator.userAgent);
      const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.userAgent);

      const title = encodeURIComponent("Boda de María & Didier");
      const details = encodeURIComponent("¡Nos casamos! Te esperamos en nuestra boda.");
      const location = encodeURIComponent("https://maps.app.goo.gl/7fqkHfveNBoiWTh48");
      const start = "20251227T030000Z";
      const end = "20251227T080000Z";

      if (isIOS || isMac) {
        // Apple Calendar → descargar archivo .ics
        const ics = [
          'BEGIN:VCALENDAR',
          'VERSION:2.0',
          'BEGIN:VEVENT',
          `DTSTART:${start}`,
          `DTEND:${end}`,
          `SUMMARY:${title}`,
          `DESCRIPTION:${details}`,
          `LOCATION:${location}`,
          'END:VEVENT',
          'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'evento.ics';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }
      else if (isAndroid) {
        // Android (Google Calendar)
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
        window.open(gcalUrl, "_blank");
      }
      else {
        // Otros (PC con navegador)
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
        window.open(gcalUrl, "_blank");
      }
    }
  }
}
</script>
