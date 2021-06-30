<template>
  <GaapInfo :information="information" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GaapInfo from "@/components/GaapInfo.vue"; // @ is an alias to /src

export default defineComponent({
  name: "About",
  components: {
    GaapInfo,
  },

  data() {
    return {
      information: {
        team:
          "Contamos con un equipo de PROFESIONISTAS integrado por Médicos Generales, Médico en Rehabilitación, Terapeuta Físico, Odontólogo, Nutrióloga, Tanatóloga.Contadores Públicos, Licenciada en Artes Escénicas, Licenciada en Comunicación.Jóvenes de Servicio Social y Voluntarios.",
        instalation:
          "Contamos con áreas de atención  para personas de la tercera edad a través del servicio de Medicina General, Rehabilitación y Terapia Física, Atención Dental, Nutrición y Tanatología.De igual manera se cuenta con Talleres de Baile, Tejido, Taller Manejo de celulares, Terapia de la Memoria.",
        mision:
          "Brindar a nuestros beneficiarios adultos y adultos mayores un servicio integral humano, personalizado y de calidad, con una metodología activa, buscando la incorporación y  participación del adulto mayor con sus familiares , fortaleciendo su integración y el reconocimiento de lo invaluable de su persona.",
      },
      completed: false,
    };
  },

  methods: {
    getInfo() {
      try {
        const data = fetch("/api/information", {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            this.information = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completed = true;
    },
  },

  mounted() {
    this.getInfo();
  },
});
</script>
