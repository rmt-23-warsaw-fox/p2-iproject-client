<script>
import { mapActions, mapState } from "pinia";
import { useNontonStore } from "../stores/counter";

export default {
  name: "MovieDetail",
  methods: {
    ...mapActions(useNontonStore, ["movieDetail"]),
    postReviewClick(MovieId) {
      this.$router.push(`/add-review/${MovieId}`);
    },
  },
  computed: {
    ...mapState(useNontonStore, ["dataDetail", "qrCode"]),
  },
  created() {
    this.movieDetail(+this.dataDetail.id);
  },
};
</script>

<template>
  <div class="container" style="margin-top: 5%">
    <div class="row">
      <div class="col">
        <img
          :src="`https://image.tmdb.org/t/p/original${dataDetail.poster_path}`"
          alt="Entity Image"
          style="width: 30rem; height: 40rem"
        />
        <img
          :src="qrCode"
          class="card-img"
          alt="movie-qr"
          style="width: 300px; height: 300px; margin-top: 15px"
        />
      </div>
      <div class="col">
        <h1 class="display-5">{{ dataDetail.title }}</h1>
        <h1 class="display-6">{{ dataDetail.overview }}</h1>
        <!-- <p>Action</p> -->
        <h1 class="display-6" style="color: white">
          Rating: {{ dataDetail.vote_average }}
        </h1>
        <button
          class="btn btn-primary"
          @click.prevent="postReviewClick(dataDetail.id)"
        >
          Add Review
        </button>
        <br />
        <div class="card" style="width: 35rem; margin-top: 1rem">
          <div class="card-header">Reviews from people about this movie</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
