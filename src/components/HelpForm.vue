<template>
  <form class="container" id="help-form" @submit.prevent="validateForm">
    <ModalHelp
      v-if="confirmed"
      @close="confirmed = false"
      @enviar="submitForm"
      :nombre="solicitud.name"
      :seccion="tema"
      :correo="solicitud.email"
      :telefono="solicitud.phone"
    />
    <h1>Portal de Ayuda</h1>
    <h3>
      Aquí podras ponerte en contacto con asesores de GAAP I.A.P para recibir
      ayuda de manera digital.
    </h3>
    <div class="section">
      <h2>Paso 1: Selecciona el tema de ayuda</h2>

      <select
        @click="secInv = false"
        id="seccion"
        v-model="seccion"
        name="seccion"
        :class="{ secInv }"
      >
        <option value="1">Ayuda con Nutrición</option>
        <option value="2">Ayuda con Medicina</option>
        <option value="3">Ayuda con Dental</option>
        <option value="4">Ayuda con Rehabilitación</option>
        <option value="5">Ayuda con Tanatología</option>
      </select>
      <p :class="{ on: secInv }">Selecciona un tema</p>
    </div>

    <div class="section">
      <h2>Paso 2: Ingresa tu información de contacto</h2>
      <div class="miniCont">
        <label for="name" class="form-label">Nombre</label>
        <input
          @click="nomInv = false"
          :class="{ nomInv }"
          v-model="solicitud.name"
          type="text"
          id="name"
          name="name"
          placeholder="Ingresa tu nombre aqui"
          maxlength="64"
        />
        <p :class="{ on: nomInv }">Asegurate de ingresar un nombre válido</p>
      </div>
      <div class="miniCont">
        <label for="mail" class="form-label">Correo Electrónico</label>
        <input
          @click="corInv = false"
          :class="{ corInv }"
          v-model="solicitud.email"
          type="mail"
          id="mail"
          name="name"
          placeholder="ejemplo@correo.com"
        />
        <p :class="{ on: corInv }">
          Asegurate de ingresar un Correo válido ejemplo@correo.com
        </p>
      </div>
      <div class="miniCont">
        <label for="phone" class="form-label">Teléfono</label>
        <input
          :class="{ telInv }"
          @click="telInv = false"
          v-model="solicitud.phone"
          type="tel"
          id="phone"
          name="phone"
          placeholder="10 digitos"
          maxlength="10"
        />
        <p :class="{ on: telInv }">Ingresa un número válido de 10 dígitos</p>
      </div>
    </div>
    <div class="section">
      <h2>Paso 3: Escribe en qué necesitas ayuda</h2>
      <textarea
        :class="{ menInv }"
        v-model="solicitud.description"
        @click="menInv = false"
        type="text"
        name="message"
        id="message"
        placeholder="Tengo una duda sobre ..."
        maxlength="250"
      ></textarea>
      <p :class="{ on: menInv }">Asegúrate de escribir tu Mensaje</p>
    </div>
    <div class="section">
      <h2>Paso 4: Envía tu solicitud de ayuda</h2>
      <input type="submit" name="submit" value="Enviar" />
    </div>
    <p>
      *Una vez enviada tu solicitud un asesor designado de GAAP se pondrá en
      contacto contigo a la brevedad para dar seguimiento.
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalHelp from "@/components/ModalHelp.vue";

export default defineComponent({
  name: "HelpForm",
  components: {
    ModalHelp,
  },
  data() {
    return {
      solicitud: {
        name: "",
        email: "",
        phone: "",
        description: "",
        departmentId: "",
      },
      seccion: 0,
      secInv: false,
      nomInv: false,
      corInv: false,
      telInv: false,
      menInv: false,
      confirmed: false,
      enviar: false,
      tema: "",
      completed: false,
      departamentos: [],
      apiUrl: this.apiUrl,
    };
  },
  methods: {
    checkSeccion() {
      if (this.seccion <= 0 || this.seccion >= 6) {
        this.secInv = true;
      } else {
        this.secInv = false;
        if (this.seccion == 1) {
          this.tema = "Nutricion";
          this.findID(this.tema);
        }
        if (this.seccion == 2) {
          this.tema = "Medicina";
          this.findID(this.tema);
        }
        if (this.seccion == 3) {
          this.tema = "Dental";
          this.findID(this.tema);
        }
        if (this.seccion == 4) {
          this.tema = "Rehabilitacion";
          this.findID(this.tema);
        }
        if (this.seccion == 5) {
          this.tema = "Tanatologia";
          this.findID(this.tema);
        }
      }
    },
    checkNombre() {
      var regex = /^[a-zA-Z\s]*$/;
      if (
        this.solicitud.name.length <= 2 ||
        this.solicitud.name.length > 64 ||
        !regex.test(this.solicitud.name)
      ) {
        this.nomInv = true;
      } else {
        this.nomInv = false;
      }
    },
    checkCorreo() {
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.solicitud.email.length > 0) {
        if (!regex.test(this.solicitud.email)) {
          this.corInv = true;
        } else {
          this.corInv = false;
        }
      } else {
        this.corInv = false;
      }
    },
    checkTelefono() {
      var regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      if (!regex.test(this.solicitud.phone)) {
        this.telInv = true;
      } else {
        this.telInv = false;
      }
    },
    checkMensaje() {
      var regex = /^[-\w\s]+$/;
      if (
        !regex.test(this.solicitud.description) ||
        this.solicitud.description.length < 5 ||
        this.solicitud.description.length > 250
      ) {
        this.menInv = true;
      } else {
        this.menInv = false;
      }
    },

    validateForm() {
      this.checkSeccion();
      this.checkNombre();
      this.checkCorreo();
      this.checkTelefono();
      this.checkMensaje();
      this.confirmed = false;
      if (
        !this.secInv &&
        !this.nomInv &&
        !this.corInv &&
        !this.telInv &&
        !this.menInv
      ) {
        this.confirmed = true;
      } else {
        this.confirmed = false;
      }
    },
    submitForm() {
      fetch("/api/mail", {
        method: "POST", // or 'PUT'
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.solicitud),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    getInfo() {
      try {
        const data = fetch(this.apiUrl + "department")
          .then((res) => res.json())
          .then((data) => {
            this.departamentos = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completed = true;
    },
    findID(find: string) {
      this.departamentos.forEach((element) => {
        if (element["name"] == find) {
          this.solicitud.departmentId = element["id"];
        }
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

.container {
  height: 100%;
  width: 100vw;
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

  h1 {
    font-size: 3rem;
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
  input.corInv,
  input.telInv {
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
}
@media screen and (max-width: 900px) {
  .container {
    text-align: center;
    h3 {
      margin: 10px;
    }
    .section {
      margin-bottom: 60px;
      width: 80%;
    }
  }
}
</style>
