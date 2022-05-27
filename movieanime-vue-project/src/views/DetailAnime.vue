<script>
import { mapState } from 'pinia';
import { useAllInOne } from '../stores';

export default {
  computed: {
    ...mapState(useAllInOne, ['animeDetail']),
  },
};
</script>

<template>
  <div style="margin-top: 90px">
    <div class="container" style="margin-top: 90px">
      <div class="container">
        <div
          class="row"
          style="width: 85vw; margin-bottom: 20px; outline-style: groove; border-radius: 5px"
        >
          <div class="col-1" style="padding-left: 0">
            <img
              :src="`${animeDetail.images.jpg.image_url}`"
              :alt="animeDetail.title"
              class="card-img-top"
              style="
                width: 135px;
                height: 15vw;
                object-fit: cover;
                border-radius: 5px;
                cursor: pointer;
              "
            />
          </div>
          <div class="col" style="margin-top: 10px; margin-left: 30px">
            <h5 style="cursor: pointer">{{ animeDetail.title }}</h5>
            <p>{{ animeDetail.synopsis }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
