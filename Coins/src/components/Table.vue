<template>
  <tr>
    <th scope="row">
      <div class="d-flex align-items-center justify-content-start">
        <div class="">
          <img :src="data.logo_url" style="height: 40px" alt="" />
        </div>
        <div class="py-1 m-1">{{ data.name }}</div>
      </div>
    </th>
    <td scope="row">
      <div class="py-1 m-1">{{ data.currency_symbol }}</div>
    </td>
    <td scope="row">
      <div class="py-1 m-1">${{ data.inst_price_usd }}</div>
    </td>
    <td scope="row" style="color: #06ff00">
      <div class="py-1 m-1">{{ data.change_percent_1d }}</div>
    </td>
    <td>
      <button @click.prevent="addBookmark()" class="btn btn-warning">
        <font-awesome-icon icon="bookmark" />
      </button>
    </td>
  </tr>
</template>
<script>
import { mapActions, mapWritableState } from "pinia";
import { useCoinsStore } from "../stores/coins";
export default {
  name: "table",
  props: ["data"],

  data(){
    return {
      crypto: {},
    }
  },

  methods: {
    ...mapActions(useCoinsStore, ['bookmark']),

    addBookmark() {
      this.crypto.name = this.data.name
      this.crypto.code = this.data.currency_symbol
      this.crypto.price = this.data.inst_price_usd
      this.crypto.percentace = this.data.change_percent_1d
      this.crypto.image = this.data.logo_url
      this.bookmark(this.crypto)
    }
  }
};
</script>
<style></style>
