<template>
  <a class="container" :href="src">
    <img :src="imageLink" alt="#" />
    <h3>{{ message }}</h3>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxMaterial",
  props: {
    message: String,
    src: String,
  },
  data() {
    return {
      imageLink: "",
      temp: "",
    };
  },
  methods: {
    getImageLink() {
      this.temp = this.src!;
      let data;
      if (this.temp.indexOf("=") == -1) {
        data = this.temp.split("be/");
        this.imageLink = "http://i3.ytimg.com/vi/" + data[1] + "/hqdefault.jpg";
      } else {
        data = this.temp.split("v=");
        this.imageLink = "http://i3.ytimg.com/vi/" + data[1] + "/hqdefault.jpg";
        this.temp = data[1];

        if (this.temp.indexOf("&") != -1) {
          data = this.temp.split("&");
          this.imageLink =
            "http://i3.ytimg.com/vi/" + data[0] + "/hqdefault.jpg";
        }
      }
    },
  },
  mounted() {
    this.getImageLink();
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Signika", sans-serif;
  color: rgb(255, 255, 255);
  width: 20%;
  height: auto;
  background-color: #2888a8;
  border-radius: 15px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  transition: 0.2s ease-out;
  text-align: center;
  text-decoration: none;
  img {
    margin-top: 10px;
    height: 160px;
    width: 80%;
    border-radius: 15px;
  }
  h3 {
    font-size: 1.6rem;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
@media screen and (max-width: 1080px) {
  .container {
    width: 95%;
    height: 95%;
    margin-left: 1%;
    margin-right: 1%;
    justify-content: end;
    img {
      margin-top: 5%;
      height: 60%;
      width: 80%;
    }
    h3 {
      font-size: 1.3rem;
      margin-block-start: 0.5em;
      margin-block-end: 0em;
    }
  }
}
@media screen and (max-width: 900px) {
  .container {
    width: 90%;
    height: 25%;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 4%;
    img {
      height: 70%;
      width: 80%;
    }
    h3 {
      font-size: 1.3rem;
      margin-block-start: 0.5em;
      margin-block-end: 0.1em;
    }
  }
}
</style>
