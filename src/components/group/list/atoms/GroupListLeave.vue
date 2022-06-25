<template>
  <a v-on:click="quitGroup(groupUuid)" class="link-primary">
    <MDBIcon
        class="ms-2"
        icon="door-open"
        size="lg"
        data-toggle
    />
  </a>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {GroupController} from "@/controller/GroupController";
import { MDBIcon } from "mdb-vue-ui-kit";

@Options({
  name: "GroupListLeave",
  props: {
    groupUuid: {
      type: String,
      required: true
    },
  },
  components: {
    MDBIcon
  }
})
export default class GroupListLeave extends Vue {
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
a {
  cursor: pointer;
  margin: auto 0;
}
</style>
