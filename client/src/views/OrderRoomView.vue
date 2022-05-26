<script>
import { useAccomodationStore } from "../stores/accomodation";
import { mapWritableState, mapActions, mapState } from "pinia";
import LoadingComp from "../components/LoadingComp.vue";
export default {
  name: "OrderRoomView",
  components: {
    LoadingComp,
  },
  computed: {
    ...mapWritableState(useAccomodationStore, [
      "dataLogin",
      "fromDate",
      "toDate",
    ]),
    ...mapState(useAccomodationStore, [
      "accomodation",
      "getTotalNight",
      "getTotalPrice",
      "isLoading",
    ]),
  },
  watch: {
    getTotalNight() {
      if (this.getTotalNight <= 0) {
        Swal.fire({
          icon: "warning",
          text: "Please pick date correctly !!!",
        });
        this.toDate = new Date(Date.now() + 3600 * 1000 * 24)
          .toISOString()
          .split("T")[0];
        this.fromDate = new Date().toISOString().split("T")[0];
      }
    },
  },
  methods: {
    ...mapActions(useAccomodationStore, [
      "fetchAccomodationById",
      "createSnap",
    ]),
    async payment(accomodation) {
      this.createSnap(accomodation);
      //   window.snap.pay(data.token)
    },
  },
  created() {
    this.fetchAccomodationById(this.$route.params.id);
  },
};
</script>

<template>
  <div>
    <LoadingComp v-if="isLoading"/>
    <div class="container-payment">
      <div class="content-payment">
        <h1 class="text-center">Payment</h1>
        <hr />
        <h3>{{ accomodation.name }}</h3>
        <div class="d-flex justify-content-between">
          <span class="text-secondary"
            >Room Capacity: {{ accomodation.roomCapacity }} Orang</span
          >
          <!-- <span class="type bg-warning">Apartement</span> -->
        </div>

        <!-- <div class="w-100 mt-3">
        <input
          type="email"
          class="form-control"
          id="location"
          placeholder="Please Input Your Email Address"
          v-model="dataLogin.email"
        />
      </div> -->

        <div class="form-date mt-4">
          <div class="date-from">
            <label for="location" class="form-label">From Date</label>
            <input
              type="date"
              class="form-control"
              id="from-date"
              placeholder="From Date"
              v-model="fromDate"
            />
          </div>
          <div class="vr mx-3"></div>
          <div class="date-to">
            <label for="location" class="form-label">To Date</label>
            <input
              type="date"
              class="form-control"
              id="to-date"
              placeholder="To Date"
              v-model="toDate"
            />
          </div>
        </div>

        <div class="d-flex mt-3">
          <div class="me-2">
            <span class="total-night">For {{ getTotalNight }} Night</span>
          </div>
          <div>
            <span> @IDR {{ accomodation.price }} / Night</span>
          </div>
        </div>
        <p class="total-price bg-warning mt-4">
          Total Price: IDR {{ getTotalPrice }}
        </p>

        <div class="d-flex justify-content-end mt-4">
          <button class="btn btn-primary" @click="payment(accomodation)">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-payment {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}
.content-payment {
  margin-top: 2%;
  background: white;
  width: 500px;
  padding: 30px 40px;
  border-radius: 15px;
}
.content-payment h1 {
  font-size: 26px;
  font-weight: 900;
}
.content-payment h3 {
  font-size: 18px;
}
.content-payment span {
  font-size: 14px;
}
.content-payment .type {
  padding: 5px 10px;
  border-radius: 5px;
}
.content-payment .form-date {
  display: flex;
  justify-content: space-between;
}
.content-payment .form-date .date-from,
.content-payment .form-date .date-to {
  width: 100%;
}
.content-payment .total-night {
  font-size: 14px;
}
.content-payment .total-price {
  font-size: 18px;
}
.content-payment .total-night {
  padding: 5px 10px;
  background-color: rgb(192, 192, 193);
  border-radius: 5px;
}
.content-payment .total-price {
  padding: 7px 15px;
  border-radius: 5px;
}
</style>
