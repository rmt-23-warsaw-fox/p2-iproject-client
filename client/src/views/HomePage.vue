<template>
  <div id="homePage-customer">
    <div id="carousel-container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.gannett-cdn.com/media/2019/08/05/USATODAY/usatsports/247WallSt.com-247WS-565444-fast-food.jpg?crop=1365,768,x0,y0&width=1365&height=768&format=pjpg&auto=webp"
              class="img-carousel d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/a5f7b6cc-22dd-4e7c-9c0c-1f02b2b9b4fc-bbq-platter.jpg"
              class="img-carousel d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://assets3.thrillist.com/v1/image/3064779/1200x600/scale"
              class="img-carousel d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="container-fluid container-cards">
      <h1 class="text-center my-5">Homie Menu</h1>
      <div class="row">
        <Cards :data="foods" />
      </div>
    </div>

    <div class="footer">
      <div class="container-footer"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useHomeStore } from "../stores/home";
import Cards from "../views/Card.vue";
export default {
  name: "homePage",
  components: {
    Cards,
  },
  computed: {
    ...mapState(useHomeStore, ["foods"]),
  },
  methods: {
    ...mapActions(useHomeStore, ["getFoods"]),
  },
  async created() {
    await this.getFoods();
    console.log(this.foods);
  },
};
</script>

<style>
#homePage-customer {
  height: 100vh;
}

#carousel-container {
  height: 350px;
  margin: 100px 0;
  box-shadow: 10px 10px 22px;
}
.carousel {
  height: fit-content;
  display: flex;
  align-items: center;
}
.img-carousel {
  height: 350px;
  object-fit: cover;
}
.container-cards {
  height: 150vh;
}
.card {
  box-shadow: 10px 10px 22px;
}
.container-footer {
  margin: 200px 0;
  height: 30vh;
  background-color: #f7f3e9;
}
</style>
