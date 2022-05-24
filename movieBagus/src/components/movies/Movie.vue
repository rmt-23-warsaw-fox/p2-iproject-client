<script>
import { RouterLink } from "vue-router";
import Cast from "./Cast.vue";

export default {
    components: {
        Cast,
    }
}
</script>

<template>
  <h1>tes</h1>
  <div>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
      <img src="../../assets/images/joker.jpg" alt="" class="w-64 md:w-full" />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">JOKERR</h1>
        <span class="text-gray-500 text-sm flex">
          <svg
            class="fill-current text-yellow-500 w-4 h-4 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          80 % | 2016

          <span class="ml-1">
            NAMA ITEM
            <span>,</span>
          </span>
        </span>
        <p class="mt-5">Filmnya Bagus (INI SINOPSIS)</p>

        <div class="mt-5">
          <span class="mt-5 font-semibold">Featured Cast</span>

          <div class="flex">
            <div>
              <div class="flex flex-col mt-5 mr-5">
                <span>Crew Name</span>

                <span class="text-gray-500">Crew Job</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            target="blank"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black cursor-auto"
          >
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>

            <span class="ml-3">Play Trailer</span>
          </a>

          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-5"
          >
            <img src="@/assets/images/heart-white.png" alt="" />
            <span class="ml-3">Favourite</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <Cast />
</template>

<style></style>
