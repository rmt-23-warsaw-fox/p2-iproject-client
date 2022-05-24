<script>
import MainHeader from "../components/MainHeader.vue";
import MainFooter from "../components/MainFooter.vue";
import GadgetsContent from "../components/GadgetsContent.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
    GadgetsContent,
  },
};
</script>

<template>
  <MainHeader />
  <div class="b-example-divider"></div>
  <GadgetsContent />
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
