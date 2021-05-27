<template>
  <form class="container1" id="help-form" @submit.prevent="validateForm">
    <ModalUser
      v-if="confirmed"
      @close="confirmed = false"
      @enviar="submitForm"
      @doneSuccess="terminarSuccess"
      @doneFail="terminarFail"
      :nombre="nombre"
      :apellido="apellido"
      :correo="correo"
      :contrasena="contrasena"
    />
    <h1>Registrar nuevo administrador</h1>
    <h3>
      Ingresa la información solicitada para registrar una nueva cuenta de
      administrador.
    </h3>

    <div class="section">
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
          maxlength="64"
        />
        <p :class="{ on: nomInv }">Asegúrate de ingresar un nombre válido</p>
      </div>
      <div class="miniCont">
        <label for="apellido" class="form-label">Apellido</label>
        <input
          @click="apelInv = false"
          :class="{ apelInv }"
          v-model="apellido"
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Escribe el apellido aquí"
          maxlength="64"
        />
        <p :class="{ on: apelInv }">Asegúrate de ingresar un apellido válido</p>
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
          Asegúrate de ingresar un correo válido ejemplo@correo.com
        </p>
        <p :class="{ on: correoExiste }">
          Esta dirección de correo electrónico ya está registrada.
        </p>
      </div>
      <div class="miniCont">
        <label for="password" class="form-label">Contraseña</label>
        <input
          @click="passInv = false"
          :class="{ passInv }"
          v-model="contrasena"
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa una contraseña segura"
        />
        <p :class="{ on: passInv }">
          Asegúrate de ingresar una contraseña segura
        </p>
      </div>
      <div class="miniCont">
        <label for="passConfirm" class="form-label"
          >Confirma la contraseña</label
        >
        <input
          @click="passMis = false"
          :class="{ passMis }"
          v-model="passConfirm"
          type="password"
          id="passConfirm"
          name="passConfirm"
          placeholder="Reingresa la contraseña"
        />
        <p :class="{ on: passMis }">
          Las contraseñas no coinciden. Vuelve a intentarlo.
        </p>
      </div>
    </div>
    <div class="section">
      <input type="submit" name="submit" value="Enviar" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalUser from "@/components/ModalUser.vue";

export default defineComponent({
  name: "NewUser",
  components: {
    ModalUser,
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      correo: "",
      contrasena: "",
      passConfirm: "",
      nomInv: false,
      corInv: false,
      apelInv: false,
      passInv: false,
      passMis: false,
      confirmed: false,
      enviar: false,
      correoExiste: false,
      completeQuery: false,
      exito: false,
      error: false,
    };
  },
  methods: {
    checkNombre() {
      var regex = /^[a-zA-Z\s]*$/;
      if (
        this.nombre.length <= 2 ||
        this.nombre.length > 64 ||
        !regex.test(this.nombre)
      ) {
        this.nomInv = true;
      } else {
        this.nomInv = false;
      }
    },
    checkApellido() {
      var regex = /^[a-zA-Z\s]*$/;
      if (
        this.apellido.length <= 2 ||
        this.apellido.length > 64 ||
        !regex.test(this.apellido)
      ) {
        this.apelInv = true;
      } else {
        this.apelInv = false;
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
    checkPassword() {
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;
      if (!regex.test(this.contrasena)) {
        this.passInv = true;
      } else {
        this.passInv = false;
      }
      if (this.passConfirm == this.contrasena) {
        this.passMis = false;
      } else {
        this.passMis = true;
      }
    },

    async checkEmailExists() {
      try {
        await fetch(
          "/api/user/" + this.correo //agregar variable de entorno para ruta
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.correoExiste = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
      if (
        !this.nomInv &&
        !this.corInv &&
        !this.apelInv &&
        !this.passInv &&
        !this.passMis &&
        !this.correoExiste
      ) {
        this.confirmed = true;
      } else {
        this.confirmed = false;
      }
    },

    validateForm() {
      this.checkEmailExists();
      this.checkNombre();
      this.checkCorreo();
      this.checkApellido();
      this.checkPassword();
    },
    submitForm() {
      console.log("posted");
      this.$router.push("/");
    },
    terminarSuccess() {
      this.$emit("regresar");
      this.$emit("exito");
    },
    terminarFail() {
      this.$emit("regresar");
      this.$emit("error");
    },
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
    .section {
      margin-bottom: 60px;
      width: 80%;
    }
  }
}
</style>
