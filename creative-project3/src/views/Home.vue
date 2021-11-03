<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <h1 class="title">Vintage Movie Theatre</h1>
    <img src="/images/film.png">
    <div class="intro">
      <h2>Welcome to Vintage Movie Theatre!</h2>
      <p>Here at Vintage Movie Theatre we never forget great classic films! Or even movies that aren't <em>that</em>
        old, but aren't showing in current theatres anymore. We allow you to have the whole movie theatre
        experience with many throwback movies. Click on the different tabs to browse through our many options!
        The "Now Showing" tab will display the movies that are playing today and their show times. In the "Browse"
        tab, you can search for movies by what day they will be showing. To learn more about us, click on the "About"
        page!</p>
    </div>
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="info">
        <h1>{{movie.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array
  }
}
</script>

<style>
.title {
color: #fff;
text-align: center;
text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6,
  0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
}
</style>
