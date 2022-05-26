<script>
export default {
  name: "popularCard",
  props: ["place"],
};
</script>

<template>
  <!-- <div class="col-sm-6 col-lg-4"> -->
    <div class="card card-span text-white">
      <img
        class="img-fluid"
        src="../assets/img/gallery/agra.png"
        height="375"
        alt="..."
      />
      <div
        class="card-img-overlay ps-0 d-flex flex-column justify-content-between bg-voyage-gradient"
      >
        <div class="mt-auto px-4 mb-1">
          <h3 class="fs-1 fs-md-2 text-white">Agra</h3>
          <span class="text-light fs--1 me-1"><i class="fas fa-gift"></i></span
          ><span class="text-light me-3">10 Packages</span>
        </div>
      </div>
      <a class="stretched-link" href="#!"></a>
    </div>
  <!-- </div> -->
</template>
