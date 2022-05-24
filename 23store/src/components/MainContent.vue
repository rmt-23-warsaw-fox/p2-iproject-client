<script>
export default {};
</script>

<template>
  <div class="container mt-3 text-center">
    <div class="row">
      <div class="col-md-12">
        <h3>Produk baru di toko kami</h3>
      </div>
    </div>
    <hr />
    <div class="row row-cols-1 row-cols-lg-2 g-3">
      <div class="col">
        <div class="bg-light text-center rounded">
          <div class="my-3 p-3">
            <h2 class="display-5">Another headline</h2>
          </div>
          <div
            class="bg-body shadow-sm mx-auto"
            style="width: 80%; height: 300px; border-radius: 21px 21px 0 0"
          ></div>
        </div>
      </div>
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
