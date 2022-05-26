<script>
import { mapActions, mapWritableState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  data() {
    return {
      localEmail: '',
      localPassword: '',
      localAddress: '',
      localPhoneNumber: '',
    }
  },
  computed: {
    ...mapWritableState(useAllInOne, ['email', 'password', 'address', 'phoneNumber'])
  },
  methods: {
    ...mapActions(useAllInOne, ['register']),

    changeData() {
      this.email = this.localEmail
      this.password = this.localPassword
      this.address = this.localAddress
      this.phoneNumber = this.localPhoneNumber
    }
  }
};
</script>

<template>
  <div style="margin-top: 90px">
    <form @submit.prevent="register" style="width: 25%; margin-left: 75vh">
      <div class="form-group">
        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Email" v-model="localEmail" />
      </div>
      <div class="form-group mt-3">
        <input type="password" class="form-control" placeholder="Password" v-model="localPassword" />
      </div>
      <div class="form-group mt-3">
        <input type="text" class="form-control" placeholder="Address" v-model="localAddress" />
      </div>
      <div class="form-group mt-3">
        <input type="text" class="form-control" placeholder="Phone Number" v-model="localPhoneNumber" />
      </div>
      <button @click="changeData" type="submit" class="btn btn-primary" style="margin-top: 15px; margin-left: 21vh">Register</button>
    </form>
  </div>
</template>
