<script>
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import { mapActions, mapStores } from "pinia";
import Card from '../components/card.vue';

export default {
  data() {
    return {
      favourites: [],
      item: 'buy'
    };
  },

  name: "favouriteVue",
  methods: {
    ...mapActions(useCounterStore, ['listsFavourite', 'addNumber']),
    ...mapStores(useCounterStore),

  },
  components: {
    Card,
  },
};
</script>

<template>
  <div id="cards-favourite">
    <card 
    :cardsProps="favourites"
    :itemsprops="item"
    />
  </div>
</template>
