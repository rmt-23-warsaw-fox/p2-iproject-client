<script>
import AddForm from "../components/addForm.vue";
import NavBar from "../components/NavBar.vue";
import TableComponent from "../components/TableComponent.vue";
import Footer from "../components/footer.vue";
export default {
  name: "ProfileView",
  components: {
    AddForm,
    NavBar,
    TableComponent,
    Footer,
  },
  methods: {},
  data() {
    return {
      activeSection: 1,
      isActive1: true,
      isActive2: false,
      User_Profile: localStorage.getItem("User_Profile")
        ? JSON.parse(localStorage.getItem("User_Profile"))
        : null,
    };
  },
  created() {
    this.activeSection = 1;
  },
};
</script>
<template>
  <div
    class="w-[100%] bg-[#f2f2f2] min-h-[100vh] h-max min-w-[1240px] flex justify-center flex-col items-center"
  >
    <div class="min-h-[100vh] h-max w-[1240px]">
      <NavBar />
      <div
        class="w-[100%] h-max flex justify-center items-center bg-black/80 py-8"
      >
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-full profile-picture"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">{{User_Profile.displayName}}</h2>
            <p>{{User_Profile.email}}</p>
          </div>
        </div>
      </div>
      <div class="bg-white flex flex-col justify-center">
        <div class="tabs">
          <a
            class="tab tab-lifted"
            @click.prevent="
              activeSection = 1;
              isActive1 = true;
              isActive2 = false;
            "
            :class="{ 'tab-active': isActive1 }"
            >Your Songs</a
          >
          <a
            class="tab tab-lifted"
            @click.prevent="
              activeSection = 2;
              isActive2 = true;
              isActive1 = false;
            "
            :class="{ 'tab-active': isActive2 }"
            >Add Song</a
          >
        </div>
        <TableComponent v-if="activeSection === 1" />
        <AddForm v-if="activeSection === 2" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style>
.profile-picture {
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
