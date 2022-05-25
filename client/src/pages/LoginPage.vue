<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <div class="full-width q-px-xl">

      <q-input standout="bg-primary text-white" v-model="participant.email" label="Email" />
      <br>
      <q-input standout="bg-primary text-white" v-model="participant.password" label="Password" type="password" />

      <q-btn
        @click.prevent="localLogin()"
        unelevated
        rounded
        color="primary"
        label="Login"
        class="q-mt-lg text-h6" />
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/info'
import { mapActions } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  data(){
    return {
      participant: {
        email:"",
        password:""
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['loginParticipant']),
    async localLogin(){
      await this.loginParticipant(this.participant)
      if(localStorage.getItem("access_token")){
        this.$router.push('/')
      }
    }
  }
})
</script>
