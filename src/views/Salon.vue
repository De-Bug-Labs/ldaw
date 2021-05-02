<template>
  <div class="bigCont">
    <TitleCard
      :g="true"
      titulo="Salon de la Fama"
      mensaje="Es con mucho orgullo que les presentamos el salón de la fama de GAAP I.A.P donde podrán conocer a todas las personas que han proporcionado ayuda a la institución de maneras extraordinarias merecedoras de reconocimiento y agradecimiento por parte nuestra."
    />

    <div class="row">
      <div class="column">
        <div class="card">
          <img src="@/assets/manager.svg" alt="#" />
          <h1>Empresarios</h1>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src="@/assets/doctor.svg" alt="#" />
          <h1>Profesionales</h1>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <img src="@/assets/student.svg" alt="#" />
          <h1>Estudiantes</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleCard from "@/components/TitleCard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Salon",
  components: {
    TitleCard,
  },
  data() {
    return {
      mounted: false,
    };
  },
  mounted() {
    this.mounted = true;
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.bigCont {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      justify-content: center;
      width: 33.33%;
      height: 100%;
      .card {
        width: 90%;
        height: 70%;
        border-radius: 15px;
        background-color: #f8f8f8;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Signika", sans-serif;
        cursor: pointer;
        transition: 0.2s ease-in-out;
        img {
          height: 60%;
          margin-top: 10%;
        }
        h1 {
          font-size: 3rem;
        }
        &:hover {
          -moz-box-shadow: 0 0 5px rgb(119, 119, 119);
          -webkit-box-shadow: 0 0 5px rgb(119, 119, 119);
          box-shadow: 0 0 6px rgb(119, 119, 119);
          h1 {
            border-bottom: 4px solid black;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .bigCont {
    padding-bottom: 100px;
    .row {
      width: 100%;
      height: 80%;
      justify-content: center;
      .column {
        width: 30%;
        height: 80%;
        .card {
          width: 90%;
          height: 70%;
          img {
            height: 60%;
            margin-top: 5%;
          }
          h1 {
            font-size: 2.7rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .bigCont {
    height: 1000px;
    .row {
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
      justify-content: flex-start;
      .column {
        flex-direction: row;
        height: 30%;
        width: 100%;
        .card {
          width: 90%;
          height: 90%;
          justify-content: center;
          img {
            height: 50%;
            margin-top: 5%;
          }
          h1 {
            font-size: 2.5rem;
            margin-block-start: 0.4em;
            margin-block-end: 0.4em;
          }
        }
      }
    }
  }
}
</style>
