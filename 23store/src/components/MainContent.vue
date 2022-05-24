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
  <div class="container mt-3 text-center">
    <div class="row">
      <div class="col-md-12">
        <h3>Produk baru di toko kami</h3>
      </div>
    </div>
    <hr />
    <div class="row row-cols-1 row-cols-lg-2 g-3">
      <CompMainContent
        v-for="(gadget, iGadget) in gadgetsStore.dashboardGadgets"
        v-bind:key="iGadget"
        v-bind:gadget="gadget"
      />
    </div>
  </div>
</template>
