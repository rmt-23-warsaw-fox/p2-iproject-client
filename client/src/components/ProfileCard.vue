><script>
import { useUserStore } from '../stores/user'
import { mapActions, mapState } from 'pinia'
export default {
  name : 'ProfileCard',
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
  <div class="flex-col w-3/5 bg-purple-300  h-[400px] rounded-lg shadow-black shadow-md">
    <div>
      <img :src="myProfile.wideImage" alt="" class="rounded-t-lg" width="819">
    </div>
    <div class="flex items-center gap-10">
      <div class="ml-4 mt-6">
        <img :src="myProfile.smallImage" class="rounded-full" alt="">
      </div>
      <div class="flex-col">
        <p class="text-xl"> account level {{myProfile.accountLevel}}</p>
        <p class="text-4xl font-bold text-gray-100">{{myProfile.name}} #{{myProfile.tag}}</p>
      </div>
    </div>
  </div>
</template>