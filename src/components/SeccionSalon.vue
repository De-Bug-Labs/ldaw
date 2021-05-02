<template>
  <div class="container">
    <div class="title">
      <a @click="$emit('return')"
        ><i class="large material-icons">arrow_back</i>Regresar</a
      >
      <h1>{{ titulo }}</h1>
    </div>
    <h2 v-for="colaborador in colaboradores" :key="colaborador">
      {{ colaborador.name }}
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SeccionSalon",
  props: {
    titulo: String,
    seccion: String,
  },
  data() {
    return {
      pages: 0,
      completeQuery: false,
      idSeccion: this.seccion,
      colaboradores: [],
    };
  },
  methods: {
    getPages() {
      try {
        const data = fetch(
          "http://localhost:5000/api/sectioncount/" +
            this.idSeccion +
            "?pageSize=8"
        )
          .then((res) => res.json())
          .then((data) => {
            this.pages = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    getColaboradores() {
      try {
        const data = fetch(
          "http://localhost:5000/api/section/" +
            this.idSeccion +
            "?pageSize=8&page=1"
        )
          .then((res) => res.json())
          .then((data) => {
            this.colaboradores = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
  },
  mounted() {
    this.getPages();
    this.getColaboradores();
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.container {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: "Signika", sans-serif;
      font-size: 3rem;
    }
    a {
      position: absolute;
      display: flex;
      left: 0;
      margin-left: 5%;
      font-family: "Open Sans", sans-serif;
      width: auto;
      height: auto;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      background: none;
      font-weight: bold;
      &:hover {
        border-bottom: 2px solid black;
      }
    }
  }
}
</style>
