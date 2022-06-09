<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['username']);
</script>

<template>
  <p>{{props.username}}</p>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class PostUsername extends Vue{
}
</script>

<style scoped>
p {
  margin: auto 8px;
}
</style>
