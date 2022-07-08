<template>
  <HeaderVue/>
  <UserListVue/>
</template>

<script>
import HeaderVue from "@/components/header/HeaderVue";
import {Options, Vue} from "vue-class-component";
import UserListVue from "@/components/user/list/UserListVue";

@Options({
  name: "FindFriendsVue",
  components: {UserListVue, HeaderVue}

})
export default class FindFriendsVue extends Vue{
}
</script>

<style scoped>

</style>