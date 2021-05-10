<template>
  <NewUser
    v-if="crear"
    :elementoId="idMaterial"
    @regresar="(crear = false), recargar"
    @exito="exito = true"
    @error="error = true"
  />
  <div class="box" v-if="!crear">
    <ModalEliminar
      v-if="eliminar"
      @close="eliminar = false"
      :titulo="tituloModal"
      @borrar="deleteUser(idUser), (idUser = '')"
    />
    <ExitoModal v-if="exito" @close="(exito = false), recargar()" />
    <ErrorModal v-if="error" @close="error = false" />
    <div class="titulo">
      <h1 v-if="!crear">Administradores</h1>
      <button class="agregarUsuario" v-if="!crear" @click="crearUsuario()">
        Nuevo admin
      </button>
    </div>
    <div class="listBox" v-for="user in users" :key="user">
      <table>
        <tr>
          <td>{{ user.name }} {{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <th>
            <p
              class="eliminar"
              @click="borrar(user.id, user.name, user.lastName)"
            >
              Eliminar
            </p>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalEliminar from "@/components/ModalDel.vue";
import NewUser from "@/components/NewUser.vue";
import ExitoModal from "@/components/ExitoModal.vue";
import ErrorModal from "@/components/ErrorModal.vue";

export default defineComponent({
  name: "MaterialAdmin",
  components: {
    ModalEliminar,
    NewUser,
    ExitoModal,
    ErrorModal,
  },
  data() {
    return {
      users: [],
      viewingUsers: false,
      completeQuery: false,
      idUser: "",
      eliminar: false,
      crear: false,
      name: "",
      lastName: "",
      tituloModal: "",
      exito: false,
      error: false,
    };
  },
  methods: {
    getUsers() {
      try {
        const data = fetch(
          "http://localhost:5000/api/user" //agregar variable de entorno para ruta
        )
          .then((res) => res.json())
          .then((data) => {
            this.users = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completeQuery = true;
    },

    borrar(id: string, name: string, lastName: string) {
      this.eliminar = true;
      this.idUser = id;
      this.name = name;
      this.lastName = lastName;
      this.tituloModal = name + " " + lastName;
    },

    crearUsuario() {
      this.crear = true;
    },

    deleteUser(elim: string) {
      fetch("http://localhost:5000/api/user", {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: elim }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          this.getUsers();
          this.eliminar = false;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.completeQuery = true;
    },

    recargar() {
      this.getUsers();
    },
  },

  mounted() {
    this.getUsers();
  },
});
</script>

<style scoped lang="scss">
.titulo {
  margin-bottom: 30px;
}

button.agregarUsuario {
  margin-top: 10 px;
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
      margin-left: 60px;
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
        p.crear {
          font-size: 14px;
          color: #007df0;
          text-transform: uppercase;
          cursor: pointer;
        }
      }
      td {
        padding: 4px;
        width: 33%;
        text-align: left;
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
