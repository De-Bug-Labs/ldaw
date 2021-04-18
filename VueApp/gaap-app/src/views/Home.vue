<template>
  <div class="home">
    <div class="parallax">
      <h1>CENTRO INTEGRAL <br />DE APOYO GERIATRICO</h1>
    </div>
    <HelloWorld
      msg="Apoyo y compañia para el adulto mayor"
      cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.home {
  left: 0px;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  z-index: -1;

  .parallax {
    background: url("../assets/parallax.jpg");
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
    background-position: right;
    width: 100vw;

    h1 {
      text-align: left;
      position: absolute;
      top: 50%;
      left: 30%;
      font-family: "Open Sans", sans-serif;
      font-size: 6rem;
      transform: translate(-50%, -50%);
      color: rgb(255, 255, 255);
    }
  }
}

@media (max-width: 1080px) {
  .home {
    .parallax {
      height: 100vh;
      background-size: cover;
      background-position: top;

      h1 {
        font-size: 3rem;
        left: 45%;
        top: 75%;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
