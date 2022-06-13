<template>
  <HeaderVue />
  <GroupBanner
      :link="groupBanner"
  />
  <GroupHead
      v-on:editName="editName($event)"
      v-on:uploadPicture="addPicture($event)"
      v-bind:groupName="group.name"
      v-bind:groupIcon="group.picture?group.picture:picturePlaceholder" />
  <div class="container mt-4">
    <GroupCreationForm
        v-bind:group="group"
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
  private picturePlaceholder = "/assets/gameboy.jpg"
  private groupBanner = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamefabrique.com%2Fstorage%2Fscreenshots%2Fgba%2Fpokemon-emerald-09.png&f=1&nofb=1"
  private group: Group = Group.emptyGroup()

  addPicture(event: any){
    this.group.picture = URL.createObjectURL(event)
  }
  editName(event: any){
    this.group.name = event
  }
}
</script>

<style scoped>
</style>
