<script>

const baseUrl = "http://localhost:3000/";
import axios from "axios";
export default {
  name: 'detailVue',
  data() {
    return {
      video: {},
      price: ''
    };
  },
  name: "detailVue",
  async created() {
    try {
      const detail = await axios.get(
        `${baseUrl}products/${this.$route.params.id}/detail`
      );
      this.video = detail.data.data;

      this.video.price = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(+this.video.price);
      console.log(this.price, '<<<<<<<');
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<template>
  <div id="detail">
    <div id="box">
      <h1 style="text-align: center">{{ video.name }}</h1>
      <hr />
      <br />
      <img :src="video.imgUrl" id="video-image" alt="image" />
      <hr />
      <pre></pre>
      <h4 class="key">Jurusan : {{ video.Major.name }}<div></div></h4>
      <h4 class="key">Total Video : {{ video.totalVideo }}</h4>
      <h4 class="key">Harga : {{ video.price }}</h4>
      <br />
    </div>
  </div>
</template>

<style>

.key {
  margin-left: 20px;
}

#box {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  border: 1px solid;
  padding: 5px;
  border-radius: 25px;
}

#video-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-left: 50px;
}
#qr-code {
  margin-left: 150px;
  width: 50%;
  height: 50%;
  object-fit: cover;
}
</style>