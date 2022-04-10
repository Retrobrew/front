<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['title']);
</script>

<template>
  <p>{{props.title}}</p>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PostTitle extends Vue {
}
</script>

<style scoped>
p {
  margin: auto 0;
}
</style>
