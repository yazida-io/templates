<template>
  <!-- <h2 class="text-2xl">- Component2</h2> -->
  <div class="my-10 w-full rounded overflow-hidden text-gray-800">
    <div class="bg-blue-50 p-7 pb-0">
      <nav class="flex container mx-auto justify-between items-center">
        <div>
          <a class="p-2 text-green-900 py-3 px-1" href="#"> Yazida </a>
          <span class="text-gray-400 mx-1">&bull;</span>
          <a href="tel:+0123456789" class="py-3 px-1">0123456789</a>
        </div>

        <ul class="flex gap-2 flex-1 justify-center">
          <li v-for="({ text }, index) in menu" :key="index">
            <a href="#" class="py-3 px-5">{{ text }}</a>
          </li>
        </ul>

        <ul class="flex gap-2">
          <span class="text-gray-400 mr-1">&bull;</span>
          <li>
            <a href="#" class="py-3 px-5">Se connecter</a>
          </li>
          <li>
            <a
              href="#"
              class="py-3 px-5 text-blue-600 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              S'inscrire
            </a>
          </li>
        </ul>
      </nav>
      <div class="container mx-auto flex mt-20 items-center">
        <div class="w-2/4">
          <strong class="text-blue-400 font-normal"
            >&mdash; Pour les TPE</strong
          >
          <h1 class="text-5xl font-normal">
            Vous dirigez votre activité, nous dirigons votre comptabilité
          </h1>
          <p class="mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            molestiae inventore at nesciunt fugit a similique rerum repellendus,
          </p>
          <div class="flex mt-10 items-end">
            <button
              class="px-7 rounded-full font-bold text-white py-4 mr-10 bg-blue-500"
            >
              En savoir plus
            </button>
            <p class="mb-2 text-sm">
              Dès <strong class="text-bold">69</strong> <sup>EURO</sup>
              <span>/mois </span>
            </p>
          </div>
        </div>
        <div class="w-1/4 flex justify-center">
          <div
            class="bg-white relative rounded-t-full relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class=""
              style="height: 350px"
            />
            <div
              class="absolute -bottom-1 text-center left-0 w-full p-4 bg-white"
            >
              <strong>Frank Henry</strong>
              <p class="text-xs">Client depuis 2ans</p>
            </div>
          </div>
        </div>
        <div class="w-1/4 flex justify-end items-end">
          <div class="relative">
            <span class="absolute text-green-400 -top-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-circle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            <p>
              Enfin une solution comptable 100% en ligne avec ses avanatages et
              ses inconvéniants.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container hidden mx-auto p-7">
      <div>lorem</div>
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
