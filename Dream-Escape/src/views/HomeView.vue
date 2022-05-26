<script>
import Card from "../components/Card.vue";
export default {
  name: "HomeView",
  components: {
    Card,
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
    <Card></Card>
  </section>
</template>
