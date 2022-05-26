<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <div class="row my-4 bg-light rounded border p-2">
    <h5>
      Order ID: iProject-32234
      <span class="text-success">(ORDER BERHASIL)</span>
    </h5>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row" style="width: 25%">Nama Produk</th>
          <td>
            <RouterLink to="/detail/apple_iphone_se_(2022)-11410" class=""
              >Samsung</RouterLink
            >
          </td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Banyak</th>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row" style="width: 25%">Total harga</th>
          <td>Rp. 3.000.000,00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
