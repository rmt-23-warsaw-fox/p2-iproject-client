<template>
  <header class=" w-100" style="z-index: 100">
    <nav class="navbar navbar-expand-lg navbar-light shadow-lg" style="background-color: #fefefeec">
      <div class="container">
        <a class="navbar-brand" href="#">UpCrypto</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/bookmark">My Coin</RouterLink>
            </li>
            <li class="nav-item">
              <a @click.prevent="this.logout" class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCoinsStore } from "../stores/coins";
export default {
    name: 'Navbar',
    methods: {
        ...mapActions(useCoinsStore, ['logout'])
    }
};
</script>
<style></style>
