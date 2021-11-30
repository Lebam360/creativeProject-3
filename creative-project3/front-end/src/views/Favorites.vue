<template>
<div class="about">
  <h1 class="title">Favorites</h1>
  <p>Here is what the crowd enjoys! Feel free to add your own favorites!</p>
  <div class="wrapper">

      <div class="movies">
        <div class="movie" v-for="movie in this.$root.$data.favs" :key="movie.id">
          <div class="image">
            <img :src="'/images/posters/'+movie.image">
          </div>
          <div class="info">
            <h1>{{movie.title}}</h1>
            <h6>{{movie.company_name}}</h6>
            <h5>{{movie.genre}}</h5>
          </div>
          <div class="time">
            <h2>{{movie.day_of_the_week}}</h2>
            <h2>{{movie.time}}</h2>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MovieList',
  props: {
    movies: Array,
    favs: Array
  },
  computed: {
    favsItems() {
      return this.$root.$data.favs;
    }
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movies {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.movie img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.movie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background-color: #800000;
  color: #bacbdd;
  padding: 10px 30px;
  height: 220px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  font-size: 12px;
}

.time h2 {
  margin-right: 20px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.time {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
