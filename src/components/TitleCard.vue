<template>
  <div class="titleCard" :class="{ blue: b, green: g }">
    <div class="textBox">
      <h1>{{ titulo }}</h1>
      <p>{{ mensaje }}</p>
    </div>
    <div class="imgBox" :class="{ blue: b, green: g }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleCard",
  props: {
    titulo: String,
    mensaje: String,
    b: Boolean,
    g: Boolean,
  },
});
</script>

<style scoped lang="scss">
.blue {
  background-color: #2888a8;
  p {
    font-size: 1.8rem;
  }
  h1 {
    font-size: 3rem;
    margin-block-end: 0.8em;
  }
}
.green {
  background-color: #399da3;
  p {
    font-size: 1.4rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
}
.titleCard {
  margin-top: 50px;
  border-radius: 15px;
  -moz-box-shadow: 0 0 5px rgb(134, 134, 134);
  -webkit-box-shadow: 0 0 5px #999;
  box-shadow: 0 0 5px rgb(134, 134, 134);
  width: 80%;
  height: 30%;

  display: flex;
  flex-direction: row;
  .textBox {
    color: rgb(255, 255, 255);
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-left: 2%;
    padding-right: 2%;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    h1 {
      font-family: "Signika", sans-serif;
    }
    p {
      font-family: "Open Sans", sans-serif;
      margin-block-start: 0;
      display: flex;
      margin-block-end: 0;
    }
  }

  .imgBox {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    border-radius: 0px 15px 15px 0px;
  }

  .imgBox.blue {
    background: url("../assets/banner1.jpg");
    background-size: cover;
    background-position: center;
  }
  .imgBox.green {
    background: url("../assets/parallax.jpg");
    background-size: cover;
    background-position: center;
  }
}
@media screen and (max-width: 1080px) {
  .blue {
    p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 3rem;
      margin-block-end: 0.8em;
    }
  }

  .green {
    p {
      font-size: 1.1rem;
    }
    h1 {
      font-size: 2rem;
    }
  }
  .titleCard {
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: row;
    .textBox {
      padding-bottom: 15%;
    }
  }
}
@media screen and (max-width: 900px) {
  .blue.titleCard {
    height: calc(50% + 50px);
    margin-top: 20px;
    width: 90%;
    flex-direction: column;
    .textBox {
      padding-top: 7%;
      padding-bottom: 7%;
      flex-direction: column;
      height: 60%;
      width: 100%;
      padding-left: 0%;
      padding-right: 0%;
      text-align: center;
      justify-content: center;
    }
    .imgBox {
      height: 50%;
      width: 100%;
      border-radius: 0px 0px 15px 15px;
    }
    p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 3rem;
      margin-block-end: 0.8em;
    }
  }

  .green.titleCard {
    margin-top: 20px;
    width: 90%;
    height: calc(80% + 50px);
    flex-direction: column;
    .textBox {
      padding-top: 7%;
      padding-bottom: 7%;
      flex-direction: column;
      height: 60%;
      width: 100%;
      padding-left: 0%;
      padding-right: 0%;
      text-align: center;
      p {
        font-size: 1.2rem;
        padding-left: 1%;
        padding-right: 1%;
      }
      h1 {
        font-size: 1.7rem;
        margin-block-start: 0.5em;
        margin-block-end: 0.4em;
      }
    }
    .imgBox {
      height: 40%;
      width: 100%;
      border-radius: 0px 0px 15px 15px;
    }
  }
}
@media screen and (max-width: 600px) {
  .blue.titleCard {
    .textBox {
      padding-top: 0px;
      p {
        font-size: 1.5rem;
      }
      h1 {
        font-size: 2rem;
        margin-block-end: 0.8em;
      }
    }
    height: calc(70% + 50px);
  }

  .green.titleCard {
    .textBox {
      padding-top: 0;
      p {
        font-size: 1rem;
        padding-left: 1%;
        padding-right: 1%;
      }
      h1 {
        font-size: 1.5rem;
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }
  }
}
</style>
