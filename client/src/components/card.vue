<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapStores, mapWritableState } from "pinia";

export default {
  data() {
    return {
      buys: [],
    };
  },
  props: ["itemsprops", "cardsProps"],
  methods: {
    ...mapActions(useCounterStore, ["listsBuy"]),
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapWritableState(useCounterStore, ["myBuys"]),
  },
  async created() {
    try {
      const awaitBuy = await this.listsBuy();
      this.buys = this.myBuys;
      console.log(this.buys, '<2');
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
        class="card card-movie"
        style="width: 16rem; height: 20rem"
        v-for="data in buys"
        :key="data.id"
      >
        <img
          :src="data.Package.imgUrl"
          class="card-img-top"
          alt="..."
          style="height: 200px"
        />
        <div class="card-body">
          <div id="title-buy">
            <h5 class="card-title">{{ data.Package.name }}</h5>
          </div>
          <p
            class="card-text"
            style="width: 220px; height: 50px; overflow: hidden"
          >
            {{ data.Package.Major.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#cards-buy {
  margin-left: 200px;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  width: 1000px;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
