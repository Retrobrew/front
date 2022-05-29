<template>
  <div class="main-vue group-head">
    <GroupIcon
        :link="groupIcon"
        v-on:uploadPicture="uploadPicture($event)"
    />
    <GroupName :name="groupName" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupIcon from "@/components/group/home/atoms/GroupIcon.vue";
import GroupName from "@/components/group/home/atoms/GroupName.vue";

@Options({
  name: "GroupHead",
  components: {
    GroupName,
    GroupIcon
  },
  props: {
    groupIcon: String,
    groupName: String
  }
})
export default class GroupHead extends Vue {
  uploadPicture(event: any){
    this.$emit('uploadPicture', event);
  }
}
</script>

<style scoped>
.group-head {
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
}
</style>
