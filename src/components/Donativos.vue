<template>
  <section class="basic-grid">
    <div class="cardInfo">
      <div class="containerInfo">
        <div class="box1">
          <div class="imagebox"></div>
          <div class="textbox">
            <h1>¡Apoya al Centro Geriátrico!</h1>
            <p>Denme dinero grasias</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cardBtns"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Donativos",
  props: {
    example: String,
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

.basic-grid {
  display: grid;
  grid-template-columns: 60% 40%;
}

.cardInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.cardBtns {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.containerInfo {
  display: flex;
  width: 100%;
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
    width: 75%;
    height: 560px;
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

    display: grid;
    grid-template-rows: 40% 60%;

    h1 {
      color: white;
      font-size: 3rem;
    }

    .textbox {
      height: 100%;
      width: 100%;
      padding-left: 20px;
      padding-right: 10px;
      /*    overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis; */
    }
    p {
      font-size: 22px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 100%;
      height: 100%;
      background: url("../assets/prueba.jpg");
      background-size: cover;
      background-position: center;
      border-radius: 15px 15px 0px 0px;
    }
  }
}

.containerButtons {
  display: flex;
  width: 100%;
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
    width: 55%;
    height: 500px;
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
      height: 50%;
      padding-left: 20px;
      padding-right: 10px;
      overflow: hidden;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
    p {
      font-size: 22px;
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
    }
  }
}

.column {
  float: left;
  padding: 10px;
  margin-right: 10%;
}

.left {
  width: 50%;
}
.right {
  width: 30%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

@media screen and (max-width: 900px) {
  .box1 {
    flex-direction: column;
    height: 800px;
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
      border-radius: 0px 0px 15px 15px;
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
</style>
