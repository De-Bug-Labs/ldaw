<template>
  <div class="box" @click="$emit('close')">
    <div class="modal" @click.stop>
      <div class="title">
        <h1>Verifica que tus datos sean correctos</h1>
      </div>
      <div class="content">
        <h2>NOMBRE: {{ nombre }}</h2>
        <h2>CORREO: {{ correo }}</h2>
        <h2>TELEFONO: {{ telefono }}</h2>
        <h2>TEMA SELECCIONADO: {{ seccion }}</h2>
      </div>
      <div class="buttons">
        <p class="confirmar" @click="$emit('enviar')">Confirmar</p>
        <p class="cancelar" @click="$emit('close')">Cancelar</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalHelp",
  props: {
    seccion: String,
    nombre: String,
    correo: String,
    telefono: String,
  },
});
</script>

<style scoped lang="scss">
.box {
  width: 100% !important;
  height: 100% !important;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Signika", sans-serif;
  background-color: rgba(0, 0, 0, 0.527);

  .modal {
    background-color: white;
    width: 600px;
    height: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    -moz-box-shadow: 0 0 5px rgb(105, 105, 105);
    -webkit-box-shadow: 0 0 5px rgb(105, 105, 105);
    box-shadow: 0 0 10px rgb(134, 134, 134);
    .title {
      width: 100%;
      height: 15%;
      font-size: 15px;
      border-bottom: 2px solid rgb(214, 214, 214);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      width: 90%;
      height: 70%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-family: "Open Sans", sans-serif;
      h2 {
        font-size: 1.4rem;
        margin-block-start: 0.4em;
        margin-block-end: 0.4em;
      }
    }
    .buttons {
      width: 100%;
      height: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      border-top: 2px solid rgb(214, 214, 214);
      p.confirmar {
        width: 195px;
        height: 45px;
        align-self: center;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        font-size: 25px;
        background-color: #28a82d;
        border-radius: 10px;
        color: white;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin-right: 10%;
        cursor: pointer;
      }
      p.cancelar {
        width: 195px;
        height: 45px;
        display: flex;
        font-size: 25px;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        background-color: #be0f0f;
        border-radius: 10px;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
        margin-block-start: 0em;
        margin-block-end: 0em;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    .modal {
      width: 90%;
      height: auto;
      margin-bottom: 50px;
      .title {
        h1 {
          font-size: 22px;
        }
      }
      .content {
        width: 100%;
        h2 {
          font-size: 1.2rem;
        }
      }
      .buttons {
        height: 10%;
        width: 90%;
        p.cancelar {
          width: 150px;
          height: 45px;
          font-size: 20px;
        }
        p.confirmar {
          width: 150px;
          height: 45px;
          font-size: 20px;
        }
      }
    }
  }
}
</style>
