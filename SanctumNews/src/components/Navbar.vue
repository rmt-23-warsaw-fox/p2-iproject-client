<script>
import { mapActions } from 'pinia'
import { useDataNews } from '../stores/dataNews'
import { RouterLink } from 'vue-router'
export default {
    data() {
        return {
            token: localStorage.getItem("access_token"),
            page: this.$router.currentRoute._rawValue.name
        }
    },
    methods: {
        ...mapActions(useDataNews, ['Category']),
        Logout() {
            this.$router.push("/")
            localStorage.clear()
            this.token = localStorage.getItem("access_token")
        },
        clickCategory(id){
            this.Category(id)
        }
    },
    computed:{
        RouterLink
    },
    props: []
}
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <img class="icon" src="../assets/ini.png" alt="">
            <a class="navbar-brand" href="">SactumNews</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul v-if="this.page=='home'" class="navbar-nav ms-auto mb-2 mb-lg-0" id="category">
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('terbaru')" :to="{name : 'home', query :{ category : 'terbaru'}}" class="nav-link active" aria-current="page" href>Home</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('nasional')" :to="{name : 'home', query :{ category : 'nasional'}}" class="nav-link active" aria-current="page" href>Nasional</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('internasional')" :to="{name : 'home', query :{ category : 'internasional'}}" class="nav-link active" aria-current="page" href>Internasional</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('ekonomi')" :to="{name : 'home', query :{ category : 'ekonomi'}}" class="nav-link active" aria-current="page" href>Ekonomi</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('olahraga')" :to="{name : 'home', query :{ category : 'olahraga'}}" class="nav-link active" aria-current="page" href>Olahraga</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('teknologi')" :to="{name : 'home', query :{ category : 'teknologi'}}" class="nav-link active" aria-current="page" href>Teknologi</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('hiburan')" :to="{name : 'home', query :{ category : 'hiburan'}}" class="nav-link active" aria-current="page" href>Hiburan</RouterLink></li>
                    <li class="nav-item"><RouterLink @click.prevent="clickCategory('gayaHidup')" :to="{name : 'home', query :{ category : 'gayaHidup'}}" class="nav-link active" aria-current="page" href>Gaya Hidup</RouterLink></li>
                </ul>

                <div id="logout">
                    <button v-if="this.token" type="button" id="" style="margin-right:10px;" class="btn btn-primary">Favorite</button>
                    <button v-if="this.token" @click="Logout" type="button" id="" class="btn btn-danger">LogOut</button>
                    <button v-if="!this.token" @click="this.$router.push('/login')" type="button" id="" style="margin-right:10px;" class="btn btn-primary">SIGN IN</button>
                    <button v-if="!this.token" @click="this.$router.push('/register')" type="button" id="" class="btn btn-danger">SIGN UP</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
.icon {
    width: 30px;
    margin: 10px;
}

#logout {
    margin-left: 50px;
}
#category {
    margin-right: 90px;
}
</style>