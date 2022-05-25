<script>
import CardSingle from '../components/CardSingle.vue';
import { mapState, mapActions } from 'pinia';
import { useNewsStore } from '@/stores/newsApi';
export default {
  components: { CardSingle },
  computed: {
    ...mapState(useNewsStore, ['newsList', 'totalPages']),
  },
  data() {
    return {
      keywords: '',
      language: '',
      categories: '',
    };
  },
  methods: {
    ...mapActions(useNewsStore, ['fetchApiData']),
  },
  created() {
    this.fetchApiData();
  },
};
</script>

<template>
  <section class="home_section">
    <!-- home content -->
    <div class="home_content">
      <div class="filter-section">
        <form
          action="/action_page.php"
          @submit.prevent="fetchApiData(null, language, categories, keywords)"
        >
          <div class="input-section">
            <label for="vehicle1"> keywords</label><br />
            <input type="text" style="width: 180px" v-model="keywords" /><br />
          </div>
          <br />
          <div class="custom-select" style="width: 200px">
            <select v-model="categories">
              <option disabled value="">Select Categories:</option>
              <option value="general">General</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>

          <div class="checkboxes-section">
            <p>language</p>
            <input
              type="radio"
              id="language"
              name="language"
              value="ar"
              v-model="language"
            />
            <label for="language1">
              <img
                src="https://img.icons8.com/color/28/000000/saudi-arabia-circular.png"
            /></label>
            <br />
            <input
              type="radio"
              id="language"
              name="language"
              value="de"
              v-model="language"
            />
            <label for="language1">
              <img
                src="https://img.icons8.com/color/28/000000/germany-circular.png"
            /></label>
            <br />
            <input
              type="radio"
              id="language"
              name="language"
              value="en"
              v-model="language"
            />
            <label for="language1">
              <img
                src="https://img.icons8.com/color/28/000000/usa-circular.png"
            /></label>
            <br />
            <input
              type="radio"
              id="language"
              name="language"
              value="fr"
              v-model="language"
            />
            <label for="language1">
              <img
                src="https://img.icons8.com/color/28/000000/france-circular.png"
            /></label>
            <br />
            <input
              type="radio"
              id="language"
              name="language"
              value="ru"
              v-model="language"
            />
            <label for="language1">
              <img
                src="https://img.icons8.com/color/28/000000/russian-federation-circular.png"
            /></label>
            <br />
          </div>
          <input type="submit" value="search" />
        </form>
      </div>
      <!-- cards -->
      <div class="cards-section">
        <div class="cards-display">
          <CardSingle
            v-for="(item, index) in newsList"
            :key="index"
            :data="item"
            :cat="item.category"
          ></CardSingle>
          <div class="pagination">
            <a
              href="#"
              class=""
              v-for="(item, index) in 5"
              @click="fetchApiData(index)"
              :key="index"
              >{{ index + 1 }}</a
            >
          </div>
        </div>
        <!-- end of cards -->
        <!-- end of home content -->
      </div>
    </div>
  </section>
</template>
