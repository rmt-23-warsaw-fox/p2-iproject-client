<script>
export default {
  props: ["gadget"],
};
</script>

<template>
  <div class="col">
    <div class="bg-light text-center rounded p-3">
      <div class="my-3">
        <h2 class="display-5">{{ gadget.phone_name }}</h2>
      </div>
      <img class="img-fluid" v-bind:src="gadget.image" alt="Responsive image" />
    </div>
  </div>
</template>
