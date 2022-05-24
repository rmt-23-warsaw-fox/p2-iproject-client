<script>
export default {
  name: "RegisterView",
  data() {
    return {
      formObject: {
        email: "",
        displayName: "",
        password: "",
      },
    };
  },
};
</script>

<template>
  <!-- component -->
  <div class="bg-base-200 min-h-screen flex flex-col">
    <div
      class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded-xl shadow-xl text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="displayName"
          placeholder="Display Name"
        />

        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="confirm_password"
          placeholder="Confirm Password"
        />
        <div class = "form-control">
            <button
              type="submit"
              class="btn"
            >
              Create Account
            </button>
        </div>
      <div class="text-grey-dark mt-6 text-center">
        Already have an account?
        <a class="no-underline border-b border-blue text-blue" href="../login/">
          Log in </a
        >.
      </div>
      </div>

    </div>
  </div>
</template>
