<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import Card from "../components/Card.vue";
export default {
  name: "HomePage",
  components: {
    Navbar,
    Sidebar,
    Card,
  },
  computed: {
    ...mapWritableState(useCounterStore, ["products"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<template>
  <div class="wrapper vh-100 text-center">
    <Navbar />
    <div class="d-flex position-relative">
      <Sidebar />
      <main
        class="text-center mt-5 vh-100 row position-absolute"
        style="width: 80%; right: 2em"
      >
        <div class="jumbotron jumbotron-fluid d-flex align-items-center">
          <div class="container mb-5 title ml-3">
            <p class="display-4">Kedai Riqa</p>
            <p>Masakan khas Sulawesi Utara dan Minuman Herbal.</p>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 m-5"></div>
        <div class="row">
          <div class="col-12 d-flex justify-content-end m-5">
            <button class="btn btn-primary m-2">1</button>
            <button class="btn btn-primary m-2">2</button>
            <button class="btn btn-primary m-2">3</button>
            <button class="btn btn-primary m-2">></button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
.jumbotron {
  color: white;
  background-image: url("https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.title {
  background-color: rgba(0, 0, 0, 0.452);
  width: 500px;
}
</style>
