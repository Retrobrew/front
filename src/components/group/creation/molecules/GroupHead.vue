<template>
  <div class="main-vue group-head">
    <GroupIcon
        :link="groupIcon"
        v-on:uploadPicture="uploadPicture($event)"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupIcon from "@/components/group/creation/atoms/GroupIcon.vue";

@Options({
  name: "GroupHead",
  components: {
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
