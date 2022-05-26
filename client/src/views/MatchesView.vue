<script>
import { useMyValoDataStore } from "../stores/myvalodata";
import { mapActions, mapState } from "pinia";
import MapCard from '../components/MapCard.vue'
export default {
  components : {
    MapCard
  },
  data() {
    return {
      objQuery : {
        map : 'ascent',
        mode : 'unrated'
      }
    };
  },
  computed: {
    ...mapState(useMyValoDataStore, ["maps",'myMatch']),
  },
  methods: {
    ...mapActions(useMyValoDataStore, ["getMap","getMatchData"]),
    changeMap(id){
      this.objQuery.map = id
      this.getMatchData(this.objQuery)
    }
  },
  created() {
    
    this.getMatchData(this.objQuery)
    this.getMap();
  },
};
</script>

<template>
  <div class="w-3/5 flex-col mx-auto mt-10">
    <ul class="flex w-full justify-around">
      <MapCard 
      v-for="map in maps"
      :map="map"
      :id="map.displayName"
      @change-map="changeMap"
      />
    </ul>
    <select name="" id="" class="ml-4 mt-4 mb-10 bg-slate-100 rounded-md"
    v-model="objQuery.mode"
    >
      <option value="unrated">unrated</option>
      <option value="spikerush">spikerush</option>
      <option value="competitive">competitive</option>
    </select>
    <div class="w-full bg-green-600">
      <div
        class="flex justify-center py-2 items-center bg-white rounded-lg border shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          :src="myMatch.headerData.myStats.imageUrl"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal text-sm">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Your game recap:
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            match id : {{myMatch.headerData.metadata.matchid}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            map : {{myMatch.headerData.metadata.map}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            your stat (k/d/a) : {{myMatch.headerData.myStats.myStat.kills}}/{{myMatch.headerData.myStats.myStat.deaths}}/{{myMatch.headerData.myStats.myStat.assists}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            headshot/bodyshot/legshot : {{myMatch.headerData.myStats.myStat.headshots}}/{{myMatch.headerData.myStats.myStat.bodyshots}}/{{myMatch.headerData.myStats.myStat.legshots}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            rounds played : {{myMatch.headerData.metadata.rounds_played}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            game start : {{myMatch.headerData.metadata.game_start_patched}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            your score : {{myMatch.headerData.myStats.myStat.score}}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            server : {{myMatch.headerData.metadata.cluster}}
          </p>
        </div>
      </div>
    </div>
    <div class="flex w-full mb-20 ">
      <div class="w-1/2">
        <ul
          class="w-full text-sm font-bold text-gray-900 bg-blue-300"
        >
          <li
            class="w-full flex items-center gap-4 px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
            v-for="player in myMatch.teamData.blueTeam"
          >
            <img
              :src="player.photo"
              width="30"
              alt=""
              class="rounded-full"
            />
            <p>{{player.name}} #{{player.tag}}</p>
          </li>

        </ul>
      </div>
      <div class="w-1/2">
        <ul
          class="w-full text-sm font-bold text-gray-900  border bg-red-300"
        >
          <li
            class="w-full flex items-center justify-end gap-4 px-4 py-2 border-b  rounded-t-lg dark:border-gray-600"
            v-for="player in myMatch.teamData.redTeam"
          >
            <p>{{player.name}} #{{player.tag}}</p>
            <img
              :src="player.photo"
              width="30"
              alt=""
              class="rounded-full"
            />
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
