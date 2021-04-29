<template>
  <div class="bigCont">
    <TitleCard
      :b="true"
      titulo="Material de Apoyo"
      mensaje="Aqui podras encontrar videos curados por nosotros para ayudar, orientar o divertir!"
    />
    <div class="miniCont">
      <div class="row">
        <BoxMaterial
          v-for="material in information.slice(0, 4)"
          :key="material"
          :message="material.title"
          :src="material.link"
        />
      </div>
      <div class="row">
        <BoxMaterial
          v-for="material in information.slice(4, 8)"
          :key="material"
          :message="material.title"
          :src="material.link"
        />
      </div>
    </div>
    <div class="buttons">
      <div class="col" v-if="page > 1">
        <button @click="page += 1">Anterior</button>
      </div>
      <div class="col">
        <button @click="page += 1">Siguiente</button>
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
      information: [],
      completeQuery: false,
      page: 1,
    };
  },
  methods: {
    getInfo() {
      try {
        const data = fetch(
          "http://localhost:5000/api/material?page=1&pageSize=8"
        )
          .then((res) => res.json())
          .then((data) => {
            this.information = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
  },
  mounted() {
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
.bigCont {
  height: calc(100vh + 100px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    margin-top: 10px;
    width: 20%;
    height: 50px;
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
        width: 90%;
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
}
@media screen and (max-width: 1080px) {
  .bigCont {
    .buttons {
      width: 30%;
      .col {
        button {
          font-size: 18px;
          height: 100%;
          width: 90%;
        }
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .bigCont {
    height: calc(100vh + 1600px);
    .buttons {
      margin-top: 40px;
      width: 80%;
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
}
</style>
