<script>
import AddForm from "../components/addForm.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "ProfileView",
  components: {
    AddForm,
    NavBar
  },
  methods: {},
};
</script>
<template>
  <div class="w-[100%] bg-[#f2f2f2] min-h-[100vh] h-max min-w-[1240px] flex justify-center">
    <NavBar />
    <AddForm />
  </div>
</template>
