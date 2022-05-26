<script>
export default {};
</script>

<template>
  <div class="container pt-4">
    <div class="p-4 mb-4 mx-3 text-white bg-dark rounded border-danger">
      <div class="container-fluid py-5 d-flex justify-content-end">
        <div class="text-end">
          <h3 class="display-5 fw-bold">| 23 STORE</h3>
          <h1 class="display-5 fw-bold">ONLINE SHOP</h1>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div
      class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light rounded shadow"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <!-- <h1 class="display-4 fw-bold">23-STORE</h1> -->
        <h1 class="fw-bold">GACHA keberuntungan mu hari ini.!!!</h1>
        <h3>
          Dapatkan gadget yang kamu inginkan dengan harga yang
          <span class="display-5 fw-bold">SPESIAL !!!</span>
        </h3>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div
        class="product-device product-device-2 shadow-sm d-none d-md-block"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}
</style>
