<template>
  <div class="basic-grid">
    <div class="cardInfo">
      <div class="box1">
        <div class="imgBox"></div>
        <div class="textBox">
          <h1>¡Apoya al Centro Geriátrico!</h1>
          <p>{{ mensaje }}</p>
        </div>
      </div>
    </div>
    <div class="cardBtns"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Donativos",
  props: {
    mensaje: String,
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.basic-grid {
  display: flex;
  width: 100vw;
  height: 90vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;

    .box1 {
      width: 80%;
      height: auto;
      background-color: #2888a8;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
      -webkit-box-shadow: 0 0 5px #999;
      box-shadow: 0 0 5px rgb(134, 134, 134);

      .imgBox {
        display: flex;
        width: 100%;
        height: 250px;
        background: url("../assets/gracias.jpg");
        background-size: cover;
        background-position: center;
        border-radius: 15px 15px 0px 0px;
      }
      .textBox {
        display: flex;
        width: 100%;
        height: auto;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        flex-direction: column;
        text-align: center;
        font-family: "Open Sans", sans-serif;
        color: white;
        padding-bottom: 20px;
        justify-content: center;

        h1 {
          font-family: "Open Sans", sans-serif;
          font-size: 2.5rem;
          margin-block-start: 0.2em;
          margin-block-end: 0.8em;
        }
        p {
          font-size: 1.35rem;
          padding-left: 3%;
          padding-right: 3%;
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
      }
    }
  }

  .cardBtns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
  }
  .footer {
    width: 100%;
    height: 80px;
    background-color: #8edafd;
    box-shadow: 0px -5px 11px rgba(0, 0, 0, 0.2);
    font-family: "Signika", sans-serif;
    align-items: center;
    display: flex;
    font-size: 0.8rem;
    margin-top: auto !important;
    position: fixed;
    h1 {
      margin-left: 20px;
    }
  }
}
@media screen and (max-width: 1080px) {
  .basic-grid {
    margin-bottom: 5%;
    .cardInfo {
      .box1 {
        width: 90%;
        height: auto;
        .textBox {
          h1 {
            font-size: 2rem;
            margin-block-start: 0.1em;
            margin-block-end: 0.5em;
          }
          p {
            font-size: 1.1rem;
            padding-left: 2%;
            padding-right: 2%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .basic-grid {
    flex-direction: column;
    height: auto;
    .cardInfo {
      flex-direction: row;
      width: 100%;
      height: auto;
      margin-top: 20px;
      .box1 {
        width: 95%;
        height: 90%;
        .textBox {
          height: auto;
          justify-content: center;
          h1 {
            font-size: 1.6rem;
            margin-block-end: 0.8em;
          }
          p {
            font-size: 1rem;
            padding-left: 2%;
            padding-right: 2%;
          }
        }
        .imgBox {
          height: 200px;
        }
      }
    }
    .cardBtns {
      flex-direction: row;
      width: 100%;
      height: 200px;
    }
  }
}
</style>
