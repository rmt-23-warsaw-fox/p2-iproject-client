<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/footer.vue";
import { mapActions, mapState } from "pinia";
import { mainStore } from "../stores/mainStore.js";

export default {
  name: "EntityView",
  components: {
    NavBar,
    Footer,
  },
  methods: {
    ...mapActions(mainStore, ["getSongDetails"]),
  },
  async created() {
    console.log(this.$route.params.id);
    await this.getSongDetails(this.$route.params.id);
  },
  computed: {
    ...mapState(mainStore, ["currentSong"]),
  },
};
</script>
<template>
  <div
    class="w-[100%] bg-[#f2f2f2] min-h-screen h-max min-w-[1240px] flex justify-center"
  >
    <div class="min-h-screen h-max w-[1240px]">
      <NavBar />
      <div class="bg-white h-[480px] w-[100%] flex">
        <img
          :src="currentSong.currentSong.imageUrl"
          alt="Song Cover"
          class="w-[50%] h-[100%] song-cover"
        />
        <div class="w-[50%] h-[100%] flex flex-col items-center p-8">
          <p class="text-[4rem] font-bold">{{currentSong.currentSong.title}}</p>
          <audio controls loop autoplay class="bg-gray-700 py-3 px-5 w-[360px]">
            <source
              :src="currentSong.currentSong.musicUrl"
              type="audio/ogg"
            />
            Your browser dose not Support the audio Tag
          </audio>
          <div class="container-audio">
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
            <div class="colum1">
              <div class="row"></div>
            </div>
          </div>
        </div>
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

/*Credit to Rofida Abd Elrahman*/
.container-audio {
  width: 66%;
  height: auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #eee;
  color: #444;
  margin: 20px auto;
  overflow: hidden;
}

.container-audio .colum1 {
  width: 23px;
  height: 5em;
  border-radius: 5px;
  margin: 0 10px 0 0;
  display: inline-block;
  position: relative;
}
.container-audio .colum1:last-child {
  margin: 0;
}
.container-audio .colum1 .row {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: linear-gradient(to up, #7700aa, #8800ff);
  position: absolute;
  -webkit-animation: Rofa 10s infinite ease-in-out;
  animation: Rofa 10s infinite ease-in-out;
  bottom: 0;
}
.container-audio .colum1:nth-of-type(1) .row {
  -webkit-animation-delay: 3.99s;
  animation-delay: 3.99s;
}
.container-audio .colum1:nth-of-type(2) .row {
  -webkit-animation-delay: 3.8s;
  animation-delay: 3.8s;
}
.container-audio .colum1:nth-of-type(3) .row {
  -webkit-animation-delay: 3.7s;
  animation-delay: 3.7s;
}
.container-audio .colum1:nth-of-type(4) .row {
  -webkit-animation-delay: 3.6s;
  animation-delay: 3.6s;
}
.container-audio .colum1:nth-of-type(5) .row {
  -webkit-animation-delay: 3.5s;
  animation-delay: 3.5s;
}
@-webkit-keyframes Rofa {
  0% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);
    background-color: yellow;
  }

  5% {
    height: 100%;
    -webkit-transform: translatey(15px);
    transform: translatey(15px);
    background-color: fuchsia;
  }
  10% {
    height: 90%;
    transform: translatey(0);
    -webkit-transform: translatey(0);
    background-color: bisque;
  }

  15% {
    height: 80%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  20% {
    height: 70%;
    -webkit-transform: translatey(0);
    transform: translatey(0);
    background-color: cornflowerblue;
  }
  25% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);
    background-color: cornflowerblue;
  }
  30% {
    height: 70%;
    -webkit-transform: translatey(0);
    transform: translatey(0);
    background-color: cornflowerblue;
  }
  35% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  40% {
    height: 60%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  45% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  50% {
    height: 50%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  55% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  60% {
    height: 40%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  65% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  70% {
    height: 30%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  75% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  80% {
    height: 20%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  85% {
    height: 0%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  90% {
    height: 10%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  95% {
    height: 5%;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
  100% {
    height: 0;
    -webkit-transform: translatey(0);
    transform: translatey(0);

    background-color: cornflowerblue;
  }
}
</style>
