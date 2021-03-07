<template>
  <div class="bg-pink-50 h-screen pt-10">
    <div class="bg-white container mx-auto rounded-lg shadow-md p-4">
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
