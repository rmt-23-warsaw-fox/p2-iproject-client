<template>
  <section class="appoinment section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-3">
            <div class="feature-icon mb-3">
              <i class="icofont-support text-lg"></i>
            </div>
            <span class="h3">Call for an Emergency Service!</span>
            <h2 class="text-color mt-3">+84 789 1256</h2>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
            <h2 class="mb-2 title-color">Book an appoinment</h2>
            <p class="mb-4">
              Mollitia dicta commodi est recusandae iste, natus eum asperiores
              corrupti qui velit . Iste dolorum atque similique praesentium
              soluta.
            </p>
            <form id="#" class="appoinment-form" method="post" action="#">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option>Choose Department</option>
                      <option>Software Design</option>
                      <option>Development cycle</option>
                      <option>Software Development</option>
                      <option>Maintenance</option>
                      <option>Process Query</option>
                      <option>Cost and Duration</option>
                      <option>Modal Delivery</option>
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <div class="col-lg-6">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect2">
                      <option>Select Doctors</option>
                      <option>Software Design</option>
                      <option>Development cycle</option>
                      <option>Software Development</option>
                      <option>Maintenance</option>
                      <option>Process Query</option>
                      <option>Cost and Duration</option>
                      <option>Modal Delivery</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <select class="form-control" id="exampleFormControlSelect2">
                      <option>Select Doctors</option>
                      <option>Software Design</option>
                      <option>Development cycle</option>
                      <option>Software Development</option>
                      <option>Maintenance</option>
                      <option>Process Query</option>
                      <option>Cost and Duration</option>
                      <option>Modal Delivery</option>
                    </select>
                  </div>
                </div>
              </div>
              <a class="btn btn-main btn-round-full" href="confirmation.html"
                >Diagnose Now<i class="icofont-simple-right ml-2"></i
              ></a>
              <br />
              <br />
              <div class="form-group-2 mb-4">
                <textarea
                  v-model="symptomps"
                  readonly
                  name="message"
                  id="message"
                  class="form-control"
                  rows="6"
                  placeholder="Your symptomps will be shown here"
                ></textarea>
              </div>

              <a class="btn btn-main btn-round-full" href="confirmation.html"
                >Make Appoinment<i class="icofont-simple-right ml-2"></i
              ></a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["diagnosePenyakit"]),
    doDiagnose2() {
      this.$router.push("/diagnose");
    },
    computed: {
      ...mapState(useCounterStore, ["symptomps"]),
    },
  },
};
</script>
