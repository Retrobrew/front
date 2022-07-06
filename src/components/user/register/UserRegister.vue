<template>
  <HeaderVue />
  <div class="user-register">
    <h1 class="mt-3">Register</h1>
    <RegisterFields />
    <RegisterLoginRedirection />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import RegisterFields from "@/components/user/register/molecules/RegisterFields.vue";
import RegisterLoginRedirection from "@/components/user/register/atoms/RegisterLoginRedirection.vue";
import HeaderVue from "@/components/header/HeaderVue.vue";

@Options({
  name: "UserRegister",
  components: {
    HeaderVue,
    RegisterFields,
    RegisterLoginRedirection
  }
})
export default class UserRegister extends Vue {
}
</script>

<style scoped>
.user-register {
  text-align: center;
}
</style>
