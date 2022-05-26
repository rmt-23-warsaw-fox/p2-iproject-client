<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useRadioStore } from "../stores/counter";
import Radio from "./Radio.vue";
export default {
  components: {
    Radio,
  },
  methods: {
    ...mapActions(useRadioStore, [
      "getAllRadio",
      "getRadioById",
      "clearSearch",
    ]),
  },
  computed: {
    ...mapState(useRadioStore, ["listRadio", "totalPage"]),
    ...mapWritableState(useRadioStore, ["searchName"]),
  },
  created() {
    this.getAllRadio();
  },
};
</script>

<template>
  <h1 class="mt-5">
    <span class="yellow">List all radio in indonesia</span>
  </h1>
  <div class="search-box">
    <div class="input-group rounded w-25">
      <input
        v-model="searchName"
        type="search"
        class="form-control rounded"
        placeholder="Search Radio Name"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <a href="" @click.prevent="getAllRadio">
          <fa icon="search">Search</fa>
        </a>
      </span>
      <span class="input-group-text border-0" id="search-addon">
        <a href="" @click.prevent="clearSearch">
          <fa icon="xmark"></fa>
        </a>
      </span>
    </div>
  </div>
  <table class="container">
    <thead>
      <tr>
        <th>
          <h1>Radio Name</h1>
        </th>
        <th>
          <h1>State</h1>
        </th>
        <th>
          <h1>Votes</h1>
        </th>
        <th>
          <h1>Listen</h1>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="el in listRadio">
        <td>{{ el.name }}</td>
        <td>{{ el.state }}</td>
        <td>{{ el.votes }}</td>
        <td>
          <button @click.prevent="getRadioById(el.stationId)">Listen</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div id="app" class="container">
    <ul class="page">
      <li class="page__numbers" v-for="el in totalPage">
        <a
          href=""
          @click.prevent="getAllRadio(el)"
          style="text-decoration: none; color: white"
        >
          {{ el }}
        </a>
      </li>
    </ul>
  </div>
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

/* pagination */

ul {
  list-style-type: none;
}

.items-list {
  max-width: 90vw;
  margin: 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  justify-content: center;
  align-content: center;
}
@media only screen and (max-width: 600px) {
  .items-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.item {
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--greyDark);
  cursor: pointer;
}
.item span {
  background: #ffffff;
  box-shadow: 0 0.8rem 2rem rgba(90, 97, 129, 0.05);
  border-radius: 0.6rem;
  padding: 2rem;
  font-size: 3rem;
  transition: all 0.3s ease;
}
.item:hover span {
  transform: scale(1.2);
  color: var(--primary);
}
.item p {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: var(--greyLight);
}

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin: 3rem;
  border-radius: 0.6rem;
  background: #6f6f6f;
  box-shadow: 0 0.8rem 2rem rgba(90, 97, 129, 0.05);
}
.page__numbers,
.page__btn,
.page__dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  font-size: 1.4rem;
  cursor: pointer;
}
.page__dots {
  width: 2.6rem;
  height: 2.6rem;
  color: var(--greyLight);
  cursor: initial;
}
.page__numbers {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.4rem;
}
.page__numbers:hover {
  color: var(--primary);
}
.page__numbers.active {
  color: #ffffff;
  background: var(--primary);
  font-weight: 600;
  border: 1px solid var(--primary);
}
.page__btn {
  color: var(--greyLight);
  pointer-events: none;
}
.page__btn.active {
  color: var(--greyDark);
  pointer-events: initial;
}
.page__btn.active:hover {
  color: var(--primary);
}
</style>
