<template>
  <form class="container1" id="help-form" @submit.prevent="validateForm">
    <ConfirmModal
      v-if="confirmed"
      @close="confirmed = false"
      @modificar="submitForm()"
    />
    <h1></h1>
    <h3>Ingresa la nueva información del evento.</h3>

    <div class="section">
      <div class="miniCont">
        <label for="name" class="form-label">Título del evento</label>
        <input
          @click="nomInv = false"
          :class="{ nomInv }"
          v-model="nombre"
          type="text"
          id="name"
          name="name"
          placeholder="Escribe el título aquí"
          maxlength="40"
        />
        <p :class="{ on: nomInv }">Asegúrate de ingresar un título válido</p>
      </div>
      <div class="miniCont">
        <label for="description" class="form-label"
          >Descripción del evento</label
        >
        <textarea
          @click="nomInv = false"
          :class="{ descripInv }"
          v-model="descripcion"
          type="textarea"
          cols="40"
          rows="5"
          id="description"
          name="description"
          placeholder="Ingresa la descripción del evento"
        />
        <p :class="{ on: descripInv }">
          Asegúrate de ingresar una descripción válida
        </p>
      </div>
      <div class="miniCont">
        <label for="link" class="form-label">Link a la imagen</label>
        <input
          @click="linkInv = false"
          :class="{ linkInv }"
          v-model="link"
          type="text"
          id="link"
          name="link"
          placeholder="Escribe el Link aquí"
          maxlength="100"
        />
        <p :class="{ on: linkInv }">Asegúrate de ingresar un link válido</p>
      </div>
      <div class="miniCont">
        <label for="name" class="form-label">Lugar del evento</label>
        <input
          @click="lugarInv = false"
          :class="{ lugarInv }"
          v-model="lugar"
          type="text"
          id="place"
          name="place"
          placeholder="Escribe el lugar aquí"
        />
        <p :class="{ on: lugarInv }">Asegúrate de ingresar un lugar válido</p>
      </div>
      <div class="miniCont">
        <label for="name" class="form-label">Fecha del evento</label>
        <input
          @click="(dmy = true), (my = false), (completeQuery = false)"
          v-model="date"
          type="date"
          id="date"
          name="date"
        />
        <p :class="{ on: dateInv }">Asegúrate de ingresar una fecha válida</p>
      </div>
    </div>
    <div class="section1">
      <input type="submit" name="submit" value="Guardar" />
    </div>
    <div class="section1">
      <button @click="$emit('regresar')">Cancelar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfirmModal from "@/components/ConfirmModal.vue";
import invalid from "../util/validators";

export default defineComponent({
  name: "NewMaterial",
  components: {
    ConfirmModal,
  },
  props: {
    elementoId: String,
  },
  data() {
    return {
      nombre: "",
      link: "",
      descripcion: "",
      lugar: "",
      date: "",
      nomInv: false,
      linkInv: false,
      descripInv: false,
      lugarInv: false,
      dateInv: false,
      confirmed: false,
      enviar: false,
      id: this,
      calendar: {
        title: "",
        description: "",
        date: "",
        address: "",
        srcimg: "",
      },
    };
  },
  methods: {
    validateForm() {
      this.nomInv = invalid.checkNombre(this.nombre);
      this.descripInv = invalid.checkDescrip(this.descripcion);
      this.lugarInv = invalid.checkLugar(this.lugar);
      this.dateInv = invalid.checkDate(this.date);
      [this.linkInv, this.link] = invalid.checkLink(this.link);
      this.confirmed = false;
      if (
        !this.nomInv &&
        !this.linkInv &&
        !this.descripInv &&
        !this.lugarInv &&
        !this.dateInv
      ) {
        this.confirmed = true;
      } else {
        this.confirmed = false;
      }
    },
    submitForm() {
      this.calendar.title = this.nombre;
      this.calendar.srcimg = this.link;
      this.calendar.description = this.descripcion;
      this.calendar.address = this.lugar;
      this.calendar.date = this.date;
      this.confirmed = false;
      this.editEvent();
    },
    getInfo() {
      try {
        const data = fetch("/api/calendar/" + this.elementoId, {
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            this.calendar = data;
            this.nombre = this.calendar.title;
            this.link = this.calendar.srcimg;
            this.descripcion = this.calendar.description;
            this.lugar = this.calendar.address;
            this.date = this.calendar.date;
          });
      } catch (error) {
        console.log(error);
      }
    },
    editEvent(): void {
      fetch("/api/calendar/" + this.elementoId, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(this.calendar),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.$emit("exito");
          this.$emit("regresar");
        })
        .catch((error) => {
          console.error("Error:", error);
          this.$emit("error");
        });
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
