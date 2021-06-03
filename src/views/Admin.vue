<template>
  <div class="container">
    <router-link class="title" :to="{ name: 'Home' }" @click="$emit('volver')">
      <img src="@/assets/roof.svg" />
      <h1>GAAP</h1>
    </router-link>
    <div class="content">
      <LogIn />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogIn from "@/components/LogIn.vue";

export default defineComponent({
  name: "Admin",
  components: {
    LogIn,
  },
  mounted() {
    this.$emit("admin");
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
.container {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2888a8;

  .title {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    height: 15%;
    width: 100%;
    justify-content: center;
    img {
      height: 130px;
      align-self: center;
    }
    h1 {
      align-self: center;
      font-family: "Signika", sans-serif;
      font-size: 6rem;
      margin-block-start: 0em;
      margin-block-end: 0em;
      color: rgb(255, 255, 255);
    }
  }
  .content {
    height: 85%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
