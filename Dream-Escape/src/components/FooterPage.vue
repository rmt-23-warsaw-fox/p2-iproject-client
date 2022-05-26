<script>
export default {
  name: "Footer",
  data() {
    return {};
  },

};
</script>

<template>
  <section class="footer">
    <div class="box-container">
      <div class="box">
        <a href="#" class="logo"> <i class="fas fa-paper-plane"></i>dream escape </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ad?</p>
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
      </div>

      <div class="box">
        <h3>quick links</h3>
        <a href="#home" class="links"> <i class="fas fa-arrow-right"></i> home </a>
        <a href="#about" class="links"> <i class="fas fa-arrow-right"></i> about </a>
        <a href="#destination" class="links"> <i class="fas fa-arrow-right"></i> destination </a>
        <a href="#services" class="links"> <i class="fas fa-arrow-right"></i> services </a>
        <a href="#gallery" class="links"> <i class="fas fa-arrow-right"></i> gallery </a>
      </div>

      <div class="box">
        <h3>contact info</h3>
        <p><i class="fas fa-map"></i> Jakarta, Indonesia</p>
        <p><i class="fas fa-phone"></i> +123-456-7890</p>
        <p><i class="fas fa-envelope"></i> dream-escape@gmail.com</p>
        <p><i class="fas fa-clock"></i> 7:00am - 10:00pm</p>
      </div>

      <div class="box">
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <form action="">
          <input type="email" name="" placeholder="enter your email" class="email" id="" />
          <input type="submit" value="subscribe" class="btn" />
        </form>
      </div>
    </div>
  </section>
</template>
