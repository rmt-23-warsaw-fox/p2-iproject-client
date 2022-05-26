<template>
  <div></div>
  <section class="section about-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h2 class="title-color">Personal care for your healthy living</h2>
        </div>
        <div class="col-lg-8">
          <p>
            With cutting edge technology, HCMS or Health Care and Monitoring
            Service brings you the best health care services for your valuable
            life. Our doctors and engineers will bring you the composite
            application of both medical science and engineering with our
            application and devices. In our hope for the a better tomorrow, we
            work seamlessly to create the best health care application.
          </p>
          <img
            src="../images/about/sign.png"
            alt=""
            class="img-fluid"
            style="opacity: 0.5; height: 100px; margin-left: 400px"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="page-title bg-1">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block text-center">
            <span class="text-white">Our services</span>
            <h1 class="text-capitalize mb-5 text-lg">What We Do</h1>

            <!-- <ul class="list-inline breadcumb-nav">
            <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="list-inline-item"><span class="text-white">/</span></li>
            <li class="list-inline-item"><a href="#" class="text-white-50">Our services</a></li>
          </ul> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="feature-block d-lg-flex">
            <div class="feature-item mb-5 mb-lg-0">
              <div class="feature-icon mb-4">
                <i class="icofont-surgeon-alt"></i>
              </div>
              <span>24 Hours Diagnose</span>
              <h4 class="mb-3">Online Diagnose</h4>
              <p class="mb-4">
                Get all time support for online diagnose. quickly know what is
                your possible ailments based by your symptomps
              </p>
              <a
                @click.prevent="doDiagnose()"
                href="appoinment.html"
                class="btn btn-main btn-round-full"
                >Diagnose your ailments</a
              >
            </div>

            <div class="feature-item mb-5 mb-lg-0">
              <div class="feature-icon mb-4">
                <i class="icofont-hospital"></i>
              </div>
              <span>24 Hours Hospital Bed Availability</span>
              <h4 class="mb-3">Online Bed Reservation</h4>
              <p class="mb-4">
                Get all time support for online reservation. See available beds
                in hospitals and quickly make a reservation.
              </p>
              <!-- <a href="appoinment.html" class="btn btn-main btn-round-full"
                >Make a booking</a
              > -->
            </div>

            <div class="feature-item mb-5 mb-lg-0">
              <div class="feature-icon mb-4">
                <i class="icofont-support"></i>
              </div>
              <span>Emegency Cases</span>
              <h4 class="mb-3">1-800-700-6200</h4>
              <p>
                Get All time support for emergency.We have introduced the
                principle of family medicine.Get Conneted with us for any
                urgency .
              </p>
              <a href="appoinment.html" class="btn btn-main btn-round-full"
                >Contact Our Emergency Team</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
    doDiagnose() {
      console.log("dodiagnose");
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        this.$router.push("/login");
      } else {
        this.$router.push("/diagnose");
      }
    },
  },
};
</script>
