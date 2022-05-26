<script>
export default {
  name: "CardFavoriteComp",
  props: ["accomodation"],
  computed: {
    facilities() {
      return this.accomodation.facility.split(",");
    },
  },
  methods: {
    orderRoom(id) {
      this.$router.push({ name: "order", params: { id } })
    }
  },
};
</script>

<template>
  <div class="room-detail bg-white d-flex mt-4 shadow">
    <aside class="images-left">
      <img :src="accomodation.imageUrl" alt="" />
    </aside>
    <aside class="detail-right w-100">
      <h2 class="fw-bold detail-title">{{ accomodation.name }}</h2>
      <p class="text-secondary text-14">
        {{ accomodation.location }}
      </p>
      <hr />
      <button class="btn btn-sm btn-secondary px-4">
        <i class="fas fa-map-marker-alt"></i> Lihat Peta
      </button>
      <h5 class="detail-sub-title mt-4">Room Capacity</h5>
      <p class="text-13">{{ accomodation.roomCapacity }} Orang</p>
      <h5 class="detail-sub-title">Facility</h5>
      <ul class="text-13 px-0">
        <li v-for="(facility, index) in facilities" :key="index">
          <i class="far fa-check-circle"></i> {{ facility }}
        </li>
      </ul>
      <h5 class="detail-sub-title">
        Price : <span class="text-danger">IDR {{ accomodation.price }}</span>
      </h5>
      <div class="d-flex mt-4">
        <slot />
        <button class="btn btn-primary" @click="orderRoom(accomodation.id)">
          <i class="fas fa-location-arrow"></i> Rent Now
        </button>
      </div>
    </aside>
  </div>
</template>
