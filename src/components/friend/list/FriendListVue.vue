<template>
  <div id="friend-list" class="main-vue">
    <FriendListTitle />
    <FriendListCard />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import FriendListTitle from "@/components/friend/list/atoms/FriendListTitle.vue";
import FriendListCard from "@/components/friend/list/molecules/FriendListCard.vue";

@Options({
  name: "FriendListVue",
  components: {
    FriendListCard,
    FriendListTitle,
  }
})
export default class FriendListVue extends Vue {
}
</script>

<style scoped>
#friend-list {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
}
</style>
