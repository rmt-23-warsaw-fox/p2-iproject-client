<script>
import CompDetailContent from "./CompDetailContent.vue";
import ButtonReus from "./ButtonReus.vue";
import { useAuthStore } from "../stores/auth";
import { useGadgetStore } from "../stores/gadgets";
import { mapStores } from "pinia";
export default {
  components: {
    CompDetailContent,
    ButtonReus,
  },
  computed: {
    ...mapStores(useAuthStore, useGadgetStore),
  },
  methods: {
    async payment() {
      try {
        if (!this.authStore.isLogin) {
          throw new Error("Silahkan login terlebih dahulu");
        }
        console.log(this.authStore.userProfile.firstName);
        if (
          !this.authStore.userProfile.firstName ||
          !this.authStore.userProfile.lastName ||
          !this.authStore.userProfile.phone ||
          !this.authStore.userProfile.address ||
          this.authStore.userProfile.firstName === "-" ||
          this.authStore.userProfile.lastName === "-" ||
          this.authStore.userProfile.phone === "-" ||
          this.authStore.userProfile.address === "-"
        ) {
          throw new Error("Lengkapi data profile anda terlebih dahulu");
        }

        await snap.pay("a394b450-26f3-47c4-97f1-b26551b47839", {
          onSuccess: function (result) {
            console.log("success");
            console.log(result);
          },
          onPending: function (result) {
            console.log("pending");
            console.log(result);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
          },
        });
      } catch (error) {
        let message = "Internal Server Error";

        if (error.message === "Silahkan login terlebih dahulu") {
          message = error.message;
        }
        if (error.message === "Lengkapi data profile anda terlebih dahulu") {
          message = error.message;
        }

        this.$toast.error(message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    },
    addQuantity() {
      if (this.gadgetsStore.buyGadget.quantity < 3) {
        this.gadgetsStore.buyGadget.quantity++;
      }
    },
    removeQuantity() {
      if (this.gadgetsStore.buyGadget.quantity > 1) {
        this.gadgetsStore.buyGadget.quantity--;
      }
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row g-5">
      <div class="col-md-8 col-lg-9">
        <h2 class="mb-3">{{ gadgetsStore.gadget.brand }}</h2>

        <div class="bg-light rounded mb-3 shadow">
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
              <h6 class="display-6 mt-2 text-primary fw-bold">
                {{ gadgetsStore.modBuyGadget.priceShow }}
              </h6>
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
          <span class="text-primary">Beli Langsung</span>
        </h4>
        <form class="card p-2 my-3">
          <h4>TOTAL</h4>
          <input
            class="form-control form-control-lg"
            type="text"
            v-bind:value="gadgetsStore.modBuyGadget.priceTotalShow"
            aria-label="readonly input example"
            readonly
          />
          <hr />
          <div class="input-group">
            <button
              v-on:click.prevent="removeQuantity"
              type="button"
              class="btn btn-outline-secondary btn-lg"
            >
              <span class="fw-bold">-</span>
            </button>
            <input
              v-bind:value="gadgetsStore.modBuyGadget.quantity"
              class="form-control form-control-lg text-center"
              type="number"
              placeholder="Default input"
              aria-label="default input example"
              readonly
            />
            <button
              v-on:click.prevent="addQuantity"
              type="button "
              class="btn btn-outline-secondary btn-lg"
            >
              <span class="fw-bold">+</span>
            </button>
          </div>
        </form>
        <div class="d-grid gap-2">
          <ButtonReus
            title="Bayar"
            v-on:click.prevent="payment"
            type="button"
            class="btn btn-primary btn-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
