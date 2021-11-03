<template>
  <div class="about">
    <h1>This is a Now Showing page</h1>
    <MovieList :movies="movies" />
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
      return this.$root.$data.movies;
    },
  },
  methods: {
    select(day_of_the_week) {
      this.day_of_the_week = day_of_the_week;
    },
  }
}
</script>
