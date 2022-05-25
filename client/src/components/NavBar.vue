<script>
export default {};
</script>

<template>
  <section class="container-sm sticky-top" style="background-color:#808080;">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"> 
        <h3>HelloWorld!</h3>
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav ms-auto align-items-center .bg-gradient-light text-white"
        >
          <li class="nav-item">
            <a class="nav-link mx-2" href="#!"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a
                href="#"
                class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="50"
                  height="50"
                  class="rounded-circle"
                />
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
                style=""
              >
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <hr>
    </nav>
  </section>
</template>
<style>

</style>


