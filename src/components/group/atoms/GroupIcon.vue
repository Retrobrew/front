<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['link']);
</script>

<template>
  <div class="group-icon-box">
    <img :src="props.link">
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

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
