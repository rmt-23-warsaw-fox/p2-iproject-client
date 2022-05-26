<template>
  <div class="fullscreen bg-primary text-primary text-center q-pa-md flex flex-center">
    <div class="col wrap" style="max-width:300px">
      <q-card bordered class="col my-card bg-grey-1 q-ma-md" v-for="organizer in organizers">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">{{ organizer.title }}</div>
              <div class="text-subtitle2">by {{ organizer.name }}</div>
            </div>
  
          </div>
        </q-card-section>
  
        <q-card-section lines="2" style="max-width: 300px;" class="text-justify">
            {{ organizer.description }}
        </q-card-section>
  
        <q-separator />
  
        <q-card-actions class="flex-center" >
          <q-btn flat :key="organizer.id" @click.prevent="localJoinEvent(organizer.id)">Join</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>


<script>
import db from '../boot/firebase'
import { useCounterStore } from 'src/stores/info';
import { mapActions } from 'pinia';

  export default {
    name:"EventPage",
    data(){
      return {
        organizers:[]
      }
    },
    methods:{
      ...mapActions(useCounterStore, ['createParticipant', 'fetchImgUrl', 'fetchJoke', 'joinEvent']),
      async localJoinEvent(id){
        await this.joinEvent(id)
        await this.fetchJoke()
        this.fetchImgUrl()
        this.createParticipant()
        this.$router.push('/')
      }
    },
    mounted(){
      db.collection("organizers").onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let organizerChange = change.doc.data()
          organizerChange.id = change.doc.id
          if (change.type === "added") {
              console.log("New organizer: ", organizerChange)
              this.organizers.push(organizerChange)
          }
          if (change.type === "modified") {
              console.log("Modified organizer: ", organizerChange)
              let index = this.organizers.findIndex(organizer => organizer.id === organizerChange.id)
              Object.assign(this.organizers[index], organizerChange)
          }
          if (change.type === "removed") {
              console.log("Removed organizer: ", organizerChange)
              let index = this.organizers.findIndex(organizer => organizer.id === organizerChange.id)
              this.organizers.splice(index, 1)
          }
        })
    })
    }
  }
</script>