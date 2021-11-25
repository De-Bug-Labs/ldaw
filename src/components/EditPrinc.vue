<template>
  <form class="container1" id="help-form" @submit.prevent="validateForm">
    <ConfirmModal
      v-if="confirmed"
      @close="confirmed = false"
      @modificar="submitForm()"
    />
    <ExitoModal v-if="exito" @close="(exito = false), getInfo()" />
    <ErrorModal v-if="error" @close="error = false" />
    <h1>Editar Pagina Principal</h1>
    <h3>Ingresa el texto del landing page</h3>

    <div class="section">
      <div class="miniCont">
        <label for="indexText" class="form-label">Texto Principal</label>
        <textarea
          @click="nomInv = false"
          :class="{ descripInv }"
          v-model="descripcion"
          type="textarea"
          cols="40"
          rows="5"
          id="indexText"
          name="indexText"
          placeholder="Ingresa el texto a desplegar"
        />
        <p :class="{ on: descripInv }">
          Asegúrate de ingresar una descripción válida
        </p>
      </div>
    </div>
    <div class="section1">
      <input type="submit" name="submit" value="Modificar" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfirmModal from "@/components/ConfirmModal.vue";
import ExitoModal from "@/components/ExitoModal.vue";
import ErrorModal from "@/components/ErrorModal.vue";
import invalid from "../util/validators";

export default defineComponent({
  name: "EditPrinc",
  components: {
    ConfirmModal,
    ExitoModal,
    ErrorModal,
  },
  props: {
    elementoId: String,
  },
  data() {
    return {
      descripcion: "",
      descripInv: false,
      confirmed: false,
      enviar: false,
      completeQuery: false,
      exito: false,
      error: false,
      infoMain: {
        indexText: "",
        mision: "",
        instalation: "",
        team: "",
      },
    };
  },
  methods: {
    validateForm() {
      this.descripInv = invalid.checkDescrip(this.descripcion);
      this.confirmed = false;
      if (!this.descripInv) {
        this.confirmed = true;
      } else {
        this.confirmed = false;
      }
    },
    submitForm() {
      this.infoMain.indexText = this.descripcion;
      this.confirmed = false;
      this.changeMain();
    },
    changeMain(): void {
      fetch("/api/information", {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(this.infoMain),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.exito = true;
        })
        .catch((error) => {
          console.error("Error:", error);
          this.$emit("error");
        });
    },
    getInfo() {
      this.completeQuery = false;
      try {
        const data = fetch("/api/information", { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            this.infoMain = data;
            this.descripcion = this.infoMain.indexText;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
  },
  mounted() {
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.container1 {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Signika", sans-serif;
  position: relative;

  .section {
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;
    p {
      display: none;
    }
    p.on {
      color: rgb(255, 0, 0);
      display: flex;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
  }
  .section1 {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 30%;
    p {
      display: none;
    }
    p.on {
      color: rgb(255, 0, 0);
      display: flex;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-family: "Open Sans", sans-serif;
    color: #797979;
    font-size: 20px;
  }
  h3 {
    margin-block-end: 2em;
    margin-block-start: 0em;
  }

  .border {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    font-family: "Open Sans", sans-serif;
    width: 30%;
  }
  label {
    font-weight: 700;
    text-align: left;
    font-family: "Open Sans", sans-serif;
  }
  textarea {
    height: 200px !important;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    border: 2px solid black;
    border-radius: 10px;
    font-family: "Open Sans", sans-serif;
  }
  textarea.menInv {
    border: 2px solid rgb(255, 0, 0);
  }
  textarea:focus::placeholder {
    color: transparent;
    transition: 0.4s;
  }
  input {
    padding: 10px 0;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(0, 0, 0);
  }
  .miniCont {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
  }

  input.nomInv,
  input.linkInv {
    border-bottom: 2px solid rgb(255, 0, 0);
  }

  input:focus::placeholder {
    color: transparent;
    transition: 0.4s;
  }
  input:focus {
    border-bottom: 2px solid rgb(0, 0, 0);
  }
  select {
    color: rgb(0, 0, 0);
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: rgb(241, 241, 241);
    option {
      font-family: "Open Sans", sans-serif;
      font-size: 20px;
    }
    option:hover {
      background-color: rgb(0, 98, 255);
    }
  }

  select.secInv {
    border: 2px solid rgb(255, 0, 0);
  }
  .select-selected {
    background-color: rgb(0, 98, 255);
  }

  input[type="submit"] {
    border-bottom: none;
    cursor: pointer;
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
    padding: 0;
    margin-bottom: 0px;
  }

  input[type="submit"]:hover {
    border: 4px solid black;
  }
  button {
    margin-top: 10%;
    margin-right: auto;
    margin-left: 10%;
    border-bottom: none;
    cursor: pointer;
    width: auto;
    height: 45px;
    align-self: center;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    background-color: #7a7a7a;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 4px 4px 4px;
    margin-bottom: 0px;
    border: none;
    &:hover {
      border: 2px solid rgb(0, 0, 0);
    }
  }
}
@media screen and (max-width: 900px) {
  .container {
    text-align: center;
    .section {
      margin-bottom: 60px;
      width: 80%;
    }
  }
}
</style>
