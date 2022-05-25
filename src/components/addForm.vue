<script>
import { mainStore } from "../stores/mainStore.js";
import { mapActions } from "pinia";
export default {
  name: "AddForm",
  data() {
    return {
      selectedPicture: undefined,
      selectedSong: undefined,
      title: "",
      genreId: ""
    };
  },
  methods: {
    ...mapActions(mainStore, ["submitToFirebase"]),
    selectFile() {
      this.selectedSong = this.$refs.music.files;
      this.selectedPicture = this.$refs.picture.files;
      // console.log(this.selectedSong);
      // console.log(this.selectedPicture);
    },
  },
};
</script>
<template>
  <div class="hero min-h-screen bg-white">
    <div class="hero-content flex-col">
      <div class="text-center">
        <h1 class="text-3xl font-bold">Let's share your music to the world!</h1>
      </div>
      <div class="h-[75px] w-[100%]"></div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form @submit.prevent="submitToFirebase(selectedPicture, selectedSong, title, genreId)">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                class="input input-bordered"
                v-model = "title"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Genre</span>
              </label>
              <select
                type="text"
                placeholder="Title"
                class="input input-bordered"
                v-model = "genreId"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Song Cover</span>
              </label>
              <input
                type="file"
                class="input"
                ref="picture"
                @change="selectFile()"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Song</span>
              </label>
              <input
                type="file"
                class="input"
                ref="music"
                @change="selectFile()"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn">Share</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
