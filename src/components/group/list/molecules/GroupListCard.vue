<template>
  <div class="group-list-card">
    <GroupListPicture v-if="group.uuid" :link="group.picture" :group-uuid="group.uuid"/>
    <GroupListName
        class="pt-2 mt-2"
        :group-name="group.name"
        :group-uuid="group.uuid"
    />
    <div v-if="!readonly">
      <div v-if="group.userIsGroupCreator" class="group-delete">
        <GroupListRemove
            v-on:remove-group="$emit('remove-group',$event)"
            v-bind:group-uuid="group.uuid"/>
      </div>
      <div v-else-if="!isPublic" class="group-leave">
        <GroupListLeave
            v-on:remove-group="$emit('leave-group',$event)"
            v-bind:group-uuid="group.uuid"/>
      </div>
      <div v-else class="group-delimiter" />
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
    },
    isPublic: {
      type: Boolean,
      required: true,
      default: false
    },
    readonly: {
      type: Boolean,
      default: true
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
.group-delimiter {
  margin: auto 0;
  height: 4px;
  width: 32px;
}
</style>
