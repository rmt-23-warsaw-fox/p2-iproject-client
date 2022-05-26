<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  props: ["transaction"],
  data() {
    return {
      detailProduct: `/detail/${this.transaction.detailProduct}`,
    };
  },
};
</script>

<template>
  <div class="row my-4 bg-light rounded border p-2">
    <h5>
      Order ID: {{ transaction.orderId }}
      <span class="text-success">(ORDER BERHASIL)</span>
    </h5>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row" style="width: 25%">Total Harga</th>
          <td>
            <h5>{{ transaction.priceTotal }}</h5>
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Brand</th>
          <td>
            <h5>{{ transaction.brand }}</h5>
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Product</th>
          <td>
            <RouterLink v-bind:to="detailProduct">
              <h5>{{ transaction.productName }}</h5></RouterLink
            >
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Harga satuan</th>
          <td>
            <h5>{{ transaction.price }}</h5>
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Banyak</th>
          <td>
            <h5>{{ transaction.amount }}</h5>
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Tanggal transaksi</th>
          <td>
            <h5>{{ transaction.createdAt }}</h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
