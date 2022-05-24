<script>
import BannerComp from "../components/BannerComp.vue";
import SearchComp from "../components/SearchComp.vue";
import CardFavoriteComp from "../components/CardFavoriteComp.vue";

export default {
  name: "WishlistView",
  components: {
    BannerComp,
    SearchComp,
    CardFavoriteComp,
  },
};
</script>

<template>
  <div>
    <BannerComp>
      <h1 class="text-light">My Wishlist</h1>
    </BannerComp>

    <div class="container mb-5">
      <SearchComp />

      <CardFavoriteComp />
      <CardFavoriteComp />
      <CardFavoriteComp />
      <CardFavoriteComp />
    </div>
  </div>
</template>
