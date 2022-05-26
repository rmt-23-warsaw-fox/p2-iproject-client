<script>
import { mapActions, mapWritableState } from 'pinia'
import { useDataNews } from '../stores/dataNews'
export default {
    data(){
        return{
            search : ""
        }
    },
    props: ['cuaca'],
    methods :{
        ...mapActions(useDataNews ,['Weather']),
        clickWeather(){
            this.searchWeather = this.search
            this.Weather()
        }
    },
    computed : {
        ...mapWritableState(useDataNews, ['searchWeather'])
    }
}
</script>

<template>
    <section id="Weather" class="vh-40" style="background-color: #f5f6f7;">
        <div class="container py-5 h-100">
            <div class="rows d-flex justify-content-center h-100">
                <div class="col-md-5 col-lg-8 col-xl-7">
                    <div class="card bg-dark text-white" style="border-radius: 40px;">
                        <div v-for="data in cuaca.weather" class="card-img-overlay p-5">
                            <h2 class="mb-0">{{ cuaca.name }}</h2>
                            <p class="display-2 my-3">{{ cuaca.main.temp }}°C</p>
                            <p class="mb-2">Feels Like: <strong>{{ cuaca.main.temp }} °C</strong></p>
                            <p class="mb-2">Temperature Min: <strong>{{ cuaca.main.temp_min }}°C</strong> &nbsp;
                                Temperature Max:<strong>{{ cuaca.main.temp_max }}°C</strong></p>
                            <h5>{{ data.main }}</h5>
                            <h6>Description : {{ data.description }}</h6><br>
                            <input v-model="search" type="text" class="form-control border-primary" style="color: #7a7a7a" placeholder="Search by Country OR city"  />
                            <button @click="clickWeather" class="btn btn-primary text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.card-img-overlay {
    position: relative;
}

.card-img-overlay {
    text-align: center;
}

#Weather {
    margin-top: 30px;
}
</style>