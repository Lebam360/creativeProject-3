<template>
  <div class="about">
    <h1 class="title"> Today is  {{ getDayOfWeek() }} </h1>
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
      let movieArray = this.$root.$data.movies.filter(movie => movie.day_of_the_week === today);
      let orgainzedArray = new Array;
      movieArray.forEach(function(item) {
        if(orgainzedArray.length == 0) { // add the first item if the array is empty
        orgainzedArray.push(item);
        }
        else {
          orgainzedArray.push(item);
          let time = item.time;
          const thisItem = (element) => element.time == item.time;
          let index = orgainzedArray.findIndex(thisItem);
          if (index != 0) {
            let prevTime = orgainzedArray[index-1].time;
            if (time < prevTime){
              // if the previous time is greater than the current time swap values
              let temp = orgainzedArray[index];
              orgainzedArray[index] = orgainzedArray[index-1];
              orgainzedArray[index-1] = temp;
           }
          }
        }
      });
      console.log(orgainzedArray);
      return orgainzedArray;
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
