<script>
export default {
  props: { data: Object, cat: String },
};
</script>
<template>
  <div class="card">
    <div class="card-header">
      <a :href="data.url">
        <img :src="data.image" alt="News Image" />
      </a>
    </div>
    <div class="card-body">
      <span
        class="tag"
        :class="
          cat == 'technology'
            ? ' tag-teal'
            : cat == 'business'
            ? ' tag-purple'
            : cat == 'entertainment'
            ? ' tag-pink'
            : cat == 'sports'
            ? ' tag-amber'
            : ' tag-lime'
        "
        >{{ data.category }}</span
      >
      <h4>{{ data.title }}</h4>
      <p>{{ data.description }}</p>
      <div class="user">
        <img src="https://source.unsplash.com/random/?person" alt="user" />
        <div class="user-info">
          <h5>{{ data.author }}</h5>
          <small>{{ data.published_at }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
