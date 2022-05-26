<script>
import { mapActions, mapState } from "pinia";
import { useNontonStore } from "../stores/counter";

export default {
  name: "MovieDetail",
  methods: {
    ...mapActions(useNontonStore, ["movieDetail", "postReview"]),
    postReviewClick(MovieId) {
      this.$router.push(`/add-review/${MovieId}`);
    },
  },
  computed: {
    ...mapState(useNontonStore, ["dataDetail"]),
  },
  created() {
    this.movieDetail(this.dataDetail.id);
  },
};
</script>

<template>
  <div class="container" style="margin-top: 10%">
    <div class="row">
      <div class="col">
        <img
          :src="`https://https://image.tmdb.org/t/p/original${dataDetail.backdrop_path}`"
          alt="Entity Image"
        />
      </div>
      <div class="col">
        <h1 class="display-5">{{ dataDetail.title }}</h1>
        <h1 class="display-6">{{ dataDetail.overview }}</h1>
        <!-- <p>Action</p> -->
        <h1 class="display-6">Rating: {{ dataDetail.vote_average }}</h1>
        <button
          class="btn btn-primary"
          @click.prevent="postReviewClick(dataDetail.id)"
        >
          Add Review
        </button>
      </div>
    </div>
  </div>
</template>
