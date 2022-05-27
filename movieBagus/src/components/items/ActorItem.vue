<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  
  computed: {
    profileImage() {
      return (
        "https://image.tmdb.org/t/p/w235_and_h235_face/" +
        this.actor.profile_path
      );
    },
  },
};
</script>

<template>
  <div>
    <router-link :to="`/actor/${this.actor.id}`">
      <img :src="profileImage" alt="" />
      <h3>{{ actor.name }}</h3>
    </router-link>
  </div>
</template>

<style>

</style>