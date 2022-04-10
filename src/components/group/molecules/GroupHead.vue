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
  components: {GroupFollow, GroupName, GroupIcon}
})
export default class GroupHead extends Vue {
  private groupIcon = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Ffree-icon%2Fpokemon-emerald-icon-63.png&f=1&nofb=1"
  private groupName = "Pokemon emerald"
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
