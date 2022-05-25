<script>
import CardSingle from '../components/CardSingle.vue';
import { mapState, mapActions } from 'pinia';
import { useNewsStore } from '@/stores/newsApi';
export default {
  components: { CardSingle },
  computed: {
    ...mapState(useNewsStore, ['newsList', 'totalPages']),
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
        <form action="/action_page.php">
          <div class="input-section">
            <label for="vehicle1"> price</label><br />
            <input type="number" style="width: 180px" /><br />
          </div>
          <br />
          <div class="custom-select" style="width: 200px">
            <select>
              <option value="0">Select car:</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div>

          <div class="checkboxes-section">
            <p>categories</p>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="vehicle1"> I have a bike</label><br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="vehicle2"> I have a car</label><br />
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="vehicle3"> I have a boat</label><br /><br />
            <input type="submit" value="Submit" />
          </div>
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
