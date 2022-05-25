<script>
import { useChatFirebaseStore } from '../stores/chatFirebase.js'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      message: null,
      email: null
    }
  },
  computed: {
    ...mapState(useChatFirebaseStore, ['chats'])
  },
  methods: {
    ...mapActions(useChatFirebaseStore, ['sendMessage', 'fetchMessage']),
    localSendMessage() {
      this.sendMessage({
        senderReceiver: "pablo@email.com",
        senderEmail: "ago@email.com",
        message: this.message,
        createdAt: new Date(),
      });
      this.message = null
    }
  },
  created() {
    this.fetchMessage()
    this.email = localStorage.getItem('email')
    // console.log(localStorage.getItem('email'));
  }
}
</script>

<template>
  <div class="container container-center">
    <div class="card width-400 mt-4">
      <div class="card-header">
        <strong>Faldo</strong>
      </div>
      <div class="card-body">
        <div class="border bg-light mb-4 p-2 rounded-3 d-grid gap-2">
          <div v-for="chat in chats" v-bind:key="chat.id"
            v-bind:class="email === chat.senderEmail ? 'container-right' : 'container-left'">
            <div class="card-text width-200 border p-2 rounded-3 bg-white">
              <span>{{ chat.message }}</span>
            </div>
          </div>
        </div>
        <div class="">
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

</template>