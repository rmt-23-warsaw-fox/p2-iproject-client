<script>
import { useAccomodationStore } from "../stores/accomodation";
import { mapActions, mapWritableState, mapState } from "pinia";
export default {
  name: "SearchComp",
  computed: {
    ...mapState(useAccomodationStore, ["types"]),
    ...mapWritableState(useAccomodationStore, [
      "location",
      "fromDate",
      "toDate",
      "roomType",
    ]),
  },
  methods: {
    ...mapActions(useAccomodationStore, [
      "fetchAccomodationByLocationQuery",
      "fetchType",
    ]),
  },
  created() {
    this.fetchType();
  },
};
</script>

<template>
  <form class="sticky">
    <div class="search-room bg-white d-flex justify-content-around shadow mt-4">
      <div class="location">
        <label for="location" class="form-label">Location</label>
        <input
          type="text"
          class="form-control"
          id="location"
          placeholder="Mau Sewa Dimana ?"
          v-model="location"
        />
      </div>
      <div class="vr"></div>
      <div class="date-from">
        <label for="location" class="form-label">From Date</label>
        <input
          type="date"
          class="form-control"
          id="from-date"
          placeholder="From Date"
          v-model="fromDate"
        />
      </div>
      <div class="vr"></div>
      <div class="date-to">
        <label for="location" class="form-label">To Date</label>
        <input
          type="date"
          class="form-control"
          id="to-date"
          placeholder="To Date"
          v-model="toDate"
        />
      </div>
      <div class="vr"></div>
      <div class="room-type-select">
        <label for="location" class="form-label">Room Type</label>
        <select class="form-select" v-model="roomType">
          <option v-for="type in types" :key="type.id" :value="type.id">
            {{ type.name }}
          </option>
        </select>
      </div>
      <div class="vr"></div>
      <div class="d-flex align-items-center">
        <button
          type="submit"
          class="btn btn-warning"
          @click.prevent="fetchAccomodationByLocationQuery"
        >
          Search Room
        </button>
      </div>
    </div>
  </form>
</template>
