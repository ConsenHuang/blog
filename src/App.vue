<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @font-face {
    font-family: 'gufeng';
    src: url(/static/ttf/gufeng.ttf)
  }
  body{
    margin: 0!important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
