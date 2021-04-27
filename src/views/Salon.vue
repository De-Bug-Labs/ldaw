<template>
  <div class="bigCont">
    <TitleCard
      :g="true"
      titulo="Conoce a los pilares de GAAP I.A.P"
      mensaje="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    />

    <div class="row"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleCard from "@/components/TitleCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Salon",
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
  .row {
    width: 50%;
  }
}
</style>
