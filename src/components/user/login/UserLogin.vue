<template>
  <div class="user-login">
    <h1>Login</h1>
    <LoginFields />
    <LoginRegisterRedirection />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import LoginFields from "@/components/user/login/molecules/LoginFields.vue";
import LoginRegisterRedirection from "@/components/user/login/atoms/LoginRegisterRedirection.vue";

@Options ({
  name: "UserLogin",
  components: {
    LoginFields,
    LoginRegisterRedirection
  }
})
export default class UserLogin extends Vue {

}
</script>

<style scoped>
.user-login {
  text-align: center;
}
</style>
