<script>
export default {
  name: "LoadingComp",
}
</script>
<template>
  <div class="loader">
    <div class="balls">
      <div class="ball bg-danger"></div>
      <div class="ball bg-warning"></div>
      <div class="ball bg-primary"></div>
    </div>
    <span>Please wait ...</span>
  </div>
</template>
<style>
.loader {
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-weight: 700;
}

.balls {
  display: flex;
  gap: 12px;
}

.loader span {
  font-size: larger;
  color: #fff;
}

.ball {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #000;
  animation: bounce 0.3s alternate infinite;
}

.ball:nth-child(2) {
  animation-delay: 0.1s;
}

.ball:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes bounce {
  from {
    transform: scaleX(1.25);
  }

  to {
    transform: translateY(-50px) scaleX(1);
  }
}
</style>
