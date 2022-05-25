<script>

import axios from 'axios'

export default {
  name: 'Un.vue',
  data() {
    return {
      schools: [],
      name: '',
      province: '',
      bentuk: 1
    }
  },
  async created() {
    try {
      const dataSchools = await axios.get(`https://api-sekolah-indonesia.herokuapp.com/sekolah?page=1&perPage=10`)

      this.schools = dataSchools.data.dataSekolah.filter(el => {
        if(el.bentuk == 'SMA' || el. bentuk =='SMK') {
          return true
        }
      })
    } catch(err) {
      console.log(err);
    }
  },
  methods: {
     async isSearch(offset, increment, decrement) {
       try {
         this.province.to
         this.schools.filter(el => el.propinsi.includes())
       } catch(err) {
         console.log(err);
       }
    }
  }
}
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
          <input
            type="text"
            placeholder="name"
            id="filterTitle"
            v-model="province"
          /><br /><br />
          <h3>Jurusan</h3>
          <br />
          <button
            type="button"
            class="btn btn-primary"
            id="searchFilter"
            @click.prevent="isSearch(null, null, null)"
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
          <h3>Penasaran nilai UN tiap provinsi ?</h3>
          <router-link type="button" class="btn btn-success"
          to="/un">Klik disini</router-link>
        </div>
      </form>
    </div>
    <table class="table table-striped table-hover"
    id="tableUn"
    >
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
        <tr
        id="school-row"
        v-for="(data, i) in schools"
        :key="data.id"
        >
          <th scope="row">{{i + 1}}</th>
          <td>{{data.propinsi}}</td>
          <td>{{data.kabupaten_kota}}</td>
          <td>{{data.sekolah}}</td>
          <td>{{data.bentuk}}</td>
          <td>{{data.alamat_jalan}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<style>
#tableUn {
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  text-align: center;
}
</style>
