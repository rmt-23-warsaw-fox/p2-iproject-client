<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/footer.vue";
export default {
    name: "EntityView",
    components: {
        NavBar,
        Footer,
    },
};
</script>
<template>
    <div class="w-[100%] bg-[#f2f2f2] min-h-screen h-max min-w-[1240px] flex justify-center">
        <div class="min-h-screen h-max w-[1240px]">
            <NavBar />
            <div class="bg-white h-[480px] w-[100%] flex">
                <img src="../assets/Khalid.jpg" alt="Song Cover" class="w-[50%] h-[100%] song-cover" />
                <div class="w-[50%] h-[100%]"></div>
            </div>
            <div class="w-[100%] flex">
                <div class="w-[50%] h-[100%]"></div>
                <div class="w-[50%] h-[100%]"></div>
            </div>
        <Footer />
        </div>
    </div>
</template>

<style>
.song-cover {
    object-fit: cover;
}
</style>