<script>
import { mapActions } from "pinia";
import Swal from "sweetalert2";
import { useCounterStore } from "../stores/counter";
mapActions;
export default {
  props: ["element", "flag", "status"],
  methods: {
    ...mapActions(useCounterStore, ["appointStore"]),
    async appoint(doctor_id) {
      console.log(doctor_id, "<<<<<<");
      const patient_id = localStorage.getItem("customer_id");
      console.log(+patient_id, "<<<< patient id");
      console.log("bbbbb");
      await this.appointStore(doctor_id, +patient_id);
      console.log("aaaaaa");
    },
    async appoint2(doctor_id) {
      console.log(doctor_id);
      Swal.fire({
        title: "Pending Notice",
        text: "Please wait for your approval",
        icon: "info",
        confirmButtonText: "Ok",
      });
    },
  },
};
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="element.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 style="font-size: 1.15vw" class="card-title">{{ element.name }}</h5>
      <p style="font-size: 1vw" class="card-text">
        Speciality: {{ element.speciality }}
      </p>
      <a
        v-if="flag === 1"
        href="#"
        @click.prevent="appoint(element.id)"
        class="btn btn-info"
        >Appoint</a
      >
      <a
        v-if="flag === 2"
        href="#"
        @click.prevent="appoint2(element.id)"
        class="btn btn-outline-info"
        >{{ status }}</a
      >
    </div>
  </div>
</template>

<style>
.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
</style>
