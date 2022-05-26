<script>
export default {
  name : 'MapCard',
  props : ['map','id'],
  emits : ['change-map'],
  methods: {
    changeMap(event){
      this.$emit('change-map',this.id)
    }
  }
}
</script>

<template>
  <li :id="map.displayName"
      
      >
        <div
          class="max-w-sm bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer
          hover:bg-gray-700
          "
          @click.prevent="changeMap"
          :id="map.displayName"
        >
          <a>
            <img class="rounded-t-lg" :src="map.imageUrl" alt="" />
          </a>
          <div class="p-5 flex justify-center">
            <p class="font-normal text-gray-700 dark:text-gray-400"
            :id="map.displayName"
            >
              {{ map.displayName }}
            </p>
          </div>
        </div>
      </li>
</template>