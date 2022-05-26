<script>
import { useUserStore } from '../stores/user'
import { mapWritableState } from 'pinia'
export default {
  data(){
    return {

    }
  },
  computed : {
    ...mapWritableState(useUserStore,['isLogin'])
  },
  methods : {
    goToLoginPage(){
      this.$router.push('/login')
    },
    logout(){
      localStorage.removeItem("access_token")
      this.$router.push('/login')
    },
    goToChat(){
      this.$router.push('/livechat')
    },
    goToProfile(){
      this.$router.push('/myprofile')
    },
    goToForum(){
      this.$router.push('/forum')
    },
    goToMm(){
      this.$router.push('/mymatches')
    }
  },
  created(){
    if(localStorage.getItem("access_token")){
      this.isLogin = true
    }
  }
}
</script>
<template>
  <nav class="flex justify-between bg-purple-800 h-12 items-center text-white ">
    <div class="ml-4 text-xl "
    @click.prevent="goToProfile"
    >ValoKuy</div>
    <div class="flex gap-4 mr-4">
      <button
      @click.prevent="goToChat"
      >Livechat</button>
      <button
      @click.prevent="goToMm"
      >My Matches</button>
      <button
      @click.prevent="goToForum"
      >Forum</button>
      <button
      @click.prevent="goToLoginPage"
      v-if="!isLogin"
      >Sign In</button>
      <button
      @click.prevent="logout"
      >Sign Out</button>
    </div>
  </nav>
</template>