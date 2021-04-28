<template>
  <div class="bigCont">
    <TitleCard
      :b="true"
      titulo="Material de Apoyo"
      mensaje="Aqui podras encontrar videos curados por nosotros para ayudar, orientar o divertir!"
    />
    <div class="miniCont">
      <div class="row">
        <BoxMaterial
          v-for="bong in items"
          :key="bong"
          :message="bong.mensaje"
          src="https://img.youtube.com/vi/0iyIdto1Whg/maxresdefault.jpg"
        />
      </div>
      <div class="row">
        <BoxMaterial
          v-for="bong in items"
          :key="bong"
          :message="bong.mensaje"
          src="https://img.youtube.com/vi/0iyIdto1Whg/maxresdefault.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleCard from "@/components/TitleCard.vue"; // @ is an alias to /src
import BoxMaterial from "@/components/BoxMaterial.vue";

export default defineComponent({
  name: "Material",
  components: {
    TitleCard,
    BoxMaterial,
  },
  data() {
    return {
      items: [
        { mensaje: "Caidas y como evitarlas" },
        { mensaje: "Aceptando la vejez" },
        { mensaje: "Pasas" },
        { mensaje: "Bistec" },
      ],
    };
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
  margin-bottom: 50px;
  .miniCont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .row {
      width: 84%;
      height: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
}

@media screen and (max-width: 900px) {
  .bigCont {
    height: calc(100vh + 1500px);
    .miniCont {
      .row {
        width: 90%;
        height: 50%;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
