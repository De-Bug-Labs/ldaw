<template>
  <h1>Donaciones</h1>

  <div class="cont1">
    <h1>El portal se encuentra:</h1>
    <h2>{{ estado }}</h2>
    <button class="btn1" @click="estatus()">{{ accion }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DonacionesAdmin",
  data() {
    return {
      view: { id: "", status: false, name: "" },
      completeQuery: false,
      estado: "",
      accion: "",
    };
  },
  methods: {
    getInfo() {
      this.completeQuery = false;
      try {
        const data = fetch("/api/view", { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            this.view = data;
            if (this.view.status) {
              this.estado = "ACTIVADO";
              this.accion = "Desactivar";
            } else {
              this.estado = "DESACTIVADO";
              this.accion = "Activar";
            }
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    changeView(): void {
      fetch("/api/view", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.view),
      })
        .then((response) => response.json())
        .then((data) => {
          this.getInfo();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    estatus(): void {
      if (this.view.status) {
        this.view.status = false;
      } else {
        this.view.status = true;
      }
      this.changeView();
    },
  },
  mounted() {
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
.cont1 {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn1 {
    margin-top: 50px;
    font-family: "Open Sans", sans-serif;
    background-color: #007df0;
    border-radius: 3px;
    border: none;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 25px;
    height: 45px;
    width: auto;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
