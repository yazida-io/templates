<template>
  <h1 class="text-4xl text-center font-thin p-2 border-b-2">
    Freebies UI Components
  </h1>
  <div>
    <component1 />
  </div>
</template>
<script lang="ts">
import Component1 from "../components/Component1.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Component1 }
});
</script>
