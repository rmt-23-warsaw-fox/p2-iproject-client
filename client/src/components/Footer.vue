<script>
export default {
  name: "Footer",
};
</script>

<template>
  <section>
    <div
      class="bg-holder"
      style="
        background-image: url(../assets/img/gallery/cta-bg.png);
        background-position: center;
        background-size: cover;
      "
    ></div>
    <!--/.bg-holder-->

    <div class="container">
      <div class="row flex-center">
        <div class="col-lg-6 text-center">
          <img class="mb-5 mb-lg-0" src="../assets/img/gallery/cta-mobile.png" alt="..." />
        </div>
        <div class="col-lg-6 text-center">
          <h1 class="fs-6 pe-xxl-10">Get the app</h1>
          <div class="mt-4 pe-xxl-10">
            <a href="https://play.google.com/store/apps" target="_blank"
              ><img
                class="me-3"
                src="../assets/img/gallery/google-play.png"
                width="170"
                alt="..." /></a
            ><a href="https://www.apple.com/app-store/" target="_blank">
              <img src="../assets/img/gallery/app-store.png" width="170" alt="..."
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================-->
  <!-- <section> begin ============================-->
  <section class="py-0 overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-6 col-sm-4 col-lg-6">
          <div class="py-7">
            <img
              class="d-inline-block"
              src="../assets/img/gallery/logo.png"
              width="50"
              alt="logo"
            /><span class="fw-bold fs-4 text-primary ms-2">Go Traveling</span>
            <ul class="list-unstyled mt-4">
              <li class="mb-2">
                <a class="text-800 fw-bold text-decoration-none" href="#!">News</a>
              </li>
              <li class="mb-2">
                <a class="text-800 fw-bold text-decoration-none" href="#!"
                  >Terms &amp; Conditions</a
                >
              </li>
              <li class="mb-2">
                <a class="text-800 fw-bold text-decoration-none" href="#!">Privacy</a>
              </li>
              <li class="mb-2">
                <a class="text-800 fw-bold text-decoration-none" href="#!">About Us</a>
              </li>
              <li class="mb-2">
                <a class="text-800 fw-bold text-decoration-none" href="#!">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6 col-8 col-lg-6 bg-primary-gradient bg-offcanvas-right">
          <div class="p-3 py-7 p-md-7">
            <p class="text-light">
              <i class="fa fa-phone me-3"></i
              ><span class="text-light">+62 85208520852</span>
            </p>
            <p class="text-light">
              <i class="fa fa-envelope me-3"></i
              ><span class="text-light">cs@gotravel.com</span>
            </p>
            <p class="text-light">
              <i class="fa fa-map-marker me-3"></i
              ><span class="text-light lh-lg"
                >24, Yondaime Street <br />Konohagakure</span
              >
            </p>
            <div class="mt-6">
              <a href="#!">
                <img class="me-3" src="../assets/img/icons/facebook.svg" alt="..." /></a
              ><a href="#!">
                <img class="me-3" src="../assets/img/icons/twitter.svg" alt="..." /></a
              ><a href="#!">
                <img class="me-3" src="../assets/img/icons/instagram.svg" alt="..."
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end of .container-->
  </section>
</template>
