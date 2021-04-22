<template>
  <div class="hello">
    <div class="container">
      <div class="row1">
        <h1>{{ msg }}</h1>
      </div>
      <div class="row">
        <div class="text">
          <p>{{ cont }}</p>
          <router-link to="/about" class="btn">Conócenos!</router-link>
        </div>
        <a
          class="map"
          href="https://www.google.com/maps/place/GAAP+I.A.P/@20.6480779,-100.3937311,15z/data=!4m5!3m4!1s0x0:0x4d39c77b4d14e302!8m2!3d20.6480779!4d-100.3937311"
        ></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
    cont: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.hello {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
}
.container {
  display: flex;
  width: 80%;
  justify-content: center;
  flex-direction: column;
  height: calc(100% / 2 + 20px);
  margin-top: 60px;
  margin-bottom: 50px;
  -moz-box-shadow: 0 0 5px rgb(199, 199, 199);
  -webkit-box-shadow: 0 0 5px rgb(212, 212, 212);
  box-shadow: 0 0 5px rgb(199, 199, 199);
  background-color: rgb(251, 251, 251);
  align-items: center;
  padding-bottom: 30px;

  .row,
  .row1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    h1 {
      font-family: "Signika", sans-serif;
      color: black;
      font-size: 50px;
    }

    a.map {
      height: 400px;
      background-color: black;
      width: 40%;
      border-radius: 3%;
      background: url("../assets/map.png");
      background-position: center;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
    .text {
      width: 50%;
      font-size: 1.5rem;
      height: 100%;
      font-family: "Open Sans", sans-serif;
      font-weight: 600;
      align-items: center;
      display: flex;
      flex-direction: column;
      text-align: left;
      p {
        margin-block-start: 0;
        margin-block-end: 1em;
        padding-right: 5%;
      }

      a.btn {
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 220px !important;
        color: black;
        text-decoration: none;
        font-size: 35px;
        font-family: "Signika", sans-serif;
        font-weight: 700;
        background-color: #fcdb88;
        border-radius: 10px;
        border-width: 4px;
        border-style: solid;
        border-color: black;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .hello {
    .container {
      display: flex;
      flex-direction: column;
      height: 1200px;
      margin-top: 50px;
      padding-top: 0px;
      width: 90%;
      align-items: center;
      padding-bottom: 0px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(240, 240, 240);
      padding-left: 0px;

      .row1 {
        flex-direction: column;
        height: 20%;
        padding-bottom: 0px;
        h1 {
          font-size: 40px;
          margin-block-start: 0em;
        }
      }
      .row {
        flex-direction: column;
        align-items: center;
        height: 80%;
        padding-bottom: 0px;
        justify-content: end;
      }

      a.map {
        width: 100%;
        height: 40%;
        margin-left: 0px;
        border-radius: 0%;
        align-self: baseline;
      }

      .text {
        width: 95%;
        height: 60%;
        font-size: 19px;
        text-align: center;
        margin-right: 0px;
        top: 0;

        a.btn {
          text-align: center;
          padding-top: 10px;
          padding-bottom: 10px;
          width: 220px !important;
          color: black;
          text-decoration: none;
          font-size: 35px;
          font-family: "Signika", sans-serif;
          font-weight: 700;
          background-color: #fcdb88;
          border-radius: 10px;
          border-width: 4px;
          border-style: solid;
          border-color: black;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
