<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['label']);
</script>

<template>
  <div class="post-label">
    <p>{{props.label}}</p>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PostLabel extends Vue{
}
</script>

<style scoped>
.post-label {
  background-color: #8b8bff;
  border-radius: 8px;
  margin: 8px;
  padding: 2px 4px;
}

.post-label p {
  color: #F0F0F0;
  margin: 0;
  padding: 0;
}
</style>
