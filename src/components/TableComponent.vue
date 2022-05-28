<script>
import { mainStore } from "../stores/mainStore.js";
import { mapActions, mapState } from "pinia";
export default {
  name: "TableComponent",
  methods: {
    ...mapActions(mainStore, ["getUserSongs"]),
  },
  computed: {
    ...mapState(mainStore, ["UserSongs"]),
  },
  async created() {
    await this.getUserSongs();
  },
};
</script>
<template>
  <div class="overflow-x-auto min-h-[280px]">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(song, index) in UserSongs">
          <td>{{ index + 1 }}</td>
          <td>{{ song.currentSong.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
