<template>
  <div class="bigCont">
    <TitleCard
      :b="true"
      titulo="Material de Apoyo"
      mensaje="Aqui podras encontrar videos curados por nosotros para ayudar, orientar o divertir!"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleCard from "@/components/TitleCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Material",
  components: {
    TitleCard,
  },
});
</script>

<style scoped lang="scss">
.bigCont {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
