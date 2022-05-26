<script>
import { inject, toRefs } from "vue";
import linkUrl from '../api/axios'

export default {
  data() {
    return {
      email: "",
      password: "",
      user: "",
    };
  },
  name: "loginUser",
  methods: {
    login() {
      this.$emit("isLoginEmit", this.email, this.password);
    },
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const signGoogle = await linkUrl.post(
          `users/login-google`,
          {
            token: googleUser.getAuthResponse().id_token,
          }
        );
        localStorage.setItem('access_token', signGoogle.data.access_token)
        localStorage.setItem("UserId", signGoogle.data.id);
        this.$emit('isGoogle')
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>

<template>
  <div id="login">
    <form>
      <div class="container-login">
        <h2 class="text-center">Login</h2>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary click"
          v-on:click.prevent="login"
        >
          Sign in</button
        ><br /><br />
        <div class="google-signin">
          <div>
            <button @click.prevent="handleClickSignIn" class="btn btn-info">
              Google
            </button>
          </div>
        </div>
        <br />
      </div>
    </form>
  </div>
</template>

<style>
.container-login {
  width: 500px;
  box-shadow: 0 2px 15px;
  padding: 10px;
  margin: auto;
  margin-top: 200px;
  display: block;
}

.click {
  width: 90%;
}

</style>

