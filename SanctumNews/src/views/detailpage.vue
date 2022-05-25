<script>
import { mapActions, mapState } from 'pinia'
import { useDataNews } from '../stores/dataNews'
import Navbar from '../components/Navbar.vue'
export default {
    data(){
        return{

        }
    },
    methods: {
        ...mapActions(useDataNews, ['AddFavorite']),
        ...mapActions(useDataNews, ['Detail']),
        formatDate(date) {
            let lolo = new Date(date).toISOString().split("T")[0]
            let event = new Date(lolo);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return event.toLocaleDateString('id-ID', options)
        },
        clickFavorite(){
            this.AddFavorite()
        },
        clickFavorite(){
            this.AddFavorite()
        }
    },
    components: {
        Navbar
    },
    computed: {
        ...mapState(useDataNews, ['dataLink'])
    },
    created(){
        this.Detail()
    }
}
</script>

<template>
    <Navbar />
    <div class="box1 ">
        <div class="box-image">
            <img class="detail" :src=dataLink.thumbnail alt="" />
        </div>
        <div class="box-body">
            <p class="posted">{{formatDate(dataLink.date)}}</p>
            <h2>{{ dataLink.title }}</h2>
            <p class="text">{{ dataLink.description }} </p>
            <a href={{dataLink.link}} class="continue">Continue reading</a><br><br>
            <button type="button" @click="clickFavorite" class="btn btn-success">ADD TO FAVORITE</button>
        </div>
        <div class="cl">&nbsp;</div>
    </div>
    <div class="container mt-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-8">
                <div class="d-flex flex-column comment-section">
                    <div class="bg-white p-2">
                        <div class="d-flex flex-row user-info"><img class="rounded-circle"
                                src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                            <div class="d-flex flex-column justify-content-start ml-2"><span
                                    class="d-block font-weight-bold name">Marry Andrews</span><span
                                    class="date text-black-50">Shared publicly - Jan 2020</span></div>
                        </div>
                        <div class="mt-2">
                            <p class="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div class="bg-light p-2">
                        <div class="d-flex flex-row align-items-start"><img class="rounded-circle"
                                src="https://i.imgur.com/RpzrMR2.jpg" width="40"><textarea
                                class="form-control ml-1 shadow-none textarea"></textarea></div>
                        <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none"
                                type="button">Post comment</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<style>
.box1 {
    margin-top: 80px;
    margin-bottom: 30px;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(231, 231, 231);
}

.detail {
    margin-right: 40px;
}

.row1 {
    justify-content: start;
    align-items: center;
    margin-left: 10rem;
    flex-direction: column;

}
</style>