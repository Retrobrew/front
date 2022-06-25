<template>
  <router-link :to="{name: 'group', params:{uuid: groupUuid}}">
    {{groupName}}
  </router-link>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "GroupListName",
  props: {
    groupName: String,
    groupUuid: {
      type: String,
      required: true
    }
  }
})
export default class GroupListName extends Vue {
}
</script>

<style scoped>
.group-list-card p {
  margin: auto 0;
}
</style>
