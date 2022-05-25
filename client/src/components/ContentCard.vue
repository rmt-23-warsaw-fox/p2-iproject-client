<script>
export default {};
</script>

<template>
  <div class="col-12 col-lg-4">
    <div class="card box-shadow my-5 mx-auto" style="width: 18rem">
      <img
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
        class="card-img-top"
        style="border-top-left-radius: 0px; border-top-right-radius: 0px"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Tulipe</h5>
        <hr />
        <p class="card-text">Some quick example</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="card box-shadow my-5 mx-auto" style="width: 18rem">
      <img
        src="https://nsm09.casimages.com/img/2021/06/26//21062602461725998217475199.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Tulipe</h5>
        <hr />
        <p class="card-text">Some quick example</p>
      </div>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="card box-shadow my-5 mx-auto" style="width: 18rem">
      <img
        src="https://nsm09.casimages.com/img/2021/06/26//21062602461725998217475199.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Tulipe</h5>
        <hr />
        <p class="card-text">Some quick example</p>
      </div>
    </div>
  </div>
</template>

<style>
.flex-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  cursor: pointer;
}

p {
  padding-bottom: 1rem;
}

h5 {
  font-weight: bold;
  color: #2b2b2b;
}

.box-shadow {
  -webkit-box-shadow: 0 1px 1px rgba(72, 78, 85, 0.6);
  box-shadow: 0 1px 1px rgba(72, 78, 85, 0.6);
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.box-shadow:hover {
  -webkit-box-shadow: 0 20px 40px rgba(72, 78, 85, 0.6);
  box-shadow: 0 20px 40px rgba(72, 78, 85, 0.6);
  -webkit-transform: translateY(-15px);
  -moz-transform: translateY(-15px);
  -ms-transform: translateY(-15px);
  -o-transform: translateY(-15px);
  transform: translateY(-15px);
}

.card {
  border-radius: 25px;
}

.card img {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.card svg {
  position: absolute;
  top: 19rem;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  filter: drop-shadow(2px -9px 4px rgba(0, 69, 134, 0.2));
}
.card:hover svg {
  filter: drop-shadow(2px -9px 4px rgba(0, 69, 134, 0.4));
}

i {
  position: absolute;
  top: 18rem;
  right: 2rem;
  color: white;
  font-size: 3rem;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    133deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(211, 210, 231, 1) 19%,
    rgba(11, 39, 73, 1) 100%
  );
  padding: 1rem;
  border-radius: 100%;
  transition: all 0.6s ease-in-out;
}

.card:hover i {
  transform: rotate(-180deg);
}

i:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.7) 0px 18px 36px -18px inset;
}
</style>
