<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DynamicCard from "@/components/DynamicCard.vue";

export default {
  data() {
    return {
      flag: 1,
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["getDoctors", "assignToken"]),
    src() {
      this.getDoctors(this.input);
    },
    pagination1() {
      this.page = 1;
      this.getDoctors(this.input);
    },
    pagination2() {
      this.page = 2;
      this.getDoctors(this.input);
    },
    pagination3() {
      this.page = 3;
      this.getDoctors(this.input);
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
    this.getDoctors(this.input);
  },
};
</script>

<template>
  <div id="contact" class="contact-box">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box">
            <h2>Appoint Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="input-group rounded">
        <input
          v-on:keyup.enter="src()"
          v-model="input.name"
          type="search"
          class="form-control rounded"
          placeholder="Search by name"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <p style="margin: 0px 20px 0px 20px">Or</p>
        <input
          v-on:keyup.enter="src()"
          v-model="input.speciality"
          type="search"
          class="form-control rounded"
          placeholder="Search by speciality"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
      <br />
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
          v-for="(element, index) in readDoctors.data"
          :key="index"
          :element="element"
          :flag="flag"
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
