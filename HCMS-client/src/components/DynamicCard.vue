<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
mapActions;
export default {
  props: ["element"],
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
        href="#"
        @click.prevent="appoint(element.id)"
        class="btn btn-outline-info"
        >Appoint</a
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
