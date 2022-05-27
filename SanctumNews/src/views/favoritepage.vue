<script>
import { mapActions, mapState } from 'pinia'
import Navbar from '../components/Navbar.vue'
import { useDataNews } from '../stores/dataNews'
export default{
    components :{
        Navbar
    },
    methods :{
        ...mapActions(useDataNews, ['showFavorite', 'Delete']),
        clickDelete(params){
            this.Delete(params);
        }
    },
    computed:{
        ...mapState(useDataNews, ['dataFavorite'])
    },  
    created(){
        this.showFavorite()
    }
}
</script>

<template>
    <Navbar />
    <article>
         <div class="container bcontent">
        <div v-for="data in dataFavorite" class="card" id="fav" style="width: 1200px;">
            <div class="row no-gutters">
                <div class="col-sm-5">
                    <img style="margin-bottom: 30px;" class="card-img" :src=data.thumbnail alt="Suresh Dasari Card">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">{{data.title}}</h5>
                        <p class="card-text"> {{data.description}}</p>
                        <a :href=data.LinkId class="btn btn-primary">Read More</a>
                        <button style="margin-left: 10px;" @click="clickDelete(data.LinkId)" type="button" class="btn btn-danger">Remove From Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </article>

</template>

<style>
.bcontent{
    margin-top: 70px;
}
#fav{
    margin-bottom: 30px;
}
</style>

