<script>
import {RouterLink} from 'vue-router';
export default {
  name: "SongCard",
  props: ["music"],
};
</script>

<template>
  <div class="card w-50 bg-base-100 shadow-xl image-full">
    <figure>
      <img :src="music.currentSong.imageUrl" alt="Song Cover" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ music.currentSong.title }}</h2>
      <p>{{ music.currentSong.CreatorName }}</p>
      <div class="card-actions justify-end">
        <RouterLink class="btn btn-primary" :to = "{
            path: `/music/${music.id}`
        }">Listen</RouterLink>
      </div>
    </div>
  </div>
</template>
