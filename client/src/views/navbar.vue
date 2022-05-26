<script>
import { usePoofStore } from "../stores/counter"
import { mapActions, mapState, mapWritableState } from "pinia"

export default {
  computed: {
    ...mapState(usePoofStore, ["signedin"]),
    ...mapWritableState(usePoofStore, ["username"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["home", "getTeams", "getProfile", "signout"]),
  },
  created() {
    if (localStorage.getItem("username")) {
      this.username = localStorage.getItem("username")
    }
  },
}
</script>

<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-gradient-to-b from-zinc-700 to-transparent p-6"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <button @click="getProfile()" class="cursor-default font-semibold text-xl tracking-tight">
        {{ username }}
      </button>
    </div>
    <div class="block lg:hidden"></div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <button
          @click="home"
          class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4"
        >
          Home
        </button>
        <button
          @click="getTeams(1)"
          class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white mr-4"
        >
          <span><fa icon="bookmark" class="mr-2" /></span>
          Pro Teams
        </button>
      </div>
      <div>
        <button
          @click="signout()"
          class="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-sky-100 hover:text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>
