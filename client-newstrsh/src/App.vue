<script>
// deploy link:
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
export default {
  components: {
    RouterView,
    NavBar,
  },
  computed: {
    ...mapState(useUserStore, ['loginStatus', 'userId']),
  },
  methods: {
    ...mapActions(useUserStore, ['loginCheck']),
  },
  created() {
    this.loginCheck();
  },
};
</script>

<template>
  <NavBar></NavBar>
  <RouterView></RouterView>
</template>
