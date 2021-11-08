<template>
  <AboutUsComponent :information="information" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutUsComponent from "@/components/AboutUsComponent.vue";

export default defineComponent({
  name: "About",
  components: {
    AboutUsComponent,
  },

  data() {
    return {
      information: {
        title: "¿Quiénes somos?",
        somos1: "GAAP CENTRO INTEGRAL DE APOYO GERIATRICO, IAP",
        somos2:
          "Estancia de día para el Adulto y Adulto Mayor  con servicios de ASISTENCIA SOCIAL, mediante el cuidado integral de la salud, con una  atención de respeto y trato digno. Otorgando una mejor calidad de vida para el mantenimiento de sus habilidades en un ambiente amable y acogedor",
        instalacionesTitle: "INSTALACIONES",
        instalacionesContent:
          "Contamos con áreas de atención para personas de la tercera edad,  nuestra prioridad es brindar un espacio seguro y confortable como consultorio de Medicina General, Dental, Nutrición, Rehabilitación y terapia física. Áreas comunes para actividades física y recreativas.",
        equiposTitle: "NUESTRO EQUIPO Y SERVICIOS",
        equiposContent: "Contamos con un equipo de profesionistas como:",
        equiposProfecionistas: [
          "Médicos Generales",
          "Odontólogo",
          "Medico en Rehabilitación",
          "Terapeuta Físico",
          "Nutrióloga",
          "Tanatología",
        ],
        equiposServicios: [
          "Consulta de medicina general",
          "Consulta Dental",
          "Consulta de Rehabilitación",
          "Fisioterapia",
          "Consulta de Nutrición",
          "Consulta de Tanatología",
        ],
        equiposActividadesRec: [
          "Taller de baile",
          "Taller de terapia de la memoria",
          "Taller de tejido",
          "Taller manejo de celulares",
          "Podología",
          "Club de lectura",
        ],
        covisTitle: "Covid-19",
        covisContent:
          "En ésta etapa de PANDEMIA COVID 19 hemos diseñado protocolos de seguridad para brindar atención  médica a través de consulta planeada para evitar gran afluencia de personas. Estamos preparados para recibirte con las medidas de seguridad e instalaciones adecuadas.",
        covisTelefono: "(442) 196-34-36",
        covisCelular: "442-3-17-07-21",
      },
      completed: false,
    };
  },
});
</script>
