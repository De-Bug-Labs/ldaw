<template>
  <GaapInfo v-bind:information="information" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GaapInfo from "@/components/GaapInfo.vue"; // @ is an alias to /src

export default defineComponent({
  name: "About",
  components: {
    GaapInfo,
  },

  data() {
    return {
      information: Object,
      completed: false,
    };
  },

  methods: {
    getInfo() {
      try {
        const data = fetch(
          "http://localhost:5000/api/information/d83f8361-b3d3-438c-a6fd-d54e0a86737b"
        )
          .then((res) => res.json())
          .then((data) => {
            this.information = data;
          });
      } catch (error) {
        console.log(error);
      }
      this.completed = true;
    },
  },

  mounted() {
    this.getInfo();
  },
});
</script>
