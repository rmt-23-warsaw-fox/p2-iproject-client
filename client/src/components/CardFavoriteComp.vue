<script>
export default {
  name: "CardFavoriteComp",
};
</script>

<template>
  <div class="room-detail bg-white d-flex mt-4">
    <aside class="images-left">
      <img
        src="https://s7d2.scene7.com/is/image/ritzcarlton/Club%20Lounge-7?$XlargeViewport100pct$"
        alt=""
      />
    </aside>
    <aside class="detail-right w-100">
      <h2 class="fw-bold detail-title">Cozy and Minimize Studio Apartement</h2>
      <p class="text-secondary text-14">
        Jalan Sultan Serdang Pasar 9 Desa Bangun Sari Baru
      </p>
      <hr />
      <button class="btn btn-sm btn-secondary px-4">
        <i class="fas fa-map-marker-alt"></i> Lihat Peta
      </button>
      <h5 class="detail-sub-title mt-4">Room Capacity</h5>
      <p class="text-13">2 Orang</p>
      <h5 class="detail-sub-title">Facility</h5>
      <ul class="text-13 px-0">
        <li><i class="far fa-check-circle"></i> Kamar mandi</li>
        <li><i class="far fa-check-circle"></i> AC</li>
        <li><i class="far fa-check-circle"></i> TV</li>
        <li><i class="far fa-check-circle"></i> Wifi</li>
        <li><i class="far fa-check-circle"></i> Swimming Pool</li>
        <li><i class="far fa-check-circle"></i> Fitness Center</li>
        <li><i class="far fa-check-circle"></i> Camera CCTV 24 hours</li>
      </ul>
      <h5 class="detail-sub-title">
        Price : <span class="text-danger">IDR 300.400</span>
      </h5>
      <div class="d-flex mt-4">
        <button class="btn btn-warning me-3">
          <i class="fas fa-heart text-dark"></i> Add To Favorite
        </button>
        <button class="btn btn-primary">
          <i class="fas fa-location-arrow"></i> Rent Now
        </button>
      </div>
    </aside>
  </div>
</template>
