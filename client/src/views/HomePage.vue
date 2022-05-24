<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="full-screen-height bg-white">
    <div class="container container-center">
      <div>
        <div class="row mt-4">
          <div class="col d-grid gap-3">
            <div class="card  width-400">
              <h6 class="card-header">Faldo - 24 minute ago</h6>
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
          </div>
          <div class="col border">
            Chat
            <ul class="list-group">
              <li class="list-group-item"> <RouterLink to="/chat" href="" class="text-decoration-none">Faldo</RouterLink> </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>