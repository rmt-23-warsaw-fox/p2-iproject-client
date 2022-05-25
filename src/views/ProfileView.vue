<script>
import AddForm from "../components/addForm.vue";
export default {
  name: "ProfileView",
  components: {
    AddForm,
  },
  methods: {},
};
</script>
<template>
  <div
    class="w-[100%] bg-[#f2f2f2] min-h-[100vh] h-max min-w-[1240px] flex justify-center"
  >
    <div class="min-h-[100vh] h-max w-[1240px]">
      <div class="w-[100%] h-[400px]flex flex-col">
        <div class="navbar text-white bg-black/30 font-jakarta">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Stella</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li><RouterLink to="/profile">Profile</RouterLink></li>
              <li><RouterLink to="/register">Logout</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    <AddForm />
    </div>
  </div>
</template>
