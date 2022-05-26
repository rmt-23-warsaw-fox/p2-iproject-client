<script>
import ButtonReus from "./ButtonReus.vue";
import { useAuthStore } from "../stores/auth";
import { mapStores } from "pinia";
export default {
  components: {
    ButtonReus,
  },
  computed: {
    ...mapStores(useAuthStore),
  },
  data() {
    return {
      userProfile: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
      },
    };
  },
  methods: {
    async updateProfile() {
      try {
        if (this.userProfile.firstName === "") {
          this.userProfile.firstName = "-";
        }
        if (this.userProfile.lastName === "") {
          this.userProfile.lastName = "-";
        }
        if (this.userProfile.phone === "") {
          this.userProfile.phone = "-";
        }
        if (this.userProfile.address === "") {
          this.userProfile.address = "-";
        }
        const { data } = await this.authStore.updateProfile(this.userProfile);
        this.authStore.userProfile.firstName = data.data.firstName;
        this.authStore.userProfile.lastName = data.data.lastName;
        this.authStore.userProfile.phone = data.data.phone;
        this.authStore.userProfile.address = data.data.address;
        this.$toast.success("Update profile Success", {
          position: "top-right",
          duration: 3000,
        });
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    preUpdateProfile() {
      this.userProfile.firstName =
        this.authStore.userProfile.firstName === "-"
          ? ""
          : this.authStore.userProfile.firstName;
      this.userProfile.lastName =
        this.authStore.userProfile.lastName === "-"
          ? ""
          : this.authStore.userProfile.lastName;
      this.userProfile.phone =
        this.authStore.userProfile.phone === "-"
          ? ""
          : this.authStore.userProfile.phone;
      this.userProfile.address =
        this.authStore.userProfile.address === "-"
          ? ""
          : this.authStore.userProfile.address;
    },
  },
};
</script>

<template>
  <div class="container mt-5 gap-3">
    <div class="row mb-4 p-3 row-cols-1 row-cols-lg-2 bg-light rounded border">
      <div class="col-sm-12 col-lg-3">
        <div class="">
          <div
            class="d-flex flex-column align-items-center p-2 shadow-sm rounded"
          >
            <img
              class="img-profile rounded"
              src="https://placekitten.com/g/200/300"
              alt=""
            />
            <ButtonReus
              v-on:click.prevent=""
              class="btn btn-outline-secondary mt-3"
              title="Pilih Foto"
            />
          </div>
          <div class="d-grid">
            <ButtonReus
              title="Update Profile"
              v-on:click.prevent="preUpdateProfile"
              class="btn btn-outline-primary mt-3"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
            />
            <ButtonReus
              v-on:click.prevent=""
              class="btn btn-outline-secondary mt-3"
              title="Ganti Password"
            />
          </div>
          <hr />
        </div>
      </div>
      <div class="col-sm-12 col-lg-9 text-body">
        <h3 class="mb-4">Profile</h3>
        <div class="row mb-2">
          <div class="col-4 col-md-3 col-xl-2">
            <h4>Email</h4>
          </div>
          <div class="col-8 col-md-9 col-xl-10">
            <h4>: {{ authStore.userProfile.email }}</h4>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4 col-md-3 col-xl-2">
            <h4>First name</h4>
          </div>
          <div class="col-8 col-md-9 col-xl-10">
            <h4>: {{ authStore.userProfile.firstName }}</h4>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4 col-md-3 col-xl-2">
            <h4>Last name</h4>
          </div>
          <div class="col-8 col-md-9 col-xl-10">
            <h4>: {{ authStore.userProfile.lastName }}</h4>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4 col-md-3 col-xl-2">
            <h4>Address</h4>
          </div>
          <div class="col-8 col-md-9 col-xl-10">
            <h4>: {{ authStore.userProfile.address }}</h4>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-4 col-md-3 col-xl-2">
            <h4>Phone</h4>
          </div>
          <div class="col-8 col-md-9 col-xl-10">
            <h4>: {{ authStore.userProfile.phone }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="updateModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Profile</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="first-name" class="col-form-label"
                >First name :</label
              >
              <input
                v-model="userProfile.firstName"
                type="text"
                class="form-control"
                id="first-name"
              />
            </div>
            <div class="mb-3">
              <label for="last-name" class="col-form-label">Last name :</label>
              <input
                v-model="userProfile.lastName"
                type="text"
                class="form-control"
                id="last-name"
              />
            </div>
            <div class="mb-3">
              <label for="address" class="col-form-label">Address :</label>
              <textarea
                v-model="userProfile.address"
                class="form-control"
                id="address"
                >{{ userProfile.address }}</textarea
              >
            </div>
            <div class="mb-3">
              <label for="phone" class="col-form-label">Phone :</label>
              <input
                v-model="userProfile.phone"
                type="number"
                class="form-control"
                id="phone"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            v-on:click.prevent="updateProfile"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-profile {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
