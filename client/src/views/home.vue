<script>
import { mapActions, mapWritableState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapWritableState(usePoofStore, ["heroes", "heroDetail"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["home", "move"]),
    generateLink(string) {
      return `https://steamcdn-a.akamaihd.net${string}`
    },
    rate(win, pick) {
      let result = win / pick
      result = (result * 100).toFixed(2)
      return result
    },
    save(data) {
      this.heroDetail = data
      this.move(`/heroes/${data.id}`)
    },
  },
  created() {
    this.home(this.$route.params.page)
  },
}
</script>

<template>
  <div class="container flex justify-center mx-auto">
    <div class="flex flex-col">
      <div class="w-full">
        <div class="border-b border-gray-200 shadow-lg">
          <table class="bg-gradient-to-br from-zinc-900 to-transparent">
            <thead class="bg-sky-900">
              <tr>
                <th class="px-6 py-2 text-xs text-zinc-200">Hero</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Picks in Pro Matches</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Wins</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Hero Win Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(hero, i) in heroes" class="whitespace-nowrap">
                <td class="px-6">
                  <div class="flex flex-row items-center">
                    <img :src="generateLink(hero.img)" style="width: 60px; height: 35px" />
                    <a
                      @click.prevent="save(hero)"
                      class="pl-4 text-sm text-sky-500 cursor-pointer"
                      >{{ hero.localized_name }}</a
                    >
                  </div>
                </td>
                <td>
                  <div class="text-sm text-center text-zinc-300">{{ hero.pro_pick }}</div>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="text-sm text-amber-500">{{ hero.pro_win }}</div>
                </td>
                <td
                  v-if="rate(hero.pro_win, hero.pro_pick) > 50"
                  class="px-6 text-center py-4 text-sm text-emerald-500"
                >
                  {{ rate(hero.pro_win, hero.pro_pick) }} %
                </td>
                <td
                  v-else-if="rate(hero.pro_win, hero.pro_pick) > 45"
                  class="px-6 text-center py-4 text-sm text-amber-500"
                >
                  {{ rate(hero.pro_win, hero.pro_pick) }} %
                </td>
                <td
                  v-else-if="rate(hero.pro_win, hero.pro_pick) < 45"
                  class="px-6 text-center py-4 text-sm text-rose-500"
                >
                  {{ rate(hero.pro_win, hero.pro_pick) }} %
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-end mt-4">
            <button
              v-if="this.$route.params.page != 1"
              @click="home(this.$route.params.page - 1)"
              class="text-sky-600 mx-6"
            >
              prev
            </button>
            <button @click="home(+this.$route.params.page + 1)" class="text-sky-600">next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pre class="text-white">
  {{ heroes }}
</pre
  >
</template>
