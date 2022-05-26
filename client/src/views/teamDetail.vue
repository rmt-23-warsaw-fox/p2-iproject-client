<script>
import { mapActions, mapWritableState } from "pinia"
import { usePoofStore } from "../stores/counter"

export default {
  computed: {
    ...mapWritableState(usePoofStore, ["team"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["getTeamDetail", "getProProfile"]),
    rate(win, lose) {
      const total = win + lose
      let result = win / total
      result = (result * 100).toFixed(2)
      return result
    },
  },
  created() {
    this.getTeamDetail(this.$route.params.team_id)
  },
}
</script>
<template>
  <div
    class="px-6 pb-10 pt-10 flex-row mt-20 mx-32 text-zinc-200 pb-200 w-4/5 rounded-lg bg-gradient-to-br from-zinc-700 to-transparent shadow-xl"
  >
    <h2 class="text-5xl font-semibold text-center pb-10">{{ team.name }}</h2>
    <hr class="pb-4 border-white" />
    <div class="flex gap-5">
      <img
        :src="team.logo_url"
        style="width: 200px; height: 200px"
        class="aspect-square"
        alt="picture"
      />
      <div class="flex-row pl-4 pr-10 justify-around">
        <p class="text-2xl text-zinc-100">Stats :</p>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Total Matches :</h2>
          <h2 class="text-l font-semibold text-zinc-100">{{ team.losses + team.wins }}</h2>
        </div>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Wins :</h2>
          <h2 class="text-l font-semibold text-emerald-600">{{ team.wins }} Matches</h2>
        </div>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Losses :</h2>
          <h2 class="text-l font-semibold text-red-600">{{ team.losses }} Matches</h2>
        </div>
        <div class="flex-col pl-6 pt-6 gap-2">
          <h2 class="text-l font-semibold">Win Percentage:</h2>
          <h2
            v-if="rate(team.wins, team.losses) > 60"
            class="text-2xl pt-6 text-right font-semibold text-green-600"
          >
            {{ rate(team.wins, team.losses) }} %
          </h2>
          <h2
            v-else-if="rate(team.wins, team.losses) > 50"
            class="text-2xl pt-4 text-right font-semibold text-yellow-600"
          >
            {{ rate(team.wins, team.losses) }} %
          </h2>
          <h2
            v-else-if="rate(team.wins, team.losses) < 50"
            class="text-2xl pt-4 text-right font-semibold text-red-600"
          >
            {{ rate(team.wins, team.losses) }} %
          </h2>
        </div>
      </div>
      <div class="flex-col pl-10">
        <h3 class="text-2xl font-semibold pb-2">Players:</h3>
        <div class="grid grid-cols-2 gap-4 mt-2 pl-2">
          <a
            v-for="player in team.players"
            @click.prevent="getProProfile(player.account_id)"
            class="pl-4 text-l cursor-pointer"
            >{{ player.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
