<template>
  <div class="box">
    <div class="modal" @click.stop>
      <div class="imgBox">
        <img :src="colaborador.srcimg" alt="#" />
      </div>
      <div class="content">
        <h1>{{ colaborador.name }}</h1>
        <p>{{ colaborador.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalSalon",
  props: {
    id: String,
    colaborador: Object,
  },
});
</script>

<style scoped lang="scss">
.box {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Signika", sans-serif;
  .modal {
    margin-bottom: 50px;
    background-color: #288ba8;
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    color: white;
    .content {
      width: 65%;
      height: auto;
      display: flex;
      flex-direction: column;
      font-family: "Open Sans", sans-serif;
      text-align: center;
      justify-content: flex-start;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      align-items: center;
      margin-right: 50px;
      h1 {
        font-size: 40px;
        margin-block-start: 0.4em;
        margin-block-end: 0.4em;
        margin-left: 5%;
        margin-right: 5%;
      }
      p {
        font-size: 20px;
        margin-left: 5%;
        margin-right: 5%;
      }

      p.cancelar {
        width: 150px;
        height: 40px;
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        background-color: #9c9c9c;
        border-radius: 10px;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        color: white;
        cursor: pointer;
        margin-block-start: 5em;
        margin-block-end: 0.5em;
      }
    }
    .imgBox {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      img {
        height: 450px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
        border-radius: 10px 0 0 10px;
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  .box {
    .modal {
      margin-top: 2%;
      margin-bottom: 5%;
      width: 90%;
      height: auto;
      .imgBox {
        width: 50%;
        height: 100%;
        img {
          height: 400px;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .box {
    .modal {
      flex-direction: column;
      width: 90%;
      height: auto;
      .content {
        width: 100%;
        height: auto;
        margin-right: 0;
        h1 {
          font-size: 28px;
          margin-block-start: 0.4em;
          margin-block-end: 0em;
        }
        p {
          font-size: 18px;
          margin-left: 2%;
          margin-right: 2%;
          margin-block-start: 1em;
          margin-block-end: 1em;
        }
      }
      .imgBox {
        width: 100%;
        height: 100%;
        img {
          height: 250px;
          width: 100%;
          margin-top: 0%;
          margin-bottom: 0%;
          box-shadow: none;
          border-radius: 10px 10px 0px 0px;
        }
      }
    }
  }
}
</style>
