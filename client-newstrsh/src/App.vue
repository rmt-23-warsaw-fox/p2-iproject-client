<script>
// deploy link:
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import { mapState, mapActions, mapWritableState } from 'pinia';
import { useUserStore } from '@/stores/user';
export default {
  components: {
    RouterView,
    NavBar,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useUserStore, ['loginStatus', 'run']),
    ...mapWritableState(useUserStore, ['run']),
  },
  methods: {
    ...mapActions(useUserStore, ['loginCheck']),
  },
  async created() {
    await this.loginCheck();
  },
  async updated() {
    if (this.run) {
      await this.loginCheck();
      this.run = false;
    }
    // this.loginCheck();
  },
};
</script>

<template>
  <NavBar v-if="loginStatus"></NavBar>
  <RouterView></RouterView>
</template>
