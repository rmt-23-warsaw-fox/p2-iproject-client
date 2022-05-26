<script>
import { mapWritableState, mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "Navbar",
  computed: {
    ...mapWritableState(useCustomerStore, ["isLoggedIn", "orderedHands"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["beforeTransaction", "afterTransaction"]),

    async beforeTransactionHandler() {
      try {
        const { data } = await this.beforeTransaction();

        await snap.pay(data.token, {
          onSuccess: () => {
            this.afterTransaction();

            this.$toast.success("Transaction Success!", {
              position: "top-right",
              duration: 3000,
            });
          },
        });
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },

    signOutHandler() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.$router.push("/login");

      this.$toast.success("Logged out successfully", {
        position: "top-right",
        duration: 3000,
      });
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="icon">
        <router-link to="/" class="icon">
          <div>
            <img src="../assets/exp-share.png" alt="icon" />
          </div>
          <div>
            <a class="navbar-brand">KamiMampu</a>
          </div>
        </router-link>
      </div>
      <div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link to="/list">
              <li class="nav-item">
                <a class="nav-link">Event List</a>
              </li>
            </router-link>
            <router-link to="/history">
              <li v-if="isLoggedIn" class="nav-item">
                <a class="nav-link">Help History</a>
              </li>
            </router-link>
            <li
              v-if="isLoggedIn"
              class="nav-item"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <a class="nav-link">Order Hands</a>
            </li>
            <router-link to="/login">
              <li v-if="!isLoggedIn" class="nav-item">
                <a class="nav-link">Sign In</a>
              </li>
            </router-link>
            <router-link to="/register">
              <li v-if="!isLoggedIn" class="nav-item">
                <a class="nav-link">Sign Up</a>
              </li>
            </router-link>
            <li
              v-if="isLoggedIn"
              v-on:click.prevent="signOutHandler"
              class="nav-item"
            >
              <a class="nav-link">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Order Hands</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="beforeTransactionHandler">
            <div class="mb-3">
              <label class="form-label">Hands</label>
              <input
                type="number"
                class="form-control"
                v-model="orderedHands"
              />
            </div>
            <button class="btn btn-primary">Order</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #499fa4 !important;
}

.icon {
  display: flex;
  flex-direction: row;
}

.nav-item {
  margin-left: 30px;
}

.navbar-brand:hover {
  cursor: pointer;
}

.nav-link:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
