<script>
export default {
  props : ['comment'],
  methods : {

  },
  data(){
    return{

    }
  }
}
</script>

<template>
  <div class="flex-col shadow-sm rounded-lg mx-auto w-3/4 ">
    <div class="flex px-4 py-6 ">
      <div class="">
        <div class="">
          <h2 class="text-sm flex justify-end font-semibold text-gray-900 -mt-1">
            {{ comment.postedBy }}
          </h2>
        </div>
        <p class="mt-3 text-gray-700 text-[0.6rem] mr-4 ">
          {{ comment.content }}
        </p>
      </div>
    </div>
  </div>
</template>