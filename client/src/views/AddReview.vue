<script>
export default {
  name: "AddReview",
};
</script>

<template>
  <div
    class="card w-50 text-bg-secondary rounded-4"
    style="margin-left: 25vw; margin-top: 5%"
  >
    <div class="card-body">
      <h2 style="text-align: center">Welcome to our app!</h2>
      <h4 style="text-align: center">Please Register</h4>
      <form>
        <div class="mb-3">
          <label for="fullname" class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text" style="color: white">
            Format: (First Name) (Last Name)
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text" style="color: white">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style="margin-left: 45%"
          @click.prevent="registerClick"
        >
          Register Me
        </button>
      </form>
      <br />
      <p style="text-align: center">
        Have an account?
        <router-link to="/login" style="color: greenyellow">Log In</router-link>
      </p>
    </div>
  </div>
</template>
