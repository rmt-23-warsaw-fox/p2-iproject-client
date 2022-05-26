<script>
import { mapWritableState, mapActions } from "pinia";
import { useEventStore } from "../stores/event";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "EventCard",
  computed: {
    ...mapWritableState(useEventStore, ["events", "patchEvent"]),
    ...mapWritableState(useCustomerStore, ["isLoggedIn"]),
  },
  methods: {
    ...mapActions(useEventStore, ["fetchNews"]),

    dateFormat(date) {
      return new Date(date).toLocaleString();
    },

    async handButtonHandler(id) {
      try {
        const response = await this.patchEvent(id);

        this.$toast.success("Thank you for the help!", {
          position: "top-right",
          duration: 3000,
        });

        this.fetchNews();
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.$toast.error("Hands not enough", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
};
</script>

<template>
  <div id="cards">
    <div
      v-for="event in events"
      v-bind:key="event.id"
      class="card mt-5 shadow-lg p-3 mb-5 bg-body"
      style="width: 22rem"
    >
      <img
        :src="event.imageUrl"
        class="card-img-top"
        style="height: 200px; object-fit: cover"
      />
      <div class="card-body">
        <h3 class="card-title">{{ event.nameOfEvent }}</h3>
        <h5 class="card-text">{{ event.description }}</h5>
        <h6 class="card-text">{{ dateFormat(event.dateOfEvent) }}</h6>
        <h4 class="card-text">Received Hands</h4>
        <div class="progress" style="height: 40px; width: 250px">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            :style="{ width: event.percentage + '%' }"
            :aria-valuenow="event.percentage"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ event.receivedHands }}/{{ event.requiredHands }}
          </div>
        </div>
        <button
          v-on:click.prevent="handButtonHandler(event.id)"
          v-if="isLoggedIn === true"
          class="btn"
        >
          Give a hand!
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#cards {
  display: flex;
  justify-content: center;
}

.card {
  margin: 80px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
}

.card-text {
  margin-top: 20px;
}

.btn {
  margin-top: 30px;
  height: 40px;
  width: 120px;
  background-color: #b5dfd6;
  border: 1px solid #91cabe;
}
</style>
