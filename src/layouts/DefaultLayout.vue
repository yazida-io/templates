<template>
  <div class="bg-gray-50 h-full py-10">
    <div class="bg-white container mx-auto rounded-lg shadow-md p-4">
      <h1 class="text-4xl text-center font-thin p-2 border-b-2">
        Freebies UI Components
      </h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout"
});
</script>
<style>
html,
body {
  min-height: 100vh;
  height: 100%;
  min-width: 100vh;
  width: 100%;
}
</style>
