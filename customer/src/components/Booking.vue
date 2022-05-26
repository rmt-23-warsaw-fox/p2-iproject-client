<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useAllStore } from "../stores/allStore";
export default {
  computed: {
    ...mapState(useAllStore, ["oneMovie", "row"]),
    ...mapWritableState(useAllStore, ["seatNumber"]),
  },
  methods: {
    ...mapActions(useAllStore, ["detail", "allRows", "booking"]),
    priceInRupiah(price) {
      const intl = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return intl.format(price);
    },
  },
  created() {
    // console.log(this.$route.params);
    this.detail(this.$route.params.MovieId);
    this.allRows();
  },
};
</script>

<template>
  <div class="card">
    <!-- IMG, HEADER -->
    <img :src="oneMovie.backdrop_path" :alt="oneMovie.title" />
    <div class="card-body">{{ oneMovie.name }}</div>
    <form action="" v-on:submit.prevent="booking">
      <label for="seatNumber">Choose your seat :</label><br />
      <select name="seatNumber" v-model="seatNumber" id="seatNumber">
        <option value="" disabled selected>--- Select category ---</option>
        <!-- <option value="">COBA</option> -->
        <template v-for="element in row">
          <option v-for="number in 21" :value="`${element.row}-${number}`">
            {{ element.row }}-{{ number }}
          </option>
        </template>
      </select>
      <br />
      <label>Ticket Price:</label><br />
      <h5>{{ priceInRupiah(oneMovie.ticketPrice) }}</h5>
      <br />
      <button class="btn btn-primary" type="submit">BOOKING</button>
    </form>
  </div>
</template>
