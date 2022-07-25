<template>
  <div class="main-vue group-list">
    <GroupListTitle class="m-0" :title="groupsTitle"/>
    <div v-if="!readonly" class="d-flex justify-content-center">
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
            :readonly="readonly"
            v-bind:group="group"
            v-bind:is-public="false"
            v-on:leave-group="quitGroup($event)"
            v-on:remove-group="removeGroup($event)"
        />
      </div>
    </div>
    <div v-else>
      <p class="text-center mt-3">{{emptyList}}</p>
    </div>
  </div>
  <div v-if="publicGroups.length > 0" class="main-vue group-list">
    <GroupListTitle class="m-0" :title="publicGroupsTitle"/>
    <div v-for="group in publicGroups" v-bind:key="group.uuid">
      <GroupListCard
          v-bind:group="group"
          v-bind:is-public="true"
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
  },
  props: {
    readonly: {
      type: Boolean,
      default: true
    }
  }
})
export default class GroupListVue extends Vue {
  private readonly!: boolean;
  private emptyList = "You're not part of a group yet :/";
  private groupsTitle: string = 'Group list';
  private groups: Array<UserProfileGroup> = [];
  private publicGroupsTitle: string = 'Public groups';
  private publicGroups: Array<UserProfileGroup> = [];

  mounted() {
    const routePath = this.$route.path;
    if(this.readonly){
      this.emptyList = "This user is not in any group."
      GroupController.getUserGroups()
          .then(groups => {
            this.groups = groups;
          });
      return;
    }

    GroupController
      .getUserGroups()
      .then(res => {
        this.groups = res;
        if(routePath !== '/profile') {
          GroupController.getAllGroups()
              .then(res => {
                this.publicGroups = [];
                for(let group of res) {
                  if(!this.groups.find(g => g.uuid === group.uuid)) {
                    this.publicGroups.push(group);
                  }
                }
              })
              .catch(reason => {
                // console.error(reason)
              })
        }
      })
      .catch(reason => {
        // console.error(reason)
      })
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
