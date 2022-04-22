<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-link to="/hello">hello</router-link>-->
<!--    <router-link to="/nav">nav</router-link>-->
<!--    <router-link >tab</router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
