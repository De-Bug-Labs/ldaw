<template>
  <div class="home">
    <div class="parallax">
      <div class="arrow arrow-first"></div>
      <div class="arrow arrow-second"></div>
    </div>
    <HelloWorld
      msg="Centro Integral de Apoyo Geriátrico"
      cont="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
    <div class="aviso">
      <a href="aviso.pdf" download="Aviso de privacidad GAAP I.A.P"
        >Descarga nuestro aviso de privacidad</a
      >
    </div>
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

  .aviso {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .parallax {
    background: url("../assets/parallax.jpg");
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow: hidden;
    background-position: center top;
    display: flex;
    width: 100vw;
    align-items: center;

    $ani-speed: 3s;
    $ani-delay: 1s;

    .arrow {
      opacity: 0;
      position: absolute;
      top: 85%;
      left: 50%;
      transform-origin: 50% 50%;
      transform: translate3d(-50%, -50%, 0);
    }

    .arrow-first {
      animation: arrow-movement $ani-speed ease-in-out infinite;
    }
    .arrow-second {
      animation: arrow-movement $ani-speed $ani-delay ease-in-out infinite;
    }

    .arrow:before,
    .arrow:after {
      background: rgb(190, 190, 190);
      content: "";
      display: block;
      height: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
    }

    .arrow:before {
      transform: rotate(36deg) translateX(-23%);
      transform-origin: top left;
    }

    .arrow:after {
      transform: rotate(-36deg) translateX(23%);
      transform-origin: top right;
    }

    // Animation
    @keyframes arrow-movement {
      0% {
        opacity: 0;
        top: 45%;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}

@media (max-width: 1080px) {
  .home {
    .parallax {
      .arrow {
        left: 45%;
        top: 75%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

@media (max-width: 900px) {
  .home {
    .aviso {
      flex-direction: column;
      text-align: center;
    }
    .parallax {
      background-position: bottom !important;
      background-size: cover !important;
      background: url("../assets/pm.jpg");
      .arrow {
        left: 45%;
        transform: translate(-50%, -50%);
      }
      .arrow:before,
      .arrow:after {
        background: rgb(240, 240, 240);
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
