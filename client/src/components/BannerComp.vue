<script>
export default {
  name: "BannerComp",
};
</script>

<template>
  <div class="banner">
    <img
      src="https://s7d2.scene7.com/is/image/ritzcarlton/jktrz-king-room-50682999?$XlargeViewport100pct$"
      alt="Banner"
    />
    <div class="layer d-flex justify-content-center align-items-center">
        <slot />
    </div>
  </div>
</template>
