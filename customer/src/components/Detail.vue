<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useAllStore } from "../stores/allStore";
export default {
  computed: {
    ...mapState(useAllStore, ["oneMovie"]),
  },
  methods: {
    ...mapActions(useAllStore, ["detail"]),
    priceInRupiah(price) {
      const intl = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return intl.format(price);
    },
  },
  components: {
    RouterLink,
  },
  created() {
    // console.log(this.$route.params, "__THIS IS PARAMS___");
    this.detail(this.$route.params.id);
    // console.log(this.oneMovie, "HEYO");
  },
};
</script>

<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img
            :src="oneMovie.image_url"
            alt="Image"
            srcset=""
            style="size: 50px; max-width: 100%"
          />
          <!-- IMAGE -->
        </div>
        <div class="col">
          <div class="row">
            <h1>
              {{ oneMovie.name }}
              <!-- NAME -->
            </h1>
          </div>
          <div class="row">
            <p>
              {{ oneMovie.synopsis }}
              <!-- SYNOPSIS -->
            </p>
          </div>
          <!-- <div class="row">
            <h4>
              {{ categoryName }}
            </h4>
          </div> -->
          <div class="row">
            <br />
            <h5>{{ priceInRupiah(oneMovie.ticketPrice) }}</h5>
            <!-- <h5>PRICE</h5> -->
          </div>
          <!-- <div>
              <img :src="qrCode" alt="qrCode" />
            </div> -->
          <!-- <RouterLink
            :to="{ name: 'booking', params: { MovieId: oneMovie.id } }"
          >
            <button class="btn btn-primary">Booking</button>
          </RouterLink> -->
        </div>
      </div>
    </div>
  </div>
</template>
