<script>
export default {
  name: "cardDestination",
  props: ['place']
};
</script>

<template>
<div class="col-md-4 mb-3 mb-md-0 h-100">
  <div class="card card-span h-100 text-white">
    <img class="img-fluid h-100" :src="place.imageUrl" alt="..." />
    <div class="card-img-overlay ps-0">
      <span class="badge ms-3 me-1 p-2"
        ><br></span
      ><span class="badge bg-secondary p-2"
        ><i class="fa fa-bolt me-1"></i><span>trending</span
        ><i class="fa fa-bolt ms-1"> </i
      ></span>
    </div>
    <div class="card-body ps-0">
      <h5 class="fw-bold text-1000 mb-4 text-truncate">
        {{place.name}}
      </h5>
      <div class="d-flex align-items-center justify-content-start">
        <span class="text-800 fs--1 me-2"><i class="fa fa-map-marker"></i></span
        ><span class="text-900 me-3">{{place.Region? place.Region.name : place.Region }}</span
        ><span class="text-800 fs--1 me-2"><i class="fa fa-calendar"></i></span
        >
        <!-- <span class="text-900">4 days</span> -->
      </div>
      <p class="text-decoration-line-through text-900 mt-3 mb-0">Rp. {{place.price}}</p>
      <h1 class="mb-3 text-primary fw-bolder fs-4">
        <span>Rp {{+place.price - (+place.price * 0.15)}}</span><span class="text-900 fs--1 fw-normal">/Per person</span>
      </h1>
      <span class="badge bg-soft-secondary p-2"
        ><i class="fa fa-tag text-secondary fs--1 me-1"></i
        ><span class="text-secondary fw-normal fs-1">-15%</span></span
      >
    </div>
  </div>
  </div>
</template>
