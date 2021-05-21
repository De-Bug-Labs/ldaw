<template>
  <NewEvent
    v-if="crear"
    :elementoId="idMaterial"
    @regresar="(crear = false), recargar"
    @exito="exito = true"
    @error="error = true"
  />
  <ExitoModal v-if="exito" @close="(exito = false), recargar()" />
  <ErrorModal v-if="error" @close="error = false" />
  <ModalEliminar
    v-if="eliminar"
    @close="(eliminar = false), (material = {})"
    :titulo="tituloMaterial"
  />
  <EditEvent
    v-if="editar"
    :elementoId="idEvento"
    @exito="exito = true"
    @error="error = true"
    @regresar="(editar = false), (idEvento = '')"
  />
  <div class="box" v-if="!editar && !crear">
    <div class="titulo">
      <h1 v-if="!crear">Calendario</h1>
      <button
        class="agregarUsuario"
        v-if="!editar && !crear"
        @click="crear = true"
      >
        Nuevo evento
      </button>
    </div>
    <div class="search">
      <div class="mov">
        <div class="mini">
          <label for="date" class="form-label">Filtrar por día</label>
          <input
            @click="(dmy = true), (my = false), (completeQuery = false)"
            v-model="date"
            type="date"
            id="date"
            name="date"
          />
        </div>
        <div class="mini">
          <label for="date" class="form-label">Filtrar por mes</label>
          <input
            @click="
              (my = true), (dmy = false), (completeQuery = false), (date = '')
            "
            v-model="dateM"
            type="month"
            id="date"
            name="date"
          />
        </div>
      </div>
      <a class="send" @click="setDate"
        >BUSCAR<i class="large material-icons">search</i></a
      >
    </div>

    <br />
    <div class="listBox" v-for="evento in eventos" :key="evento">
      <table>
        <tr>
          <th>
            <p class="editar" @click="editarEvento(evento.id)">Editar</p>
          </th>
          <th>
            <p
              class="eliminar"
              @click="borrar(user.id, user.name, user.lastName)"
            >
              Eliminar
            </p>
          </th>
          <td class="espacio"></td>
          <td>{{ evento.title }}</td>
          <td class="fecha">{{ evento.date }}</td>
          <td>{{ evento.address }}</td>
        </tr>
      </table>
    </div>
    <div class="buttons" v-if="!found">
      <div class="col" v-if="page > 1">
        <button @click="lastPage()">
          <i class="large material-icons">arrow_back</i>Anterior
        </button>
      </div>
      <div class="col">
        <h3>{{ page }} / {{ totalPages }}</h3>
      </div>
      <div class="col" v-if="page < totalPages">
        <button @click="nextPage()">
          Siguiente<i class="large material-icons">arrow_forward</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewEvent from "@/components/NewEvent.vue";
