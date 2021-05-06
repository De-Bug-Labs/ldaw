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
      apiUrl: this.apiUrl,
    };
  },

  methods: {
    getInfo() {
      try {
        const data = fetch(this.apiUrl + "information")
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
