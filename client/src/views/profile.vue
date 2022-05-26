<script>
import { mapActions, mapState } from "pinia"
import { usePoofStore } from "../stores/counter"
export default {
  computed: {
    ...mapState(usePoofStore, ["playerDetail"]),
  },
  methods: {
    ...mapActions(usePoofStore, ["getProProfile"]),
    convert(value) {
      const now = new Date(value)
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
      const day = now.getDate()
      const month = months[now.getMonth()]
      const year = now.getFullYear()
      const result = `${day} ${month} ${year}`
      return result
    },
  },
  created() {
    this.getProProfile(this.$route.params.id)
  },
}
</script>
<template>
  <div
    class="px-6 pb-10 pt-10 flex-row mt-20 mx-auto relative text-zinc-200 w-1/2 rounded-lg bg-gradient-to-br from-zinc-700 to-transparent shadow-xl"
  >
    <h2 class="text-5xl font-semibold text-center pb-10">{{ playerDetail.profile.name }}</h2>
    <hr class="pb-4 border-white" />
    <div class="flex gap-5">
      <img
        :src="playerDetail.profile.avatarfull"
        style="width: 200px; height: 200px"
        class="aspect-square"
        alt="picture"
      />
      <div class="flex-row pl-4 pr-10 justify-around">
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Solo MMR :</h2>
          <h2 class="text-l font-semibold text-zinc-100">
            {{ playerDetail.solo_competitive_rank }}
          </h2>
        </div>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Estimated MMR :</h2>
          <h2 class="text-l font-semibold text-zinc-100">
            {{ playerDetail.mmr_estimate.estimate }}
          </h2>
        </div>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">World Rank :</h2>
          <h2 class="text-l font-semibold text-sky-600">{{ playerDetail.leaderboard_rank }}</h2>
        </div>
        <div class="flex pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">Last Online :</h2>
          <h2 class="text-l font-semibold text-zinc-200">
            {{ convert(playerDetail.profile.last_login) }}
          </h2>
        </div>
        <div class="flex-col pl-6 pt-2 gap-2">
          <h2 class="text-l font-semibold">For More Info:</h2>
          <a
            :href="playerDetail.profile.profileurl"
            target="_blank"
            rel="noopener noreferrer"
            class="align-middle hover:underline hover:text-sky-700"
          >
            Click Here!
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
