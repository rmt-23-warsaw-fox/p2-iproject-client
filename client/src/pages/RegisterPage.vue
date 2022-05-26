<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <div class="full-width q-px-xl">
      <div class="column items-start q-gutter-none">
        <h2 class="text-primary text-weight-bold" style="top:110px">Antre</h2>
        <h4 class="text-primary text-weight-bold" style="top:220px">Join today</h4>
      </div>
      <q-input standout="bg-primary text-white" v-model="participant.name" label="Name" />
      <br>
      <q-input standout="bg-primary text-white" v-model="participant.email" label="Email" />
      <br>
      <q-input standout="bg-primary text-white" v-model="participant.password" label="Password" type="password" />

      <q-btn
        @click.prevent="localRegister()"
        unelevated
        rounded
        color="primary"
        label="Register"
        class="q-mt-lg text-h6"
        style="width:200px;"   
      />

      <div class="text-primary q-mt-md">Or</div>

      <q-btn
        to="/login"
        unelevated
        rounded
        color="primary"
        label="Login"
        class="q-mt-lg text-h6"
        style="width:200px;"   
      />
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/info'
import { mapActions } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterPage',
  data(){
    return {
      participant: {
        name:"",
        email:"",
        password:""
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['registerParticipant']),
    async localRegister(){
      await this.registerParticipant(this.participant)
      if(localStorage.getItem("access_token")){
        this.$router.push('/events')
      }
    }
  }
})
</script>
