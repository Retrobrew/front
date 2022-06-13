<template>
  <HeaderVue />
  <GroupBanner
      v-on:delete-group="deleteGroup"
      :user-is-creator="isCreator"
      :is-member="isMember"
      :link="group.banner ? group.banner : defaultBanner"
  />
  <GroupHead
      v-bind:groupName="group.name"
      v-bind:groupIcon="group.picture" />
  <GroupVueSelection
      v-bind:is-project="group.isProject"
      @groupVue="(value) => this.groupVue = value"
  />
  <FeedVue
      v-bind:groupUuid="group.uuid"
      v-if="this.groupVue === 'feed' && !loading"
  />
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
import {Group} from "@/object/Group";
import {GroupController} from "@/controller/GroupController";
import {User} from "@/object/User";
import {inject} from "vue";
import APIController from "@/controller/APIController";

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
  },
})
export default class GroupHomeVue extends Vue {
  private user: User | undefined = inject('user');
  private loading = true;
  private defaultBanner = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamefabrique.com%2Fstorage%2Fscreenshots%2Fgba%2Fpokemon-emerald-09.png&f=1&nofb=1"
  private groupVue = "feed";
  private group: Group = Group.emptyGroup();
  private groupUuid: string = "";
  private isCreator = false;
  private isMember = false;


  mounted() {
    this.groupUuid = this.$route.params['uuid'] as string
    GroupController
        .getGroup(this.groupUuid)
        .then((res) => {
          this.group = res;
          this.loading = false;
          if(!this.group.creator){
            console.error("Missing group creator");
            return;
          }

          if(!this.user){
            APIController.logout();
            return
          }

          this.isCreator = this.group.creator === this.user.uuid;
          this.isMember = this.isCreator || this.group.hasMember(this.user.uuid);
        })
        .catch(reason => {
          console.log("Do something")
        })
  }

  deleteGroup(){
    GroupController.deleteGroup(this.group.uuid)
      .then((success: boolean) => {

        if(success){
          this.$router.push('/home');
          return;
        }
        alert("Error while trying to delete group");

      })
  }
}
</script>

<style scoped>
</style>
