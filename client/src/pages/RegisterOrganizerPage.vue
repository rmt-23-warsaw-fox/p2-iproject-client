<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <div class="full-width q-px-xl">
      <div class="column items-start q-gutter-none">


        <h2 class="text-primary text-weight-bold q-mt-none" >Join now</h2>
        <h1 class="text-primary text-weight-bold gt-xs" >Get organized</h1>
      </div>
      <q-input standout="bg-primary text-white" v-model="organizer.name" label="Name" />
      <br>
      <q-input standout="bg-primary text-white" v-model="organizer.email" label="Email" />
      <br>
      <q-input standout="bg-primary text-white" v-model="organizer.password" label="Password" type="password" />

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
        to="/organizers/login"
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
import { defineComponent } from 'vue'
import { useCounterStore } from 'src/stores/info'
import { mapActions } from 'pinia'

export default defineComponent({
  name: 'RegisterOrganizerPage',
  data(){
    return {
      organizer: {
        name:"",
        email:"",
        password:""
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['registerOrganizer']),
    async localRegister(){
      await this.registerOrganizer(this.organizer)
      if(localStorage.getItem("access_token")){
        this.$router.push('/organizers/create-event')
      }
    }
  }
})
</script>
