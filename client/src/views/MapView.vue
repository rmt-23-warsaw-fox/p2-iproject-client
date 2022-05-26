<script>
import { mapActions, mapState } from 'pinia';
import { useRadioStore } from '../stores/counter';

// import Gma
export default {
  data() {
    return {
      center: { lat: -6.496294, lng: 106.836295 },
      // markers: [
      //   {
      //     // position: {
      //     //   lat: -7.301446478281644,
      //     //   lng: 112.73895263671876,
      //     // },
      //   },
      //   {
      //     // position: {
      //     //   lat: 51.198429,
      //     //   lng: 6.69529,
      //     // },
      //   },
      //   {
      //     // position: {
      //     //   lat: 51.165218,
      //     //   lng: 7.067116,
      //     // },
      //   },
      //   {
      //     // position: {
      //     //   lat: 51.09256,
      //     //   lng: 6.84074,
      //     // },
      //   },
      // ],
    };
  },
  methods: {
    ...mapActions(useRadioStore, ['getRadioPos', 'getRadioById'])
  },
  computed: {
    ...mapState(useRadioStore, ['radioPosition', 'markers']),
  },
  created(){
    this.getRadioPos()
  }
}
</script>

<template>
  <h1>Location of the radio station</h1>
  <GMapMap
    :center="center"
    :zoom="7"
    map-type-id="terrain"
    style="width: 200.5vh; height: 80vh"
  >
    <GMapCluster>
      <GMapMarker
         :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      > 
      <GMapInfoWindow>
        <div>{{m.detail}} <a href="" @click.prevent="getRadioById(m.stationId)">Listen</a> <MyComponent/>
        </div>
      </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>

<style>
body {
  margin: 0;
  justify-content: center;
}
</style>
