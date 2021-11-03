<template>
  <div id="app">
    <div id="nav">
      <div id="brand">
        <router-link to="/">
          <img src="">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/">Home</router-link> |
        <router-link to="/showing">Now Showing</router-link> |
        <router-link to="/browse">Browse</router-link> |
        <router-link to="/about">About</router-link>
        </div>
    </div>
    <router-view/>
    <div class="footer">
      <a href="https://github.com/Lebam360/creativeProject-3">Github Repsitory</a>
      <br> <a href="http://anyaanderson.com">Link back to Anya Anderson's Website</a>
      <br> <a href="http://alexauferg.com/">Link back to Alexa Urrea's Website</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  height: auto;
  width: 100%;
  text-align: center;
  color: #6b87d8;
}
</style>
