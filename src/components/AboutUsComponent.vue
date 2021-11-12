<template>
  <div class="container">
    <h1 class="container_title">{{ information?.title }}</h1>
    <div class="box1">
      <div class="textbox">
        <h2>Somos</h2>
        <p>{{ information?.somos1 }}</p>
        <p>{{ information?.somos2 }}</p>
      </div>
      <div class="imagebox"><img src=" " alt="" /></div>
    </div>
    <div class="divider"></div>
    <div class="box2">
      <div class="imagebox"><img src=" " alt="" /></div>
      <div class="textbox">
        <h2>{{ information?.instalacionesTitle }}</h2>
        <p>{{ information.instalacionesContent }}</p>
      </div>
    </div>
    <div class="divider"></div>
    <div class="box3">
      <div class="textbox">
        <h2>{{ information?.equiposTitle }}</h2>
        <p>{{ information?.equiposContent }}</p>
        <ul>
          <li v-for="item in information?.equiposProfecionistas" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="imagebox"><img src=" " alt="" /></div>
    </div>
    <div class="divider"></div>
    <div class="box3-odd">
      <div class="imagebox"><img src=" " alt="" /></div>
      <div class="textbox">
        <h2>{{ information?.equiposTitle }}</h2>
        <ul>
          <li v-for="item in information?.equiposServicios" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="divider"></div>
    <div class="box3-even">
      <div class="textbox">
        <h2>Actividades recreativas</h2>
        <ol>
          <li v-for="item in information?.equiposActividadesRec" :key="item">
            {{ item }}
          </li>
        </ol>
        <h3>Ven y conocenos y nosotros invitamos tu primera clase.</h3>
      </div>
      <div class="imagebox"><img src=" " alt="" /></div>
    </div>
    <div class="box4">
      <div class="imagebox"><img src=" " alt="" /></div>
      <div class="textbox">
        <h2>{{ information?.covisTitle }}</h2>
        <p>{{ information?.covisContent }}</p>
      </div>
    </div>
    <div class="box5">
      <div class="textbox">
        <h2>{{ information?.covisTitle }}</h2>
        <p>{{ information?.covisContent2 }}</p>
        <p>¡Llamanos!</p>
        <p>{{ `Telefono fijo: ${information?.covisTelefono}` }}</p>
        <p>{{ `Celular: ${information?.covisCelular}` }}</p>
      </div>
      <div class="imagebox"><img src=" " alt="" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsComponent",
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
  background-color: #ffbe6d;
  display: flex;
  width: 100vw;
  height: calc(100% + 600px);
  flex-direction: column;
  align-items: center;
  // margin-bottom: 50px;
  // margin-top: 50px;
  &_title {
    margin: 40px 0;
    font-size: 4rem;
  }
  h1 {
    color: #000;
    font-family: "Signika", sans-serif;
  }

  .divider {
    margin: 40px 0;
  }
  .box1 {
    width: 60%;
    height: auto;
    // background-color: #399da3;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    flex-direction: row;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 10px rgb(134, 134, 134);
    // color: white;

    h1 {
      // color: white;
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/Nosotros/img1nosotros.jpg");
      background-size: cover;
      background-position: center bottom;
      // border-radius: 0px 15px 15px 0px;
      img {
        // border-radius: 0px 0px 0px px;
        height: 200px;
        width: 100%;
        display: none;
      }
    }
  }

  .box2 {
    width: 60%;
    height: auto;
    // background-color: #fcdb88;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 5px rgb(134, 134, 134);

    h1 {
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/AboutUs/Instalaciones2.jpg");
      background-size: cover;
      background-position: center;
      // border-radius: 15px 0px 0px 15px;
      img {
        // border-radius: 15px 0px 0px 15px;
        height: 200px;
        width: 100%;
        display: none;
      }
    }
  }

  .box3-odd {
    width: 60%;
    height: auto;
    // background-color: #2888a8;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    flex-direction: row;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 5px rgb(134, 134, 134);
    // color: white;

    h1 {
      // color: white;
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/AboutUs/Instalaciones3.jpg");
      background-size: cover;
      background-position: center;
      // border-radius: 0px 15px 15px 0px;
      img {
        // border-radius: 0px 15px 15px 0px;
        height: 200px;
        width: 100%;
        display: none;
        border: none;
      }
    }
  }
  .box3-even {
    width: 60%;
    height: auto;
    // background-color: #fcdb88;
    margin-bottom: 100px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 5px rgb(134, 134, 134);

    h1 {
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/AboutUs/ActividadesRecreativas2.png");
      background-size: cover;
      background-position: center;
      // border-radius: 15px 0px 0px 15px;
      img {
        // border-radius: 15px 0px 0px 15px;
        height: 200px;
        width: 100%;
        display: none;
      }
    }
  }
  .box3 {
    width: 60%;
    height: auto;
    // background-color: #2888a8;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    flex-direction: row;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 5px rgb(134, 134, 134);
    // color: white;

    h1 {
      // color: white;
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/AboutUs/ActividadesRecreativas.png");
      background-size: cover;
      background-position: center;
      // border-radius: 0px 15px 15px 0px;
      img {
        // border-radius: 0px 15px 15px 0px;
        height: 200px;
        width: 100%;
        display: none;
        border: none;
      }
    }
  }
  .box4 {
    width: 60%;
    height: auto;
    // background-color: #fcdb88;
    margin-bottom: 100px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 5px rgb(134, 134, 134);

    h1 {
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/AboutUs/Covis19.jpg");
      background-size: cover;
      background-position: center;
      // border-radius: 15px 0px 0px 15px;
      img {
        // border-radius: 15px 0px 0px 15px;
        height: 200px;
        width: 100%;
        display: none;
      }
    }
  }
  .box5 {
    width: 60%;
    height: auto;
    // background-color: #fcdb88;
    margin-bottom: 50px;
    font-family: "Open Sans", sans-serif;
    // border-radius: 15px;
    display: flex;
    // -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
    // -webkit-box-shadow: 0 0 5px #999;
    // box-shadow: 0 0 5px rgb(134, 134, 134);

    h1 {
      font-size: 3.4rem;
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
      font-size: 30px;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
    .imagebox {
      width: 50%;
      background: url("../assets/AboutUs/Covis19-2.jpg");
      background-size: cover;
      background-position: center;
      // border-radius: 15px 0px 0px 15px;
      img {
        // border-radius: 15px 0px 0px 15px;
        height: 200px;
        width: 100%;
        display: none;
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
        // border-radius: 0px 0px 15px 15px;
        img {
          width: 100%;
          // border-radius: 0px 0px 15px 15px;
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
        // border-radius: 15px 15px 0px 0px;
        img {
          width: 100%;
          // border-radius: 15px 15px 0px 0px;
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
        // border-radius: 0px 0px 15px 15px;
        img {
          width: 100%;
          // border-radius: 0px 0px 15px 15px;
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
