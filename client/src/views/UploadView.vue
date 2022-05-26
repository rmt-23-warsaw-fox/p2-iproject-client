<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DataService from "../service/storeService";

export default {
  data() {
    return {
      selectedFile: null,
      picture: null,
      uploadValue: 0,
      caption: "",
    };
  },
  computed: {
    ...mapWritableState(useCounterStore, ["contentInventory"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["createContent"]),
    onFileSelected(event) {
      this.picture = URL.createObjectURL(event.target.files[0]);
      this.selectedFile = event.target.files[0];
    },
    uploadEvent() {
      if (this.selectedFile === "" || this.caption === "") {
        return;
      }
      let data = {
        upload: this.selectedFile.name,
        caption: this.caption,
      };
      this.createContent(data);
      DataService.create(data)
        .then(() => {
          this.contentInventory = data;
          this.$router.push("/profile");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<template>
  <div class="container">
    <form @submit.prevent="uploadEvent">
      <!-- Name input -->
      <div class="form-outline mb-4">
        <input type="file" accept="image/*" @change="onFileSelected" />
      </div>
      <div>
        <img :src="picture" width="200" alt="" />
      </div>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input
          type="text"
          id="form4Example2"
          class="form-control"
          v-model="this.caption"
          placeholder="write your caption..."
        />
      </div>
      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Upload!
      </button>
    </form>
  </div>
</template>
