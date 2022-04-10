<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['name']);
</script>

<template>
  <p>{{props.name}}</p>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class GroupName extends Vue {
}
</script>

<style scoped>
p {
  margin: auto 0;
  padding: 0;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
