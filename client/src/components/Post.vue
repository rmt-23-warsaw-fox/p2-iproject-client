<script>
import { useUserStore } from '../stores/user';
import { mapActions, mapState } from 'pinia';
import { postingComment } from '../methods';
import CommentBox from '../components/CommentBox.vue'
import { getPosts } from '../methods';
export default {
    props: ["post", "id"],
    emits : ['submit'],
    data() {
        return {
            writeComment: false,
            commentContent: ""
        };
    },
    
    computed: {
        ...mapState(useUserStore, ["myProfile"])
    }, watch : {
    commentContent(newCommentContent,oldCommentContent){
      if(oldCommentContent.length>newCommentContent.length){

      }
    }
  },
    methods: {
        writeComments() {
            if (this.writeComment === false) {
                this.writeComment = true;
            }
            else if (this.writeComment === true) {
                this.writeComment = false;
            }
        },
        postingcomment() {
            const puuid = this.myProfile.puuid;
            const user = this.myProfile.name + "#" + this.myProfile.tag;
            const content = this.commentContent;
            const postId = this.id;
            postingComment(puuid, user, content, postId);
            this.$emit('submit')
            
            this.commentContent = "";
        }
    },
    components: { CommentBox }
};
</script>
<template>
  <div class="flex-col  shadow-lg rounded-lg mx-auto w-3/4 mt-10">
    <div class="flex px-4 py-6">
      <img
        class="w-12 h-12 rounded-full object-cover mr-4 shadow"
        src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/259520398_766511794750630_7735194758346243726_n.png?stp=dst-png_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=7aed08&_nc_ohc=TRxZR3e1BysAX94ZUMz&_nc_ht=scontent-sin6-2.xx&oh=00_AT8nCImzMSBE8T8EVVYs878WQP7fk3J4DKXHKCRJ72kDMQ&oe=6294237B"
        alt="avatar"
      />
      <div class="">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 -mt-1">
            {{ post.postedBy }}
          </h2>
        </div>
        <p class="mt-3 text-gray-700 text-xs mr-4 ">
          {{ post.content }}
        </p>
      </div>
    </div>
    <div class=" flex justify-end mr-10"
    
    >
      <div class="flex text-gray-700 text-sm mb-4">
        <button
        @click.prevent="writeComments"
        >{{post.comments.length}}  comment</button>
      </div>
    </div>
  </div>
  <div class="w-full " v-if="writeComment">
    <CommentBox 
    v-for="comment in post.comments"
    :comment="comment"
    />
    <div class="flex justify-center mx-auto w-3/4 rounded-lg shadow-md">
      <form action="" class="w-full p-4 flex-col mx-auto">
        <div class="mb-2">
          <label for="comment" class="text-lg text-gray-600">Add a comment</label>
          <textarea
            class="w-full h-10 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
            v-model="commentContent"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded"
            @click.prevent="postingcomment"
          >
            comment
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
