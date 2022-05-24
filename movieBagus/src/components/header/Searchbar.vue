<script >
import { RouterLink } from 'vue-router'

</script>

<template>
<div class="mt-5 flex relative">
    <input
      ref="searchBox"
      type="text"
      class="rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus:outline-none focus:outline-shawod"
      placeholder="Search.."
    />

     <div class="absolute top-0">
      <svg
        class="fill-current w-4 text-gray-300 mt-2 ml-2 mt-3"
        viewBox="0 0 24 24"
      >
        <path
          class="heroicon-ui"
          d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
        />
      </svg>
    </div>

    <div v-if="false" class="absolute mt-12 rounded bg-gray-600 w-60 z-50">
      <ul class="mt-3">
        <li>
          <!-- </RouterLink
            class="flex items-center border-b border-gray-500 p-1"
          >
            <img  alt="" class="w-10" />
            <span class="ml-3">judul film</span>
          </RouterLink> -->
        </li>
      </ul>
      <ul class="px-3">
        <li>No result found for ""</li>
      </ul>
    </div>

    <img src="../../assets/images/user.jpg" alt="" class="h-10 rounded-full" />
</div>
</template>

<style>

</style>
