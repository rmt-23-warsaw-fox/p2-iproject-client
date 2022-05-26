<template>
  <div id="menuPage-customer">
    <h1 class="text-center my-5">Homie Menu</h1>
    <div class="container-fluid">
      <div class="row">
        <Cards :data="foods" />
      </div>
    </div>
    <nav class="pagination-container my-5">
      <ul class="pagination">
        <li class="page-item">
          <button
            @click.prevent="clickPrevious(page - 1)"
            class="page-link"
            :disabled="page == 1"
          >
            Previous
          </button>
        </li>
        <li v-for="n in totalPage" class="page-item">
          <button @click.prevent="clickPage(n)" class="page-link">
            {{ n }}
          </button>
        </li>
        <li class="page-item">
          <button
            @click.prevent="clickNext(page)"
            class="page-link"
            :disabled="page == totalPage"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { useMenuStore } from "../stores/menu";
import { mapActions, mapState } from "pinia";
import Cards from "../views/Card.vue";
export default {
  name: "menuPage",
  components: {
    Cards,
  },
  computed: {
    ...mapState(useMenuStore, ["page", "totalPage", "foods"]),
  },
  methods: {
    ...mapActions(useMenuStore, ["getFoods"]),
    async clickPage(page) {
      this.$router.push({
        path: "/menu",
        query: {
          page: page,
        },
      });
      await this.getFoods(page);
    },
    async clickPrevious(page) {
      this.$router.push({
        path: "/menu",
        query: {
          page: +page,
        },
      });
      await this.getFoods(+page);
    },
    async clickNext(page) {
      let currPage = +page + 1;
      this.$router.push({
        path: "/menu",
        query: {
          page: currPage,
        },
      });
      await this.getFoods(currPage);
    },
  },
  async created() {
    await this.getFoods(this.$route.query.page);
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
