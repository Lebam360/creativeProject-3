<template>
  <div class="about">
    <h1> Today is  {{ getDayOfWeek() }} </h1>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue"
import moment from 'moment';
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
      let today  = moment().format('dddd') /*need to change to today*/
      return this.$root.$data.movies.filter(movie => movie.day_of_the_week === today);
    },
    moment: () => moment,
  },
  methods: {
    select(day_of_the_week) {
      this.day_of_the_week = day_of_the_week;
    },
    getDayOfWeek : function () {
      return moment().format('dddd');
    }
  }
}
</script>
