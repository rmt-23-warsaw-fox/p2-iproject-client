<script>
export default {
  name: "CardRoomComp",
  props: ['accomodation'],
};
</script>

<template>
  <div class="room mt-3">
    <div class="card">
      <img
        class="card-img-top"
        :src="accomodation.imageUrl"
        alt="Card image"
      />
      <div class="room-type bg-warning">{{ accomodation.Type.name }}</div>
      <div class="card-body">
        <h4 class="card-title text-nowrap">
          {{ accomodation.name }}
        </h4>
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-desc text-secondary">{{ accomodation.city }}</p>
          <p class="text-desc bg-success text-light rounded px-2 py-1">Ready</p>
        </div>
        <h6 class="card-price">IDR {{ accomodation.price }} / malam</h6>
      </div>
    </div>
  </div>
</template>
