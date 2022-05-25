<script>
import { mapActions, mapState } from "pinia";
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";
import Weather from "../components/Weather.vue";
import { useDataNews } from "../stores/dataNews";
export default {
    components: {
        Card,
        Navbar,
        Weather
    },
    methods: {
        ...mapActions(useDataNews, ['fetchNews', 'Weather']),
        pagination(id){
            this.fetchNews(id)
        }
    },
    computed: {
        ...mapState(useDataNews, ['dataNews', 'pages', 'dataWeather'])
    },
    created() {
        this.fetchNews(1)
        this.Weather()
    }
}
</script>

<template>
    <Navbar 
    />
    <Weather 
    v-bind:cuaca="dataWeather"
    />
    <div class="row gx-3 gx-lg-4">
        <Card v-bind:news="dataNews" />
        <nav class="container1" aria-label="...">
            <ul v-for="(page, i) in pages" class="pagination pagination-sm">
                <li  class="page-item">
                    <a @click.prevent="pagination(i+1)" class="page-link" href>{{i+1}}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
.row {
    justify-content: start;
    margin-left: 110px;
    margin-top: 30px;
}
.container1 {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>