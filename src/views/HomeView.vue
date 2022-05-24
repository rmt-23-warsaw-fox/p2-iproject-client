<script>
export default {
  name: "HomeView",
};
</script>
<template>
  <div
    class="w-[100%] bg-[#f2f2f2] min-h-[100vh] h-max min-w-[1240px] flex justify-center"
  >
    <div class="min-h-[100vh] h-max w-[1240px]">
      <!-- page-header -->
      <div class="w-[100%] h-[400px] guitar-background flex flex-col items-center justify-center">
        <div class="navbar text-white bg-black/30 font-jakarta">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal p-0">
              <li><a>Sign In</a></li>
              <li><a>Create an account</a></li>
            </ul>
          </div>
        </div>
        <div class="text-white font-jakarta w-[100%] flex flex-col items-center justify-center">
            <p>Find The Next Big Hit!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ullam harum, voluptatem sapiente dolorum repudiandae iste est, enim unde necessitatibus, ex dolores quibusdam impedit! Vitae nemo omnis odio harum! Quos.</p>
        </div>
      </div>
      <!-- music carousel -->
      <div
        class="h-[720px] w-[100%] bg-white flex flex-col items-center justify-center"
      >
        <div class="flex">
          <input
            type="text"
            placeholder="Search for artists, bands, tracks"
            class="input input-bordered w-full max-w-xs bg-[#f2f2f2]"
          />
          <button>
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
      </div>
      <!-- creator section -->
      <div class="w-[100%] h-[380px] bg-[#372729]"></div>
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
