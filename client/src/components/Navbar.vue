<script>
import { mapActions } from 'pinia';
import { useRadioStore } from '../stores/counter';

export default {
  methods: {
    ...mapActions(useRadioStore, ['getAllRadio','searchSong','move'])
  }
}
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-dark p-3 bg-dark" id="headerNav">
  <div class="container-fluid">
    <a class="navbar-brand d-block d-lg-none" href="#">
      <img src="./icons/Radioox.png" height="80" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class=" collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto ">
        <li class="nav-item">
          <a class="nav-link mx-2 " href="#" @click.prevent="move('map')" >Radio Map</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2 " href="#" @click.prevent="getAllRadio">Radios</a>
        </li>

        <li class="nav-item d-none d-lg-block">
          <a class="nav-link mx-2" href="#">
            <!-- <img src="./icons/Radioox.png" height="40" /> -->
            <img src="./icons/New.png" height="40" />

          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#" @click.prevent="move('music')">Music</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>