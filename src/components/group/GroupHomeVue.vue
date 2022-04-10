<template>
  <HeaderVue />
  <GroupBanner
      :link="groupBanner"
      v-bind:groupName="groupName"
      v-bind:groupIcon="groupIcon"
  />
  <GroupHead />
  <FeedVue />
</template>

<script lang="ts">
import HeaderVue from "@/components/header/HeaderVue.vue";
import {Options, Vue} from "vue-class-component";
import GroupBanner from "@/components/group/atoms/GroupBanner.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import GroupHead from "@/components/group/molecules/GroupHead.vue";

@Options({
  name: "GroupHomeVue",
  components: {
    GroupHead,
    FeedVue,
    GroupBanner,
    HeaderVue
  }
})
export default class GroupHomeVue extends Vue {
  private groupIcon = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Ffree-icon%2Fpokemon-emerald-icon-63.png&f=1&nofb=1"
  private groupName = "Pokemon emerald"
  private groupBanner = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamefabrique.com%2Fstorage%2Fscreenshots%2Fgba%2Fpokemon-emerald-09.png&f=1&nofb=1"
}
</script>

<style scoped>

</style>
