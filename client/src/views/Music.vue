<script>
import { mapActions, mapWritableState } from 'pinia';
import { useRadioStore } from '../stores/counter';

export default {
  computed: {
    ...mapWritableState(useRadioStore, ['allMusic', 'songName'])
  },
  methods: {
    ...mapActions(useRadioStore, ['searchSong', 'searchMusicById'])
  }
}
</script>

<template>
<h1 class="mt-5">
    <span class="yellow">Search music</span>
  </h1>
  <div class="search-box">
    <div class="input-group rounded w-25">
      <input
        v-model="songName"
        type="search"
        class="form-control rounded"
        placeholder="Search Radio Name"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <a href="" @click.prevent="searchSong">
          <fa icon="search">Search</fa>
        </a>
      </span>
      <span class="input-group-text border-0" id="search-addon">
        <a href="" @click.prevent="">
          <fa icon="xmark"></fa>
        </a>
      </span>
    </div>
  </div>
  <table class="container">
    <thead>
      <tr>
        <th>
          <h1>Title</h1>
        </th>
        <th>
          <h1>Artist</h1>
        </th>
        <th>
          <h1>Album</h1>
        </th>
        <th>
          <h1>Preview</h1>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="el in allMusic">
        <td>{{ el.title }}</td>
        <td>{{ el.name }}</td>
        <td class="album">{{ el.album }}</td>
        <td>
          <button @click.prevent="searchMusicById(el.id)">Listen</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.search-box {
  display: flex;
  justify-content: center;
}

ul {
  display: block;
}

/* @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700); */

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #a7a1ae;
  background-color: #1f2739;
}

h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #4dc3fa;
}

h2 {
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  padding-bottom: 2em;
  color: #fb667a;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #fb667a;
  text-decoration: none;
}

.blue {
  color: #185875;
}
.yellow {
  color: #fff842;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
}

.container td {
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td,
.container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
}

.album {
  font-weight: normal;
  font-size: 10px;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: #323c50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #2c3446;
}

.container th {
  background-color: #1f2739;
}

.container td:first-child {
  color: #fb667a;
}

.container tr:hover {
  background-color: #464a52;
  -webkit-box-shadow: 0 6px 6px -6px #0e1119;
  -moz-box-shadow: 0 6px 6px -6px #0e1119;
  box-shadow: 0 6px 6px -6px #0e1119;
}

.container td:hover {
  background-color: #fff842;
  color: #403e10;
  font-weight: bold;

  box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px,
    #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: line;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
</style>