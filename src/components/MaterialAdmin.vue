<template>
  <h1>Material</h1>
  <div class="box">
    <ModalEliminar
      v-if="eliminar"
      @close="(eliminar = false), (material = {})"
      :titulo="tituloMaterial"
      @borrar="deleteMaterial(idMaterial), (idMaterial = ''), recargar"
    />
    <ExitoModal v-if="exito" @close="(exito = false), recargar()" />
    <ErrorModal v-if="error" @close="error = false" />
    <EditMat
      v-if="editar"
      :elementoId="idMaterial"
      @exito="exito = true"
      @error="error = true"
      @regresar="(editar = false), (idMaterial = '')"
    />
    <NewMaterial
      v-if="crear"
      @exito="exito = true"
      @error="error = true"
      @regresar="(crear = false), (idMaterial = ''), recargar"
    />
    <div class="listBox" v-if="!editar && !crear">
      <table>
        <tr>
          <th></th>
          <th></th>
          <th @click="materiales.sort(sortByProperty('title'))">Nombre</th>
          <th>Link</th>
        </tr>
        <tr v-for="material in materiales" :key="material">
          <th>
            <p class="eliminar" @click="borrar(material.id, material.title)">
              Eliminar
            </p>
          </th>
          <th>
            <p class="editar" @click="editarTitulo(material.id)">Editar</p>
          </th>
          <td>{{ material.title }}</td>
          <td>
            <a :href="material.link">{{ material.link }}</a>
          </td>
        </tr>
      </table>
      <div class="buttons">
        <div class="col" v-if="page > 1">
          <button @click="lastPage()">
            <i class="large material-icons">arrow_back</i>
          </button>
        </div>
        <div class="col">
          <h3>{{ page }} / {{ totalPages }}</h3>
        </div>
        <div class="col" v-if="page < totalPages">
          <button @click="nextPage()">
            <i class="large material-icons">arrow_forward</i>
          </button>
        </div>
      </div>
    </div>
    <button class="agregar" v-if="!editar && !crear" @click="crear = true">
      Agregar Material
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalEliminar from "@/components/ModalDel.vue";
import EditMat from "@/components/EditMat.vue";
import NewMaterial from "@/components/NewMaterial.vue";
import ExitoModal from "@/components/ExitoModal.vue";
import ErrorModal from "@/components/ErrorModal.vue";

export default defineComponent({
  name: "MaterialAdmin",
  components: {
    ModalEliminar,
    EditMat,
    NewMaterial,
    ExitoModal,
    ErrorModal,
  },
  data() {
    return {
      viewingUser: false,
      completeQuery: false,
      page: 1,
      materiales: [],
      idMaterial: "",
      pages: { pageCount: 1 },
      totalPages: 0,
      material: {},
      eliminar: false,
      editar: false,
      crear: false,
      nombre: "",
      tituloMaterial: "",
      apiUrl: this.apiUrl,
      exito: false,
      error: false,
    };
  },
  methods: {
    getInfo() {
      try {
        const data = fetch(
          this.apiUrl + "material?page=" + this.page + "&pageSize=5"
        )
          .then((res) => res.json())
          .then((data) => {
            this.materiales = data;
            this.$forceUpdate();
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    getPages() {
      try {
        const data = fetch(this.apiUrl + "material/pages?page=0&pageSize=5")
          .then((res) => res.json())
          .then((data) => {
            this.pages = data;
            this.totalPages = this.pages.pageCount;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    deleteMaterial(elim: string) {
      fetch(this.apiUrl + "material/" + elim, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.eliminar = false;
          this.exito = true;
        })
        .catch((error) => {
          console.error("Error:", error);
          this.error = true;
        });
      this.completeQuery = true;
    },
    nextPage() {
      if (this.page + 1 <= this.totalPages) {
        this.page++;
        this.getInfo();
      }
    },
    lastPage() {
      if (this.page - 1 > 0) {
        this.page--;
        this.getInfo();
      }
    },
    borrar(id: string, titulo: string) {
      this.eliminar = true;
      this.idMaterial = id;
      this.tituloMaterial = titulo;
    },
    sortByProperty(property: any) {
      return function (a: any, b: any) {
        if (a[property] > b[property]) return 1;
        else if (a[property] < b[property]) return -1;
        return 0;
      };
    },
    sortByName(property: any, name: string) {
      console.log(name);
      return function (a: any) {
        if (a[property] == name) return 1;
        else if (a[property] != name) return -1;
        return 0;
      };
    },
    editarTitulo(id: string) {
      this.editar = true;
      this.idMaterial = id;
    },
    recargar() {
      this.getPages();
      this.getInfo();
    },
  },
  mounted() {
    this.getPages();
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
.box {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Signika", sans-serif;
  }
  button.agregar {
    margin-top: 50px;
    border-bottom: none;
    cursor: pointer;
    width: 250px;
    height: 45px;
    align-self: center;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    background-color: #007df0;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 0px;
    border: none;
    &:hover {
      border: 2px solid rgb(0, 0, 0);
    }
  }
  .search {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 10px;
      i {
        font-weight: 600;
        font-size: 30px;
      }
    }
    input {
      padding: 10px 0;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid rgb(172, 172, 172);
      background-color: #f1f1f1;
      font-family: "Open Sans", sans-serif;
    }
  }
  .listBox {
    width: auto;
    height: auto;
    background-color: #f1f1f1;
    border-radius: 15px;
    box-shadow: 0 0 5px rgb(134, 134, 134);
    display: flex;
    flex-direction: column;
    align-items: center;
    table {
      border-collapse: collapse;
      margin-left: 50px;
      margin-right: 50px;
      margin-top: 40px;
      margin-bottom: 40px;
      tr {
        border-bottom: 1px solid rgb(0, 0, 0);
      }
      th {
        padding: 4px;
        text-align: left;
        font-family: "Signika", sans-serif;
        font-size: 25px;
        p.eliminar {
          font-size: 14px;
          color: red;
          text-transform: uppercase;
          cursor: pointer;
          margin-left: 5px;
          margin-right: 5px;
        }
        p.editar {
          font-size: 14px;
          color: #007df0;
          text-transform: uppercase;
          cursor: pointer;
          margin-left: 5px;
          margin-right: 5px;
        }
        border-right: 1px solid rgb(0, 0, 0);
      }
      td {
        padding: 4px;
        text-align: left;
        font-family: "Open Sans", sans-serif;
        border-right: 1px solid rgb(0, 0, 0);
        font-size: 20px;
      }
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 30px;
      width: 400px;
      height: 40px;
      font-family: "Open Sans", sans-serif;
      .col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100%;
        button {
          font-family: "Open Sans", sans-serif;
          background-color: #727272;
          border-radius: 2px;
          border: none;
          color: rgb(255, 255, 255);
          text-transform: uppercase;
          font-weight: bold;
          font-size: 18px;
          height: 100%;
          width: auto;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
