<template>
  <div class="group-icon-box">
    <img :src="link">
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    link: String
  }
})
export default class GroupIcon extends Vue {
}
</script>

<style scoped>
.group-icon-box {
  margin: auto 0;
  min-height: 48px;
  height: 10%;
  max-height: 96px;
  min-width: 48px;
  width: 10%;
  max-width: 96px;
}
.group-icon-box img {
  border-radius: 8px;
  height: 100%;
  width: 100%;
  vertical-align: middle;
}
</style>
