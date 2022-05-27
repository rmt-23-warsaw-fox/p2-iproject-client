<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "Sidebar",
};
</script>

<template>
  <section class="text-center fixed-top col col-md-2 col-sm-4">
    <div class="card vh-100">
      <div class="card-body">
        <div class="d-flex align-items-start flex-column h-100">
          <div class="d-flex flex-column justify-content-center mb-auto">
            <h3 class="mb-4 mt-1">Navigation</h3>
            <button class="m-2 btn btn-secondary btn-block">
              <RouterLink to="/" class="links">Home</RouterLink>
            </button>
            <button class="m-2 btn btn-secondary btn-block">
              <RouterLink to="/products" class="links">Menu</RouterLink>
            </button>
            <button class="m-2 btn btn-secondary btn-block">
              <RouterLink to="/orders/myorder" class="links">Order</RouterLink>
            </button>
            <button class="m-2 btn btn-secondary btn-block">
              <RouterLink to="" class="links">Location and Hours</RouterLink>
            </button>
            <button class="m-2 btn btn-secondary btn-block">
              <RouterLink to="" class="links">About</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.links {
  text-decoration: none;
  color: white;
}
</style>
