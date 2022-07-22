<template>
  <a v-on:click="removeGroup(groupUuid)" class="btn-close btn-rounded btn-sm btn"></a>
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
  removeGroup(groupUuid: string): void {
    GroupController
        .deleteGroup(groupUuid)
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
