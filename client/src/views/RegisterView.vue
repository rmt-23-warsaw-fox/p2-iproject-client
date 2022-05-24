<script>
import "../assets/css/style.css";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      userInput: {
        userName: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["registerAction"]),
    async registerEvent() {
      try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await this.registerAction(this.userInput);
        this.$router.push("/");
      } catch (err) {
        console.log(err.respones.error.message);
      }
    },
  },
};
</script>

<template>
  <section class="signup">
    <div class="container">
      <div class="signup-content">
        <div class="signup-form">
          <h2 class="form-title">Sign up</h2>
          <form
            @submit.prevent="registerEvent"
            class="register-form"
            id="register-form"
          >
            <div class="form-group">
              <label for="name"
                ><i class="zmdi zmdi-account material-icons-name"></i
              ></label>
              <input
                v-model="userInput.userName"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <label for="email"><i class="zmdi zmdi-email"></i></label>
              <input
                v-model="userInput.email"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div class="form-group">
              <label for="pass"><i class="zmdi zmdi-lock"></i></label>
              <input
                v-model="userInput.password"
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                class="form-submit"
                value="Register"
              />
            </div>
          </form>
        </div>
        <div class="signup-image">
          <figure>
            <img src="../assets/images/signup-image.jpg" alt="sing up image" />
          </figure>
          <router-link to="/" class="signup-image-link"
            >I am already member</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
