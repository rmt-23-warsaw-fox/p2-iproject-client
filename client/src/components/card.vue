<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapStores, mapWritableState } from "pinia";
import linkUrl from '../api/axios'

export default {
  data() {
    return {
      buys: [],
      total: 0
    };
  },
  props: ["itemsprops", "cardsProps"],
  methods: {
    ...mapActions(useCounterStore, ["listsBuy"]),
    async isCancel(id) {
      try {
        await linkUrl.delete(`login/${id}/deleteBuy`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        const awaitBuy = await this.listsBuy();
        this.total = 0
        this.buys = this.myBuys;
        this.buys.forEach(el => {
        this.total += el.Package.price
        });
        this.total = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format( +this.total)
      } catch(err) {
        console.log(err);
      }
    }
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapWritableState(useCounterStore, ["myBuys"]),
  },
  async created() {
    try {
      const awaitBuy = await this.listsBuy();
      this.buys = this.myBuys;
      this.buys.forEach(el => {
        this.total += el.Package.price
      });
      this.total = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format( +this.total)
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<template>
  <div id="items-card">
    <div id="cards-buy" v-if="itemsprops == 'buy'">
      <div
        class="card"
        v-for="data in buys"
        :key="data.id"
      >
        <img
          :src="data.Package.imgUrl"
          class="card-img-top"
          alt="..."
          style="height: 200px; width: 250px; object-fit: cover;"
        />
        <div class="card-body"
        style="width: 250px; margin-top: 10px;"
        >
          <div id="title-buy">
            <h5 class="card-title">{{ data.Package.name }}</h5>
          </div>
          <p>{{data.id}}</p>
          <p
            class="card-text"
            
          >
            {{ data.Package.Major.name }}
          </p>
          <h4
          >{{new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format( +data.Package.price)}}</h4>
        <button type="button" 
        class="btn btn-danger cancel-buy"
        @click.prevent="isCancel(data.PackageId)"
        >Cancel</button>
        </div>
      </div>
    </div>
    <h2 id="totalPrice">
      Total harga: {{total}}
    </h2>
  </div>
</template>
<style>
.cancel-buy {
  width: 80px;
}

#cards-buy {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  width: 1000px;
}

#totalPrice {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
}

.card-body {
  margin-bottom: 5px;
}
</style>
