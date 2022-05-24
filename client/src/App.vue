<script>
import { RouterView, RouterLink } from 'vue-router'
import NavbarComp from './components/NavbarComp.vue'
export default {
  components: {
    RouterView,
    RouterLink,
    NavbarComp
  }
}
</script>

<template>
  <NavbarComp />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
    background-color: rgb(218, 213, 213);
    font-family: 'Poppins', sans-serif;
}

nav {
    height: 80px;
}

.carousel .carousel-item img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.sticky {
    position: sticky;
    top: 0;
    z-index: 100;
}

.search-room {
    padding: 10px 20px 20px 20px;
    border-radius: 15px;
}
.location, .date-from, .date-to, .room-type-select {
    width: 15%;
}

.form-label {
    font-size: 13px;
}

.room-list {
    border-radius: 15px;
    padding: 20px 30px;
}

.card {
    width: 300px;
    position: relative;
}

.card img{
    width: auto;
    object-fit: cover;
}

.room-type {
    position: absolute;
    right: 0;
    top: 0;
    padding: 2px 10px 6px 18px;
    border-bottom-left-radius: 15px;
    font-size: 15px;
}

.card-title {
    font-size: 18px;
    overflow-x: auto;
}
.text-desc {
    font-size: 13px;
}
.card-price {
    font-size: 16px;
}

.information {
    border-radius: 15px;
}

.information-left-1 img{
    max-width: 400px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

.information-left-2 img{
    max-width: 350px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.information-right {
    padding: 20px 50px;
}

.information-text {
    font-size: 14px;
    color: rgb(116, 116, 116);
    text-align: justify;
    text-justify: inter-word;
    list-style-type: none;
    padding-left: 0;
}

.far {
    color: rgb(30, 198, 41);
}

/* detail */
.banner {
    position: relative;
}

.banner img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 102;
}

.layer h1 {
    font-size: 4em;
    font-weight: 900;
}

.images-left img {
    width: 500px;
    height: 530px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

.room-detail {
    border-radius: 15px;
}

.room-detail .detail-right {
    padding: 20px 30px;
}

.detail-title {
    overflow-x: auto;
    font-size: 25px;
}

.detail-sub-title {
    font-size: 18px;
    color: rgb(130, 131, 131);
}

.text-14 {
    font-size: 14px;
}
.text-13 {
    font-size: 13px;
    list-style-type: none;
}
.feedback-list {
    border-radius: 15px;
    padding: 20px;
}
.feedback {
    padding: 10px 20px;
    background-color: antiquewhite;
    border-radius: 15px;
    margin-bottom: 10px;
}
.image-feedback img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.info-feedback {
    padding: 5px 20px;
}

.feedback-user {
    font-size: 20px;
    font-weight: 900;
}
.feedback-content {
    font-size: 13px;
}
.feedback-date {
    font-size: 11px;
    color: darkgray;
}

/* search */
.search {
    border-radius: 15px;
}
.image-search img {
    width: 300px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
.info-search {
    padding: 10px 30px;
}
.info-search h3{
    font-size: 18px;
    font-weight: 900;
}
.info-search h5 {
    font-size: 13px;
}

/* login */

.wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
}

.content-form {
    background-color: white;
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   
}
</style>