<script>
export default {
  name: "News Card",
  props: ["articleInfo"]
}
</script>

<template>
  <a :href="articleInfo.url" target="_blank" class="card bg-dark text-white mb-3" style="height:200px">
    <img class="card-img" :src="articleInfo.image" alt="Card image" style="object-fit: cover; height: 200px;"/>
    <div class="card-img-overlay">
      <h5 class="card-title" style="text-shadow: 2px 2px black">{{articleInfo.title}}</h5>
      <p class="card-text" style="text-shadow: 2px 2px black">
        {{articleInfo.description}}
      </p>
      <p class="card-text" style="text-shadow: 2px 2px black">{{articleInfo.publishedAt.slice(0, 10)}}</p>
    </div>
  </a>
</template>
