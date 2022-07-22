<template>
  <div class="main-vue group-head">
    <GroupIcon :group-uuid="groupUuid" />
    <GroupName :name="groupName" />
<!--    <GroupFollow />-->
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupIcon from "@/components/group/home/atoms/GroupIcon.vue";
import GroupName from "@/components/group/home/atoms/GroupName.vue";
import GroupFollow from "@/components/group/home/atoms/GroupFollow.vue";

@Options({
  name: "GroupHead",
  components: {
    GroupFollow,
    GroupName,
    GroupIcon
  },
  props: {
    groupUuid: String,
    groupName: String
  }
})
export default class GroupHead extends Vue {
}
</script>

<style scoped>
.group-head {
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
}
</style>
