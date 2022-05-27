<script>
import { mapWritableState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
  name: "paymentPage",
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    ...mapWritableState(useCounterStore, ["va"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["getVa"]),
  },
  created() {
    const orderCode = this.$route.params.orderCode;
    // console.log(orderCode, "<<<<<<<<<<");
    this.getVa(orderCode);
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
        <div class="card text-center m-5 p-5">
          <p class="h3">Silahkan lakukan pembayaran ke</p>
          <p class="h5">
            {{ va.va_numbers[0].bank }}
            {{ va.va_numbers[0].va_number }}
          </p>
        </div>

        <!-- <div class="row row-cols-1 row-cols-md-3 g-4 m-5"></div>
        <div class="row">
          <div class="col-12 d-flex justify-content-end m-5">
            <button class="btn btn-primary m-2">1</button>
            <button class="btn btn-primary m-2">2</button>
            <button class="btn btn-primary m-2">3</button>
            <button class="btn btn-primary m-2">></button>
          </div>
        </div> -->
      </main>
    </div>
  </div>
</template>
