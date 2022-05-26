<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    
    <q-banner rounded class="bg-primary text-white absolute full-width" style="bottom:0;right:0">
      Need to organize a colony of ants?
      <template v-slot:action>
        <q-btn flat color="white" label="Login as an Organizer" to="/organizers/login" />
        <q-btn flat color="white" label="Register" to="/organizers/register" />
      </template>
    </q-banner>
    
    <div class="full-width q-px-xl">
      <div class="column items-start q-gutter-none">
        <h2 class="text-primary text-weight-bold gt-xs" style="top:110px">Antre</h2>
        <h1 class="text-primary text-weight-bold gt-sm" style="top:0">Civilize Now</h1>
        <h4 class="text-primary text-weight-bold" style="top:220px">Get in line today</h4>
      </div>
      <q-input standout="bg-primary text-white" v-model="participant.email" label="Email" />
      <br>
      <q-input standout="bg-primary text-white" v-model="participant.password" label="Password" type="password" />

      <q-btn
        @click.prevent="localLogin()"
        unelevated
        rounded
        color="primary"
        label="Login"
        class="q-mt-lg text-h6"
        style="width:300px;"   
      />

      <div class="text-primary q-mt-md">Or</div>

      <q-btn
        to="/register"
        unelevated
        rounded
        color="primary"
        label="Register"
        class="q-mt-lg text-h6"
        style="width:300px;"   
      />

      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-negative text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Oops!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Something went wrong...
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    </div>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/info'
import { mapActions, mapWritableState } from 'pinia'
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
  computed:{
    ...mapWritableState(useCounterStore, ['persistent'])
  },
  methods: {
    ...mapActions(useCounterStore, ['loginParticipant']),
    async localLogin(){
      await this.loginParticipant(this.participant)
      if(localStorage.getItem("access_token")){
        this.$router.push('/events')
      }
    }
  }
})
</script>
