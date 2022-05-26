<script>
import { mapState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapState(usePoofStore, ["heroDetail"]),
  },
  methods: {
    generateLink(string) {
      return `https://steamcdn-a.akamaihd.net${string}`
    },
  },
  created() {},
}
</script>
<template>
  <div
    class="px-6 pb-10 pt-10 flex-row mt-20 mx-auto relative text-zinc-200 w-1/2 rounded-lg bg-gradient-to-br from-zinc-700 to-transparent shadow-xl"
  >
    <h2 class="text-5xl font-semibold text-center pb-10">{{ heroDetail.localized_name }}</h2>
    <hr class="pb-4 border-white" />
    <div class="flex gap-5">
      <img
        :src="generateLink(heroDetail.img)"
        style="width: 180px; height: 124px"
        class="object-cover rounded-3xl"
        alt="picture"
      />
      <div class="flex-row pl-4 pr-10 justify-around">
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Primary Atribute :</h2>
          <h2 v-if="heroDetail.primary_attr === `str`" class="text-l font-semibold text-rose-700">
            Strength
          </h2>
          <h2
            v-if="heroDetail.primary_attr === `agi`"
            class="text-l font-semibold text-emerald-700"
          >
            Agility
          </h2>
          <h2 v-if="heroDetail.primary_attr === `int`" class="text-l font-semibold text-sky-700">
            Intelligence
          </h2>
        </div>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Attack Range :</h2>
          <h2 class="text-l font-semibold text-zinc-100">
            {{ heroDetail.attack_range }} ({{ heroDetail.attack_type }})
          </h2>
        </div>
        <div class="flex flex-col pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Roles :</h2>
          <div class="flex">
            <h2
              v-for="key in heroDetail.roles"
              class="cursor-default text-l font-semibold px-2 py-1 rounded-xl bg-zinc-900 mx-1 text-sky-600"
            >
              {{ key }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pre>
  {{ heroDetail }}
</pre
  >
</template>
