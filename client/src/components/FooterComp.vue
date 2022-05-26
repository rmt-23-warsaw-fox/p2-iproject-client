<script>
export default {
  name: "NavbarComp",
};
</script>

<template>
  <footer class="bg-dark text-white">
    <div class="footer">
        <h1>Rent Room</h1>
      <h3 class="text-center">Made By Dandi Rahmadani</h3>
      <p>&copy;{{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>
<style>
footer {
  width: 100%;
  margin-top: 4%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
    text-align: center;
    padding-top: 2%;
}
footer h1 {
    font-weight: 900;
    font-size: 22px;
}
footer h3 {
  font-size: 15px;
}
footer p {
    font-size: 12px;
}
</style>
