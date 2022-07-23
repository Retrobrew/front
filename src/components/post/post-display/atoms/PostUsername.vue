<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['username', 'userFlag']);
</script>

<template>
  <div class="post-head-username">
    <p>{{props.username}}</p>
    <img :src="props.userFlag" />
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PostUsername extends Vue{
}
</script>

<style scoped>
.post-head-username {
  display: flex;
  flex-direction: row;
}
.post-head-username p {
  margin: auto 8px;
}
.post-head-username img {
  width: 24px;
  height: 24px;
}
</style>
