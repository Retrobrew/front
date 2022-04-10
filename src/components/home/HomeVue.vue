<template>
  <HeaderHome />
  <h1>Welcome to Retrobrew !</h1>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderHome from "@/components/home/header/HeaderHome.vue";

  @Options({
    name: "Home",
    components: {
      HeaderHome
    }
  })
  export default class Home extends Vue {
    private isLoginValid: boolean = false;

    beforeMount() {
      console.log(process.env)
      const token = sessionStorage.getItem('access_token');
      if (token === undefined) {
        this.isLoginValid = false;
      } else {
        fetch(`${process.env.VUE_APP_AUTH_API_URL}/profile`, {
          headers: { Authorization: "Bearer " + token }
        })
            .then(response => console.log(response));
      }
    }

  }
</script>
