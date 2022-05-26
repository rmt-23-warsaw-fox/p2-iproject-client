<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
import { mapState, mapStores, mapActions, mapWritableState } from "pinia";
import Card from "../components/card.vue";
import linkUrl from '../api/axios'
import Navbar from '../components/navbar.vue';

export default {
  data() {
    return {
      movies: [],
      majors: [],
      title: "",
      MajorId: "",
      offset: 0,
      star: false,
      localName: "wow",
      home: "home",
      UserId: "",
      uf: "1",
      favouriteMovies: [],
    };
  },
  methods: {
    async isFilter(offset, increment, decrement) {
      try {
        if (decrement && this.offset >= 6) {
          this.offset -= decrement;
        }
        if (increment && this.movies.length >= 6) {
          this.offset += increment;
        }
        if (offset || offset == 0) {
          this.offset = offset;
        }

        const filter = await linkUrl.get(
          `products?offset=${this.offset}&name=${this.title}&major=${this.MajorId}`
        );
        this.movies = filter.data.data.rows;
      } catch (err) {
        console.log(err);
      }
    },
    clearFilter() {
      this.title = "";
      this.MajorId = "";
      this.isFilter(null, null, null);
    },
    isDetail(id) {
      this.$router.push(`/products/${id}`);
    },
    async isBuy(id) {
      try {
        await linkUrl.post(
          `login/${id}/buy`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        const filter = await linkUrl.get(
          `products?offset=${this.offset}&name=${this.title}&major=${this.MajorId}`
        );
        this.movies = filter.data.data.rows;
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions(useCounterStore, ["isDetailStore", "listsBuy"]),
  },
  async created() {
    try {
      if (localStorage.getItem("UserId")) {
        await this.listsBuy();
        this.UserId = localStorage.getItem("UserId");
        this.favouriteMovies = this.myFavourite;
      }

      const data = await linkUrl.get(`products`);
      this.movies = data.data.data.rows;
      
      const major = await linkUrl.get(`products/majors`);
      this.majors = major.data.data;
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapWritableState(useCounterStore, ["myFavourites"]),
  },
  components: {
    RouterLink,
    Navbar
  },
};
Card;
</script>

<template>
  <div id="home">
    <div id="side-cards">
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light side-bar">
        <br />
        <br />
        <h2 id="filter">{{ counterStore.filter }}</h2>
        <br />
        <form>
          <div id="searchFilter">
            <input
              type="text"
              placeholder="name"
              id="filterTitle"
              v-model="title"
            /><br /><br />
            <h3>Jurusan</h3>
            <ul class="nav nav-pills flex-column mb-auto">
              <div id="major" v-for="data in majors" :key="data.id">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    :value="data.id"
                    v-model="MajorId"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    {{ data.name }}
                  </label>
                </div>
              </div>
            </ul>
            <br />
            <button
              type="button"
              class="btn btn-primary"
              id="searchFilter"
              @click.prevent="isFilter(null, null, null)"
            >
              Search</button
            ><br /><br />
            <button
              type="button"
              class="btn btn-secondary"
              id="searchFilter"
              @click.prevent="clearFilter"
            >
              Clear Filter
            </button>
            <br><br><br><br>
            <h3>Penasaran lokasi SMA/SMK yang ada di Indonesia?</h3>
            <router-link type="button" class="btn btn-success"
            to="/un">Klik disini</router-link>
          </div>
        </form>
      </div>
      <card :itemsprops="d" />
      <div id="cards">
        <div
          class="card card-movie"
          style="width: 16rem; height: 20rem"
          v-for="data in movies"
          :key="data.id"
        >
          <img
            :src="data.imgUrl"
            class="card-img-top"
            alt="..."
            style="height: 150px"
          />
          <div class="card-body">
            <div id="title-favourite">
              <h5 class="card-title">{{ data.name }}</h5>
            </div>
            <p
              class="card-text"
              style="width: 220px; height: 50px; overflow: hidden"
            >
              {{ data.Major.name }}
            </p>
            <div id="button-package">
            <button
              @click.prevent="isDetailStore(data.id)"
              class="btn btn-secondary"
            >
              Detail
            </button>
            <div id="card-buy"
             v-if="UserId"
            >
              <button type="button" class="btn btn-success"
              v-if="data.Buys.map(el => String(el.UserId)).includes(String(UserId))"
              >Terpilih</button>
              <button type="button" class="btn btn-primary"
              @click.prevent="isBuy(data.id)"
              v-else
              >Pilih</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="div-numbers">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="isFilter(null, null, 9)"
              >Previous</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="isFilter(0, null, null)"
              >1</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click="isFilter(9, null, null)">2</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              @click.prevent="isFilter(18, null, null)"
              >3</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="isFilter(null, 9)"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
/* star */
#card-favourite2 {
  overflow: hidden;
  object-fit: cover;
}

.fa-star {
  text-decoration: none;
}

.blank {
  color: #000;
}

.checked {
  color: orange;
}

#title-favourite {
  display: flex;
  justify-content: space-between;
}

#side-cards {
  display: flex;
}

#button-package {
  display: flex;
  justify-content: space-between;
}

#cards {
  margin-left: 150px;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  width: 1000px;
  flex-wrap: wrap;
  overflow: hidden;
}

body {
  min-width: 1184px;
}

.box {
  margin-top: 20px;
  width: 200px;
  height: 500px;
  padding: 10px;
  border: 1px solid gray;
}

#search-title {
  position: absolute;
  top: px;
  left: 480px;
  margin: 0;
}

.input-side {
  width: 150px;
  height: 30px;
}

#sidebar2 {
  vertical-align: top;
}

#navbar {
  width: 100%;
  height: 50px;
  background-color: rgb(209, 214, 238);
  top: 50%;
}

.sign {
  float: right;
  margin-top: 5px;
  margin-right: 10px;
}

#select {
  margin-top: 15px;
  width: 150px;
  height: 30px;
}

#submit-search {
  margin-top: 300px;
  margin-left: 90px;
}

#div-numbers {
  font-size: 20px;
  margin-top: 20px;
  margin-left: 750px;
}

#searchFilter {
  width: 300px;
}

#filterTitle {
  height: 35px;
  font-size: 20px;
  padding: 10px;
  width: 300px;
}
#filter {
  background-color: rgb(189, 184, 184);
  text-align: center;
}
#major {
  font-size: 20px;
}
.side-bar {
  align-items: stretch;
  float: left;
  width: 350px;
  padding: 10px;
  height: max-content;
  height: 1000px;
  margin-top: 0px;
}

.nav-li:hover {
  background-color: rgb(136, 170, 245);
}

#profile-image {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
}
</style>