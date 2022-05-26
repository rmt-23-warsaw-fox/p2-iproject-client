<script>
import { usePoofStore } from "../stores/counter"
import { mapActions, mapWritableState } from "pinia"

export default {
  computed: {
    ...mapWritableState(usePoofStore, ["signinData"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["move", "signin"]),
  },
}
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-black to-transparent max-w-xl mx-auto p-8 md:p-12 rounded-lg shadow-lg"
  >
    <div>
      <h1 class="text-4xl font-bold text-zinc-200 text-center">Dota POOF</h1>
    </div>

    <div class="mt-10">
      <form @submit.prevent="signin" class="flex flex-col items-center" method="post">
        <div class="mb-6 pt-3 rounded bg-black">
          <div style="display: flex; align-items: center">
            <!-- <fa icon="envelope" class="text-center pb-4 pl-4 text-sky-500" /> -->
            <input
              placeholder="E-mail"
              v-model="signinData.email"
              type="text"
              style="width: 450px"
              class="placeholder:text-zinc-400 bg-black rounded text-white focus:outline-none border-b-4 border-zinc-400 focus:border-sky-600 transition duration-500 px-3 pb-3"
            />
          </div>
        </div>

        <div class="mb-6 pt-3 rounded bg-black">
          <div style="display: flex; align-items: center">
            <!-- <fa icon="lock" class="text-center pb-4 pl-4 text-sky-500" /> -->
            <input
              placeholder="Password"
              v-model="signinData.password"
              type="password"
              style="width: 450px"
              class="placeholder:text-zinc-400 bg-black rounded text-white focus:outline-none border-b-4 border-zinc-400 focus:border-sky-600 transition duration-500 px-3 pb-3"
            />
          </div>
        </div>

        <div style="width: 470px" class="flex justify-end">
          <a
            @click.prevent="move(`/signup`)"
            class="text-sm text-right text-zinc-300 hover:text-zinc-500 mb-6 cursor-pointer"
            >Create a new Account</a
          >
        </div>
        <button
          class="bg-gradient-to-tl from-zinc-900 to-transparent hover:bg-sky-900 text-white hover:text-zinc-200 font-bold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-200"
          type="submit"
          style="width: 200px"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>
