<template>
  <div class="box1" @click="$emit('close')">
    <div class="modal" @click.stop>
      <div class="title">
        <h1>¿Seguro que deseas realizar esta accion?</h1>
      </div>
      <div class="buttons">
        <p class="confirmar" @click="$emit('modificar')">Confirmar</p>
        <p class="cancelar" @click="$emit('close')">Cancelar</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ConfirmModal",
});
</script>

<style scoped lang="scss">
.box1 {
  width: calc(100% - 300px);
  height: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Signika", sans-serif;

  .modal {
    background-color: white;
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.4);
    .title {
      width: 100%;
      height: 15%;
      font-size: 14px;
      border-bottom: 2px solid rgb(214, 214, 214);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #007df0;
    }
    .content {
      width: auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      font-family: "Open Sans", sans-serif;
      align-items: center;
      h2 {
        font-size: 1.3rem;
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
    }
    .buttons {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      border-top: 2px solid rgb(214, 214, 214);
      p.confirmar {
        width: 150px;
        height: 40px;
        align-self: center;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        font-size: 20px;
        background-color: #007df0;
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
        width: 150px;
        height: 40px;
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        background-color: #7a7a7a;
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
      width: 80%;
      .title {
        h1 {
          font-size: 22px;
        }
      }
      .content {
        width: 100%;
        h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
