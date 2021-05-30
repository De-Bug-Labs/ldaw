<template>
  <form class="container1" id="help-form" @submit.prevent="validateForm">
    <ConfirmModal
      v-if="confirmed"
      @close="confirmed = false"
      @modificar="submitForm()"
    />
    <h1>Crear</h1>
    <h3>Ingresa la informacióna del Colaborador a crear.</h3>

    <div class="section">
      <div class="miniCont">
        <select v-model="nombreSeccion">
          <option value="Estudiantes">Estudiantes</option>
          <option value="Empresarios">Empresarios</option>
          <option value="Profesionales">Profesionales</option>
        </select>
      </div>

      <div class="miniCont">
        <label for="name" class="form-label">Nombre</label>
        <input
          @click="nomInv = false"
          :class="{ nomInv }"
          v-model="nombre"
          type="text"
          id="name"
          name="name"
          placeholder="Escribe el nombre aquí"
          maxlength="40"
        />
        <p :class="{ on: nomInv }">Asegúrate de ingresar un nombre válido</p>
      </div>
      <div class="miniCont">
        <label for="descripcion" class="form-label">Descripcion</label>
        <input
          @click="descInv = false"
          :class="{ descInv }"
          v-model="descripcion"
          type="text"
          id="descripcion"
          name="descripcion"
          placeholder="Escribe la descripcion aqui"
          maxlength="200"
        />
        <p :class="{ on: descInv }">
          Asegúrate de ingresar una descripcion valida
        </p>
      </div>
      <div class="miniCont">
        <label for="institucion" class="form-label">Institucion</label>
        <input
          @click="instInv = false"
          :class="{ instInv }"
          v-model="institucion"
          type="text"
          id="descripcion"
          name="descripcion"
          placeholder="Escribe la institucion aqui"
          maxlength="200"
        />
        <p :class="{ on: instInv }">
          Asegúrate de ingresar una institucion valida
        </p>
      </div>
      <div class="miniCont">
        <label for="link" class="form-label">Link a Imagen</label>
        <input
          @click="linkInv = false"
          :class="{ linkInv }"
          v-model="link"
          type="text"
          id="descripcion"
          name="descripcion"
          placeholder="Escribe el Link aquí"
          maxlength="200"
        />
        <p :class="{ on: linkInv }">Asegúrate de ingresar un link valido</p>
      </div>
    </div>
    <div class="section">
      <input type="submit" name="submit" value="Enviar" />
    </div>
    <button @click="$emit('regresar')">Cancelar</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConfirmModal from "@/components/ConfirmModal.vue";
import invalid from "../util/validators";

export default defineComponent({
  name: "NewColab",
  components: {
    ConfirmModal,
  },
  props: {
    elementoId: String,
  },
  data() {
    return {
      nombre: "",
      descripcion: "",
      institucion: "",
      link: "",
      nomInv: false,
      descInv: false,
      instInv: false,
      linkInv: false,
      confirmed: false,
      enviar: false,
      colaborador: {
        name: "",
        description: "",
        institution: "",
        srcimg: "",
        sectionId: "",
      },
      secciones: [],
      idSeccion: "",
      nombreSeccion: "Estudiantes",
    };
  },
  methods: {
    validateForm() {
      this.nomInv = invalid.checkNombre(this.nombre);
      this.descInv = invalid.checkDesc(this.descripcion);
      this.instInv = invalid.checkInst(this.institucion);
      [this.linkInv, this.link] = invalid.checkLink(this.link);
      this.confirmed = false;
      if (!this.nomInv && !this.descInv && !this.instInv && !this.linkInv) {
        this.confirmed = true;
        this.colaborador.name = this.nombre;
        this.colaborador.description = this.descripcion;
        this.colaborador.institution = this.institucion;
        this.colaborador.srcimg = this.link;
        this.findID(this.nombreSeccion);
        this.colaborador.sectionId = this.idSeccion;
      } else {
        this.confirmed = false;
      }
    },
    submitForm() {
      this.addUser();
    },
    addUser(): void {
      fetch("/api/collaborator", {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.colaborador),
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
    getSecciones() {
      try {
        const data = fetch("/api/section", { credentials: "include" })
          .then((res) => res.json())
          .then((data) => {
            this.secciones = data;
            this.findID(this.nombreSeccion);
          });
      } catch (error) {
        console.log(error);
      }
    },
    findID(find: string) {
      this.secciones.forEach((element) => {
        if (element["name"] == find) {
          this.idSeccion = element["id"];
        }
      });
    },
  },
  mounted() {
    this.getSecciones();
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
    margin-bottom: 40px;
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
    select {
      cursor: pointer;
      padding: 10px 0;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid rgb(172, 172, 172);
      background-color: #f1f1f1;
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      option {
        font-family: "Open Sans", sans-serif;
      }
    }
  }

  h1 {
    margin-block-start: 0em;
    font-size: 2.5rem;
    margin-block-end: 0.5em;
  }

  h2 {
    font-family: "Open Sans", sans-serif;
    color: #797979;
    font-size: 20px;
    margin-block-end: 0.5em;
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
  input.descInv,
  input.instInv,
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
