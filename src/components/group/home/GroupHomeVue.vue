<template>
  <HeaderVue />
  <GroupBanner :link="group.banner ? group.banner : defaultBanner" />
  <GroupHead
      v-bind:groupName="group.name"
      v-bind:groupIcon="group.picture" />
  <GroupVueSelection
      v-bind:is-project="group.isProject"
      @groupVue="(value) => this.groupVue = value"
  />
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
import {Group} from "@/object/group";
import {GroupController} from "@/controller/GroupController";

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
  private defaultBanner = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamefabrique.com%2Fstorage%2Fscreenshots%2Fgba%2Fpokemon-emerald-09.png&f=1&nofb=1"
  private groupVue = "feed";

  private group: Group = Group.emptyGroup()

  mounted() {
    const groupUuid: string = this.$route.params['uuid'] as string

    GroupController
        .getGroup(groupUuid)
        .then((res) => {
          this.group = res
        })
  }
}
</script>

<style scoped>
</style>
