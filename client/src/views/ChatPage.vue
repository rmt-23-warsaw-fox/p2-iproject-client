<script>
import { useChatFirebaseStore } from '../stores/chatFirebase.js'
import { mapActions, mapWritableState } from 'pinia'

export default {
  data() {
    return {
      message: null,
      email: null
    }
  },
  computed: {
    ...mapWritableState(useChatFirebaseStore, ['chats'])
  },
  methods: {
    ...mapActions(useChatFirebaseStore, ['sendMessage', 'fetchMessage']),
    localSendMessage() {
      this.sendMessage({
        senderId: 1,
        receiverId: 2,
        message: this.message,
        createdAt: new Date(),
      });
      this.message = null
    }
  },
  created() {
    this.chats = []
    this.fetchMessage()
    this.email = localStorage.getItem('email')
  }
}
</script>

<template>
<div class="bg-light">
  <div class="container container-center-x py-4" style="min-height: 92vh">
    <div class="card width-400 bg-white p-2">
      <div class="card-header bg-pink-primary text-white rounded-top">
        <strong>Faldo</strong>
      </div>
      <div class="card-body bg-light rounded-bottom">
        <div class="bg-white rounded-3 p-3" style="height: 400px">
          <div class="mb-4 d-grid gap-2">
            <div v-for="chat in chats" v-bind:key="chat.id"
              v-bind:class="email === chat.senderEmail ? 'container-right' : 'container-left'">
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