<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['link']);
</script>

<template>
  <div class="group-banner-box">
    <img :src="props.link"/>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class GroupBanner extends Vue {
}
</script>

<style scoped>
.group-banner-box {
  min-height: 150px;
  height: 20%;
  max-height: 400px;
  overflow: hidden;
  width: 100%;
}
.group-banner-box img {
  vertical-align: middle;
  margin: -25% 0;
  width: 100%;
}
</style>
