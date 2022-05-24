<script>
export default {
  props: ["gadget"],
};
</script>

<template>
  <div class="col text-center">
    <div class="card bg-light">
      <div class="p-5">
        <img v-bind:src="gadget.image" class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h2 class="card-title">{{ gadget.phone_name }}</h2>
      </div>
    </div>
  </div>
</template>
