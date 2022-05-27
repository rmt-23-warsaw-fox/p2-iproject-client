<script>
import DestinationCard from '../components/destinationCard.vue';
export default {
    name: "destination",
    components: { DestinationCard }
};
</script>

<template>
  <section id="testimonial">
    <div class="container">
      <div class="row h-100">
        <div class="col-lg-7 mx-auto text-center mb-6">
          <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">DESTINATION RESULT</h5>
        </div>
        <div class="col-12">
          <div class="carousel slide" id="carouselTestimonials" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <div class="row h-100 align-items-center g-2">
                  <div class="col-md-4 mb-3 mb-md-0 h-100">
                    <!-- card -->
                    <DestinationCard/>
                    <!-- end of card -->
                  </div>
                </div>
              </div>
              <!-- button -->
              <div class="row">
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselTestimonials"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span
                  ><span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselTestimonials"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span
                  ><span class="visually-hidden">Next </span>
                </button>
              </div>
            </div>
            <div class="row flex-center">
              <div class="col-auto position-relative z-index-2">
                <ol class="carousel-indicators me-xxl-7 me-xl-4 me-lg-7">
                  <li
                    class="active"
                    data-bs-target="#carouselTestimonials"
                    data-bs-slide-to="0"
                  ></li>
                  <li data-bs-target="#carouselTestimonials" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselTestimonials" data-bs-slide-to="2"></li>
                  <li data-bs-target="#carouselTestimonials" data-bs-slide-to="3"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
