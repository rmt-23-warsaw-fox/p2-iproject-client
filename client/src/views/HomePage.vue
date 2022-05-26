<script>
import { RouterLink } from 'vue-router'
import { useMemeStore } from '../stores/meme'
import {useUserStore} from '../stores/user'
import { mapState, mapActions } from 'pinia'

export default {
  data(){
    return {
      
    }
  },
  computed: {
    ...mapState(useMemeStore, ['memes']),
    ...mapState(useUserStore, ['users'])
  },
  methods: {
    ...mapActions(useMemeStore, ['fetchMeme']),
    ...mapActions(useUserStore, ['fetchUser', 'fetchUserById']),
    goToChats(id) {
      this.$router.push(`/chat/${id}`)
      localStorage.setItem('receiverId', id)
    }
  },
  created() {
    this.fetchMeme()
    this.fetchUser()
  }
}
</script>

<template>
  <div class="container-fluid bg-white">
    <div class="container container-center height-92-percent ">

      <div class="row">
        <div class="col d-grid gap-3">
          <div class="scroller width-500 ">

            <div class="card w-100 p-2 rounded-lg">
              <div class="card-header bg-pink-primary rounded-top text-white">
                <span class="font-500">Faldo - 24 minute ago</span>
              </div>
              <div class="card-body bg-light rounded-bottom border">
                <img src="https://qph.fs.quoracdn.net/main-qimg-c7a176cb5bcaec3f681b2b69b2e6f158-lq" alt=""
                  style="width: 100%" />
                <p class="card-text">That me wkwkwk</p>
                <a href="#" class="btn btn-primary">Like</a>
              </div>
            </div>
            <div class="card w-100 p-2">
              <h6 class="card-header">Faldo - 24 minute ago</h6>
              <div class="card-body">
                <img src="https://i.pinimg.com/736x/ac/b7/f9/acb7f99ba0ef473e03ee81e91a6281ee.jpg" alt=""
                  style="width: 100%" />

                <p class="card-text">That me wkwkwk</p>
                <a href="#" class="btn btn-primary">Like</a>
              </div>
            </div>

          </div>
        </div>
        <div class="col px-0 ">
          <div class="border rounded-3 p-2 width-200 bg-white">
            <div class="card ">
              <div class="card-header rounded-top text-dark">
                <span class="font-500">Chat</span>
              </div>
              <div class="card-body rounded-bottom">
                <form>
                  <div class="mb-2">
                    <input type="search" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search">
                  </div>
                </form>
                <div class="">
                  <ul class="list-group scroller-small">
                    <li v-for="user in users"  v-bind:key="user.id" class="list-group-item">
                      <a v-on:click.prevent="goToChats(user.id)" href="" class="text-decoration-none font-500">{{ user.username }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>