<script>
import { mapActions, mapWritableState } from 'pinia'
import { useDataLogin } from '../stores/login'
import Navbar from '../components/Navbar.vue';
import { inject, toRefs } from "vue";
export default {
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    return {
      Vue3GoogleOauth,
      isSignIn,
    };
  },
  data() {
    return {
      dataemail: '',
      datapassword: '',
    }
  },
  components:{
      Navbar
  },
  computed: {
    ...mapWritableState(useDataLogin, ['email', 'password', "TokenGoogle"])
  },
  methods: {
    ...mapActions(useDataLogin, ['Login', 'LoginGoogle']),
    clickLogin() {
      this.email = this.dataemail
      this.password = this.datapassword
      this.Login()
    },
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        this.TokenGoogle = googleUser.xc.id_token
        this.LoginGoogle()
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <Navbar />
  <div  class="login-form container w-50 shadow mt-4 p-4 rounded">
    <form id="login">
      <center>
        <h1>WELCOME TO THE UNIVERSE SACTUMNEWS</h1><br><br>
        <img class="w-73" src="../assets/ini.png" alt="" />
      </center>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="dataemail" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="datapassword" type="password" class="form-control" id="password" />
      </div>
      <button @click.prevent="clickLogin" class="btn btn-dark">Submit</button>

      <a @click.prevent="handleClickSignIn" style="margin-left: 10px;"
        class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href><img
          src="https://img.icons8.com/color/16/000000/google-logo.png"> Signup Using Google</a>

    </form>
  </div>
</template>

<style>
#login{
  margin-top: 60px;
}
</style>