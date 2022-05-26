<script>
// import carousel from "vue-owl-carousel";
import CardRoomComp from "./CardRoomComp.vue";
import { useAccomodationStore } from "../stores/accomodation";
import { mapActions, mapState, mapWritableState } from "pinia";

export default {
  name: "RoomListComp",
  components: {
    CardRoomComp,
  },
  data() {
    return {
      provinceId: 31,
    };
  },
  computed: {
    ...mapState(useAccomodationStore, ["accomodations", "cities","province"]),
    ...mapWritableState(useAccomodationStore, ['city']),
    totalSlide() {
      const totalSlide = !(this.accomodations % 4)
        ? this.totalMovies / 4
        : Math.ceil(this.totalMovies / 4);
      return totalSlide;
    },
  },
  watch: {
    provinceId() {
      this.fetchPublicApiCityOfJava(this.provinceId);
      this.fetchPublicApiProvinceOfJava(this.provinceId);
    },
    city() {
      this.fetchAccomodationByCity();
    },
    province() {
      this.fetchAccomodationByCity();
    }
  },
  methods: {
    ...mapActions(useAccomodationStore, [
      "fetchAllAccomodation",
      "fetchPublicApiCityOfJava",
      "fetchPublicApiProvinceOfJava",
      "fetchAccomodationByCity"
    ]),
    showDetail(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
  },
  created() {
    this.fetchAllAccomodation();
    this.fetchPublicApiCityOfJava(this.provinceId);
    this.fetchPublicApiProvinceOfJava(this.provinceId);
  },
};
</script>

<template>
  <div class="room-list shadow bg-white mt-4">
    <div class="d-flex justify-content-between">
      <slot />
      <div class="d-flex justify-content-between w-50">
        <div class="w-100">
          <select class="form-select form-select-sm" v-model="provinceId">
            <option value="31">Jakarta</option>
            <option value="32">Jawa Barat</option>
            <option value="33">Jawa Tengah</option>
            <option value="34">DI Yogyakarta</option>
            <option value="35">Jawa Timur</option>
          </select>
        </div>
        <div class="vr mx-3"></div>
        <div class="w-100">
          <select class="form-select form-select-sm" v-model="city">
            <option selected disabled>City</option>
            <option v-for="city in cities" :key="city.id" :value="city.nama">
              {{ city.nama }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap gap-2">
      <CardRoomComp
        v-for="accomodation in accomodations"
        :key="accomodation.id"
        :accomodation="accomodation"
        @click="showDetail(accomodation.id)"
      />
    </div>
  </div>
</template>

<style>
.carousel-control-prev {
  position: absolute;
  left: -110px;
}
.carousel-control-next {
  position: absolute;
  right: -110px;
}
</style>
