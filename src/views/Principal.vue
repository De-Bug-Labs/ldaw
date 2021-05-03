<template>
  <div class="container">
    <HelpForm v-if="formActive" @done="formActive = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelpForm from "@/components/NewUser.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Help",
  components: {
    HelpForm,
  },
  data() {
    return {
      formActive: true,
    };
  },
  mounted() {
    this.$emit("admin");
  },
});
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
