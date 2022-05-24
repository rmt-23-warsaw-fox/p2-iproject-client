<script>
import CompGadgetContent from "./CompGadgetContent.vue";
import { useGadgetStore } from "../stores/gadgets";
import { mapStores } from "pinia";
export default {
  components: {
    CompGadgetContent,
  },
  computed: {
    ...mapStores(useGadgetStore),
  },
  data() {
    return {
      filter: {
        brand: "",
      },
    };
  },
  methods: {
    async getGadgets() {
      try {
        if (!this.filter.brand) {
          this.filter.brand = "apple-phones-48";
        }
        const data = await this.gadgetsStore.getGadgets(this.filter.brand);
        this.gadgetsStore.gadgets = data.data;
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  created() {
    this.getGadgets();
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row g-5">
      <div class="col-md-4 col-lg-3 order-md-start">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Pilih Brand</span>
        </h4>

        <form class="card p-2">
          <div class="input-group">
            <select
              v-model="filter.brand"
              v-on:change="getGadgets"
              class="form-select"
              id="country"
              required
            >
              <option value="apple-phones-48">Apple</option>
              <option value="samsung-phones-9">Samsung</option>
              <option value="asus-phones-46">Asus</option>
              <option value="oppo-phones-82">Oppo</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-8 col-lg-9">
        <h4 class="mb-3">Gadget</h4>
        <div class="row row-cols-1 row-cols-lg-2 g-3">
          <CompGadgetContent
            v-for="(gadget, iGadget) in gadgetsStore.gadgets"
            v-bind:key="iGadget"
            v-bind:gadget="gadget"
          />
        </div>
      </div>
    </div>
  </div>
</template>
