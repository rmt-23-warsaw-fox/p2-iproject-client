<script>
import Sidenav from '../components/Sidenav.vue'
import { useMemeStore } from '../stores/meme.js'
import { usePostStore } from '../stores/post'
import { mapState, mapActions, mapWritableState } from 'pinia'
import Navbar from '../components/Navbar.vue'

export default {
  components: { Sidenav, Navbar },
  data(){
    return {
      imgUrl: "",
      description: ""
    }
  },
  computed: {
    ...mapWritableState(useMemeStore, ['memes']),
  },
  methods: {
    ...mapActions(useMemeStore, ['fetchMeme']),
    ...mapActions(usePostStore, ['addNewPost']),
    localFetchMeme() {
      this.fetchMeme()
    },
    getImageUrl(url){
      this.imgUrl = url
      console.log(url);
    },
    localAddNewPost() {
      this.addNewPost(this.imgUrl, this.description)
      // this.memes = []
    }
  },
  created() {
    this.memes = []
    this.imgUrl = ""
    this.description = ""
  }
}
</script>

<template>
<Navbar></Navbar>
  <div class="container-fluid bg-white ">
    <div class="container container-center-x height-92-percent py-4">


      <div class="width-500">
        <div class="card w-100 p-2">
          <div class="card-header bg-pink-primary rounded-top text-center">
            <span class="font-500 text-white ">Form Add Post</span>
          </div>
          <div class="card-body bg-light rounded-bottom">
            <form v-on:submit.prevent="localAddNewPost()">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label font-500">Image Url</label>
                <div class="container-center-x">
                  <input v-model="imgUrl" type="text" class="form-control" placeholder="Copy url or add">
                  <a v-on:click.prevent="localFetchMeme()" href="" class="btn p-0 container-center">
                    <i id="addImage" class="bi bi-plus-square font-size-medium p-1 px-2 rounded-2"></i>
                  </a>
                </div>
              </div>
              <div class="mb-3">
                <div class="border container-flex-start" >
                  <a href="" v-for="meme in memes" v-bind:key="meme.id" v-on:click.prevent="getImageUrl(meme.image)">
                    <img v-bind:src="meme.image" alt="" id="memeImg" width="80" height="80" class="p-1">
                  </a>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label font-500">Description</label>
                <textarea v-model="description" class="form-control" rows="3"></textarea>
              </div>
              <div>
                <button type="submit" class="btn btn-primary">Post</button>
              </div>
            </form>
          </div>
        </div>


      </div>

    </div>
  </div>

</template>