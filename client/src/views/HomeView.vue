<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import ContentCard from "@/components/ContentCard.vue";
import ChatCard from "@/components/ChatCard.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  components: {
    NavBar,
    SideBar,
    ContentCard,
    ChatCard,
  },
  methods: {
    ...mapActions(useCounterStore, ["getProfile"]),
  },
  computed: {
    ...mapState(useCounterStore, ["profile"]),
  },

  created() {
    this.getProfile();
  },
};
</script>
<template>
  <NavBar v-for="data in profile" :key="data.id" :profile="data" />

  <div class="container-sm">
    <div class="d-flex justify-content-evenly">
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="row justify-content-center flex-column">
          <ContentCard />
        </div>
      </div>
      <SideBar v-for="data in profile" :key="data.id" :profile="data" />
    </div>
  </div>
  <ChatCard />
</template>

<style>
.py-5 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.b-example-divider {
  flex-shrink: 0;
  width: 100vw;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
.container-sm {
  background-color: bisque;
}
</style>
