<script>
import { useUserStore } from '../stores/user'
import { mapState,mapActions } from 'pinia'
import {getMessages,postMessage} from '../methods'
export default {
  name : 'LiveChatView',
  computed : {  
    ...mapState(useUserStore,['myProfile'])
  },
  data(){
    return {
      messages : [],
      inputMsg : ''
    }
  },
  watch: {
    inputMsg(newInputMsg,oldInputMsg){
      if(oldInputMsg.length>0 && newInputMsg.length===0){
        getMessages().then((messages)=>{
          this.messages = messages
        })
      }
    }
  },
  methods : {
    ...mapActions(useUserStore,['getProfile']),
    sendMsg(){
      
      const puuid = this.myProfile.puuid
      const user = this.myProfile.name+'#'+this.myProfile.tag
      const content = this.inputMsg

      postMessage(puuid,user,content)

      this.inputMsg=''
    },
  },
  created(){
    this.getProfile()
    getMessages().then((messages)=>{
      this.messages = messages
    })
    
  },
  setup(){

  }
}

</script>
<template>
  <div class="mt-10 container mx-auto flex justify-center items-center">
    <div class="w-[500px] border rounded ">
      <div>
        <div class="w-full">
          <div class="relative flex items-center p-3 border-b border-gray-300">
            <img
              class="object-cover w-10 h-10 rounded-full"
              :src="myProfile.card.small"
              alt="username"
            />
            <span class="block ml-2 font-bold text-gray-600">{{myProfile.name}}</span>
            <span
              class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"
            >
            </span>
          </div>
          <div class="relative w-full p-6 overflow-y-auto h-[25rem] ">
            <ul class="space-y-2">
              <li 
              :class="myProfile.puuid===message.puuid ? 'flex justify-end':'flex justify-start'" 
              v-for="message in messages" :key="message.id"
              
              >
                
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow mb-3"
                >
                <span 
                :class="myProfile.puuid===message.puuid ? 'absolute right-0 bottom-10 text-[0.6rem]' :
                'absolute left-0 bottom-10 text-[0.6rem]'
                "
                >
                {{message.postedBy}}
                </span>
                  <span 
                  class="block ">
                  {{message.content}}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="flex items-center justify-between w-full p-3 border-t border-gray-300"
          >
            <input
              type="text"
              placeholder="Message"
              class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message"
              required
              v-model="inputMsg"
            />
            <button @click.prevent="sendMsg" type="submit"
            class="bg-purple-500 py-1 px-2 text-white rounded-lg"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>