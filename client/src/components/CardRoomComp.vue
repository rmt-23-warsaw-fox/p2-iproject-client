<script>
export default {
  name: "CardRoomComp",
};
</script>

<template>
  <div class="room mt-3">
    <div class="card">
      <img
        class="card-img-top"
        src="https://s7d2.scene7.com/is/image/ritzcarlton/jktrz-king-room-50682999?$XlargeViewport100pct$"
        alt="Card image"
      />
      <div class="room-type bg-warning">Apartement</div>
      <div class="card-body">
        <h4 class="card-title text-nowrap">
          Cozy and Minimize Studio Apartement
        </h4>
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-desc text-secondary">Jakarta Selatan</p>
          <p class="text-desc bg-success text-light rounded px-2 py-1">Ready</p>
        </div>
        <h6 class="card-price">Rp. 230.000 / malam</h6>
      </div>
    </div>
  </div>
</template>
