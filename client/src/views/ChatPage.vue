<script>
import { useChatFirebaseStore } from '../stores/chatFirebase.js'
import { useUserStore } from '../stores/user.js'
import { mapActions, mapState, mapWritableState } from 'pinia'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      message: null,
      email: null,
      senderId: +localStorage.getItem('senderId'),
      receiverId: +localStorage.getItem('receiverId')
    }
  },
  computed: {
    ...mapWritableState(useChatFirebaseStore, ['chats']),
    ...mapState(useUserStore, ['foundUser'])
  },
  methods: {
    ...mapActions(useChatFirebaseStore, ['sendMessage', 'fetchMessage']),
    ...mapActions(useUserStore, ['fetchUserById']),
    localSendMessage() {
      this.sendMessage({
        senderId: this.senderId,
        receiverId: this.receiverId,
        message: this.message,
        createdAt: new Date(),
      });
      this.message = null
    }
  },
  created() {
    this.chats = []
    this.fetchMessage(this.senderId, this.receiverId)
    this.fetchUserById(this.$route.params.id)
  }
}
</script>

<template>
<Navbar></Navbar>
<div class="bg-light">
  <div class="container container-center-x py-4 height-92-percent">
    <div class="card width-400 bg-white p-2">
      <div class="card-header bg-pink-primary text-white rounded-top">
        <strong>{{ foundUser.username }}</strong>
      </div>
      <div class="card-body bg-light rounded-bottom">
        <div class="bg-white rounded-3 p-3 scroller" style="height: 400px">
          <div class="mb-4 d-grid gap-2">
            <div v-for="chat in chats" v-bind:key="chat.id"
              v-bind:class="+foundUser.id === +chat.receiverId ? 'container-right' : 'container-left'"
              >
              <div class="card-text width-200 border p-2 rounded-3 bg-pink-light text-white">
                <span>{{ chat.message }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <form v-on:submit.prevent="localSendMessage" action="">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="2"
              placeholder="Text here...">
            </textarea>
            <div class="container-right mt-2">
              <button type="submit" href="#" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</template>