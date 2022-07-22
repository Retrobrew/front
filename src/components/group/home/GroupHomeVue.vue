<template>
  <HeaderVue />
  <GroupBanner
      v-if="group.uuid"
      v-on:delete-group="deleteGroup"
      v-on:join-group="joinGroup"
      v-on:quit-group="quitGroup"
      :user-is-creator="isCreator"
      :is-member="isMember"
      :group-uuid="group.uuid"
  />
  <GroupHead
      v-if="group.uuid"
      v-bind:groupName="group.name"
      v-bind:group-uuid="group.uuid" />
  <GroupVueSelection
      v-bind:is-project="group.isProject"
      @groupVue="(value) => this.groupVue = value"
  />
  <FeedVue
      v-bind:group="group"
      v-if="this.groupVue === 'feed' && !loading"
  />
  <ProjectHomeVue v-if="this.groupVue === 'project'" />
  <RepositoryHomeVue
      v-if="this.groupVue === 'repository'"
      :group="group"
  />
  <LibListVue
      v-if="this.groupVue === 'library'"
      :group="group"/>
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
import LibListVue from "@/components/library/lib-list/LibListVue.vue";

@Options({
  name: "GroupHomeVue",
  components: {
    LibListVue,
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
            console.error("Missing group's creator");
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
          console.error(reason)
        })
  }

  deleteGroup(){
    GroupController.deleteGroup(this.group.uuid)
      .then((success: boolean) => {

        if(success){
          this.$router.push('/');
          return;
        }
        alert("Error while trying to delete group");

      })
  }

  joinGroup(){
    GroupController.joinGroup(this.group.uuid)
      .then((success) => {
        if(success){
          this.isMember = true;
          return;
        }
        alert("Could not join group");

      }).catch(reason => {
        alert("Error while trying to join group");
        console.error(reason)
    })
  }

  quitGroup(){
    GroupController.quitGroup(this.group.uuid)
        .then(() => {
          this.isMember = false;
        }).catch(reason => {
      alert("Error while trying to quit group");
      console.error(reason)
    })
  }
}
</script>

<style scoped>
</style>
