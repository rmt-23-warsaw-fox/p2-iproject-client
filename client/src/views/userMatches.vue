<script>
import { mapActions, mapWritableState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapWritableState(usePoofStore, ["matches"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["getUser"]),
    generateLink(string) {
      return `https://steamcdn-a.akamaihd.net${string}`
    },
    convert(val) {
      const minutes = Math.floor(val / 60)
      let seconds = val - minutes * 60
      if (seconds < 10) seconds = "0" + seconds.toString()
      return minutes + ":" + seconds
    },
  },
  created() {
    this.getUser()
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
                <th class="px-6 py-2 text-xs text-zinc-200">Result</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Kills</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Deaths</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Assists</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Gold Per Minute</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Xp Per Minute</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Last Hits</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Match Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="match in matches" class="whitespace-nowrap">
                <td class="px-6">
                  <div class="flex flex-row items-center">
                    <img :src="generateLink(match.hero.img)" style="width: 60px; height: 35px" />
                    <h2 class="pl-4 text-sm text-sky-500 cursor-pointer">
                      {{ match.hero.localized_name }}
                    </h2>
                  </div>
                </td>
                <td>
                  <div v-if="match.radiant_win" class="text-sm text-center text-emerald-600">
                    Won Match
                  </div>
                  <div v-if="!match.radiant_win" class="text-sm text-center text-rose-600">
                    Lost Match
                  </div>
                </td>
                <td class="px-6 text-center py-4 text-sm text-emerald-500">{{ match.kills }}</td>
                <td class="px-6 text-center py-4 text-sm text-rose-500">{{ match.deaths }}</td>
                <td class="px-6 text-center py-4 text-sm text-sky-500">{{ match.assists }}</td>
                <td class="px-6 py-4 text-center">
                  <div class="text-sm text-amber-500">{{ match.gold_per_min }}</div>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="text-sm text-zinc-100">{{ match.xp_per_min }}</div>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="text-sm text-zinc-100">{{ match.last_hits }}</div>
                </td>
                <td class="px-6 py-4 text-center">
                  <div class="text-sm text-zinc-100">{{ convert(match.duration) }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
