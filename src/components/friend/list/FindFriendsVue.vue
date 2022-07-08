<template>
  <HeaderVue/>
  <FriendListVue/>
</template>

<script>
import HeaderVue from "@/components/header/HeaderVue";
import FriendListVue from "@/components/friend/list/FriendListVue";
export default {
  name: "FindFriendsVue",
  components: {FriendListVue, HeaderVue}
}
</script>

<style scoped>

</style>