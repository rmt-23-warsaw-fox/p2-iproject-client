<script>
export default {
  name: "AboutPage",
};
</script>

<template>
  <section class="about" id="about">
    <div class="video-container">
      <video src="../assets/images/about-vid-1.mp4" muted autoplay loop class="video"></video>
      <div class="controls">
        <span class="control-btn" data-src="../src/assets/images/about-vid-1.mp4"></span>
        <span class="control-btn" data-src="../src/assets/images/about-vid-2.mp4"></span>
        <span class="control-btn" data-src="../src/assets/images/about-vid-3.mp4"></span>
      </div>
    </div>

    <div class="content">
      <span>why choose us?</span>
      <h3>Nature's Majesty Awaits You</h3>
      <p>
        Don't let your dreams of exploring died out. Feel the world, for all its nature awaits you
      </p>
      <a href="#" class="btn">read more</a>
    </div>
  </section>
</template>
