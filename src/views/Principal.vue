<template>
  <div class="container">
    <div class="sideNav">
      <a class="logo1"
        ><img src="@/assets/roof.svg" />
        <p>GAAP</p></a
      >
      <div class="navCont">
        <div class="elemento" @click="vUsuarios()">
          <a>Usuarios</a>
        </div>
        <div class="elemento">
          <a>Donaciones</a>
        </div>
        <div class="elemento">
          <a>Calendario</a>
        </div>
        <div class="elemento">
          <a>Portal de ayuda</a>
        </div>
        <div class="elemento">
          <a>Salon de la Fama</a>
        </div>
        <div class="elemento" @click="vMaterial()">
          <a>Material didactico</a>
        </div>
        <div class="elemento" @click="vMaterial()">
          <a>Cerrar Sesion <i class="large material-icons">logout</i></a>
        </div>
      </div>
    </div>
    <div class="content">
      <NewUser v-if="viewingUser" @done="viewingUser = false" />
      <Material v-if="viewingMaterial" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewUser from "@/components/NewUser.vue";
import Material from "@/components/MaterialAdmin.vue";

export default defineComponent({
  name: "Help",
  components: {
    NewUser,
    Material,
  },
  mounted() {
    this.$emit("admin");
  },
  data() {
    return {
      viewingUser: false,
      viewingMaterial: false,
    };
  },
  methods: {
    vMaterial() {
      this.viewingMaterial = true;
      this.viewingUser = false;
    },
    vUsuarios() {
      this.viewingMaterial = false;
      this.viewingUser = true;
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Signika", sans-serif;
  .sideNav {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: #6b6b6b;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    .navCont {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 100px;
      width: 300px;
      .elemento {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 300px;
        height: 70px;
        cursor: pointer;
        transition: 0.2s ease-out;

        a {
          font-size: 1.8rem;
          font-family: "Signika", sans-serif;
          color: white;
          font-weight: bold;
          margin-left: 20px;
          justify-content: center;
          align-items: center;
          display: flex;
          i {
            margin-left: 20px;
            font-weight: bold;
          }
        }
        &:hover {
          background-color: white;
          a {
            color: #000;
          }
        }
      }
    }
    .logo1 {
      margin-top: 10px;
      float: left;
      text-decoration: none;
      font-family: "Signika", sans-serif;
      display: flex;
      flex-direction: row;
      text-align: center;
      height: 70px;
      transition: 0.5s;

      p {
        margin-left: 10px;
        margin-bottom: 0px;
        margin-top: 10px;
        color: rgb(255, 255, 255);
        font-size: 60px;
        font-weight: 600;
        position: relative;
      }

      img {
        height: 90px;
        transition: 0.5s;
      }
    }
  }
  .content {
    width: calc(100% - 300px);
    height: 100%;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
