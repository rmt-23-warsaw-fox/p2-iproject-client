<template>
  <q-page>
    <!-- Messanger -->
    <div class="q-py-lg q-px-md">
      <q-input
        autogrow
        bottom-slots
        v-model="currentUser.message"
        label="Say something!"
        counter
        maxlength="140"
      >
        <template v-slot:before>
          <q-avatar>
            <img :src="currentUser.imgUrl">
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn
            :disable="!currentUser.message"
            unelevated
            round
            color="primary"
            icon="fa-solid fa-envelope" 
            @click.prevent="updateMessage"
          />
        </template>
      </q-input>
    </div>

    <q-separator size="10px" />

    <q-list separator>

      <!-- Participant List -->
      <q-item class="q-py-md" v-for="(participant, index) in participants">
        <q-item-section avatar :top="currentUser.role === 'participant' " >
          <q-avatar>
            <img :src="participant.imgUrl">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <strong>
              {{ participant.name }}
            </strong>
          </q-item-label>
          <q-item-label class="">
            {{ index === 0 ? "in progress..." : participant.message }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <!-- clickable @click.prevent="deleteParticipant(participant.id)" -->
          <q-btn round color="primary" icon="navigation" v-if="currentUser.role === 'organizer'" @click.prevent="localDeleteParticipant(participant.id)" />
          <span class="text-h4">#{{ index || " Now" }}</span>
        </q-item-section>
      </q-item>
      <!-- End of Participants -->

      <q-dialog v-model="next" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yes" color="primary" @click.prevent="localQuit()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    </q-list>
  </q-page>
</template>

<script>
// import { defineComponent } from 'vue'
import db from '../boot/firebase'
import { useCounterStore } from 'src/stores/info'
import { mapActions } from 'pinia'

export default ({
// export default defineComponent({
  name: 'HomePage',
  data(){
    return {
      participants:[],
      currentUser: {
        // id:"5lc3sMz0AhhB81xVfEUR",
        // name: "Claire Dunphy",
        // imgUrl: "https://robohash.org/putri",
        // message: "",
        // date: 1653441322577,
        // organizerId:1
      },
    }
  },
  methods:{
    ...mapActions(useCounterStore, ['deleteParticipant']),
    updateMessage(){
      if(localStorage.getItem('role') === 'organizer'){
        const announcement = {
          OrganizerId:localStorage.getItem("eventId"),
          content:this.currentUser.message,
          date:Date.now()
        }
        db.collection('announcements').add(announcement)
        .then(response => {
          this.currentUser.message = ''
        })
        .catch(error => console.log(error))
        return
      }
      db.collection('participants').doc(this.currentUser.id).update({
        message:this.currentUser.message
      })
      .then(function(){
        console.log('Document succesfully updated!');
      })
      .catch(function(error){
        console.error('Error updating document: ', error);
      })
      this.currentUser.message = ''
    },
    localDeleteParticipant(participantId){
      if(localStorage.getItem("role") === "organizer"){
        this.deleteParticipant(participantId)        
      }
    }
  },
  created(){
    if(localStorage.getItem("access_token")){
      this.currentUser.id = localStorage.getItem("id")
      this.currentUser.role = localStorage.getItem("role")
      this.currentUser.name = localStorage.getItem("name")
      this.currentUser.message = ""
      this.currentUser.eventId = localStorage.getItem("eventId")
      this.currentUser.imgUrl = 'https://robohash.org/' + localStorage.getItem("name")
    }
  },
  mounted(){
    db.collection("participants").where("OrganizerId", '==', localStorage.getItem("eventId")).orderBy('date')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let participantChange = change.doc.data()
          participantChange.id = change.doc.id
          if (change.type === "added") {
              // console.log("New participant: ", participantChange)
              this.participants.push(participantChange)
          }
          if (change.type === "modified") {
              // console.log("Modified participant: ", participantChange)
              let index = this.participants.findIndex(participant => participant.id === participantChange.id)
              Object.assign(this.participants[index], participantChange)
          }
          if (change.type === "removed") {

              if(localStorage.getItem('id') == participantChange.id && localStorage.getItem('name') == participantChange.name){
                localStorage.removeItem('eventId')
                this.$router.push('/events')
              }

              // console.log("Removed participant: ", participantChange)
              let index = this.participants.findIndex(participant => participant.id === participantChange.id)
              this.participants.splice(index, 1)
              
          }
        })
    })
  // const dbList = dbSnapshot.docs.map(doc => doc.data())
  // console.log(await getDocs(dbCol));
  // db.collection("participants")
  // const dbCol = collection(db, 'participants');
  }
})
</script>
