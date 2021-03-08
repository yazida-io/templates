<template>
  <component2 />
</template>
<script lang="ts">
import Component1 from "../components/Component1.vue";
import Component2 from "../components/Component2.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Component1, Component2 }
});
</script>
