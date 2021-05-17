<template>
  <div class="container">
    <div class="title">
      <h1>{{ titulo }}</h1>
    </div>
    <ModalSalon
      v-if="viewing"
      @close="viewing = false"
      :colaborador="informacion"
    />
    <div class="colabCont" v-if="!viewing">
      <div class="row">
        <div
          class="cardColab"
          v-for="colaborador in colaboradores.slice(0, 4)"
          :key="colaborador"
          @click="idElem(colaborador.id)"
        >
          <img :src="colaborador.srcimg" :alt="colaborador.name" />
          <h2>{{ colaborador.name }}</h2>
          <h3>{{ colaborador.institution }}</h3>
        </div>
      </div>
      <div class="row" v-if="secondRow">
        <div
          class="cardColab"
          v-for="colaborador in colaboradores.slice(4, 8)"
          :key="colaborador"
          @click="idElem(colaborador.id)"
        >
          <img :src="colaborador.srcimg" :alt="colaborador.name" />
          <h2>{{ colaborador.name }}</h2>
          <h3>{{ colaborador.institution }}</h3>
        </div>
      </div>
    </div>
    <div class="buttons" v-if="totalPages > 1 && !viewing">
      <div class="col" v-if="page > 1">
        <button @click="lastPage()">Anterior</button>
      </div>
      <div class="col" v-if="page < totalPages">
        <button @click="nextPage()">Siguiente</button>
      </div>
    </div>
    <a @click="regresar()" class="bottom"
      ><i class="large material-icons">arrow_back</i>Regresar</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalSalon from "@/components/ModalSalon.vue";

export default defineComponent({
  name: "SeccionSalon",
  components: {
    ModalSalon,
  },
  props: {
    titulo: String,
    seccion: String,
  },
  data() {
    return {
      completeQuery: false,
      idSeccion: this.seccion,
      colaboradores: [],
      page: 1,
      totalPages: 0,
      response: { sectionPages: 0, sectionCount: 0 },
      totalColaboradores: 0,
      secondRow: true,
      viewing: false,
      idColaborador: "",
      informacion: [],
      apiUrl: this.apiUrl,
    };
  },
  methods: {
    getPages() {
      try {
        const data = fetch(
          this.apiUrl + "sectioncount/" + this.idSeccion + "?pageSize=8"
        )
          .then((res) => res.json())
          .then((data) => {
            this.response = data;
            this.totalColaboradores = Math.ceil(this.response.sectionCount);
            this.totalPages = Math.ceil(this.response.sectionPages);
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    getColaboradores() {
      try {
        const data = fetch(
          this.apiUrl +
            "section/" +
            this.idSeccion +
            "?pageSize=8&page=" +
            this.page +
            "&name="
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
    getDetalles() {
      try {
        const data = fetch(this.apiUrl + "collaborator/" + this.idColaborador)
          .then((res) => res.json())
          .then((data) => {
            this.informacion = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    nextPage() {
      if (this.page + 1 <= this.totalPages) {
        if (this.totalColaboradores - this.page * 8 < 4) {
          this.secondRow = false;
        }
        this.page++;
        this.getColaboradores();
      }
    },
    lastPage() {
      if (this.page - 1 > 0) {
        this.page--;
        this.secondRow = true;
        this.getColaboradores();
      }
    },
    idElem(id: string) {
      this.idColaborador = id;
      this.viewing = true;
      this.getDetalles();
    },
    regresar() {
      if (!this.viewing) {
        this.$emit("return");
      } else {
        this.viewing = false;
      }
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  a.bottom {
    display: flex;
    font-family: "Open Sans", sans-serif;
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    background: none;
    font-weight: bold;
    margin-right: auto;
    margin-left: 5%;
    margin-top: 2%;
    i {
      font-size: 30px;
      font-weight: bold;
    }
    &:hover {
      border-bottom: 2px solid black;
    }
  }
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
  }
  .colabCont {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      .cardColab {
        width: 250px;
        border-radius: 10px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Signika", sans-serif;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 2%;
        background-color: #d4af27;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        overflow: hidden;
        color: white;
        img {
          height: 250px;
          width: 100%;
          transition: 0.2s ease-in-out;
        }
        h2 {
          margin-block-start: 0.5em;
          margin-block-end: 0.2em;
        }
        h3 {
          margin-block-start: 0.2em;
          margin-block-end: 0.8em;
        }
        &:hover {
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          img {
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    margin-top: 50px;
    width: 25%;
    height: 50px;
    font-family: "Open Sans", sans-serif;
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 500px;
      height: 100%;
      button {
        font-family: "Open Sans", sans-serif;
        background-color: #868686;
        border-radius: 2px;
        border: none;
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        height: 100%;
        width: 150px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .container {
    a.bottom {
      margin-left: 0;
      margin-bottom: 0.4em;
      margin-right: 0;
      margin-top: 15%;
    }
    .title {
      flex-direction: column;
      h1 {
        font-family: "Signika", sans-serif;
        font-size: 2.5rem;
        margin-block-start: 0.2em;
        margin-block-end: 0.4em;
      }
      a {
        position: relative;
        margin-left: 0;
        margin-bottom: 0.4em;
      }
    }
    .colabCont {
      .row {
        flex-direction: column;
        width: 95%;
        .cardColab {
          margin-top: 5%;
        }
      }
    }
    .buttons {
      margin-top: 40px;
      width: 80%;
      .col {
        width: 150px;
        button {
          font-size: 15px;
          height: 100%;
          width: 90%;
        }
      }
    }
  }
}
</style>
