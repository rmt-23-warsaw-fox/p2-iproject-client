<script>
export default {
    name: "SearchComp"
}
</script>

<template>
<div
        class="search-room bg-white d-flex justify-content-around shadow mt-4 sticky"
      >
        <div class="location">
          <label for="location" class="form-label">Location</label>
          <input
            type="text"
            class="form-control"
            id="location"
            placeholder="Mau Sewa Dimana ?"
          />
        </div>
        <div class="vr"></div>
        <div class="date-from">
          <label for="location" class="form-label">From Date</label>
          <input
            type="date"
            class="form-control"
            id="from-date"
            placeholder="From Date"
          />
        </div>
        <div class="vr"></div>
        <div class="date-to">
          <label for="location" class="form-label">To Date</label>
          <input
            type="date"
            class="form-control"
            id="to-date"
            placeholder="To Date"
          />
        </div>
        <div class="vr"></div>
        <div class="room-type-select">
          <label for="location" class="form-label">Room Type</label>
          <select class="form-select">
            <option selected disabled>Room Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="vr"></div>
        <div class="d-flex align-items-center">
          <button class="btn btn-warning">Search Room</button>
        </div>
      </div>
</template>