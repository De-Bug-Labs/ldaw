<template>
  <form class="container">
    <h1>Portal de Ayuda</h1>
    <h3>
      Aqui podras ponerte en contacto con asesores de GAAP I.A.P para recibir
      ayuda de manera digital.
    </h3>
    <div class="section">
      <h2>Paso 1: Selecciona el tema de ayuda</h2>
      <select id="seccion" v-model="seccion" name="seccion">
        <option value="1">Ayuda con Nutricion</option>
        <option value="2">Ayuda con Medicina</option>
        <option value="3">Ayuda con Dental</option>
        <option value="4">Ayuda con Rehabilitacion</option>
        <option value="5">Ayuda con Tanatologia</option>
      </select>
    </div>

    <div class="section">
      <h2>Paso 2: Ingresa tu informacion de contacto</h2>

      <label for="name" class="form-label">Nombre</label>
      <input
        v-model="name"
        type="text"
        id="name"
        name="name"
        placeholder="Escribe tu nombre completo aqui"
      />

      <label for="mail" class="form-label">Correo Electronico</label>
      <input
        v-model="mail"
        type="mail"
        id="mail"
        name="name"
        placeholder="ejemplo@correo.com"
      />

      <label for="phone" class="form-label">Telefono</label>
      <input
        v-model="number"
        type="tel"
        id="phone"
        name="phone"
        placeholder="10 digitos"
      />
    </div>
    <div class="section">
      <h2>Paso 3: Escribe en que necesitas ayuda</h2>
      <textarea
        name="message"
        id="message"
        placeholder="Redacta aqui tu duda en 250 caracteres o menos"
      ></textarea>
    </div>
    <div class="section">
      <h2>Paso 4: Envia tu solicitud de ayuda</h2>
      <input type="submit" name="submit" value="Enviar" />
    </div>
    <p>
      *Una vez enviada tu solicitud un asesor designado de GAAP se pondra en
      contacto contigo a la brevedad para dar seguimiento.
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelpForm",
  props: {
    nombre: String,
    correo: String,
    telefono: Number,
    mensaje: String,
  },
});
</script>

<style scoped lang="scss">
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
  input {
    padding: 10px 0;
    margin-bottom: 30px;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(0, 0, 0);
  }
  select {
    background-color: #288ba8;
    color: rgb(255, 255, 255);
    font-size: 20px;
    border: none;
    option {
      font-family: "Open Sans", sans-serif;
      font-size: 20px;
    }
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
    padding-top: 1px;
    color: white;
    font-weight: 700;
    border: 4px solid black;
  }
}
@media screen and (max-width: 900px) {
  .container {
    .section {
      margin-bottom: 80px;
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 70%;
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
    input {
      padding: 10px 0;
      margin-bottom: 30px;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid rgb(0, 0, 0);
    }
    select {
      background-color: #288ba8;
      color: rgb(255, 255, 255);
      font-size: 20px;
      border: none;
      option {
        color: rgb(255, 255, 255);
        font-family: "Open Sans", sans-serif;
        font-size: 20px;
      }
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
      padding-top: 1px;
      color: white;
      font-weight: 700;
      border: 4px solid black;
    }
  }
}
</style>
