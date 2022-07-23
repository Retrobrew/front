<template>
  <HeaderVue />
  <GroupBanner
    :link="groupBannerPlaceHolder"
    v-on:uploadBanner="addBanner($event)"
  />
  <GroupHead
      v-on:editName="editName($event)"
      v-on:uploadPicture="addPicture($event)"
      v-bind:groupName="group.name"
      v-bind:groupIcon="picturePlaceholder" />
  <div class="container mt-4">
    <GroupCreationForm
      :group="group"
      v-on:submit="createGroup"
    />
  </div>
</template>

<script lang="ts">
import HeaderVue from "@/components/header/HeaderVue.vue";
import {Options, Vue} from "vue-class-component";
import GroupBanner from "@/components/group/creation/atoms/GroupBanner.vue";
import GroupHead from "@/components/group/creation/molecules/GroupHead.vue";
import GroupCreationForm from "@/components/group/creation/molecules/GroupCreationForm.vue";
import {Group} from "@/object/Group";
import {GroupController} from "@/controller/GroupController";
import ProjectController from "@/controller/ProjectController";

@Options({
  name: "GroupCreationVue",
  components: {
    GroupHead,
    GroupCreationForm,
    GroupBanner,
    HeaderVue
  }
})
export default class GroupCreationVue extends Vue {
  private picturePlaceholder =  "/assets/vector-gameboy.png"
  private groupBannerPlaceHolder = "/assets/banner.jpg"
  private group: Group = Group.emptyGroup()
  private groupBanner: File | undefined = undefined;
  private groupIcon: File | undefined = undefined;

  addPicture(event: File){
    this.picturePlaceholder = URL.createObjectURL(event);
    this.groupIcon = event;
  }
  addBanner(event: File){
    this.groupBannerPlaceHolder = URL.createObjectURL(event);
    this.groupBanner = event;
  }
  editName(event: any){
    this.group.name = event
  }

  private createGroup(): void {
    GroupController
        .createGroup(this.group, this.groupIcon, this.groupBanner)
        .then((res: any) => {
          if(this.group.isProject){
            ProjectController
                .createProject(res.uuid, res.language)
                .catch(error => {
                  // console.error(error);
                  // console.log("Could not initiate project repo")
                })
          }

          return res;
        })
        .then((res) => {
          this.$router.push(`/group/${res.uuid}`)
        }).catch((error) =>{
      // console.error(error);
    })
  }
}
</script>

<style scoped>
</style>
