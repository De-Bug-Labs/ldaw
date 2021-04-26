<template>
  <div class="box">
    <img src="@/assets/password.svg" />
    <form>
      <div class="mini">
        <label for="uname" class="form-label">Usuario</label>
        <input
          v-model="unombre"
          type="text"
          id="uname"
          name="uname"
          maxlength="64"
          spellcheck="false"
        />
      </div>
      <div class="mini">
        <label for="pwd">Contraseña</label>
        <input type="password" id="pwd" name="pwd" />
      </div>

      <input type="submit" name="submit" value="INGRESAR" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogIn",
});
</script>

<style scoped lang="scss">
.box {
  width: 600px;
  height: 80%;
  border-radius: 15px;
  background-color: #d4d4d4;
  -moz-box-shadow: 0 0 5px rgb(199, 199, 199);
  -webkit-box-shadow: 0 0 5px rgb(212, 212, 212);
  box-shadow: 0 0 5px rgb(199, 199, 199);
  background-color: rgb(251, 251, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 30%;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    align-items: center;
    height: 70%;
    .mini {
      display: flex;
      flex-direction: column;
      margin-top: 10%;
      width: 100%;
      align-items: center;
      font-family: "Signika", sans-serif;
      font-size: 1.5rem;
      input {
        margin-top: 10px;
        width: 60%;
        height: 30px;
        background-color: #c4c4c4;
        border: none;
        border-radius: 20px;
        text-align: center;
        font-size: 1.2rem;
        &:focus {
          outline: none;
        }
      }
    }

    input[type="submit"] {
      margin-top: 15%;
      cursor: pointer;
      width: 195px;
      height: 45px;
      font-family: "Open Sans", sans-serif;
      font-size: 25px;
      background-color: #007df0;
      border-radius: 10px;
      color: white;
      font-weight: 500;
      border: none;

      &:hover {
        border: solid 3px black;
      }
    }
  }
}
</style>
