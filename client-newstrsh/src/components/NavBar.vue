<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user';
import { usePaymentStore } from '@/stores/payment';

export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useUserStore, ['loginStatus', 'premium']),
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(useUserStore, ['BackendLogoutConnection']),
    ...mapActions(usePaymentStore, ['memberPay']),
  },
};
</script>
<template>
  <nav>
    <div class="nav-logo">
      <a href="#">
        <i class="bx bxs-invader"></i>
        <span class="dashboard">Tr@sher News</span>
      </a>
      <a href="#" v-if="!premium" @click.prevent="memberPay">
        <span class="dashboard">Go Premium</span>
      </a>
    </div>
    <div class="login_register">
      <RouterLink v-if="!loginStatus" to="/login">login</RouterLink>
      <RouterLink v-if="!loginStatus" to="/register">Register</RouterLink>
      <a href="#" v-if="loginStatus" @click.prevent="BackendLogoutConnection"
        >Logout</a
      >
    </div>
  </nav>
</template>
