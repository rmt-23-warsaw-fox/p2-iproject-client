<script>
import popularDestinationCardVue from "../components/popularDestinationCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useInventoryStore } from "../stores/inventory";
import DestinationCard from "../components/destinationCard.vue";

export default {
  name: "homepage",
  components: {
    popularDestinationCardVue,
    DestinationCard,
},

  methods: {
    ...mapActions(useInventoryStore, ["getAllDestinations"]),
  },

  computed: {
    ...mapWritableState(useInventoryStore, ["destinations"]),
  },

  created() {
    this.getAllDestinations();
  },
};
</script>

<template>
  <section class="mt-7 py-0">
    <div class="bg-holder w-50 bg-right d-none d-lg-block" style="">
      <img src="../assets/img/gallery/hero-section-1.png" alt="" />
    </div>
    <!--/.bg-holder-->

    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-5 py-xl-5 py-xxl-7">
          <h1 class="display-3 text-1000 fw-normal">Let’s Traveling</h1>
          <h1 class="display-3 text-primary fw-bold">Discover the beauty</h1>
          <div class="pt-5">
            <nav>
              <div class="nav nav-tabs voyage-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <i class="fa fa-map-marker"></i>
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <i class="fa fa-plane"></i>
                </button>
                <button
                  class="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <i class="fa fa-hotel"></i>
                </button>
              </div>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <form class="row g-4 mt-5">
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon">
                        <label class="form-label visually-hidden" for="inputAddress1"
                          >Address 1</label
                        >
                        <input
                          class="form-control input-box form-voyage-control"
                          id="inputAddress1"
                          type="text"
                          placeholder="From where"
                        /><span class="nav-link-icon text-800 fs--1 input-box-icon"
                          ><i class="fa fa-map-marker"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon">
                        <label class="form-label visually-hidden" for="inputAddress2"
                          >Address 2</label
                        >
                        <input
                          class="form-control input-box form-voyage-control"
                          id="inputAddress2"
                          type="text"
                          placeholder="To where"
                        /><span class="nav-link-icon text-800 fs--1 input-box-icon"
                          ><i class="fa fa-map-marker"> </i
                        ></span>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon">
                        <input
                          class="form-control input-box form-voyage-control"
                          id="inputdateOne"
                          type="date"
                        /><span class="nav-link-icon text-800 fs--1 input-box-icon"
                          ><i class="fa fa-calendar"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon">
                        <input
                          class="form-control input-box form-voyage-control"
                          id="inputDateTwo"
                          type="date"
                        /><span class="nav-link-icon text-800 fs--1 input-box-icon"
                          ><i class="fa fa-calendar"></i
                        ></span>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-xl-5">
                      <div class="input-group-icon">
                        <label class="form-label visually-hidden" for="inputPersonOne"
                          >Person</label
                        >
                        <select
                          class="form-select form-voyage-select input-box"
                          id="inputPersonOne"
                        >
                          <option selected="selected">2 Adults</option>
                          <option>2 Adults 1 children</option>
                          <option>2 Adults 2 children</option></select
                        ><span class="nav-link-icon text-800 fs--1 input-box-icon"
                          ><i class="fa fa-user"> </i
                        ></span>
                      </div>
                    </div>
                    <div class="col-12 col-xl-10 col-lg-12 d-grid mt-6">
                      <button class="btn btn-secondary" type="submit">Search</button>
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonial">
    <div class="container">
      <div class="row h-100">
        <div class="col-lg-7 mx-auto text-center mb-6">
          <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">TRANDING DESTINATIONS</h5>
        </div>
        <div class="col-12">
          <div class="carousel slide" id="carouselTestimonials" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row h-100 align-items-center g-2">

                    <!-- card -->
                  <DestinationCard v-for="place in destinations.allTravelsData" :key="place.id" :place="place"/>                    
                    <!-- end of card -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>
