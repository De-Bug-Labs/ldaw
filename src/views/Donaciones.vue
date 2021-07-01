<template>
  <Donativos
    mensaje="¿Quieres apoyar para que los adultos mayores sigan teniendo una vida llena de 
    actividades sociales, culturales, cuidadoes médicos, pero sobre todo 
    sentirse incluido en un grupo dedicado para ellos? Ayúdamos a brindales la oportunidad de pertenecer a GAAP IAP.
    ¡¡¡Tu apoyo económico es muy importante!!!
    ¡¡CONTAMOS CONTIGO!!
    Manda tus datos fiscales para enviarte tu recibo de donativo
    "
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Donativos from "@/components/Donativos.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Donaciones",
  components: {
    Donativos,
  },
});
</script>
