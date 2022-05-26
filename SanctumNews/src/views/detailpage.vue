<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useDataNews } from '../stores/dataNews'
import { useDataComment } from '../stores/commentar'
import Navbar from '../components/Navbar.vue'
export default {
    data() {
        return {
            commentary: '',
            access : localStorage.getItem('access_token'),
        }
    },
    methods: {
        ...mapActions(useDataNews, ['AddFavorite']),
        ...mapActions(useDataNews, ['Detail']),
        ...mapActions(useDataComment, ['Comments']),
        formatDate(date) {
            let lolo = new Date(date).toISOString().split("T")[0]
            let event = new Date(lolo);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return event.toLocaleDateString('id-ID', options)
        },
        clickFavorite() {
            this.AddFavorite()
        },
        clickFavorite(thumbnail, description, title) {
            this.thumbnailfav = thumbnail,
                this.descriptionfav = description
            this.titlefav = title
            this.AddFavorite()
        },
        clickComment() {
            this.comments = this.commentary
            this.Comments()
            this.commentary = ""
        }
    },
    components: {
        Navbar
    },
    computed: {
        ...mapState(useDataNews, ['dataLink']),
        ...mapWritableState(useDataNews, ['titlefav', 'descriptionfav', 'thumbnailfav']),
        ...mapState(useDataComment, ['dataComment']),
        ...mapWritableState(useDataComment, ['comments'])
    },
    created() {
        this.Detail()
        this.Comments()
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
            <p class="posted">{{ formatDate(dataLink.date) }}</p>
            <h2>{{ dataLink.title }}</h2>
            <p class="text">{{ dataLink.description }} </p>
            <a :href=dataLink.link class="continue">Continue reading</a><br><br>
            <button v-if="this.access" type="button" @click="clickFavorite(dataLink.thumbnail, dataLink.description, dataLink.title)"
                class="btn btn-success">ADD TO FAVORITE</button><br><br>

        </div>
        <div class="cl">&nbsp;</div>
    </div>

    <div v-if="this.access" class="container mt-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-8">
                <div class="d-flex flex-column comment-section">
                    <!-- LOOPING -->
                    <div v-for="data in dataComment" class="bg-white p-2">
                        <div class="d-flex flex-row user-info">

                            <div class="d-flex flex-column justify-content-start ml-2">
                               <b><span class="d-block font-weight-bold name">{{ data.User.username }}</span></b>
                                <span class="date text-black-50">{{ formatDate(data.createdAt) }}</span>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p class="comment-text">{{ data.textcomment }}</p>
                        </div>
                    </div>


                    <div class="bg-light p-2">

                        <div class="d-flex flex-row align-items-start">
                            <textarea v-model="commentary" class="form-control ml-1 shadow-none textarea">

                    </textarea>
                        </div>

                        <div class="mt-2 text-right">
                            <button @click="clickComment" class="btn btn-primary btn-sm shadow-none" type="button">Post
                                comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<style>
i {
    margin-right: 10px;
}

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