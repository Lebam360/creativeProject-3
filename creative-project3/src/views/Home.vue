<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Vintage Movie Theatre</h1>
  </div>
  <div class="movie" v-for="movie in movies" :key="movie.id">
    <div class="info">
      <h1>{{movie.name}}</h1>
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
