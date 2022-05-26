<script>
import { useAccomodationStore } from '../stores/accomodation';
import { mapActions } from 'pinia';
export default {
  name: "CardSearchComp",
  props: ['accomodation'],
  methods: {
    ...mapActions(useAccomodationStore, ['fetchAccomodationById']),
    showDetail(id) {
      this.$router.push({ name: "detail", params: { id } })
    }
  },
};
</script>

<template>
  <div class="search d-flex bg-light mb-4 shadow">
    <div class="image-search">
      <img
        :src="accomodation.imageUrl"
        alt="Search Image"
      />
    </div>
    <div class="info-search d-flex flex-column justify-content-between w-100">
      <div>
        <h3>{{ accomodation.name }}</h3>
        <h5>IDR {{ accomodation.price }} / Night</h5>
        <h5 class="detail-sub-title mt-4">Room Capacity</h5>
        <p class="text-13">{{ accomodation.roomCapacity }} Orang</p>
      </div>
      <button class="btn btn-warning" @click="showDetail(accomodation.id)">See Detail</button>
    </div>
  </div>
</template>
