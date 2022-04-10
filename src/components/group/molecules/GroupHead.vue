<template>
  <div class="group-head">
    <GroupIcon :link="groupIcon" />
    <GroupName :name="groupName" />
    <GroupFollow />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupIcon from "@/components/group/atoms/GroupIcon.vue";
import GroupName from "@/components/group/atoms/GroupName.vue";
import GroupFollow from "@/components/group/atoms/GroupFollow.vue";

@Options({
  name: "GroupHead",
  components: {
    GroupFollow,
    GroupName,
    GroupIcon
  },
  props: {
    groupIcon: String,
    groupName: String
  }
})
export default class GroupHead extends Vue {
}
</script>

<style scoped>
.group-head {
  background-color: #FFFFFF;
  margin: auto;
  min-width: 200px;
  width: 80vw;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}
</style>