import EditEvent from "@/components/EditEvent.vue";
export default defineComponent({
  name: "CalendarioAdmin",
  components: {
    NewEvent,
    EditEvent,
  },

  data() {
    return {
      completeQuery: false,
      eliminar: false,
      crear: false,
      exito: false,
      error: false,
      editar: false,
      idEvento: "",
      confirmed: false,
      enviar: false,
      dmy: true,
      my: false,
      date: "", //esta es la fecha por dia mes año
      dateM: "", // esta es la varible por mes año
      day: "",
      month: "",
      year: "",
      completed: false,
      eventos: [],
      pages: { pageCount: 1, eventsCount: 0 },
      page: 1,
      totalPages: 0,
      apiUrl: this.apiUrl,
      found: false,
    };
  },

  methods: {
    getInfo() {
      this.completeQuery = false;
      try {
        const data = fetch(
          this.apiUrl +
            "calendar?page=" +
            this.page +
            "&pageSize=4" +
            this.day + //aqui uso un string vacio para el link de peticion
            this.month + // por alguna razon hay que agregar cosas como &day=DIA
            this.year // pero si lo mandas vacio no sirve entonces se usa un string vacio
        )
          .then((res) => res.json())
          .then((data) => {
            this.eventos = data;
            if (!this.eventos.length) {
              // con esto compruebo si existen eventos en un mes o dia o lo que sea
              this.resetDate();
              this.getInfo();
            }
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },
    getPages() {
      try {
        const data = fetch(this.apiUrl + "calendar/pages?pageSize=4")
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
    setDate() {
      let data;

      if (this.dmy) {
        // esto lo uso para implementar lo de el link de la peticion
        data = this.date.split("-"); // este if es si se hace click en filtrar por dia
        this.day = "&day=" + data[2];
        this.month = "&month=" + data[1];
        this.year = "&year=" + data[0];
        this.dateM = "";
        this.page = 1;
        this.found = true; // esto quita los botones de la paginacion
      }
      if (this.my) {
        // este if se activa si se hace click en filtrar por mes
        data = this.dateM.split("-");
        this.month = "&month=" + data[1]; //esto es un ejemplo de como lleno los valores
        this.year = "&year=" + data[0]; //de la peticion, si no exixsten los mando vacios
        this.day = ""; //como este de dia
        this.date = "";
        this.page = 1;
        this.found = false; //esto activa los botones de paginacion
      }
      this.getInfo();
      this.getPages();
    },
    resetDate() {
      var d = new Date();
      var dd = String(d.getDate()).padStart(2, "0");
      var mm = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = d.getFullYear();
      this.day = "";
      this.year = "&year=" + yyyy;
      this.month = "&month=" + mm;
      this.dateM = "";
      this.date = yyyy + "-" + mm + "-" + dd; //esta es la variable a la que esta ligada el seleccionador por dia
    },
    crearEvento() {
      console.log("nuevo evento");
    },
    editarEvento(id: string) {
      this.editar = true;
      this.idEvento = id;
    },
  },

  mounted() {
    //usen este mismo mounted en lo de admin deberia de servir igual
    var d = new Date(); // todo esto y lo que usa var saca la fecha de hoy
    var dd = String(d.getDate()).padStart(2, "0");
    var mm = String(d.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = d.getFullYear();
    this.year = "&year=" + yyyy;
    this.month = "&month=" + mm;
    this.date = yyyy + "-" + mm + "-" + dd; // lo asigno a la variable de por dia
    this.getPages();
    this.getInfo();
  },
});
</script>

<style scoped lang="scss">
.containerEvento {
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  h1 {
    color: #000;
    font-family: "Signika", sans-serif;
    font-size: 4rem;
  }

  .event1 {
    width: 60%;
    height: auto;
    background-color: #fcdb88;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 10px rgb(134, 134, 134);
    color: rgb(0, 0, 0);

    h1 {
      color: rgb(0, 0, 0);
      font-size: 40px;
      margin-block-end: 0.1rem;
      margin-block-start: 0.5rem;
    }

    .textbox {
      width: 65%;
      padding-left: 20px;
      padding-right: 10px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
    p {
      font-size: 20px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      display: flex;
      flex-direction: column;
      width: 35%;
      img {
        border-radius: 0px 15px 15px 0px;
        height: 400px;
        width: 100%;
      }
    }
  }
}
.search {
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .mov {
    display: flex;
    flex-direction: row;
    .mini {
      display: flex;
      flex-direction: column;
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
    border-bottom: 2px solid rgb(0, 0, 0);
    background-color: #ffffff;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    width: 150px;
  }
  a.send {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    background-color: #2888a8;
    border-radius: 5px;
    color: white;
    width: 120px;
    height: 40px;
    transition: 0.15s ease-out;
    i {
      font-weight: 600;
      font-size: 20px;
      margin-left: 5px;
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
}
.titulo {
  margin-bottom: 30px;
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  width: 100vw;
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
      background-color: #2888a8;
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

button.agregarUsuario {
  margin-top: 10 px;
  border-bottom: none;
  cursor: pointer;
  width: 200px;
  height: 35px;
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
.box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  h1 {
    font-family: "Signika", sans-serif;
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
    width: 70%;
    height: auto;
    background-color: #f1f1f1;
    border-radius: 15px;
    box-shadow: 0 0 5px rgb(134, 134, 134);
    display: flex;
    flex-direction: column;
    align-items: top;
    margin-bottom: 30px;

    table {
      border-collapse: collapse;
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 0px;
      margin-bottom: 0px;
      th {
        padding: 4px;
        text-align: left;
        font-family: "Signika", sans-serif;
        font-size: 1.5rem;
        p.eliminar {
          font-size: 14px;
          color: red;
          text-align: center;
          text-transform: uppercase;
          cursor: pointer;
        }
        p.editar {
          font-size: 14px;
          color: #007df0;
          text-transform: uppercase;
          cursor: pointer;
          margin-left: 5px;
          margin-right: 5px;
        }
        p.crear {
          font-size: 14px;
          color: #007df0;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
      td {
        padding: 4px;
        width: 40%;
        text-align: center;
        font-family: "Open Sans", sans-serif;
      }
      td.espacio {
        padding: 4px;
        width: 3%;
        text-align: center;
        font-family: "Open Sans", sans-serif;
      }
      td.fecha {
        padding: 4px;
        width: 30%;
        text-align: center;
        font-family: "Open Sans", sans-serif;
      }
    }
    .buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 10px;
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
