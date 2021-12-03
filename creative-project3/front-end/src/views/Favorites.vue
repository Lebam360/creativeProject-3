<template>
<div class="about">
  <h1 class="title">Favorites</h1>
  <p>Here is what the crowd enjoys! Feel free to add your own favorites!</p>
  <div class="wrapper">
      <div class="FavoriteItems">
        <div class="items" v-for="item in items" :key="item.id">
          <div class="image">
            <img :src="'/images/posters/'+item.image">
          </div>
          <div class="info">
            <h1>{{item.title}}</h1>
            <h6>{{item.company_name}}</h6>
            <h5>{{item.genre}}</h5>
          </div>
          <div class="time">
            <h2>{{item.day_of_the_week}}</h2>
            <h2>{{item.time}}</h2>
          </div>
          <div class="favorites">
            <button class="auto" v-on:click="deleteItem(item)">Remove from Favorites</button>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MovieList',
  props: {
    movies: Array,
    favs: Array
  },
  data() {
    return {
      items: [],
    }
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
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
        console.log("I am a error getting items")
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        const ind = this.$root.$data.favs.indexOf(item)
        this.$root.$data.favs.splice(ind,1)
        return true;
      } catch (error) {
        console.log(error);
      }
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


.item {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.item img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.item .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

img {
  border: 2px solid #333;
  height: 250px;
  width: 255px;
  object-fit: cover;
}

.info {
  background-color: #800000;
  color: #bacbdd;
  padding: 10px 30px;
  height: 220px;
  width: 200px;
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
  color: black;
  border: none;
}

.auto {
  margin-left: auto;
}

button{
  background-color: #F9E076;
}

button:hover{
  background-color: brown;
}

.favorites {
  padding-bottom: 20px;
}
</style>
