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
        <q-item-section avatar top>
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

        <q-item-section side clickable @click.prevent="deleteParticipant(participant.id)" >
          <span class="text-h4">#{{ index || " Now" }}</span>
        </q-item-section>
      </q-item>
      <!-- End of Participants -->

    </q-list>
  </q-page>
</template>

<script>
// import { defineComponent } from 'vue'
import db from '../boot/firebase'

export default ({
// export default defineComponent({
  name: 'HomePage',
  data(){
    return {
      isOrganizer:false,
      participants:[],
      currentUser: {
        id:"5lc3sMz0AhhB81xVfEUR",
        name: "Claire Dunphy",
        imgUrl: "https://robohash.org/putri",
        message: "",
        date: 1653441322577,
        organizerId:1
      }
    }
  },
  methods:{
    updateMessage(){
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
    addParticipant(){
      db.collection("participants").doc("IDCOBACOBA2").set({
        name:"New User",
        imgUrl:"https://cdn.quasar.dev/img/avatar4.jpg",
        message:"I'm new",
        date:Date.now()
      })
    },
    deleteParticipant(participantId){
      if(this.isOrganizer){
        console.log(participantId);
      }
    }
  },
  mounted(){
    db.collection("participants").orderBy('date')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let participantChange = change.doc.data()
          participantChange.id = change.doc.id
          if (change.type === "added") {
              console.log("New participant: ", participantChange)
              this.participants.push(participantChange)
          }
          if (change.type === "modified") {
              console.log("Modified participant: ", participantChange)
              let index = this.participants.findIndex(participant => participant.id === participantChange.id)
              Object.assign(this.participants[index], participantChange)
          }
          if (change.type === "removed") {
              console.log("Removed participant: ", participantChange)
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
