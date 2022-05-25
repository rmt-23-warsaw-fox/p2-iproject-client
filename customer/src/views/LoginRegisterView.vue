<script>
// import TheWelcome from '@/components/TheWelcome.vue'
import LoginRegister from "../components/LoginRegister.vue";

export default {
  components: {
    LoginRegister,
  },
  created() {
    console.log(this.$router.name);
  },
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <LoginRegister />
  </main>
</template>
