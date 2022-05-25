<script>
import { RouterLink } from 'vue-router'
import { useMemeStore } from '../stores/meme'
import { mapState, mapActions } from 'pinia'

export default{
  computed: {
    ...mapState(useMemeStore, ['memes'])
  },
  methods: {
    ...mapActions(useMemeStore, ['fetchMeme']),
    localFetchMeme(){
      }
  },
  created(){
    this.fetchMeme()
  }
}
</script>

<template>
  <div class="full-screen-height bg-light">
    <div class="container container-center">
      <div>
        <div class="row my-4">
          <div class="col d-grid gap-3">
            <div class="card  width-400">
              <div class="card-header">
                <strong>Faldo - 24 minute ago</strong>
                </div>
              <div class="card-body">
                <img src="https://qph.fs.quoracdn.net/main-qimg-c7a176cb5bcaec3f681b2b69b2e6f158-lq" alt=""
                  style="width: 100%" />
                <p class="card-text">That me wkwkwk</p>
                <a href="#" class="btn btn-primary">Like</a>
              </div>
            </div>
            <div class="card width-400">
              <h6 class="card-header">Faldo - 24 minute ago</h6>
              <div class="card-body">
                <img src="https://i.pinimg.com/736x/ac/b7/f9/acb7f99ba0ef473e03ee81e91a6281ee.jpg" alt=""
                  style="width: 100%" />

                <p class="card-text">That me wkwkwk</p>
                <a href="#" class="btn btn-primary">Like</a>
              </div>
            </div>
            <div class="card width-400">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-c7a176cb5bcaec3f681b2b69b2e6f158-lq" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.pinimg.com/736x/ac/b7/f9/acb7f99ba0ef473e03ee81e91a6281ee.jpg" class="d-block w-100" alt="...">
                  </div>
                  <div v-for="meme in memes"  v-bind:key="meme.id" class="carousel-item">
                    <img v-bind:src="meme.image" class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon bg-dark rounded-3" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon bg-dark rounded-3" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="col border">
            Chat
            <ul class="list-group">
              <li class="list-group-item">
                <RouterLink to="/chat" href="" class="text-decoration-none">Faldo</RouterLink>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>