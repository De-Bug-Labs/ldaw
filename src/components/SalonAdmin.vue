<template>
  <h1>Salon de la Fama</h1>
  <div class="box">
    <ModalEliminar
      v-if="eliminar"
      @close="(eliminar = false), (material = {})"
      :titulo="nombreColaborador"
      @borrar="deleteColaborador(idColaborador), (idColaborador = ''), recargar"
    />
    <ExitoModal v-if="exito" @close="(exito = false), recargar()" />
    <ErrorModal v-if="error" @close="error = false" />
    <EditColab
      v-if="editar"
      :elementoId="idColaborador"
      @exito="exito = true"
      @error="error = true"
      @regresar="(editar = false), (idColaborador = '')"
    />
    <NewColab
      v-if="crear"
      @exito="exito = true"
      @error="error = true"
      @regresar="(crear = false), (idColaborador = ''), recargar"
    />
    <div class="listBox" v-if="!editar && !crear">
      <div class="search">
        <input
          v-model="nombre"
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          maxlength="64"
        />
        <select v-model="nombreSeccion">
          <option value="Estudiantes">Estudiantes</option>
          <option value="Empresarios">Empresarios</option>
          <option value="Profesionales">Profesionales</option>
        </select>

        <a @click="cambiarSeccion()"
          >Buscar<i class="large material-icons">search</i></a
        >
        <a @click="cambiarSeccion()"
          >Limpiar<i class="large material-icons">cleaning_services</i></a
        >
      </div>
      <table>
        <tr>
          <th></th>
          <th></th>
          <th>Nombre</th>
          <th>Institucion</th>
        </tr>
        <tr v-for="colaborador in colaboradores" :key="colaborador">
          <th>
            <p
              class="eliminar"
              @click="borrar(colaborador.id, colaborador.name)"
            >
              Eliminar
            </p>
          </th>
          <th>
            <p class="editar" @click="editarTitulo(colaborador.id)">Editar</p>
          </th>
          <td>{{ colaborador.name }}</td>
          <td>{{ colaborador.institution }}</td>
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
      Nuevo Colaborador
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalEliminar from "@/components/ModalDel.vue";
import EditColab from "@/components/EditColab.vue";
import NewColab from "@/components/NewColab.vue";
import ExitoModal from "@/components/ExitoModal.vue";
import ErrorModal from "@/components/ErrorModal.vue";

export default defineComponent({
  name: "SalonAdmin",
  components: {
    ModalEliminar,
    EditColab,
    NewColab,
    ExitoModal,
    ErrorModal,
  },
  data() {
    return {
      completeQuery: false,
      page: 1,
      colaboradores: [],
      idColaborador: "",
      pages: { pageCount: 1 },
      totalPages: 0,
      material: {},
      eliminar: false,
      editar: false,
      crear: false,
      nombre: "",
      nombreColaborador: "",
      apiUrl: this.apiUrl,
      exito: false,
      error: false,
      secciones: [],
      idSeccion: "",
      nombreSeccion: "Estudiantes",
      totalColaboradores: { sectionPages: 0 },
    };
  },
  methods: {
    getInfo() {
      try {
        const data = fetch(
          this.apiUrl +
            "section/" +
            this.idSeccion +
            "?pageSize=5&page=" +
            this.page +
            "&name=" +
            this.nombre
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
    getPages() {
      try {
        const data = fetch(
          this.apiUrl + "sectioncount/" + this.idSeccion + "?pageSize=5"
        )
          .then((res) => res.json())
          .then((data) => {
            this.totalColaboradores = data;
            this.totalPages = Math.ceil(this.totalColaboradores.sectionPages);
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    deleteColaborador(elim: string) {
      fetch(this.apiUrl + "collaborator/" + elim, {
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
      this.idColaborador = id;
      this.nombreColaborador = titulo;
    },
    getSecciones() {
      try {
        const data = fetch(this.apiUrl + "section")
          .then((res) => res.json())
          .then((data) => {
            this.secciones = data;
            this.findID(this.nombreSeccion);
            this.getPages();
            this.getInfo();
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    findID(find: string) {
      this.secciones.forEach((element) => {
        if (element["name"] == find) {
          this.idSeccion = element["id"];
        }
      });
    },
    cambiarSeccion() {
      this.findID(this.nombreSeccion);
      this.page = 1;
      this.getPages();
      this.getInfo();
      this.nombre = "";
    },
    editarTitulo(id: string) {
      this.editar = true;
      this.idColaborador = id;
    },
    recargar() {
      this.getSecciones();
    },
  },
  mounted() {
    this.getSecciones();
  },
});
</script>

<style scoped lang="scss">
.box {
  height: 100%;
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
      margin-left: 20px;
      font-size: 20px;
      background-color: #727272;
      border-radius: 5px;
      color: white;
      padding-right: 5px;
      padding-left: 5px;
      i {
        font-weight: 600;
        font-size: 20px;
        margin-left: 5px;
      }
    }
    input {
      padding: 10px 0;
      margin-top: 2px;
      margin-right: 20px;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid rgb(172, 172, 172);
      background-color: #f1f1f1;
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      width: 100px;
    }
    select {
      cursor: pointer;
      padding: 10px 0;
      box-sizing: border-box;
      box-shadow: none;
      outline: none;
      border: none;
      border-bottom: 2px solid rgb(172, 172, 172);
      background-color: #f1f1f1;
      font-family: "Open Sans", sans-serif;
      font-size: 15px;
      option {
        font-family: "Open Sans", sans-serif;
      }
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
      margin-top: 20px;
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
          font-size: 15px;
          color: #007df0;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: bold;
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
