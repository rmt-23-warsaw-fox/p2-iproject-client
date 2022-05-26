<template>
  <q-layout view="lHr lpR lfr">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="q-pa-md lt-md absolute-center"
            name="fa-solid fa-locust"
            size="sm"
            color="white"
          />
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-icon
        name="fa-solid fa-locust"
        size="lg"
        color="primary"
        class="q-pa-md"
      />

        <!-- list items -->
      <q-list>
      <q-item
        clickable
        v-ripple
        to="/"
        exact 
      >
        <q-item-section avatar>
          <q-icon

            name="fa-solid fa-people-arrows-left-right" />
        </q-item-section>
        <q-item-section class="text-h6">{{role === 'organizer' ? 'Organize' : 'Go in'}} line</q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        to="/about"
        exact
      >
        <q-item-section avatar>
          <q-icon
            name="fa-solid fa-circle-question" />
        </q-item-section>
        <q-item-section class="text-h6">About</q-item-section>
      </q-item>
      
      <q-item
        clickable
        v-ripple
        exact
        @click.prevent="localQuit()"
        v-if="role !== 'organizer'"
      >
        <q-item-section avatar>
          <q-icon
            name="fa-solid fa-door-open" 
          />
        </q-item-section>
        <q-item-section class="text-h6">Quit</q-item-section>
      </q-item>
      
      <q-item
        clickable
        v-ripple
        exact
        @click.prevent="localLogout()"
        v-if="role !== 'organizer'"
      >
        <q-item-section avatar>
          <q-icon
            name="fa-solid fa-right-from-bracket" 
          />
        </q-item-section>
        <q-item-section class="text-h6">Log out</q-item-section>
      </q-item>
      
      <q-item
        clickable
        v-ripple
        exact
        @click.prevent="localLogout()"
        v-if="role === 'organizer'"
      >
        <q-item-section avatar>
          <q-icon
            name="fa-solid fa-circle-xmark" 
          />
        </q-item-section>
        <q-item-section class="text-h6">Dismish Event</q-item-section>
      </q-item>
      
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
     <q-list
        padding
        separator 
      >
        <q-item class="q-pa-md" v-for="announcement in announcements">
          <q-item-section>
            <q-item-label overline>Announcement</q-item-label>
            <q-item-label class="text-weight-bold">Event organizer</q-item-label>
            <q-item-label caption>{{ announcement.content }}</q-item-label>
          </q-item-section>
  
          <q-item-section side top>
            <q-item-label caption> {{ convertDate(announcement.date) }} </q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
// import { ref } from 'vue'
import { formatDistance } from 'date-fns'
import db from '../boot/firebase'
// import { onMounted } from 'vue'



// export default {
//   setup () {
//     const leftDrawerOpen = ref(false)
//     const rightDrawerOpen = ref(false)

//     // const announcements = ref([
//     //   {
//     //     message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eius velit corrupti earum iste nam debitis quisquam vitae, consectetur optio.",
//     //     date:1653389986564
//     //   },
//     //   {
//     //     message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eius velit corrupti earum iste nam debitis quisquam vitae, consectetur optio.",
//     //     date:1653389986564
//     //   },
//     // ])

//     const announcements = ref([])

//     function convertDate(value){
//       return formatDistance(value, new Date())
//     }

//     function localLogout(){
//       localStorage.clear()
//     }

//     function localQuit(){
//       db.collection("participants").doc("3").delete()
//       .then(response => {
//         console.log("quitted")
//         localStorage.removeItem("eventId")
//       })
//       .catch(error => console.log(error))
//     }

//     onMounted(() => {
//       db.collection("announcements").orderBy('date')
//         .onSnapshot((snapshot) => {
//           snapshot.docChanges().forEach((change) => {
//             let announcementChange = change.doc.data()
//             announcementChange.id = change.doc.id
//             if (change.type === "added") {
//                 console.log("New announcement: ", announcementChange)
//                 announcements.value.push(announcementChange)
//             }
//             if (change.type === "modified") {
//                 console.log("Modified announcement: ", announcementChange)
//                 let index = announcements.value.findIndex(announcement => announcement.id === announcementChange.id)
//                 Object.assign(announcements.value[index], announcementChange)
//             }
//             if (change.type === "removed") {
//                 console.log("Removed announcement: ", announcementChange)
//                 let index = announcements.value.findIndex(announcement => announcement.id === announcementChange.id)
//                 announcements.value.splice(index, 1)
//             }
//           })
//         })
//     })

//     return {
//       announcements:announcements,
//       convertDate:convertDate,
//       localLogout:localLogout,
//       localQuit:localQuit,
//       leftDrawerOpen,
//       toggleLeftDrawer () {
//         leftDrawerOpen.value = !leftDrawerOpen.value
//       },

//       rightDrawerOpen,
//       toggleRightDrawer () {
//         rightDrawerOpen.value = !rightDrawerOpen.value
//       }
//     }
//   }
// }

export default {
  data(){
    return {
      leftDrawerOpen:false,
      rightDrawerOpen:false,
      announcements:[],
      role:"",
    }
  },
  created(){
    if(localStorage.getItem("access_token")){
      this.role = localStorage.getItem("role")
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    toggleRightDrawer () {
      this.rightDrawerOpen = !this.rightDrawerOpen
    },
    convertDate(value){
      return formatDistance(value, new Date())
    },
    localQuit(){
      db.collection("participants").doc(localStorage.getItem("id")).delete()
      .then(response => {
        console.log("quitted")
        localStorage.removeItem("eventId")
        this.$router.push('/events')
      })
      .catch(error => console.log(error))
    },
    localLogout(){
      if(localStorage.getItem('role') === "organizer"){
        db.collection("organizers").doc(localStorage.getItem("eventId")).delete()
        .then(response => {
          console.log('1');
          return db.collection("announcements").where('OrganizerId', '==', localStorage.getItem("eventId"))
        })
        .then(response => {
          console.log('2');
          return response.get()
        })
        .then(response => {
          console.log('3');
          response.forEach(res => {
            res.ref.delete()
          })
          this.$router.push('/login')
        })
        .catch(error => console.log(error))
      }
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted(){
    db.collection("announcements").where('OrganizerId', '==', localStorage.getItem('eventId')).orderBy('date')
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let announcementChange = change.doc.data()
        announcementChange.id = change.doc.id
        if (change.type === "added") {
            console.log("New announcement: ", announcementChange)
            this.announcements.push(announcementChange)
        }
        if (change.type === "modified") {
            console.log("Modified announcement: ", announcementChange)
            let index = this.announcements.findIndex(announcement => announcement.id === announcementChange.id)
            Object.assign(this.announcements[index], announcementChange)
        }
        if (change.type === "removed") {
            console.log("Removed announcement: ", announcementChange)
            let index = this.announcements.findIndex(announcement => announcement.id === announcementChange.id)
            this.announcements.splice(index, 1)
        }
      })
    })
  }
}


</script>