<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentPath: window.location.pathname
    }
  },
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-vue {
  margin: auto;
  min-width: 200px;
  width: 80vw;
  max-width: 1200px;
}
</style>
