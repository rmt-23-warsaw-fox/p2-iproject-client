<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCoinsStore } from "../stores/coins";
import NavBar from "../views/NavBar.vue";
import Table from "../components/Table.vue";
import News from "../components/News.vue";
export default {
  name: "home",
  components: {
    NavBar,
    Table,
    News,
  },
  data() {
    return {
      name: "",
    };
  },

  methods: {
    ...mapActions(useCoinsStore, ["getCoins", "pageControl", "search", "logout", 'news', "getMyCoins"]),
  },
  computed: {
    ...mapState(useCoinsStore, ["coins", "dataPage", "newsData"]),
  },
  created() {
    this.news()
    this.getCoins();
  },
};
</script>

<template>
  <header class="position-fixed w-100" style="z-index: 100">
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
          <form class="d-flex" @click.prevent="search(this.name)">
            <input class="form-control me-2" type="search" @click="search(this.name)" v-model="name" placeholder="Search" aria-label="Search" />
            <button class="btn btn-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <!-- <NavBar /> -->
  <div class="container" style="max-height: 100vh; width: 100vw; background-size: cover; overflow: hidden; padding-top: 80px; overflow-y: hidden">
    <div class="row" style="overflow-y: hidden">
      <div class="col-4 align-items-center" style="">
        <div class="card shadow row align-items-center" style="overflow-y: hidden">
          <h1 class="text-center" style="font-size: 40px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; overflow-y: hidden">Crypto News</h1>
          <div class="h-100 my-4 row align-items-center">
            <News v-for="data in this.newsData" :data="data" />
          </div>
        </div>
      </div>
      <div class="col-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Price</th>
              <th scope="col">Percentace 1 day</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <Table v-for="data in this.dataPage" :key="data.id" :data="data" />
          </tbody>
        </table>
        <nav aria-label="Page navigation container" style="margin-left: 80%">
          <ul class="pagination">
            <li class="page-item" v-for="el in coins.length / 10">
              <a class="page-link" @click.prevent="this.pageControl(el - 1)">{{ el }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
