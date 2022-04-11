<template>
  <div id="group-list" class="main-vue">
    <GroupListTitle />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import GroupListTitle from "@/components/group/list/atoms/GroupListTitle.vue";

@Options({
  name: "GroupListVue",
  components: {GroupListTitle}
})
export default class GroupListVue extends Vue {
}
</script>

<style scoped>
#group-list {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
  max-width: 580px;
  margin: 20px;
}
</style>
