<template>
<div class="fullscreen bg-white text-white text-center q-pa-md flex flex-center">
    <div class="full-width q-px-xl">
      <div class="column items-start q-gutter-none">
        <h1 class="text-primary text-weight-bold" >Create an event</h1>
      </div>
      <q-input standout="bg-primary text-white" v-model="event.title" label="Title" />
      <br>
      <q-input standout="bg-primary text-white" v-model="event.description" label="Description" />
      <br>

      <q-btn
        @click.prevent="localCreateEvent()"
        unelevated
        rounded
        color="primary"
        label="Create"
        class="text-h6"
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
    name: 'CreateEventPage',
    data(){
      return {
        event: {
          title:"",
          description:""
        }
      }
    },
    methods: {
      ...mapActions(useCounterStore, ['createEvent']),
      async localCreateEvent(){
        await this.createEvent(this.event)
        this.$router.push('/')
      }
    }
  })
</script>