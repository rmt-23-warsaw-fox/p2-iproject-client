<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  computed: {
    ...mapState(useAllInOne, ['isLogin']),
    ...mapWritableState(useAllInOne, ['query']),
  },
  methods: {
    ...mapActions(useAllInOne, ['searchMovie']),
  },
};
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg bg-white navbar-light p-3 shadow-sm">
    <div class="container">
      <a class="navbar-brand" @click.prevent="$router.push('/')" style="cursor: pointer"
        ><i class="fa-solid fa-shop me-2"></i><strong>Pai Movie & Anime DB</strong></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" @click.prevent="$router.push('/')" href="movies">Movies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" @click.prevent="$router.push('/anime') " href="anime">Anime</a>
          </li>
        </ul>
        <div class="ms-auto d-none d-lg-block">
          <div class="input-group">
            <input
              type="text"
              class="form-control border-primary"
              style="color: #7a7a7a"
              placeholder="Search by name"
              v-model="query"
            />
            <button class="btn btn-primary text-white" @click="searchMovie">Search</button>
          </div>
        </div>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" href="favorite" @click.prevent="$router.push('/favorite')" v-if="isLogin"><fa icon="heart" /> Favorite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" href="profile" v-if="isLogin"><fa icon="circle-user" /> Account</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" href="logout" v-if="isLogin">Logout</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" @click.prevent="$router.push('/register')" href="register" v-if="!isLogin">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2 text-uppercase" @click.prevent="$router.push('/login')" href="login" v-if="!isLogin">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
a {
  font-size: 14px;
  font-weight: 700;
}
.superNav {
  font-size: 13px;
}
.form-control {
  outline: none !important;
  box-shadow: none !important;
}
@media screen and (max-width: 540px) {
  .centerOnMobile {
    text-align: center;
  }
}
</style>
