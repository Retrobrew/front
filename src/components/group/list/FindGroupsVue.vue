<template>
  <HeaderVue/>
  <GroupListVue/>
</template>

<script>
import HeaderVue from "@/components/header/HeaderVue";
import GroupListVue from "@/components/group/list/GroupListVue";
export default {
  name: "FindGroupsVue",
  components: {GroupListVue, HeaderVue}
}
</script>

<style scoped>

</style>