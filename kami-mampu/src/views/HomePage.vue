<script>
import { mapWritableState, mapActions } from "pinia";
import { useEventStore } from "../stores/event";
import EventCard from "../components/EventCard.vue";
import NewsCard from "../components/NewsCard.vue";
export default {
  name: "HomePage",
  created() {
    this.fetchEvent();
    this.fetchNews();
  },
  components: {
    EventCard,
    NewsCard,
  },
  methods: {
    ...mapActions(useEventStore, ["fetchEvent", "fetchNews"]),
  },
};
</script>

<template>
  <div class="event-container">
    <h1>Events</h1>

    <EventCard></EventCard>
  </div>
  <div class="event-container">
    <h1>News</h1>

    <NewsCard></NewsCard>
  </div>
</template>

<style scoped>
.event-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 20vh;
}

h1 {
  color: #b5dfd6;
}
</style>
