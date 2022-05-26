<script>
import { useDestinationStore } from "../stores/destination";
import { mapActions, mapState } from "pinia";
import Card from "../components/Card.vue";
import Banner from "../components/Banner.vue";
import AboutPage from "../components/AboutPage.vue";
import ServicePage from "../components/ServicePage.vue";
import Galleries from "../components/Galleries.vue";
import Slogan from "../components/Slogan.vue";

export default {
  name: "HomeView",
  components: {
    Card,
    Banner,
    AboutPage,
    ServicePage,
    Galleries,
    Slogan,
  },
  computed: {
    ...mapState(useDestinationStore, ["destinationData"]),
  },
  methods: {
    ...mapActions(useDestinationStore, ["fetchDestination"]),
  },
  created() {
    this.fetchDestination();
  },
};
</script>

<template>
  <Slogan></Slogan>
  <AboutPage></AboutPage>
  <section class="destination" id="destination">
    <div class="heading">
      <span>our destination</span>
      <h1>follow your dreams</h1>
    </div>
    <div class="box-container">
      <Card v-for="destination in destinationData" v-bind:destination="destination"></Card>
    </div>
  </section>

  <ServicePage></ServicePage>
  <Galleries></Galleries>
  <Banner></Banner>
</template>
