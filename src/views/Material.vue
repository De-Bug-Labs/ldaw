<template>
  <div class="bigCont" :class="{ single: !secondRow }">
    <TitleCard
      :b="true"
      titulo="Material de Apoyo"
      mensaje="Aqui podras encontrar videos curados por nosotros para ayudar, orientar o divertir!"
    />
    <div class="miniCont">
      <div class="row">
        <BoxMaterial
          v-for="material in materiales.slice(0, 4)"
          :key="material"
          :message="material.title"
          :src="material.link"
        />
      </div>
      <div class="row" v-if="secondRow">
        <BoxMaterial
          v-for="material in materiales.slice(4, 8)"
          :key="material"
          :message="material.title"
          :src="material.link"
        />
      </div>
    </div>
    <div class="buttons">
      <div class="col" v-if="page > 1">
        <button @click="lastPage()">Anterior</button>
      </div>
      <div class="col" v-if="page < totalPages">
        <button @click="nextPage()">Siguiente</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleCard from "@/components/TitleCard.vue"; // @ is an alias to /src
import BoxMaterial from "@/components/BoxMaterial.vue";

export default defineComponent({
  name: "Material",
  components: {
    TitleCard,
    BoxMaterial,
  },
  data() {
    return {
      materiales: [],
      pages: { pageCount: 1, materialsCount: 0 },
      completeQuery: false,
      page: 1,
      totalPages: 0,
      totalMaterial: 0,
      secondRow: true,
    };
  },
  methods: {
    getInfo() {
      try {
        const data = fetch(
          "http://localhost:5000/api/material?page=" + this.page + "&pageSize=8" //agregar variable de entorno para ruta
        )
          .then((res) => res.json())
          .then((data) => {
            this.materiales = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    getPages() {
      try {
        const data = fetch(
          "http://localhost:5000/api/material/pages?page=0&pageSize=8"
        )
          .then((res) => res.json())
          .then((data) => {
            this.pages = data;
            this.totalPages = this.pages.pageCount;
            this.totalMaterial = this.pages.materialsCount;
            if (this.totalMaterial - this.page * 8 < 4) {
              this.secondRow = false;
            }
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    nextPage() {
      if (this.page + 1 <= this.totalPages) {
        if (this.totalMaterial - this.page * 8 < 4) {
          this.secondRow = false;
        }
        this.page++;
        this.getInfo();
      }
    },
    lastPage() {
      if (this.page - 1 > 0) {
        this.page--;
        this.getInfo();
        this.secondRow = true;
      }
    },
  },
  mounted() {
    this.getPages();
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
.bigCont {
  height: 85vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  font-family: "Signika", sans-serif;
  text-align: center;
  h1 {
    font-size: 3rem;
    margin-block-start: 0.5em;
    margin-block-end: 0em;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    margin-top: 10px;
    width: 20%;
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
        background-color: #2888a8;
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
  .miniCont {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .row {
      width: 84%;
      height: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
  &.single {
    height: calc(100vh - 220px);
    .miniCont {
      .row {
        width: 84% !important;
        height: 60% !important;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .bigCont {
    height: 100vh;
    .buttons {
      width: 30%;
      margin-top: 5%;
      .col {
        button {
          font-size: 18px;
          height: 100%;
          width: 90%;
        }
      }
    }
    .miniCont {
      .row {
        width: 95%;
        height: 50%;
      }
    }
    &.single {
      height: 100vh;
      .miniCont {
        width: 90%;
        height: 50%;
        .row {
          width: 100% !important;
          height: 80% !important;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .bigCont {
    height: auto;
    h1 {
      font-size: 2.5rem;
    }
    .buttons {
      margin-top: 40px;
      width: 150px;
      .col {
        button {
          font-size: 18px;
          height: 100%;
          width: 90%;
        }
      }
    }
    .miniCont {
      .row {
        width: 90%;
        height: 50%;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .bigCont.single {
    height: auto;
    .buttons {
      margin-top: 40px;
      width: 150px;
      .col {
        button {
          font-size: 18px;
          height: 100%;
          width: 90%;
        }
      }
    }
    .miniCont {
      .row {
        width: 90%;
        height: 120%;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
