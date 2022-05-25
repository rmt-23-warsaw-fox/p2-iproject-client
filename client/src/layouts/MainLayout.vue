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
        <q-item-section class="text-h6">Go in line</q-item-section>
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
      >
        <q-item-section avatar>
          <q-icon
            name="fa-solid fa-door-open" 
          />
        </q-item-section>
        <q-item-section class="text-h6">Quit</q-item-section>
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
import { ref } from 'vue'
import { formatDistance } from 'date-fns'
import db from '../boot/firebase'
import { onMounted } from 'vue'



export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    // const announcements = ref([
    //   {
    //     message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eius velit corrupti earum iste nam debitis quisquam vitae, consectetur optio.",
    //     date:1653389986564
    //   },
    //   {
    //     message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eius velit corrupti earum iste nam debitis quisquam vitae, consectetur optio.",
    //     date:1653389986564
    //   },
    // ])

    const announcements = ref([])

    function convertDate(value){
      return formatDistance(value, new Date())
    }

    onMounted(() => {
      db.collection("announcements").orderBy('date')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            let announcementChange = change.doc.data()
            announcementChange.id = change.doc.id
            if (change.type === "added") {
                console.log("New announcement: ", announcementChange)
                announcements.value.push(announcementChange)
            }
            if (change.type === "modified") {
                console.log("Modified announcement: ", announcementChange)
                let index = announcements.value.findIndex(announcement => announcement.id === announcementChange.id)
                Object.assign(announcements.value[index], announcementChange)
            }
            if (change.type === "removed") {
                console.log("Removed announcement: ", announcementChange)
                let index = announcements.value.findIndex(announcement => announcement.id === announcementChange.id)
                announcements.value.splice(index, 1)
            }
          })
        })
    })

    return {
      announcements:announcements,
      convertDate:convertDate,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}


</script>