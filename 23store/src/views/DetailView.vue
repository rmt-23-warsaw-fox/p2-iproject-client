<script>
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
import DetailContent from "../components/DetailContent.vue";
import { useGadgetStore } from "../stores/gadgets";
import { mapStores } from "pinia";
export default {
  components: {
    MainHeader,
    MainFooter,
    DetailContent,
  },
  computed: {
    ...mapStores(useGadgetStore),
  },
  methods: {
    async getGadget() {
      try {
        const { data } = await this.gadgetsStore.getGadget(
          this.$route.params.detail
        );
        this.gadgetsStore.gadget = data;
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
  created() {
    this.getGadget();
  },
};
</script>

<template>
  <MainHeader />
  <div class="b-example-divider"></div>
  <DetailContent />
  <MainFooter />
</template>

<style>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
</style>
