<template>
  <div class="bigCont">
    <Seccion
      :titulo="seccionTitulo"
      :seccion="seccion"
      v-if="!main"
      @return="main = true"
    />
    <TitleCard
      v-if="main"
      :g="true"
      titulo="Salón de la Fama"
      mensaje="Es con mucho orgullo que les presentamos el salón de la fama de GAAP I.A.P donde podrán conocer a todas las personas que han proporcionado ayuda a la institución de maneras extraordinarias merecedoras de reconocimiento y agradecimiento por parte nuestra."
    />
    <div class="row" v-if="main">
      <div class="column">
        <div class="card" @click="irEmpresarios()">
          <img src="@/assets/Salon/manager.svg" alt="#" />
          <h1>Empresarios</h1>
        </div>
      </div>
      <div class="column">
        <div class="card" @click="irProfesionales()">
          <img src="@/assets/Salon/doctor.svg" alt="#" />
          <h1>Profesionales</h1>
        </div>
      </div>
      <div class="column">
        <div class="card" @click="irEstudiantes()">
          <img src="@/assets/Salon/student.svg" alt="#" />
          <h1>Estudiantes</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleCard from "@/components/TitleCard.vue"; // @ is an alias to /src
import Seccion from "@/components/SeccionSalon.vue";

export default defineComponent({
  name: "Salon",
  components: {
    TitleCard,
    Seccion,
  },
  data() {
    return {
      secciones: [],
      mounted: false,
      main: true,
      seccion: "",
      seccionTitulo: "",
      completeQuery: false,
      apiUrl: this.apiUrl,
    };
  },
  methods: {
    irEmpresarios() {
      this.findID("Empresarios");
      this.seccionTitulo = "Empresarios";
      this.main = false;
    },
    irProfesionales() {
      this.findID("Profesionales");
      this.seccionTitulo = "Profesionales";
      this.main = false;
    },
    irEstudiantes() {
      this.findID("Estudiantes");
      this.seccionTitulo = "Estudiantes";
      this.main = false;
    },
    findID(find: string) {
      this.secciones.forEach((element) => {
        if (element["name"] == find) {
          this.seccion = element["id"];
        }
      });
    },
    getInfo() {
      try {
        const data = fetch(this.apiUrl + "section")
          .then((res) => res.json())
          .then((data) => {
            this.secciones = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
  },
  mounted() {
    this.mounted = true;
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.bigCont {
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  .row {
    width: 82%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33.33%;
      height: 100%;
      .card {
        margin-top: 10%;
        width: 90%;
        height: auto;
        border-radius: 15px;
        background-color: #f8f8f8;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Signika", sans-serif;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        img {
          height: 300px;
          margin-top: 10%;
          transition: 0.2s ease-in-out;
        }
        h1 {
          font-size: 3rem;
        }
        &:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          h1 {
            border-bottom: 4px solid black;
          }
          img {
            height: 350px;
            margin-top: 5%;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .bigCont {
    .row {
      width: 100%;
      height: 70%;
      justify-content: center;
      .column {
        width: 30%;
        height: 100%;
        .card {
          width: 90%;
          img {
            height: 220px;
            margin-top: 5%;
          }
          h1 {
            font-size: 2.4rem;
          }
          &:hover {
            img {
              height: 250px;
              margin-top: 5%;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    .bigCont {
      height: auto;
      padding-bottom: 50px;
      .row {
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
        justify-content: flex-start;
        .column {
          flex-direction: row;
          justify-content: center;
          height: 30%;
          width: 100%;
          .card {
            margin-top: 20px;
            width: 90%;
            height: 90%;
            justify-content: center;
            img {
              height: 200px;
              margin-top: 5%;
            }
            h1 {
              font-size: 2.5rem;
              margin-block-start: 0.4em;
              margin-block-end: 0.4em;
            }
            &:hover {
              img {
                height: 220px;
                margin-top: 5%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
