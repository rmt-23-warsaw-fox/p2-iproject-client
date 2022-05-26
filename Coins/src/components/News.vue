<template>
  <div class="card bg-gradient my-1 w-100 shadow">
    <div class="card-body">
        <p class="card-text">{{data.title}}</p>
      <p class="card-text">{{data.source}}</p>
      <a :href="data.url" class="float-end">Read More...</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "News",
  props: ["data"]
};
</script>
<style></style>
