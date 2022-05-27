<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  data() {
    return {
      localEmail: '',
      localPassword: ''
    }
  },
  computed: {
    ...mapWritableState(useAllInOne, ['email', 'password'])
  },
  methods: {
    ...mapActions(useAllInOne, ['login']),

    changeData() {
      this.email = this.localEmail,
      this.password = this.localPassword
    }
  }
};
</script>

<template>
  <div style="margin-top: 90px">
    <form @submit.prevent="login" style="width: 25%; margin-left: 75vh">
      <div class="form-group mt-3">
        <input v-model="localEmail" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"
        />
      </div>
      <div class="form-group mt-3">
        <input v-model="localPassword" type="password" class="form-control" placeholder="Password" />
      </div>
      <button @click="changeData" type="submit" class="btn btn-primary" style="margin-top: 15px; margin-left: 22vh">Login</button>
    </form>
  </div>
</template>
