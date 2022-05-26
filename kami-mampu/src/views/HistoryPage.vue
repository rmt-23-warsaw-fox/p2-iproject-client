<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "LoginPage",
  created() {
    this.fetchHistory();
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["histories"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["fetchHistory"]),
  },
};
</script>

<template>
  <div class="table-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in histories" v-bind:key="history.id">
          <td>{{ history.Event.nameOfEvent }}</td>
          <td>{{ history.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-container {
  margin-top: 20vh;
  margin-right: 25vw;
  margin-left: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #91cabe;
  background-color: #499fa4;
  border-radius: 20px;
}
</style>
