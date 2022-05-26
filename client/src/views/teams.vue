<script>
import { mapActions, mapState, mapWritableState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapState(usePoofStore, ["teams"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["getTeams"]),
    convert(value) {
      const msec = value * 1000
      const now = new Date(msec)
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      console.log(now)
      const day = now.getDate()
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      const result = `${day} ${month} ${year}`
      return result
    },
    total(win, lose) {
      return win + lose
    },
    rate(win, lose) {
      const total = win + lose
      let result = win / total
      result = (result * 100).toFixed(2)
      return result
    },
  },
  created() {
    this.getTeams(this.$route.params.page)
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
                <th class="px-6 py-2 text-xs text-zinc-200">Name</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Last Match</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Rating</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Matches</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Wins</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Losses</th>
                <th class="px-6 py-2 text-xs text-zinc-200">Win Percentage</th>
              </tr>
            </thead>
            <tbody class="text-center" v-for="(team, i) in teams">
              <tr :key="i" class="whitespace-nowrap">
                <td class="px-6">
                  <div class="flex flex-row items-center">
                    <img :src="team.logo_url" style="width: 60px; height: 60px" />
                    <a class="pl-2 text-sm text-sky-500 cursor-pointer">{{ team.name }}</a>
                    <a v-if="!team.name" class="pl-2 text-sm text-rose-500 cursor-default"
                      >Team Disbanded</a
                    >
                  </div>
                </td>

                <td>
                  <div class="text-sm text-zinc-300">{{ convert(team.last_match_time) }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-amber-500">{{ Math.floor(team.rating) }}</div>
                </td>
                <td class="px-6 py-4 text-sm text-zinc-300">{{ total(team.wins, team.losses) }}</td>
                <td class="px-6 py-4 text-sm text-emerald-500">{{ team.wins }}</td>
                <td class="px-6 py-4 text-sm text-rose-500">{{ team.losses }}</td>

                <td
                  v-if="rate(team.wins, team.losses) > 60"
                  class="px-6 py-4 text-sm text-green-600"
                >
                  {{ rate(team.wins, team.losses) }} %
                </td>
                <td
                  v-else-if="rate(team.wins, team.losses) > 50"
                  class="px-6 py-4 text-sm text-yellow-600"
                >
                  {{ rate(team.wins, team.losses) }} %
                </td>
                <td
                  v-else-if="rate(team.wins, team.losses) < 50"
                  class="px-6 py-4 text-sm text-red-600"
                >
                  {{ rate(team.wins, team.losses) }} %
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-end mt-4">
            <button @click="getTeams(this.$route.params.page - 1)" class="text-sky-600 mx-6">
              prev
            </button>
            <button @click="getTeams(+this.$route.params.page + 1)" class="text-sky-600">
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
