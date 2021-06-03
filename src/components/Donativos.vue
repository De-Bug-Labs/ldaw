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
    <div class="cardBtns">
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="CADPFDZM5989U" />
        <input
          type="submit"
          class="mainBtn"
          border="0"
          name="submit"
          value="Donar"
        />
        <div class="btn_cont">
          <img src="@/assets/Donativos/paypal.svg" alt="#" class="inpImg" />
          <img src="@/assets/Donativos/mastercard.svg" alt="#" class="inpImg" />
          <img src="@/assets/Donativos/visa.svg" alt="#" class="inpImg" />
        </div>
        <p>¡Agradecemos mucho tu apoyo!</p>
      </form>
    </div>
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
    width: 60%;

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
    width: 40%;
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      p {
        font-family: "Open Sans", sans-serif;
        font-size: 20px;
        color: rgb(116, 116, 116);
      }
      .mainBtn {
        -webkit-appearance: none;
        height: 70px;
        width: 200px;
        background-color: #2888a8;
        border: none;
        font-family: "Open Sans", sans-serif;
        font-size: 35px;
        font-weight: bolder;
        color: rgb(255, 255, 255);
        transition: 0.2s ease-out;
        border-radius: 10px;
        padding-right: 10px;
        padding-left: 10px;
        &:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }
      }
      .btn_cont {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        .inpImg {
          height: 80px;
          margin-right: 20px;
          margin-left: 20px;
        }
      }
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
      height: 250px;
      margin-top: 50px;
      form {
        .mainBtn {
          -webkit-appearance: none;
          height: 60px;
          width: 150px;
          background-color: #2888a8;
          border: none;
          font-family: "Open Sans", sans-serif;
          font-size: 30px;
          font-weight: bolder;
          color: rgb(255, 255, 255);
          transition: 0.2s ease-out;
          border-radius: 10px;
          &:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
          }
        }
        .btn_cont {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          .inpImg {
            height: 70px;
            margin-right: 10px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
