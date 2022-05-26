<script>
import CompMainContent from "./CompMainContent.vue";
import { useGadgetStore } from "../stores/gadgets";
import { mapStores } from "pinia";
export default {
  components: {
    CompMainContent,
  },
  computed: {
    ...mapStores(useGadgetStore),
  },
  methods: {
    async getDashboardGadgets() {
      try {
        const data = await this.gadgetsStore.getDashboardGadgets();
        this.gadgetsStore.dashboardGadgets = data.data;
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  created() {
    this.getDashboardGadgets();
  },
};
</script>

<template>
  <div class="container mt-5 text-center px-4">
    <div class="row">
      <div class="col-md-12">
        <h5 class="display-5 fw-bold">Produk baru di 23-Store</h5>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-2 g-3 mt-1">
      <CompMainContent
        v-for="(gadget, iGadget) in gadgetsStore.dashboardGadgets"
        v-bind:key="iGadget"
        v-bind:gadget="gadget"
      />
    </div>
  </div>
</template>
