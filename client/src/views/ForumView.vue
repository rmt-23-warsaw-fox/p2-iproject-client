<script>
import { useUserStore } from "../stores/user";
import { mapState,mapActions } from "pinia";
import { posting, postingComment, getPosts } from "../methods";
import Post from '../components/Post.vue'
export default {
  components : {
    Post
  },
  data() {
    return {
      text: "",
      posts: [],
    };
  },
  watch : {
    text(newText,oldText){
      if(oldText.length>newText.length){
        getPosts().then((x)=>{
          this.posts=x
        })
      }
    }
  },
  computed: {
    ...mapState(useUserStore, ["myProfile"]),
  },
  methods: {
    ...mapActions(useUserStore,['getProfile']),
    post() {
      const puuid = this.myProfile.puuid;
      const user = this.myProfile.name + "#" + this.myProfile.tag;
      const content = this.text;
      console.log(puuid,user,content)
      posting(puuid, user, content);
      this.text = "";
    },
  },
  created() {
    this.getProfile()
    getPosts().then((x) => {
      this.posts = x;
    });
  },
};
</script>

<template>
  <div class="w-3/5 flex-col mx-auto mt-10 mb-20 item-center">
    <div class="flex justify-center mx-auto w-3/4 rounded-lg shadow-md mb-20">
      <form action="" class="w-full p-4 flex-col mx-auto ">
        <div class="mb-2">
          <label for="comment" class="text-lg text-gray-600">Add a Post</label>
          <textarea
            class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
            v-model="text"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            @click.prevent="post"
          >
            Post
          </button>
        </div>
      </form>
    </div>
    <div class="">
      <Post 
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :id="post.id"
      />
    </div>
  </div>
</template>
