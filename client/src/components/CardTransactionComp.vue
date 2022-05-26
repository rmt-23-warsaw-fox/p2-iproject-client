<script>
import { useAccomodationStore } from '../stores/accomodation';
import { mapActions } from 'pinia';
export default {
  name: "CardTransactionComp",
  props: ['transaction'],
  computed: {
    classObject() {
      return {
        'bg-warning': this.transaction.status === 'settlement',
        'bg-danger' : this.transaction.status === 'pending'
      }
    }
  },
  methods: {
      getStatus(status) {
          if (status === 'pending') {
              return 'Not Paid'
          } else {
              return 'Paid'
          }
      },
      ...mapActions(useAccomodationStore, ['updateStatusTransaction'])
  }
};
</script>
<template>
<p></p>
  <div class="transaction-card d-flex mb-4">
    <div>
      <img
        :src="transaction.Accomodation.imageUrl"
        alt="No Image"
      />
    </div>
    <div class="detail d-flex flex-column justify-content-between">
      <div>
        <h3>{{ transaction.name }}</h3>
        <h5 class="text-secondary">{{ transaction.Accomodation.location }}</h5>
        <p>Long : {{ transaction.totalNight }} Nights</p>
      </div>
      <h5>Total Price : Rp. {{transaction.totalPrice}}</h5>
      <button class="btn btn-sm btn-success w-50" @click="updateStatusTransaction(this.transaction.orderId, transaction.id)">Cek Status Pembayaran</button>
    </div>
    <div class="status" :class="classObject" >{{ getStatus(transaction.status) }}</div>
  </div>
</template>
