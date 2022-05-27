<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useNontonStore } from "../stores/counter";

export default {
  name: "AddReview",
  computed: {
    ...mapState(useNontonStore, ["dataDetail"]),
    ...mapWritableState(useNontonStore, ["toPostReview"]),
  },
  methods: {
    ...mapActions(useNontonStore, ["postReview"]),
    postClick(MovieId) {
      this.postReview(MovieId);
    },
  },
  created() {
    this.dataDetail.id;
  },
};
</script>

<template>
  <div
    class="card w-50 text-bg-secondary rounded-4"
    style="margin-left: 25vw; margin-top: 5%"
  >
    <div class="card-body">
      <h2 style="text-align: center">Add a review</h2>
      <p style="text-align: center">For movie: {{ dataDetail.title }}</p>
      <form>
        <div class="mb-3">
          <label for="review" class="form-label">Your review here</label>
          <textarea
            class="form-control"
            id="review"
            rows="3"
            v-model="toPostReview.review"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style="margin-left: 45%"
          @click.prevent="postClick(this.dataDetail.id)"
        >
          Post a review
        </button>
      </form>
    </div>
  </div>
</template>
