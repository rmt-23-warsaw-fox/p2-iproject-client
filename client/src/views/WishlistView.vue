<script>
import BannerComp from "../components/BannerComp.vue";
import SearchComp from "../components/SearchComp.vue";
import CardFavoriteComp from "../components/CardFavoriteComp.vue";
import { useAccomodationStore } from "../stores/accomodation";
import { mapState, mapActions } from "pinia";
import LoadingComp from "../components/LoadingComp.vue";

export default {
  name: "WishlistView",
  components: {
    BannerComp,
    SearchComp,
    CardFavoriteComp,
    LoadingComp
  },
  computed: {
    ...mapState(useAccomodationStore, ['wishlists', 'isLoading']),
    getLengthWishlist(){
      return this.wishlists.length;
    }
  },
  methods: {
    ...mapActions(useAccomodationStore, ['fetchAllWishlist','deleteWishlist', 'cekLogin'])
  },
  created() {
    this.fetchAllWishlist();
    this.cekLogin()
  }
};
</script>

<template>
  <div class="main-container">
    <LoadingComp v-if="isLoading"/>
    <BannerComp>
      <h1 class="text-light">My Wishlist</h1>
    </BannerComp>

    <div class="container mb-5">
      <SearchComp />
      <h2 class="text-center mt-5 fw-bold" v-if="!getLengthWishlist">You don't have more wishlist yet.</h2>
      <CardFavoriteComp 
        v-for="accomodation in wishlists"
        :accomodation="accomodation.Accomodation"
      >
        <button @click="deleteWishlist(accomodation.id)"
          class="btn btn-danger me-3"
        >
          <i class="fas fa-heart text-white"></i> Delete From Wishlist
        </button>
      </CardFavoriteComp>
    </div>
  </div>
</template>
