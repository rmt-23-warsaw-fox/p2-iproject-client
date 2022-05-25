<script>
import { RouterLink } from "vue-router";
export default {
  name: "HomeView",
  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="w-[100%] bg-[#f2f2f2] min-h-[100vh] h-max min-w-[1240px] flex justify-center"
  >
    <div class="min-h-[100vh] h-max w-[1240px]">
      <!-- page-header -->
      <div class="w-[100%] h-[400px] guitar-background flex flex-col">
        <div class="navbar text-white bg-black/30 font-jakarta">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">Stella</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li><RouterLink to="/login">Sign In</RouterLink></li>
              <li><RouterLink to="/register">Create an account</RouterLink></li>
            </ul>
          </div>
        </div>
        <div
          class="text-white font-jakarta w-[100%] flex flex-col items-center justify-center bg-black/30 h-[100%]"
        >
          <h1 class="font-bold text-[3rem]">Find The Next Big Hit!</h1>
        </div>
      </div>
      <div
        class="h-[720px] w-[100%] bg-white flex flex-col items-center p-8"
      >
        <div class="flex border-4 my-5">
          <input
            type="text"
            placeholder="Search for tracks"
            class="input bg-[#f2f2f2] w-[480px]"
          />
          <button class="bg-[#f2f2f2] px-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
              ></path>
            </svg>
          </button>
        </div>
        <h1 class="font-semibold text-[3rem]">Our Latest Releases</h1>
        <div class="grid grid-cols-4 gap-8">
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
                alt="Movie"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div class="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="../assets/rave-party.jpg"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Song</h2>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[100%] h-[380px] bg-[#372729] flex">
        <div class="h-[100%] w-[50%]">
          <img
            src="../assets/headphones.jpg"
            alt="headphones"
            class="h-[100%] w-[100%]"
          />
        </div>
        <div
          class="h-[100%] w-[50%] text-white flex flex-col justify-center items-center text-left p-3 px-8 leading-7"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          explicabo ipsa rerum numquam quo dignissimos eius vitae
          exercitationem, quia aliquid eligendi, aut repudiandae rem commodi
          magnam illo optio incidunt nobis. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cum iure animi, deserunt vel quae,
          sapiente, incidunt iste quos voluptate tenetur quis recusandae
          voluptas atque vero esse eveniet. A, libero eum!
        </div>
      </div>
      <!-- footer -->
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Audy Wallace Siegle</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.object-fit {
  object-fit: cover;
}
.guitar-background {
  background-image: url(../assets/guitar.jpg);
  background-size: cover;
}
</style>
