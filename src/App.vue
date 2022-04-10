<template>
  <component :is="currentView" />
</template>

<script>
import HomeVue from "@/components/home/HomeVue";
import UserLogin from "@/components/user/login/UserLogin";
import UserRegister from "@/components/user/register/UserRegister";
import GroupHomeVue from "@/components/group/GroupHomeVue";
import Error404 from "@/components/error/Error404";

const routes = {
  '/': HomeVue,
  '/login': UserLogin,
  '/register': UserRegister,
  '/group': GroupHomeVue,
}

export default {
  name: 'App',
  data() {
    return {
      currentPath: window.location.pathname
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath || '/'] || Error404
    }
  },
  mounted() {
    window.addEventListener('pathnamechange', () => {
      this.currentPath = window.location.pathname
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
