<script>
import { mapActions, mapState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  computed: {
    ...mapState(useAllInOne, ['animeList'])
  },
  methods: {
    ...mapActions(useAllInOne, ['fetchAnime', 'fetchAnimeDetail'])
  },
  created() {
    this.fetchAnime()
  }
}
</script>

<template>
  <div style="margin-top: 90px; width: 90%; text-align: center; margin-left: 13vh">
  <h3 style="margin-top: 40px; margin-bottom: 20px;">Recommended Anime</h3>
    <div class="row">
      <div class="card" style="width: 12rem" v-for="anime in animeList" :key="anime.entry.mal_id">
        <a @click.prevent="fetchAnimeDetail(anime.entry.mal_id)" style="cursor: pointer" 
          ><img
            class="card-img-top"
            :src="anime.entry.images.jpg.image_url"
            :alt="anime.entry.title"
            style="border-radius: 5px; height: 250px;"
        /></a>
        <div class="card-body">
          <p class="card-text" style="font-weight: bolder; margin-bottom: 0">
            {{ anime.entry.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>