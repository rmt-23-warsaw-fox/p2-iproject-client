<script>
import { usePoofStore } from "../stores/counter"
import { mapActions, mapWritableState } from "pinia"

export default {
  computed: {
    ...mapWritableState(usePoofStore, []),
  },
  methods: {
    ...mapActions(usePoofStore, []),
  },
}
</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-sky-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="cursor-default font-semibold text-xl tracking-tight">BOOM</span>
    </div>
    <div class="block lg:hidden"></div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <button
          class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4"
        >
          Home
        </button>
        <button
          @click=""
          class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4"
        >
          <span><fa icon="bookmark" class="mr-2" /></span>
          Wishlist
        </button>
        <div class="inline">
          <form class="inline">
            <input
              placeholder="Search..."
              type="text"
              class="outline-none bg-sky-700 inline-block border-none text-sm px-4 py-2 leading-none border rounded text-white mt-4 lg:mt-0"
            />
            <select
              class="cursor-pointer ml-2 bg-sky-700 inline-block border-none outline-none text-sm px-4 py-2 rounded text-sky-200"
            >
              <option value="" selected disabled>Category</option>
              <option></option>
            </select>
            <button
              class="ml-2 px-3 py-1.5 text-center bg-sky-700 rounded-lg text-sky-200 hover:bg-sky-800 hover:text-sky-400 mt-4 lg:mt-0"
              type="submit"
            >
              <fa icon="magnifying-glass"></fa>
            </button>
          </form>
        </div>
      </div>
      <div>
        <button
          v-if="!this.signedin"
          class="mr-4 cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white"
        >
          Signin
        </button>
        <a class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white">
          Sign Out
        </a>
      </div>
    </div>
  </nav>
</template>
