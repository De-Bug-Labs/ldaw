<template>
  <div class="home">
    <div class="parallax"></div>
    <HelloWorld
      msg="CENTRO INTEGRAL DE APOYO GERIATRICO"
      cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </div>
</template>

<style lang="scss">
.home {
  left: 0px;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;

  .parallax {
    background: url("../assets/parallax.jpg");
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
    background-position: center;
  }
}


@media (max-width: 900px){
  .home{
    .parallax {
    height: 500px;
    background-size: cover;
    background-position: center;
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
