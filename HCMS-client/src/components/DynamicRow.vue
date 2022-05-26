<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
mapActions;
export default {
  props: ["element", "flag", "status", "idAppoint"],
  methods: {
    ...mapActions(useCounterStore, ["getPatients", "approve"]),
    async doApprove(id, patientId) {
      console.log("approve id appoint: ", id);
      await this.approve(id, patientId);
      await this.getPatients(this.input);
      await this.getPatients(this.input);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["readPatients"]),
    ...mapWritableState(useCounterStore, ["page", "input"]),
  },
};
</script>

<template>
  <tr>
    <th scope="row">{{ idAppoint }}</th>
    <td>{{ element.name }}</td>
    <td>{{ element.email }}</td>
    <td>{{ status }}</td>
    <td>
      <a
        v-if="status === 'pending'"
        href="#"
        @click.prevent="doApprove(idAppoint, element.id)"
        class="btn btn-info"
        >Approve</a
      >
    </td>
  </tr>
</template>
