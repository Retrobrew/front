<template>
  <div class="group-list-card">
    <GroupListPicture :link="groupIcon" />
    <GroupListName
        :group-name="group.name"
        :group-uuid="group.uuid"
    />
    <GroupListRemove v-bind:group-uuid="group.uuid"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupListPicture from "@/components/group/list/atoms/GroupListPicture.vue";
import GroupListName from "@/components/group/list/atoms/GroupListName.vue";
import GroupListRemove from "@/components/group/list/atoms/GroupListRemove.vue";
import {Group} from "@/object/Group";

@Options({
  name: "GroupListCard",
  components: {GroupListRemove, GroupListName, GroupListPicture},
  props: {
    group: {
      type:Group,
      required: true,
      default: Group.emptyGroup()
    }
  }
})
export default class GroupListCard extends Vue {
  private groupIcon = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Ffree-icon%2Fpokemon-emerald-icon-63.png&f=1&nofb=1"
}
</script>

<style scoped>
.group-list-card {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
}
</style>
