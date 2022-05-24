<script>
import CardRoomComp from './CardRoomComp.vue';
export default {
  name: "RoomListComp",
  components: {
    CardRoomComp
  }
};
</script>

<template>
  <div class="room-list shadow bg-white mt-4">
    <div class="d-flex justify-content-between">
      <slot />
      <div class="w-25">
        <select class="form-select form-select-sm">
          <option selected disabled>Location</option>
          <option value="1">Jakarta</option>
          <option value="2">Bekasi</option>
          <option value="3">Bogor</option>
        </select>
      </div>
    </div>
    <CardRoomComp />
  </div>
</template>
