<script>
import { mapActions, mapState } from "pinia";
import { useRadioStore } from "../stores/counter";
import AudioPlayer from "vue3-audio-player";
// import AudioVisual from 'vue-audio-visual'
import "vue3-audio-player/dist/style.css";
import { useMusicStore } from "../stores/music";

export default {
  components: {
    AudioPlayer,
  },
  computed: {
    ...mapState(useRadioStore, ["oneData"]),
    // ...mapState(useMusicStore, ['oneData'])
  },
  methods: {
    ...mapActions(useRadioStore, ["move"]),
    playPause() {

      document.querySelector(".audio-wire-1").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-1").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-1").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-2").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-2").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-2").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-3").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-3").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-3").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-4").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-4").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-4").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-5").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-5").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-5").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-6").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-6").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-6").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-7").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-7").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-7").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-8").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-8").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-8").style.animationPlayState =
            "running");

      document.querySelector(".audio-wire-9").style.animationPlayState ===
      "running"
        ? (document.querySelector(".audio-wire-9").style.animationPlayState =
            "paused")
        : (document.querySelector(".audio-wire-9").style.animationPlayState =
            "running");
    },
  },
};
</script>

<template>
  <!-- <pre>{{ oneData }}</pre>
  <pre>{{ this.$route.name }} </pre> -->

  
  
    <div id="audio-visual" class="d-flex  ">
      <div class="audio-wire audio-wire-1"></div>
      <div class="audio-wire audio-wire-2"></div>
      <div class="audio-wire audio-wire-3"></div>
      <div class="audio-wire audio-wire-4"></div>
      <div class="audio-wire audio-wire-5"></div>
      <div class="audio-wire audio-wire-6"></div>
      <div class="audio-wire audio-wire-7"></div>
      <div class="audio-wire audio-wire-8"></div>
      <div class="audio-wire audio-wire-9"></div>
    </div>

  <AudioPlayer
    :option="{
      src: oneData.url,
      title: oneData.name,
      coverImage: oneData.icon,
    }"
    @click="playPause()"
    id="music"
  />
  <div class="container">
    <button
      class="btn btn-primary"
      v-if="this.$route.name === 'detailMusic'"
      @click.prevent="move('music')"
    >
      back
    </button>
    <button 
    class="btn btn-primary"
    v-if="this.$route.name === 'player'" @click.prevent="move('radios')">
      back
    </button>
  </div>

</template>

<style>

#audio-visual {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
}
#audio-visual .audio-wire {
  height: 50%;
  margin: 0px 3px;
  padding: 0px 1px;
  background-color: rgb(221, 221, 221);
  animation: animateUpDown 0.5s infinite alternate;
}
.container h1 {
  font-size: 40px;
  font-weight: bolder;
}
.container p {
  font-size: 12px;
  color: rgb(134, 134, 134);
}
#audio-visual .audio-wire-1 {
  animation-delay: 50ms;
}
#audio-visual .audio-wire-2 {
  animation-delay: 150ms;
}
#audio-visual .audio-wire-3 {
  animation-delay: 300ms;
}
#audio-visual .audio-wire-4 {
  animation-delay: 450ms;
}
#audio-visual .audio-wire-5 {
  animation-delay: 600ms;
}
#audio-visual .audio-wire-6 {
  animation-delay: 450ms;
}
#audio-visual .audio-wire-7 {
  animation-delay: 300ms;
}
#audio-visual .audio-wire-8 {
  animation-delay: 150ms;
}
#audio-visual .audio-wire-9 {
  animation-delay: 50ms;
}
@keyframes animateUpDown {
  to {
    height: 90%;
  }
  from {
    height: 50%;
  }
}
</style>
