<template>
  <GaapInfo :information="information" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GaapInfo from "@/components/GaapInfo.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Somos",
  components: {
    GaapInfo,
  },

  data() {
    return {
      information: {
        mision:
          "Brindar a nuestros beneficiarios adultos y adultos mayores un servicio integral humano, personalizado y de calidad, logrando la incorporación y participación del adulto mayor con sus familiares , fortaleciendo el reconocimiento de lo invaluable de su persona.",
        vision:
          "Lograr convertirse en un referente sectorial a nivel nacional, mediante la prestación de servicios, beneficios y oportunidades que unido a una gestión profesional se otorgue la más alta calidad en todos sus servicios.",
        valores:
          "1.- Respeto a la intimidad y derechos de cada persona.<br>2.- Dignidad humana como pilar fundamental.<br>3.- Independencia y capacidad de elección.<br>4.- Autonomia en tdos los ámbito para una realización plena.",
      },
      completed: false,
    };
  },
});
</script>
