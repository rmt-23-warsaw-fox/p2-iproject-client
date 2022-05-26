<template>
  <div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <div class="full-width q-px-xl">
      <div class="column items-start q-gutter-none">
        <h2 class="text-primary text-weight-bold" >Welcome</h2>
        <h1 class="text-primary text-weight-bold" >Organize Now</h1>
        <h4 class="text-primary text-weight-bold" >with Antre</h4>
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
        style="width:300px;"   
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useCounterStore } from 'src/stores/info'
import { mapActions } from 'pinia'

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
