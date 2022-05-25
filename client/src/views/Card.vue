<template>
  <div v-for="el in data" :key="el.id" class="col-3 my-3 card-container">
    <div class="card" style="width: 16rem">
      <img :src="el.strMealThumb" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ el.strMeal }}</h5>
      </div>
      <button
        v-if="this.$route.name !== `bookmarkPage`"
        @click.prevent="addBookmark(el.idMeal, el.strMeal, el.strMealThumb)"
        class="btn btn-primary"
      >
        Bookmark
      </button>
    </div>
  </div>
</template>

<script>
import { useCardStore } from "../stores/card";
import { mapActions } from "pinia";
export default {
  name: "card",
  props: ["data"],
  methods: {
    ...mapActions(useCardStore, ["addBookmark"]),
  },
};
</script>

<style>
.card-container {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
