<script>
import SearchComp from "../components/SearchComp.vue";
import CardFavoriteComp from "../components/CardFavoriteComp.vue";
import FeedbackComp from "../components/FeedbackComp.vue";
import LoadingComp from "../components/LoadingComp.vue";
import { useAccomodationStore } from "../stores/accomodation";
import { mapActions, mapState } from "pinia";

export default {
  name: "DetailView",
  components: {
    SearchComp,
    CardFavoriteComp,
    FeedbackComp,
    LoadingComp
  },
  computed: {
    ...mapState(useAccomodationStore, ["accomodation", "isLogin","isLoading"]),
  },
  methods: {
    ...mapActions(useAccomodationStore, [
      "fetchAccomodationById",
      "addAccomodationToWishlist",
      "cekLogin"
    ]),
    addToWishList(AccomodationId, TypeId) {
      if (this.isLogin) {
        this.addAccomodationToWishlist(AccomodationId, TypeId);
      } else {
        this.$router.push({ name: "wishlist" })
      }
    },
  },
  created() {
    this.fetchAccomodationById(this.$route.params.id);
    this.cekLogin()
  },
};
</script>

<template>
  <div>
    <LoadingComp v-if="isLoading"/>
    <div class="banner">
      <img :src="accomodation.imageUrl" alt="Banner" />
    </div>

    <div class="container">
      <SearchComp />

      <CardFavoriteComp :accomodation="accomodation">
        <button
          class="btn btn-warning me-3"
          @click="addToWishList(accomodation.id, accomodation.TypeId)"
        >
          <i class="fas fa-heart text-dark"></i> Add To Wishlist
        </button>
      </CardFavoriteComp>

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
