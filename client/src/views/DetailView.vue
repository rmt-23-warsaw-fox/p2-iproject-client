<script>
import SearchComp from "../components/SearchComp.vue";
import CardFavoriteComp from "../components/CardFavoriteComp.vue";
import FeedbackComp from "../components/FeedbackComp.vue";

export default {
  name: "DetailView",
  components: {
    SearchComp,
    CardFavoriteComp,
    FeedbackComp,
  },
};
</script>

<template>
  <div>
    <div class="banner">
      <img
        src="https://s7d2.scene7.com/is/image/ritzcarlton/jktrz-king-room-50682999?$XlargeViewport100pct$"
        alt="Banner"
      />
    </div>

    <div class="container">
      <SearchComp />

      <CardFavoriteComp />

      <div class="feedback-list bg-white mt-4 mb-5">
        <h3 class="fw-bold mb-4">Feedback & Ulasan</h3>

        <FeedbackComp />

        <FeedbackComp />

        <FeedbackComp />

        <form>
          <div class="mt-4 w-50">
            <label for="new-feedback" class="form-label">Dandi Rahmadani</label>
            <textarea
              type="text"
              class="form-control"
              id="new-feedback"
              placeholder="Add your feedback here"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            <i class="fas fa-location-arrow"></i> Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
