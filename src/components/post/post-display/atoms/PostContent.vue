<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['content']);
</script>

<template>
  <div class="post-content">
    <p>{{props.content}}</p>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PostContent extends Vue {
}
</script>

<style scoped>
.post-content {
  margin: 0;
  padding: 16px;
  white-space: pre-wrap;
}

.post-content p {
  margin: 0;
  padding: 0;
}
</style>
