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
          "http://localhost:5000/api/information/93ca1617-c131-4131-ba3c-9c78b24b92a2"
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
