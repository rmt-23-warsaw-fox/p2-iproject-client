<script>
import axios from "axios";

export default {
  name: "Un.vue",
  data() {
    return {
      schools: [],
      name: "",
      province: "",
      page: 1,
      bentuk: "SMA",
      number: 1,
      digit: 1,
    };
  },
  async created() {
    try {
      const dataSchools = await axios.get(
        `https://api-sekolah-indonesia.herokuapp.com/sekolah/${this.bentuk}?page=${this.page}&perPage=15`
      );
      this.schools = dataSchools.data.dataSekolah;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async isPage(number, command) {
      try {
        if (command == "min" && this.page > 1) {
          this.page -= number;
        } else if (command == "plus") {
          this.page += number;
        }
        this.digit = this.page;
        this.number = this.page * 15 - 14;
        const dataSchools = await axios.get(
          `https://api-sekolah-indonesia.herokuapp.com/sekolah/${this.bentuk}?page=${this.page}&perPage=15`
        );
        this.schools = dataSchools.data.dataSekolah;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div id="schoolData">
    <div id="filter-school">
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light side-bar">
        <br />
        <br />
        <h2 id="filter">Search</h2>
        <br />
        <form>
          <div id="searchFilter">
            <h3>Jurusan</h3>
            <div id="filter-bentuk">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  :value="'SMA'"
                  v-model="bentuk"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  SMA
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  :value="'SMK'"
                  v-model="bentuk"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  SMK
                </label>
              </div>
            </div>
            <br />
            <button
              type="button"
              class="btn btn-primary"
              id="searchFilter"
              @click.prevent="isPage(null, null)"
            >
              Search</button
            ><br /><br />
          </div>
        </form>
      </div>
      <table class="table table-striped table-hover" id="tableUn">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Provinsi</th>
            <th scope="col">Kota/kabupaten</th>
            <th scope="col">Nama</th>
            <th scope="col">Bentuk</th>
            <th scope="col">Alamat Jalan</th>
          </tr>
        </thead>
        <tbody>
          <tr id="school-row" v-for="(data, i) in schools" :key="data.id">
            <th scope="row">{{ i + number }}</th>
            <td>{{ data.propinsi }}</td>
            <td>{{ data.kabupaten_kota }}</td>
            <td>{{ data.sekolah }}</td>
            <td>{{ data.bentuk }}</td>
            <td>{{ data.alamat_jalan }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="div-numbers-api">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="isPage(1, 'min')"
              >Previous</a
            >
          </li>
          <li class="page-item">
            <a class="page-link" href="#">{{ digit }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">{{ digit + 1 }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">{{ digit + 2 }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click.prevent="isPage(1, 'plus')"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
#filter-bentuk {
  font-size: 20px;
}

#tableUn {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  text-align: center;
}

#div-numbers-api {
  font-size: 20px;
  margin-top: 20px;
  margin-left: 1000px;
}
</style>
