<script>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user'
import { usePostStore } from '../stores/post'
import { useLikeStore } from '../stores/like'
import Sidenav from '../components/Sidenav.vue'
import { mapState, mapActions } from 'pinia'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Sidenav,
    Navbar
  },
  data() {
    return {
      heart: '#ff94c2',
    }
  },
  computed: {
    ...mapState(useUserStore, ['users']),
    ...mapState(usePostStore, ['posts']),
    changeButtonLike() {
      this.fetchPost()
    }
  },
  methods: {
    ...mapActions(useUserStore, ['fetchUser', 'fetchUserById']),
    ...mapActions(usePostStore, ['fetchPost']),
    ...mapActions(useLikeStore, ['doLike', 'doUnlike']),
    goToChats(id) {
      this.$router.push(`/chat/${id}`)
      localStorage.setItem('receiverId', id)
    },
    localDoLike(postId) {
      this.doLike(postId)
      this.$router.push('/')
      this.fetchPost()
    },
    filterLike(PostId, like) {
      let liked = false
      like.forEach(el => {
        if (el.UserId === +localStorage.getItem('senderId') && el.PostId === +PostId) {
          console.log('Oiii');
          liked = true
        }
      });
      return liked;
    },
    localUnlike(PostId){
      this.$router.push('/')
      this.fetchPost()
      this.doUnlike(PostId)
    }
  },
  created() {
    this.fetchUser()
    this.fetchPost()
  },
  updated(){
    this.fetchPost()
  }
}
</script>

<template>
<Navbar></Navbar>
  <div class="container-fluid bg-white">
    <div class="container container-center-x height-92-percent py-4">
      <div class="row">
        <div class="col p-0">
          <Sidenav></Sidenav>
        </div>
        <div class="col d-grid gap-3">
          <div class="scroller width-500 border rounded-3" style="height: 630px;">
            <div v-for="post in posts" v-bind:key="post.id" class="card w-100 rounded-lg p-2 border-0">
              <div class="card-header bg-pink-primary rounded-top text-white">
                <span class="font-500">{{ post.User.username }}</span>
              </div>
              <div class="card-body bg-light rounded-bottom border">
                <img v-bind:src="post.imgUrl" alt="" style="width: 100%" />
                <div class="container-space-between pt-3">
                  <div class="" style="max-width: 300px;">
                    <p class="card-text font-500 m-0">{{ post.description }}</p>
                  </div>
                  <a v-if="!filterLike(post.id, post.Likes)" v-on:click.prevent="localDoLike(post.id)" href="#" class="">
                    <i  id="post-like" 
                      class="bi bi-heart-fill font-size-medium rounded-2" 
                      style="color: #ff94c2">
                    </i>
                  </a>
                  <a v-else v-on:click.prevent="localUnlike(post.id)" href="#" class="">
                    <i v-if="filterLike(post.id, post.Likes)" id="post-like" 
                      class="bi bi-heart-fill font-size-medium rounded-2" 
                      style="color: #ba2d65">
                    </i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col px-0">
          <div class="border rounded-3 p-2 width-200 bg-white">
            <div class="card ">
              <div class="card-header rounded-top text-white bg-pink-primary">
                <span class="font-500">Chat</span>
              </div>
              <div class="card-body rounded-bottom">
                <div class="">
                  <ul class="list-group scroller-small">
                    <li v-for="user in users" v-bind:key="user.id" class="list-group-item">
                      <a v-on:click.prevent="goToChats(user.id)" href="" class="text-decoration-none font-500">{{
                          user.username
                      }}</a>
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