<template>
  <form class="container1" id="help-form" @submit.prevent="validateForm">
    <ConfirmModal
      v-if="confirmed"
      @close="confirmed = false"
      @modificar="submitForm()"
    />
    <h1>Crear</h1>
    <h3>Ingresa la informacióna del staff a crear.</h3>

    <div class="section">
      <div class="miniCont">
        <select v-model="nombreSeccion">
          <option value="Nutricion">Nutricion</option>
          <option value="Medicina">Medicina</option>
          <option value="Dental">Dental</option>
          <option value="Rehabilitacion">Rehabilitacion</option>
          <option value="Tanatologia">Tanatologia</option>
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
        <label for="mail" class="form-label">Correo Electrónico</label>
        <input
          @click="corInv = false"
          :class="{ corInv }"
          v-model="correo"
          type="mail"
          id="mail"
          name="name"
          placeholder="ejemplo@correo.com"
        />
        <p :class="{ on: corInv }">
          Asegurate de ingresar un Correo válido ejemplo@correo.com
        </p>
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

export default defineComponent({
  name: "NewStaff",
  components: {
    ConfirmModal,
  },
  props: {
    elementoId: String,
  },
  data() {
    return {
      nombre: "",
      correo: "",
      nomInv: false,
      corInv: false,
      confirmed: false,
      enviar: false,
      staff: {
        name: "",
        email: "",
        sectionId: "",
        departmentId: [""],
      },
      secciones: [],
      idSeccion: "",
      nombreSeccion: "Nutricion",
    };
  },
  methods: {
    checkNombre() {
      var regex = /^[-\w\s]+$/;
      if (
        this.nombre.length <= 2 ||
        this.nombre.length > 40 ||
        !regex.test(this.nombre)
      ) {
        this.nomInv = true;
      } else {
        this.nomInv = false;
      }
    },
    checkCorreo() {
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!regex.test(this.correo)) {
        this.corInv = true;
      } else {
        this.corInv = false;
      }
    },
    validateForm() {
      this.checkNombre();
      this.checkCorreo();
      this.confirmed = false;
      if (!this.nomInv && !this.corInv) {
        this.confirmed = true;
        this.staff.name = this.nombre;
        this.staff.email = this.correo;
        this.findID(this.nombreSeccion);
        this.staff.departmentId[0] = this.idSeccion;
        console.log(this.staff);
      } else {
        this.confirmed = false;
      }
    },
    submitForm() {
      this.addUser();
    },
    addUser(): void {
      fetch("/api/staff", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.staff),
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
        const data = fetch("/api/department", { credentials: "include" })
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
          console.log(this.idSeccion);
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
  input.corInv {
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
    margin-top: 0px;
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
