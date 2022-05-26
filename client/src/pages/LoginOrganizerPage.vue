<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <q-banner rounded class="bg-primary text-white absolute full-width" style="bottom:0;right:0">
      Just wanna get in line like ants?
      <template v-slot:action>
        <q-btn flat color="white" label="Login as a Participant" to="/login" />
        <q-btn flat color="white" label="Register" to="/register" />
      </template>
    </q-banner>
    
    
    <div class="full-width q-px-xl">
      <div class="column items-start q-gutter-none">
        <div class="flex items-baseline">
          <h1 class="text-primary text-weight-bold gt-xs" >Antre</h1>
          <span class="q-mx-md gt-xs">🐜🐜🐜</span>
        </div>
        <h2 class="text-primary text-weight-bold" >Get organize now</h2>
      </div>
      <q-input standout="bg-primary text-white" v-model="organizer.email" label="Email" />
      <br>
      <q-input standout="bg-primary text-white" v-model="organizer.password" label="Password" type="password" />

      <q-btn
        @click.prevent="localLogin()"
        unelevated
        rounded
        color="primary"
        label="Login"
        class="q-mt-lg text-h6"
        style="width:200px;"   
      />

      <div class="text-primary q-mt-md">Or</div>

      <q-btn
        to="/organizers/register"
        unelevated
        rounded
        color="primary"
        label="Register"
        class="q-mt-lg text-h6"
        style="width:200px;"   
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useCounterStore } from 'src/stores/info'
import { mapActions, mapWritableState } from 'pinia'

export default defineComponent({
  name: 'LoginOrganizerPage',
  data(){
    return {
      organizer: {
        email:"",
        password:""
      }
    }
  },
  computed:{
    ...mapWritableState(useCounterStore, ['persistent'])
  },
  methods: {
    ...mapActions(useCounterStore, ['LoginOrganizer']),
    async localLogin(){
      await this.LoginOrganizer(this.organizer)
      if(localStorage.getItem("access_token")){
        this.$router.push('/organizers/create-event')
      }
    }
  }
})
</script>
