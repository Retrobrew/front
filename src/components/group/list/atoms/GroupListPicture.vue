<template>
  <img :src="link"  class="shadow btn-rounded "/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "GroupListPicture",
  props: {
    link: String,
  }
})
export default class GroupListCard extends Vue {
}
</script>

<style scoped>
.group-list-card img {
  min-height: 24px;
  height: 10%;
  max-height: 72px;
  min-width: 24px;
  width: 10%;
  max-width: 72px;
}
</style>
