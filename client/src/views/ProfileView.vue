<script>
import { mapActions, mapState } from "pinia";
import ProfileCard from "../components/ProfileCard.vue";
import { useUserStore } from "../stores/user";
export default {
  name: "ProfileView",
  components: {
    ProfileCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useUserStore, ["myProfile"]),
  },
  methods: {
    ...mapActions(useUserStore, ["getProfile"]),
    goToMatches() {
      this.$router.push("/mymatches");
    },
  },
  created() {
    this.getProfile();
  },
};
</script>

<template>
  <div class="flex flex-col gap-5 items-center mt-10">
    <ProfileCard />
    <div class="mt-10">
      <h2 class="font-bold text-2xl mb-4">Hi {{myProfile.name}} what you wanna do today ?</h2>
      <div class="flex mb-20">
        <div class="bg-purple-300" @click.prevent="goToMatches">
        <p class="text-sm p-6">see your last match in every mode in valorant game. <br />You can choose
          spesific map as you wish</p>
          
        </div>
        <div class="bg-yellow-300">
          <p class="text-sm p-6">Looking for mabar mate ? let's find them on our livechat</p>
          
        </div>
      </div>
    </div>
  </div>
</template>
