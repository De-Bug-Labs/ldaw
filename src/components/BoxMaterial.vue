<template>
  <div class="container">
    <img :src="src" alt="#" />
    <h3>{{ message }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxMaterial",
  props: {
    message: String,
    src: String,
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Signika", sans-serif;
  color: rgb(255, 255, 255);
  width: 20%;
  height: 80%;
  cursor: pointer;
  background-color: #2888a8;
  border-radius: 15px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  transition: 0.2s ease-out;
  img {
    height: 60%;
    width: 80%;
    border-radius: 15px;
  }
  h3 {
    font-size: 1.6rem;
    margin-block-start: 0.5em;
    margin-block-end: 0.1em;
  }
  &:hover {
    -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 10px rgb(114, 114, 114);
  }
}
@media screen and (max-width: 900px) {
  .container {
    width: 90%;
    height: 25%;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 4%;
    img {
      height: 70%;
      width: 80%;
    }
    h3 {
      font-size: 1.3rem;
      margin-block-start: 0.5em;
      margin-block-end: 0.1em;
    }
  }
}
</style>
