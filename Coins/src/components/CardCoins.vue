<template>
  <div class="card mx-auto my-1" style="width: 18rem">
    <img class="mx-auto my-1" :src="data.image" style="height: 70px; width: 70px" alt="" />
    <div class="card-body mx-auto">
      <h5 class="card-title">{{ data.name }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Code : {{ data.code }}</li>
      <li class="list-group-item">Price USD: ${{ data.price }}</li>
      <li class="list-group-item">My Coins: {{ data.mycoins }}</li>
      <li class="list-group-item">Amount : ${{ data.myamount }}</li>
    </ul>
    <div class="card-body mx-auto">
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning mx-2">
          <a>Add Coins</a>
        </button>
      <button @click.prevent="delMyCoins(this.data.id)" class="btn btn-danger mx-2">
        <a>Delete Coins</a>
      </button>
    </div>
  </div>

  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Coins</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
                <label for="exampleDropdownFormPassword1" class="form-label">Coins</label>
                <input type="number" class="form-control" v-model="mycoins" placeholder="Example : 2" />
              </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" @click.prevent="putMyCoins(this.data.id, this.mycoins, this.data.price)" class="btn btn-warning">Save</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCoinsStore } from "../stores/coins";
export default {
  name: "Card",
  data(){
      return {
          mycoins: '',
      }
  },
  props: ["data"],
  methods: {
    ...mapActions(useCoinsStore, ["delMyCoins", 'putMyCoins']),
  },
};
</script>
<style></style>
