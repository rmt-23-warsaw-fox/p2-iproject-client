<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapStores, mapWritableState } from "pinia";

export default {
  data() {
    return {
      favourites: [],
    };
  },
  props: ["itemsprops", "cardsProps"],
  methods: {
    ...mapActions(useCounterStore, ["listsFavourite"]),
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapWritableState(useCounterStore, ["myFavourites"]),
  },
  async created() {
    try {
      const awaitFavourite = await this.listsFavourite();
      this.favourites = this.myFavourites;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<template>
  <div id="items-card">
    <div id="cards-home" v-if="itemsprops == 'home'">
      <div
        class="card card-movie"
        style="width: 16rem; height: 20rem"
        v-for="data in cardsProps"
        :key="data.id"
      >
        <img
          :src="data.imgUrl"
          class="card-img-top"
          alt="..."
          style="height: 200px"
        />
        <div class="card-body">
          <div id="title-favourite">
            <h5 class="card-title">{{ data.name }}</h5>
            <a class="fa fa-star checked" v-if="data.Favourites[0]"></a>
            <a
              class="fa fa-star blank"
              @click.prevent="isFavourite(data.id)"
              v-else
            ></a>
          </div>
          <p
            class="card-text"
            style="width: 220px; height: 50px; overflow: hidden"
          >
            {{ data.synopsis }}
          </p>
          <button
            @click.prevent="isDetailStore(data.id)"
            class="btn btn-primary"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
    <div id="cards-favourite" v-else-if="itemsprops == 'favourite'">
      <div
        class="card card-movie"
        style="width: 16rem; height: 20rem"
        v-for="data in favourites"
        :key="data.id"
      >
        <img
          :src="data.Movie.imgUrl"
          class="card-img-top"
          alt="..."
          style="height: 200px"
        />
        <div class="card-body">
          <div id="title-favourite">
            <h5 class="card-title">{{ data.Movie.title }}</h5>
          </div>
          <p
            class="card-text"
            style="width: 220px; height: 50px; overflow: hidden"
          >
            {{ data.Movie.synopsis }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#cards-favourite {
  margin-left: 200px;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  width: 1000px;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
