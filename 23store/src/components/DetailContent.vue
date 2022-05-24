<script>
import CompDetailContent from "./CompDetailContent.vue";
import ButtonReus from "./ButtonReus.vue";
import { useGadgetStore } from "../stores/gadgets";
import { mapStores } from "pinia";
export default {
  components: {
    CompDetailContent,
    ButtonReus,
  },
  computed: {
    ...mapStores(useGadgetStore),
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row g-5">
      <div class="col-md-8 col-lg-9">
        <h2 class="mb-3">{{ gadgetsStore.gadget.brand }}</h2>

        <div class="bg-light rounded mb-3">
          <div class="container-fluid py-5 d-flex justify-content-between">
            <div>
              <img v-bind:src="gadgetsStore.gadget.thumbnail" alt="" />
            </div>
            <div class="text-end">
              <h2 class="display-6 fw-bold">
                {{ gadgetsStore.gadget.phone_name }}
              </h2>
              <h5 class="display-7 fw-bold">{{ gadgetsStore.gadget.os }}</h5>
              <h5 class="display-7 fw-bold">
                {{ gadgetsStore.gadget.storage }}
              </h5>
              <h5 class="display-7 fw-bold">
                {{ gadgetsStore.gadget.dimension }}
              </h5>
              <h5 class="display-7 fw-bold">
                {{ gadgetsStore.gadget.release_date }}
              </h5>
            </div>
          </div>
        </div>
        <div class="pt-3 mx-2">
          <CompDetailContent
            v-for="(spec, iSpec) in gadgetsStore.gadget.specifications"
            v-bind:key="iSpec"
            v-bind:specification="spec"
          />
        </div>
      </div>
      <div class="col-md-4 col-lg-3 order-md-start">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Checkouts</span>
        </h4>

        <div class="d-grid gap-2">
          <ButtonReus title="Beli" type="button" class="btn btn-primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
