<template>
  <HeaderVue />
  <GroupBanner :link="groupBanner" />
  <GroupHead
      v-bind:groupName="groupName"
      v-bind:groupIcon="groupIcon" />
  <GroupVueSelection @groupVue="(value) => this.groupVue = value"/>
  <FeedVue v-if="this.groupVue === 'feed'"/>
  <ProjectHomeVue v-if="this.groupVue === 'project'" />
  <RepositoryHomeVue v-if="this.groupVue === 'repository'" />
</template>

<script lang="ts">
import HeaderVue from "@/components/header/HeaderVue.vue";
import {Options, Vue} from "vue-class-component";
import GroupBanner from "@/components/group/home/atoms/GroupBanner.vue";
import FeedVue from "@/components/feed/FeedVue.vue";
import GroupHead from "@/components/group/home/molecules/GroupHead.vue";
import GroupVueSelection from "@/components/group/home/molecules/GroupVueSelection.vue";
import ProjectHomeVue from "@/components/project/ProjectHomeVue.vue";
import RepositoryHomeVue from "@/components/repository/RepositoryHomeVue.vue";

@Options({
  name: "GroupHomeVue",
  components: {
    RepositoryHomeVue,
    ProjectHomeVue,
    GroupVueSelection,
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
  private groupVue = "feed";
}
</script>

<style scoped>
</style>