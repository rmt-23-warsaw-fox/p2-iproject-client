<script>
import { mapActions, mapState } from "pinia";
import { useRadioStore } from "../stores/counter";
export default {
  props: {
    radio: Object,
  },
  components: {},
  methods: {
    ...mapActions(useRadioStore, ['getRadioById', 'getAllRadio'])
  },
  computed: {
    // ...mapState(useRadioStore, ['oneRadio'])
  },
  created() {
    
  }
};
</script>

<template>
  <!-- <pre>{{radio}}</pre> -->
  <a href="#" title="Suara Surabaya">
    {{ radio.name }}
  </a>
  <!-- <img :src="radio.icon" alt="" class="icon-radio" /> -->
  <!-- <audio controls>
  <source :src="radio.url" type="audio/ogg">
Your browser does not support the audio element.
</audio> -->
  <!-- <div class="player">
    <audio controls>
      <source :src="radio.url" type="audio/mp3" />
    </audio>
  </div> -->
  <!-- <pre>{{radio}}</pre> -->
  <button @click.prevent="getRadioById(radio.stationId)">
    Listen
  </button>
</template>

<style>
.icon-radio {
  object-fit: cover;
  height: 50px;
  width: 50px;
}
</style>
