<template>
  <div class="group-list-card">
    <GroupListPicture :link="group.picture" />
    <GroupListName
        class="mt-2"
        :group-name="group.name"
        :group-uuid="group.uuid"
    />
    <div v-if="group.userIsGroupCreator" class="group-delete">
      <GroupListRemove
          v-on:remove-group="$emit('leave-group',$event)"
          v-bind:group-uuid="group.uuid"/>
    </div>
    <div v-else class="group-leave">
      <GroupListLeave
          v-on:remove-group="$emit('leave-group',$event)"
          v-bind:group-uuid="group.uuid"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupListPicture from "@/components/group/list/atoms/GroupListPicture.vue";
import GroupListName from "@/components/group/list/atoms/GroupListName.vue";
import GroupListRemove from "@/components/group/list/atoms/GroupListRemove.vue";
import GroupListLeave from "@/components/group/list/atoms/GroupListLeave.vue";
import {Group} from "@/object/Group";
import {UserProfileGroup} from "@/object/UserProfileGroup";

@Options({
  name: "GroupListCard",
  components: {GroupListRemove, GroupListName, GroupListPicture, GroupListLeave},
  props: {
    group: {
      type: UserProfileGroup,
      required: true,
      default: Group.emptyGroup()
    }
  }
})
export default class GroupListCard extends Vue {
}
</script>

<style scoped>
.group-list-card {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
}
.group-leave {
  margin: auto 2px;
}
.group-delete {
  margin: auto 0;
}
</style>
