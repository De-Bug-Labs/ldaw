<template>
  <div class="container">
    <div class="box1">
      <div class="textbox">
        <h1>GAAP I.A.P</h1>
        <p>{{ information.mision }}</p>
      </div>
      <div class="imagebox"><img src=" " alt="" /></div>
    </div>
    <div class="box2">
      <div class="imagebox"><img src=" " alt="" /></div>
      <div class="textbox">
        <h1>Instalaciones</h1>
        <p>{{ information.instalation }}</p>
      </div>
    </div>
    <div class="box3">
      <div class="textbox">
        <h1>Nuestro equipo</h1>
        <p>{{ information.team }}</p>
      </div>
      <div class="imagebox"><img src=" " alt="" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GaapInfo",
  props: {
    information: Object,
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.container {
  display: flex;
  width: 100vw;
  height: calc(100% + 600px);
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 50px;

  h1 {
    color: #000;
    font-family: "Signika", sans-serif;
  }

  .box1 {
    width: 60%;
    height: auto;
    background-color: #399da3;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px rgb(134, 134, 134);
    color: white;

    h1 {
      color: white;
      font-size: 3rem;
    }

    .textbox {
      width: 50%;
      padding-left: 20px;
      padding-right: 10px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      margin-bottom: 5%;
    }
    p {
      font-size: 20px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/banner1.jpg");
      background-size: cover;
      background-position: center;
      border-radius: 0px 15px 15px 0px !important;
      img {
        border-radius: 15px 0px 0px 15px;
        height: 200px;
        width: 100%;
        display: none;
      }
    }
  }

  .box2 {
    width: 60%;
    height: auto;
    background-color: #fcdb88;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    border-radius: 15px;
    display: flex;
    -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px rgb(134, 134, 134);

    h1 {
      font-size: 3rem;
    }
    flex-direction: row;
    .textbox {
      width: 50%;
      padding-left: 20px;
      padding-right: 10px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      margin-bottom: 5%;
    }
    p {
      font-size: 20px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/banner1.jpg");
      background-size: cover;
      background-position: center;
      border-radius: 15px 0px 0px 15px;
      img {
        border-radius: 15px 0px 0px 15px;
        height: 200px;
        width: 100%;
        display: none;
      }
    }
  }

  .box3 {
    width: 60%;
    height: auto;
    background-color: #2888a8;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    -webkit-box-shadow: 0 0 5px #999;
    box-shadow: 0 0 5px rgb(134, 134, 134);
    color: white;

    h1 {
      color: white;
      font-size: 3rem;
    }

    .textbox {
      width: 50%;
      padding-left: 20px;
      padding-right: 10px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
      margin-bottom: 5%;
    }
    p {
      font-size: 20px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/banner1.jpg");
      background-size: cover;
      background-position: center;
      border-radius: 0px 15px 15px 0px;
      img {
        border-radius: 0px 15px 15px 0px;
        height: 200px;
        width: 100%;
        display: none;
        border: none;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .box1 {
      flex-direction: column;
      height: auto;
      width: 90%;
      .textbox {
        width: 100%;
        height: 50%;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
      }
      .imagebox {
        width: 100%;
        height: 50%;
        border-radius: 0px 0px 15px 15px;
        img {
          width: 100%;
          border-radius: 0px 0px 15px 15px;
          display: flex;
        }
      }
      p {
        font-size: 17px;
        padding-left: 5px;
        padding-right: 5px;
      }
      h1 {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }
    .box2 {
      flex-direction: column;
      height: auto;
      width: 90%;
      .textbox {
        width: 100%;
        height: 60%;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
      }
      .imagebox {
        width: 100%;
        height: 50%;
        border-radius: 15px 15px 0px 0px;
        img {
          width: 100%;
          border-radius: 15px 15px 0px 0px;
          display: flex;
        }
      }
      p {
        font-size: 17px;
        padding-left: 5px;
        padding-right: 5px;
      }
      h1 {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }
    .box3 {
      flex-direction: column;
      height: auto;
      width: 90%;
      .textbox {
        width: 100%;
        height: 50%;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
      }
      .imagebox {
        width: 100%;
        height: 50%;
        border-radius: 0px 0px 15px 15px;
        img {
          width: 100%;
          border-radius: 0px 0px 15px 15px;
          display: flex;
        }
      }
      p {
        font-size: 17px;
        padding-left: 5px;
        padding-right: 5px;
      }
      h1 {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }
  }
}
</style>
