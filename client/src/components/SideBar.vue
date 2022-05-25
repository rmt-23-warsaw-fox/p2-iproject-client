<script>
export default {
  props: ["username"],
};
</script>

<template>
  <div class="sidebar">
    <div
      class="ml-auto p-2"
      style="width: 280px; height: 100vh; background-color: #fbf8f1"
    >
      <div class="img bg-wrap text-center py-4">
        <div class="user-logo">
          <h3>{{ username }}</h3>
        </div>
      </div>
      <hr />
      <span class="fs-7">User List</span> <br />
    </div>
  </div>
</template>

<style>
.sidebar {
  position: fixed;
  right: 150px;
  top: 100px;
}
</style>
