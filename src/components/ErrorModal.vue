<template>
  <div class="box1" @click="$emit('close')">
    <div class="modal" @click.stop>
      <div class="title">
        <h1>
          Operacion No Realizada<i
            class="large material-icons"
            @click="$emit('close')"
            >close</i
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorModal",
});
</script>

<style scoped lang="scss">
.box1 {
  width: calc(100% - 300px);
  height: calc(100% + 100px);
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Signika", sans-serif;
  background-color: rgba(0, 0, 0, 0.123);
  .modal {
    margin-top: 100px;
    background-color: white;
    width: 600px;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), 0 10px 10px rgba(0, 0, 0, 0.4);
    .title {
      width: 100%;
      height: 15%;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff0000;
      h1 {
        display: flex;
        align-items: center;
        i {
          margin-left: 20px;
          font-size: 1.8rem;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .container {
    .modal {
      width: 80%;
      .title {
        h1 {
          font-size: 22px;
        }
      }
      .content {
        width: 100%;
        h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
