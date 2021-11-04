<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="">
    <li class="pure-menu-item"><a @click="select('Sunday')" href="#" class="pure-menu-link">Sunday</a></li>
      <li class="pure-menu-item"><a @click="select('Monday')" href="#" class="pure-menu-link">Monday</a></li>
      <li class="pure-menu-item"><a @click="select('Tuesday')" href="#" class="pure-menu-link">Tuesday</a></li>
      <li class="pure-menu-item"><a @click="select('Wednesday')" href="#" class="pure-menu-link">Wednesday</a></li>
      <li class="pure-menu-item"><a @click="select('Thursday')" href="#" class="pure-menu-link">Thursday</a></li>
      <li class="pure-menu-item"><a @click="select('Friday')" href="#" class="pure-menu-link">Friday</a></li>
      <li class="pure-menu-item"><a @click="select('Saturday')" href="#" class="pure-menu-link">Saturday</a></li>
    </ul>
  </div>
  <MovieList :movies="movies" />
  <div v-if="movies.length == 0">
    <h1 class="title">Select a day above to browse by day.</h1>
    <img src="/images/film.png">
  </div>
</div>
</template>

<script>
import MovieList from "../components/MovieList.vue"
export default {
  name: 'Browse',
  components: {
    MovieList
  },
  data() {
    return {
      day_of_the_week: '',
    }
  },
  computed: {
    movies() {
      return this.$root.$data.movies.filter(movie => movie.day_of_the_week === this.day_of_the_week);
    }
  },
  methods: {
    select(day_of_the_week) {
      this.day_of_the_week = day_of_the_week;
    }
  }
}
</script>

<style scoped>
.pure-menu-link:hover {
  color: #404040;
}
.pure-menu-link {
  color: #BEBEBE;
}
</style>
