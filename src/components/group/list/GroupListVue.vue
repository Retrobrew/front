<template>
  <div class="main-vue group-list">
    <GroupListTitle class="m-0" :title="groupsTitle"/>
    <div class="d-flex justify-content-center">
      <router-link to="/group/creation">
        <button
            class="btn btn-sm btn-success">
          Create a group
        </button>
      </router-link>

    </div>
    <div v-if="groups.length > 0">
      <div v-for="group in groups" v-bind:key="group.uuid">
        <GroupListCard
            v-bind:group="group"
            v-on:leave-group="quitGroup($event)"
            v-on:remove-group="removeGroup($event)"
        />
      </div>
    </div>
    <div v-else>
      <p class="text-center mt-3">You're not part of a group yet :/</p>
    </div>
  </div>
  <div v-if="publicGroups.length > 0" class="main-vue group-list">
    <GroupListTitle class="m-0" :title="publicGroupsTitle"/>
    <div v-for="group in publicGroups" v-bind:key="group.uuid">
      <GroupListCard
          v-bind:group="group"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupListTitle from "@/components/group/list/atoms/GroupListTitle.vue";
import GroupListCard from "@/components/group/list/molecules/GroupListCard.vue";
import { MDBInput } from 'mdb-vue-ui-kit';
import {GroupController} from "@/controller/GroupController";
import {UserProfileGroup} from "@/object/UserProfileGroup";

@Options({
  name: "GroupListVue",
  components: {
    GroupListCard,
    GroupListTitle,
    MDBInput
  }
})
export default class GroupListVue extends Vue {
  private groupsTitle: string = 'Group list';
  private groups: Array<UserProfileGroup> = [];
  private publicGroupsTitle: string = 'Public groups';
  private publicGroups: Array<UserProfileGroup> = [];

  mounted() {
    const routePath = this.$route.path;

    GroupController
      .getUserGroups()
      .then(res => {
        this.groups = res;
      })
      .catch(reason => {
        console.error(reason)
      })

    if(routePath !== '/profile') {
      GroupController.getAllGroups()
          .then(res => {
            this.publicGroups = res;
            this.publicGroups = this.publicGroups.filter(group => {
              return !this.groups.some(g => g.uuid === group.uuid);
            });
          })
          .catch(reason => {
            console.error(reason)
          })
    }
  }


  private quitGroup(groupUuid: string): void{
    const group = this.groups.find((item) => {
      return item.uuid === groupUuid
    })
    if(!group) {
      alert("group not found");
      return;
    }

    this.groups.splice(this.groups.indexOf(group), 1)
  }


  private removeGroup(groupUuid: string): void{
    const group = this.groups.find((item) => {
      return item.uuid === groupUuid
    })
    if(!group) {
      alert("group not found");
      return;
    }

    this.groups.splice(this.groups.indexOf(group), 1)
  }
}
</script>

<style scoped>
.group-list {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
  margin-top: 1rem;
}
</style>
