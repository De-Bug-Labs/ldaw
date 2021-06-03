<template>
  <div class="container">
    <div class="sideNav">
      <a class="logo1"
        ><img src="@/assets/roof.svg" />
        <p>GAAP</p></a
      >
      <div class="navCont">
        <div
          class="elemento"
          @click="vUsuarios()"
          v-if="vHasRole('user:create')"
        >
          <a>Usuarios</a>
        </div>
        <div
          class="elemento"
          @click="vDonaciones()"
          v-if="vHasRole('view:modify')"
        >
          <a>Donaciones</a>
        </div>
        <div
          class="elemento"
          @click="vCalendario()"
          v-if="vHasRole('calendar:modify')"
        >
          <a>Calendario</a>
        </div>
        <div
          class="elemento"
          @click="vPortal()"
          v-if="vHasRole('staff:modify')"
        >
          <a>Portal de ayuda</a>
        </div>
        <div
          class="elemento"
          @click="vSalon()"
          v-if="vHasRole('collaborator:modify')"
        >
          <a>Salon de la Fama</a>
        </div>
        <div
          class="elemento"
          @click="vMaterial()"
          v-if="vHasRole('material:modify')"
        >
          <a>Material didactico</a>
        </div>
        <div class="elemento" @click="vLogout()">
          <a>Cerrar Sesion <i class="large material-icons">logout</i></a>
        </div>
      </div>
    </div>
    <div class="content">
      <AllUsers v-if="viewingUsers" @done="viewingUsers = false" />
      <Material v-if="viewingMaterial" />
      <SalonAdmin v-if="viewingSalon" />
      <PortalAdmin v-if="viewingPortal" />
      <CalendarioAdmin v-if="viewingCalendario" />
      <DonacionesAdmin v-if="viewingDonaciones" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AllUsers from "@/components/AllUsers.vue";
import Material from "@/components/MaterialAdmin.vue";
import SalonAdmin from "@/components/SalonAdmin.vue";
import PortalAdmin from "@/components/PortalAdmin.vue";
import CalendarioAdmin from "@/components/CalendarioAdmin.vue";
import DonacionesAdmin from "@/components/DonacionesAdmin.vue";
import token from "../util/jwtToken";

export default defineComponent({
  name: "Help",
  components: {
    AllUsers,
    Material,
    SalonAdmin,
    PortalAdmin,
    CalendarioAdmin,
    DonacionesAdmin,
  },
  mounted() {
    this.$emit("admin");
  },
  data() {
    return {
      viewingUsers: false,
      viewingMaterial: false,
      viewingSalon: false,
      viewingPortal: false,
      viewingCalendario: false,
      viewingDonaciones: false,
    };
  },
  methods: {
    vMaterial() {
      this.viewingMaterial = true;
      this.viewingUsers = false;
      this.viewingSalon = false;
      this.viewingPortal = false;
      this.viewingCalendario = false;
      this.viewingDonaciones = false;
    },
    vUsuarios() {
      this.viewingUsers = true;
      this.viewingMaterial = false;
      this.viewingSalon = false;
      this.viewingPortal = false;
      this.viewingCalendario = false;
      this.viewingDonaciones = false;
    },
    vSalon() {
      this.viewingSalon = true;
      this.viewingUsers = false;
      this.viewingMaterial = false;
      this.viewingPortal = false;
      this.viewingCalendario = false;
      this.viewingDonaciones = false;
    },
    vPortal() {
      this.viewingPortal = true;
      this.viewingSalon = false;
      this.viewingUsers = false;
      this.viewingMaterial = false;
      this.viewingCalendario = false;
      this.viewingDonaciones = false;
    },
    vCalendario() {
      this.viewingCalendario = true;
      this.viewingPortal = false;
      this.viewingSalon = false;
      this.viewingUsers = false;
      this.viewingMaterial = false;
      this.viewingDonaciones = false;
    },
    vDonaciones() {
      this.viewingDonaciones = true;
      this.viewingCalendario = false;
      this.viewingPortal = false;
      this.viewingSalon = false;
      this.viewingUsers = false;
      this.viewingMaterial = false;
    },
    vHasRole(role: string): boolean {
      return token.hasRole(role);
    },

    async vLogout() {
      token.deleteToken();
      window.location.reload();
      // window.location.href = '/';
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Signika", sans-serif;
  .sideNav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
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
