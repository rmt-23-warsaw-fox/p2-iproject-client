<template>
  <div v-for="el in data" :key="el.id" class="col-3 my-3 card-container">
    <div class="card" style="width: 16rem">
      <img :src="el.strMealThumb" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ el.strMeal }}</h5>
      </div>
      <button
        v-if="this.$route.name !== `bookmarkPage`"
        @click.prevent="clickBookmark(el.idMeal, el.strMeal, el.strMealThumb)"
        class="btn btn-primary"
      >
        Bookmark
      </button>
      <button
        v-if="this.$route.name === `bookmarkPage`"
        @click.prevent="clickRemove(el.id)"
        class="btn btn-danger"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { useCardStore } from "../stores/card";
import { useBookmarkStore } from "../stores/bookmark";
import { mapActions } from "pinia";
export default {
  name: "card",
  props: ["data"],
  methods: {
    ...mapActions(useCardStore, ["addBookmark", "removeBookmark"]),
    ...mapActions(useBookmarkStore, ["getBookmarks"]),
    async clickBookmark(id, name, img) {
      try {
        await this.addBookmark(id, name, img);
      } catch (err) {
        this.$swal.fire({
          icon: "error",
          title: err.response.status,
          text: err.response.data.message,
        });
      }
    },
    async clickRemove(id) {
      try {
        await this.removeBookmark(id);
        await this.getBookmarks();
      } catch (err) {
        console.log(err);
      }
    },
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
