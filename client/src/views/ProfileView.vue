<script>
import { mapActions,mapState } from 'pinia'
import ProfileCard from '../components/ProfileCard.vue'
import { useUserStore } from '../stores/user'
export default {
  name : 'ProfileView',
  components : {
    ProfileCard
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapState(useUserStore,['myProfile'])
  },
  methods: {
    ...mapActions(useUserStore,['getProfile'])
  },
  created(){
    this.getProfile()
  }
}
</script>

<template>
  <div class="flex flex-col gap-5 items-center mt-10">
    <ProfileCard />
  <div class="mt-10 font-bold text-2xl">
    See Your Last Match
  </div>
  </div>
</template>