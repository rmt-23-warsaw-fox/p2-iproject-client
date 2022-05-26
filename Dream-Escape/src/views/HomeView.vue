<script>
import Card from "../components/Card.vue";
import { useDestinationStore } from "../stores/destination";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  computed: {
    ...mapState(useDestinationStore, ["destinationData"]),
  },
  methods: {
    ...mapActions(useDestinationStore, ["fetchDestination"]),
  },
  created() {
    this.fetchDestination();
  },
};
</script>

<template>
  <!-- home section starts  -->

  <section class="home" id="home">
    <div class="content">
      <span>follow </span>
      <h3>your dreams</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia illum quod
        perspiciatis harum in possimus? Totam consequuntur officia quia?
      </p>
      <a href="#" class="btn">book now</a>
    </div>
  </section>

  <!-- home section ends -->

  <!-- about section starts  -->

  <section class="about" id="about">
    <div class="video-container">
      <video src="../assets/images/about-vid-1.mp4" muted autoplay loop class="video"></video>
      <div class="controls">
        <span class="control-btn" data-src="../assets/images/about-vid-1.mp4"></span>
        <span class="control-btn" data-src="../assets/images/about-vid-2.mp4"></span>
        <span class="control-btn" data-src="../assets/images/about-vid-3.mp4"></span>
      </div>
    </div>

    <div class="content">
      <span>why choose us?</span>
      <h3>Nature's Majesty Awaits You</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit repellat error deserunt
        nam aperiam odit libero quos provident. Nostrum?
      </p>
      <a href="#" class="btn">read more</a>
    </div>
  </section>

  <!-- about section ends -->

  <!-- destination section starts  -->

  <section class="destination" id="destination">
    <div class="heading">
      <span>our destination</span>
      <h1>follow your dreams</h1>
    </div>
    <div class="box-container">
      <Card v-for="destination in destinationData" v-bind:destination="destination"></Card>
    </div>
  </section>

  <!-- services section starts  -->

  <section class="services" id="services">
    <div class="heading">
      <span>our services</span>
      <h1>countless expericences</h1>
    </div>

    <div class="box-container">
      <div class="box">
        <i class="fas fa-globe"></i>
        <h3>worldwide</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
      </div>

      <div class="box">
        <i class="fas fa-hiking"></i>
        <h3>adventures</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
      </div>

      <div class="box">
        <i class="fas fa-utensils"></i>
        <h3>food & drinks</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
      </div>

      <div class="box">
        <i class="fas fa-hotel"></i>
        <h3>affordable hotels</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
      </div>

      <div class="box">
        <i class="fas fa-wallet"></i>
        <h3>affordable price</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
      </div>

      <div class="box">
        <i class="fas fa-headset"></i>
        <h3>24/7 support</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, cumque.</p>
      </div>
    </div>
  </section>

  <!-- services section ends -->

  <!-- gallery section starts  -->

  <section class="gallery" id="gallery">
    <div class="heading">
      <span>our gallery</span>
      <h1>sneak peek</h1>
    </div>

    <div class="box-container">
      <div class="box">
        <img src="../assets/images/gallery-img-1.jpg" alt="" />
        <span>travel spot</span>
        <h3>bali</h3>
      </div>

      <div class="box">
        <img src="../assets/images/gallery-img-2.jpg" alt="" />
        <span>travel spot</span>
        <h3>raja ampat</h3>
      </div>

      <div class="box">
        <img src="../assets/images/gallery-img-4.jpg" alt="" />
        <span>travel spot</span>
        <h3>raja ampat</h3>
      </div>

      <div class="box">
        <img src="../assets/images/gallery-img-5.jpg" alt="" />
        <span>travel spot</span>
        <h3>raja ampat</h3>
      </div>

      <div class="box">
        <img src="../assets/images/gallery-img-6.jpg" alt="" />
        <span>travel spot</span>
        <h3>bali</h3>
      </div>

      <div class="box">
        <img src="../assets/images/gallery-img-9.jpg" alt="" />
        <span>travel spot</span>
        <h3>jawa timur</h3>
      </div>
    </div>
  </section>

  <!-- banner section starts  -->

  <div class="banner">
    <div class="content">
      <span>start your adventures</span>
      <h3>Let's Explore This World</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatum praesentium amet
        quibusdam quam officia suscipit odio.
      </p>
      <a href="#book-form" class="btn">book now</a>
    </div>
  </div>

  <!-- banner section ends -->
</template>
