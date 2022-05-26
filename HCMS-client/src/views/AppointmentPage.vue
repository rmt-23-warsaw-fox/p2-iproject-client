<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import DynamicCard from "@/components/DynamicCard.vue";

export default {
  data() {
    return {
      input: {
        name: "",
        speciality: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["getDoctors", "assignToken"]),
    src() {
      console.log(this.input, "<<< namesrc");
      this.getDoctors(this.input);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["readDoctors"]),
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
      <div class="dynamic-card" style="margin-bottom: 50px">
        <DynamicCard
          v-for="(element, index) in readDoctors.data"
          :key="index"
          :element="element"
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
  justify-content: space-between;
}
.dynamic-component {
  margin-right: 40px;
}
</style>
