<script>
export default {
  name: "CardSearchComp",
};
</script>

<template>
  <div class="search d-flex bg-light mb-4 shadow">
    <div class="image-search">
      <img
        src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/41/06/4106380_v2.jpeg"
        alt="Search Image"
      />
    </div>
    <div class="info-search d-flex flex-column justify-content-between w-100">
      <div>
        <h3>Apartement Murah Berkualitas</h3>
        <h5>IDR 350.000 / Night</h5>
        <h5 class="detail-sub-title mt-4">Room Capacity</h5>
        <p class="text-13">2 Orang</p>
      </div>
      <button class="btn btn-warning">See Detail</button>
    </div>
  </div>
</template>
