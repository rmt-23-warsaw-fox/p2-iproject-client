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
  <div class="container mt-4">
    <div class="row g-5">
      <div class="col-md-4 col-lg-3 order-md-start p-4">
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
              <option value="acer-phones-59">Acer</option>
              <option value="apple-phones-48">Apple</option>
              <option value="asus-phones-46">Asus</option>
              <option value="blackview-phones-116">Blackview</option>
              <option value="google-phones-107">Google</option>
              <option value="honor-phones-121">Honor</option>
              <option value="huawei-phones-58">Huawei</option>
              <option value="realme-phones-118">Realme</option>
              <option value="samsung-phones-9">Samsung</option>
              <option value="sony-phones-7">Sony</option>
              <option value="oneplus-phones-95">One Plus</option>
              <option value="oppo-phones-82">Oppo</option>
              <option value="xiaomi-phones-80">Xiaomi</option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-8 col-lg-9 bg-light rounded border p-4">
        <h4 class="mb-3 fw-bold">New Gadget For You</h4>
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-3">
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
