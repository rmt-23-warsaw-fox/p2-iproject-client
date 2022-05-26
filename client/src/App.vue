<script setup>
import { RouterLink, RouterView } from "vue-router";
import RadioPlayer from "./components/RadioPlayer.vue";
import Navbar from './components/Navbar.vue'
import Radios from './components/Radios.vue'
import Radio from './components/Radio.vue'

</script>

<template>
  
  <!-- <WAudioplayerVue/> -->
  <Navbar/>
  <!-- <Radios /> -->
  <!-- <Radios/> -->
  <!-- <RadioPlayer>

  </RadioPlayer> -->
  <!-- <vue-audio
    audio-source="https://example.com/example.mp3"
  ></vue-audio> -->
  
  <RouterView />
</template>

