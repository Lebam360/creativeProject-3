<template>
<div class="wrapper">
  <div class="movies">
    <div class="movie" v-for="movie in movies" :key="movie.id">

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
      <div class="favorites">
        <button class="auto" v-on:click="addItem(movie)">Add to Favorites</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MovieList',
  data() {
    return {
      addedItem: null,
      favoriteItems: [],
    }
  },
  props: {
    movies: Array,
    favs: Array
  },
  created() {
    this.getItems();
  },
  computed: {
    favsItems() {
      return this.$root.$data.favs;
    }
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.$root.$data.favs = response.data;
        return true;
      } catch (error) {
        console.log(error);
        console.log("I am an error getting items")
      }
    },
    isIncluded(item) {
      this.getItems();
      if (this.$root.$data.favs.length == 0)  {
        return false;
      }
      for (let i = 0; i < this.$root.$data.favs.length; i++) {
        if (item.id== this.$root.$data.favs[i].origId) {
          return true;
        }
      }
      return false;
    },
    async getRanking(item) {
      try {
        let retreiveRanking = 0;
        for (let i = 0; i < this.$root.$data.favs.length; i++) {
          if (item.title== this.$root.$data.favs[i].title) {
            retreiveRanking = this.$root.$data.favs[i];
          }
        }
        if (retreiveRanking != 0) {
          let response = await axios.get("/api/items/" + retreiveRanking._id);
          return response.data;
        }
        else {
          return 0;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addItem(item) {
      try {
        let included = this.isIncluded(item);
        if (included) {
          console.log("item already in database")
          // ranking++
          let favItem = await this.getRanking(item)
          if (favItem.ranking != 10) {
            await axios.put("/api/items/" + favItem._id, {
              ranking: favItem.ranking + 1,
            });
          }
        } else {
          let response = await axios.post('/api/items', {
            title: item.title,
            director_last_name: item.director_last_name,
            company_name: item.company_name,
            genre: item.genre,
            day_of_the_week: item.day_of_the_week,
            time: item.time,
            image: item.image,
            origId: item.id,
            ranking: 1, //as a defult value
          });
          this.addedItem = response.data;
          //attempt to fix rapid button clicking duplicate problem
          //dthis.$root.$data.favs.push(this.addedItem)
        }
      } catch (error) {
        console.log(error);
      }
      this.getItems();
    },
  }
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

button:hover{
  background-color: #808080;
}

button:focus{
  background-color: #F9E076;
}

.auto {
  margin-left: auto;
}
</style>
