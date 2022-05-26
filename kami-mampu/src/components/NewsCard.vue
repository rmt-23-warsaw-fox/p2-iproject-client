<script>
import { mapWritableState, mapActions } from "pinia";
import { useEventStore } from "../stores/event";
export default {
  name: "EventCard",
  computed: {
    ...mapWritableState(useEventStore, ["news"]),
  },
  methods: {
    dateFormat(date) {
      return new Date(date).toLocaleString();
    },
  },
};
</script>

<template>
  <div id="cards">
    <div
      v-for="post in news"
      v-bind:key="post.id"
      class="card mt-5 shadow-lg p-3 mb-5 bg-body"
      style="width: 50rem"
    >
      <a :href="post.url"
        ><img
          :src="post.image"
          alt="Image nya gaada karna tidak dikasih dari 3rd party API nya"
          class="card-img-top"
          style="height: 200px; object-fit: cover"
      /></a>
      <div class="card-body">
        <h3 class="card-title">{{ post.source }}</h3>
        <h3 class="card-title">{{ post.title }}</h3>
        <h5 class="card-text">{{ post.description }}</h5>
        <h6 class="card-text">{{ dateFormat(post.published_at) }}</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
#cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  margin: 80px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.card-text {
  margin-top: 20px;
}

.btn {
  margin-top: 30px;
  height: 40px;
  width: 120px;
  background-color: #b5dfd6;
  border: 1px solid #91cabe;
}
</style>
