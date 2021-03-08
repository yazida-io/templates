<template>
  <div
    class="bg-gray-50 w-full flex justify-center rounded-xl overflow-hidden text-indigo-900 my-10"
  >
    <div class="bg-white shadow-xl rounded-xl m-10 p-4 w-80">
      <h2 class="font-bold text-lg">Order Summary</h2>

      <div
        class="bg-orange-100 px-4 py-2 rounded-xl flex gap-4 justify-start items-center mt-2"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-20 stroke-current stroke-1 text-white bg-orange-300 p-2 rounded-xl"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <div>
          <h3 class="font-bold">Premium Plan</h3>
          <p class="text-orange-200">
            <strong class="text-gray-700">$ 10</strong> / user
          </p>
          <button
            class="text-orange-300 font-bold border border-orange-300 rounded-full px-2 mt-1"
          >
            change plan
          </button>
        </div>
      </div>

      <table class="my-4 w-full text-gray-400">
        <thead class="border-b">
          <tr>
            <td>Plan duration</td>
            <td class="text-right font-bold text-gray-700 pt-2">3 months</td>
          </tr>
          <tr>
            <td>Team Size</td>
            <td class="text-right font-bold text-gray-700 pt-0 pb-2">24 members</td>
          </tr>
        </thead>
        <tbody class="border-b">
          <tr class="py-4">
            <td>Handling fee</td>
            <td class="text-right font-bold text-gray-700 py-3">$20</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount</td>
            <td class="text-right font-bold text-gray-700 py-2">$260</td>
          </tr>
        </tfoot>
      </table>

      <button
        class="bg-blue-500 block w-full px-4 py-3 rounded-xl text-white cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    menu: [
      { text: "Services" },
      { text: "Fonctionnalités" },
      { text: "Tarifs" },
      { text: "L'équipe" },
      { text: "Blog" }
    ]
  })
});
</script>
