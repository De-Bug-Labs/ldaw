<template>
  <div class="box1" @click="$emit('close')">
    <div class="modal" @click.stop>
      <div class="title">
        <h1>Verifica el elemento a eliminar</h1>
      </div>
      <div class="content">
        <h2>{{ elemento.title }}</h2>
        <h2>{{ elemento.link }}</h2>
      </div>
      <div class="buttons">
        <p class="confirmar" @click="deleteMaterial(elemento.id)">Eliminar</p>
        <p class="cancelar" @click="$emit('close')">Cancelar</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalDel",
  props: {
    elemento: Object,
  },
  data() {
    return {
      deletedResponse: {},
      completeQuery: false,
    };
  },
  methods: {
    deleteMaterial(elim: string) {
      fetch("http://localhost:5000/api/material/" + elim, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.$emit("confirmar");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.completeQuery = true;
    },
  },
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
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    background-color: white;
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    .title {
      width: 100%;
      height: 15%;
      font-size: 15px;
      border-bottom: 2px solid rgb(214, 214, 214);
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(255, 0, 0);
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
        background-color: #be0f0f;
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
