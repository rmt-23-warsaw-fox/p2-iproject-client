<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DynamicCard from "@/components/DynamicCard.vue";

export default {
  data() {
    return {
      flag: 2,
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["getDoctors2", "assignToken"]),
    pagination1() {
      this.page = 1;
      this.getDoctors2(this.input);
    },
    pagination2() {
      this.page = 2;
      this.getDoctors2(this.input);
    },
    pagination3() {
      this.page = 3;
      this.getDoctors2(this.input);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["readDoctors"]),
    ...mapWritableState(useCounterStore, ["page", "input"]),
  },
  components: {
    DynamicCard,
  },
  created() {
    this.assignToken();
    this.getDoctors2(this.input);
  },
};
</script>

<template>
  <div id="contact" class="contact-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box">
            <h2>Your Appointments</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a @click.prevent="pagination1()" class="page-link" href="#">1</a>
          </li>
          <li @click.prevent="pagination2()" class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li @click.prevent="pagination3()" class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="dynamic-card" style="margin-bottom: 50px">
        <DynamicCard
          v-for="(element, index) in readDoctors"
          :key="index"
          :element="element.Doctor"
          :flag="flag"
          :status="element.status"
          class="dynamic-component"
        />
      </div>
    </div>
  </div>
</template>

<style>
.rounded {
  width: 80%;
}
.dynamic-card {
  display: flex;
}
.dynamic-component {
  margin-right: 40px;
}
</style>
