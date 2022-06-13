<template>
  <a v-on:click="quitGroup(groupUuid)" class="btn-close btn-rounded btn-sm btn"></a>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {GroupController} from "@/controller/GroupController";

@Options({
  name: "GroupListRemove",
  props: {
    groupUuid: {
      type: String,
      required: true
    },
  }
})
export default class GroupListRemove extends Vue {
  quitGroup(groupUuid: string): void {
    GroupController
        .quitGroup(groupUuid)
        .then(() => {
          this.$emit('remove-group', groupUuid);
        })

  }
}
</script>

<style scoped>
.group-list-card svg {
  margin: auto 0;
}
</style>
