<template>
  <HelpForm />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelpForm from "@/components/NewUser.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Help",
  components: {
    HelpForm,
  },
});
</script>
