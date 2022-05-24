<script>
import { RouterLink } from 'vue-router';
export default {
  name: "NavbarComp",
  components: {
      RouterLink,
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand ms-5">Rent Room</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/wishlist" class="nav-link">Wishlist</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link" >Login</RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" >Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
