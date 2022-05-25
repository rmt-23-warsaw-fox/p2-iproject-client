<template>
  <div id="bookmarkPage-customer">
    <h1 class="text-center my-5">Bookmarks</h1>
    <div class="bookmark-container">
      <div class="container-fluid">
        <div class="row">
          <Cards :data="bookmarks" />
        </div>
      </div>
    </div>
    <div class="chef-container container-fluid my-5">
      <h1 class="text-center my-5">Order</h1>
      <div class="row">
        <div class="col-6">
          <h4>Chef</h4>
          <select
            v-model="localChef"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="0" disabled selected>Open this select chef</option>
            <option v-for="el in chefs" :key="el.id" :value="el.id">
              {{ el.name }} - {{ el.price }}
            </option>
          </select>
        </div>
        <div class="col-6">
          <h4>Bank</h4>
          <select
            v-model="localBank"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="" disabled selected>Open this select bank</option>
            <option value="BCA">BCA</option>
            <option value="MANDIRI">MANDIRI</option>
          </select>
        </div>
      </div>
      <div class="container-button my-3">
        <button
          @click="clickOrder"
          class="btn btn-primary button-order"
          type="button"
        >
          Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useBookmarkStore } from "../stores/bookmark";
import Cards from "../views/Card.vue";
import axios from "axios";
export default {
  name: "bookmarkPage",
  data() {
    return {
      localChef: 0,
      localBank: "",
    };
  },
  components: {
    Cards,
  },
  computed: {
    ...mapState(useBookmarkStore, ["bookmarks", "chefs"]),
  },
  methods: {
    ...mapActions(useBookmarkStore, [
      "getBookmarks",
      "getChefs",
      "createVa",
      "addOrder",
    ]),
    async clickOrder() {
      try {
        let chef = this.chefs.find((el) => el.id === this.localChef);
        let totalPrice = this.bookmarks.length * chef.price;
        const va = await this.createVa(totalPrice, this.localBank);
        const order = await this.addOrder(
          chef.id,
          totalPrice,
          va.status,
          va.account_number,
          va.external_id
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    await this.getBookmarks();
    await this.getChefs();
  },
};
</script>

<style>
.container-button {
  display: flex;
  justify-content: center;
}
.button-order {
  width: 200px;
  font-size: large;
}
</style>
