<script>
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import ContentCard from "@/components/ContentCard.vue";
export default {
  components: {
    NavBar,
    ContentCard,
  },
  computed: {
    ...mapState(useCounterStore, ["profile", "contentInventory"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getProfile", "getContent"]),
  },

  created() {
    this.getProfile();
    this.getContent();
  },
};
</script>
<template>
  <NavBar v-for="data in profile" :key="data.id" :profile="data" />
  <div class="container" v-for="el in profile" :key="el.id">
    <div class="row d-flex justify-content-center">
      <!--Grid column-->
      <div class="col-md-6">
        <h2 class="my-5 h2">{{ el.User.userName }}</h2>

        <img
          class="rounded-circle"
          alt="100x100"
          width="200"
          height="200"
          :src="el.profilePicture"
          data-holder-rendered="true"
        />
      </div>
      <!--Grid column-->
    </div>
  </div>
  <ContentCard
    :content="contentInventory"
  />
</template>
